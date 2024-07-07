import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import axios from "axios";
import NavBar from '@/components/NavBar';

export default function Post() {
  const router = useRouter();
  const { id } = router.query;
  const [post, setPost] = useState(null);
  const [comments, setComments] = useState([]);
  const [newComment, setNewComment] = useState("");

  useEffect(() => {
    const getPost = async () => {
      try {
        if (id) {
          const response = await axios.get(`https://fernandafamiliar.soy/wp-json/wp/v2/posts/${id}`);
          setPost(response.data);
        }
      } catch (error) {
        console.log(error);
      }
    }

    getPost();
  }, [id]);

  const handleCommentChange = (event) => {
    setNewComment(event.target.value);
  };

  const handleCommentSubmit = (event) => {
    event.preventDefault();
    if (newComment.trim()) {
      setComments([...comments, newComment]);
      setNewComment("");
    }
  };

  if (!post) return <img src="/logo.png" alt="Genio Logo" width={80} height={80} />;

  const postDate = new Date(post.date).toLocaleDateString();
  const authorName = post._embedded?.author?.[0]?.name;

  return (
    <>
      <NavBar />
      <div className="container mx-auto p-4">
        <div className="bg-white rounded-lg overflow-hidden shadow-lg p-6 max-w-7xl mx-auto">
          <div className="mb-4 text-sm text-gray-500">
            <span>Publicado el {postDate}</span>
            {authorName && <span className="ml-4">Por {authorName}</span>}
          </div>
          <h1 className="text-4xl font-bold mb-4">{post.title.rendered}</h1>
          <div className="max-w-none">
            <div className="post-content" dangerouslySetInnerHTML={{ __html: post.content.rendered }} />
          </div>
        </div>
        <div className="bg-white rounded-lg overflow-hidden shadow-lg p-6 max-w-7xl mx-auto mt-8">
          <h2 className="text-2xl font-bold mb-4">Comentarios</h2>
          <form onSubmit={handleCommentSubmit} className="mb-4">
            <textarea
              className="w-full p-2 border rounded mb-2"
              rows="4"
              placeholder="Escribe un comentario..."
              value={newComment}
              onChange={handleCommentChange}
            />
            <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-700" type="submit">Enviar</button>
          </form>
          <div>
            {comments.length === 0 && <p>No hay comentarios aún. ¡Sé el primero en comentar!</p>}
            {comments.map((comment, index) => (
              <div key={index} className="bg-gray-100 p-4 rounded mb-2">
                <p>{comment}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}