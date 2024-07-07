import React, { useEffect, useState } from "react";
import axios from "axios";
import Link from "next/link";
import Image from "next/image";
import NavBar from "@/components/NavBar";
import Sidebar from "@/components/Sidebar";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart as farHeart } from '@fortawesome/free-regular-svg-icons';
import { faHeart as fasHeart } from '@fortawesome/free-solid-svg-icons';

const Home = () => {
    const [posts, setPosts] = useState([]);
    const [categories, setCategories] = useState([]);
    const [selectedCategory, setSelectedCategory] = useState(null);
    const [searchQuery, setSearchQuery] = useState("");
    const [likes, setLikes] = useState({});

    useEffect(() => {
        const getPosts = async () => {
            try {
                const [postsResponse, categoriesResponse] = await Promise.all([
                    axios.get('https://fernandafamiliar.soy/wp-json/wp/v2/posts'),
                    axios.get('https://fernandafamiliar.soy/wp-json/wp/v2/categories')
                ]);
                setPosts(postsResponse.data);
                setCategories(categoriesResponse.data);
            } catch (error) {
                console.log(error);
            }
        };

        getPosts();
    }, []);

    const handleLikeClick = (postId) => {
        setLikes(prevLikes => ({
            ...prevLikes,
            [postId]: prevLikes[postId] ? prevLikes[postId] + 1 : 1
        }));
    };

    const handleCategoryChange = (categoryId) => {
        setSelectedCategory(categoryId);
    };

    const handleSearchChange = (event) => {
        setSearchQuery(event.target.value);
    };

    const filteredPosts = posts.filter((post) => {
        const matchesCategory = selectedCategory ? post.categories.includes(selectedCategory) : true;
        const matchesSearchQuery = post.title.rendered.toLowerCase().includes(searchQuery.toLowerCase());
        return matchesCategory && matchesSearchQuery;
    });

    return (
        <>
            <NavBar />
            <div className="container mx-auto p-8 bg-gray-100 min-h-screen">
                <div className="flex space-x-1 mb-12 justify-center">
                    <h1 className="text-5xl font-bold hover:underline">Blog Posts</h1>
                    <h1 className="mt-6">by</h1>
                    <img src="/logo.png" alt="Genio Logo" className="mt-4" width={120} height={70} />
                </div>
                <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
                    <div className="lg:col-span-3 grid grid-cols-1 md:grid-cols-2 gap-8">
                        {filteredPosts.map((post) => (
                            <div className="bg-white rounded-lg overflow-hidden shadow-lg transform transition duration-500 hover:scale-105 hover:shadow-xl">
                                <Link key={post.id} href={`/post/${post.id}`}>
                                    <div className="h-48 w-full relative">
                                        <Image
                                            src={post.jetpack_featured_media_url}
                                            alt={post.title.rendered}
                                            layout="fill"
                                            objectFit="cover"
                                        />
                                    </div>
                                    <div className="p-6 h-48 flex flex-col justify-between">
                                        <h2 className="text-xl font-semibold mb-2">{post.title.rendered}</h2>
                                        <p className="text-gray-600 line-clamp-3 overflow-hidden">{post.excerpt.rendered.replace(/<[^>]+>/g, '')}</p>
                                    </div>
                                </Link>
                                <div className="p-6 flex justify-between items-center">
                                    <span>0 comentarios</span>
                                    <div className="flex items-center cursor-pointer" onClick={() => handleLikeClick(post.id)}>
                                        <FontAwesomeIcon icon={likes[post.id] ? fasHeart : farHeart} className="text-red-500" />
                                        <span className="ml-2">{likes[post.id] || 0} likes</span>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                    <div className="lg:col-span-1 order-first lg:order-last">
                        <Sidebar 
                            categories={categories} 
                            handleCategoryChange={handleCategoryChange} 
                            selectedCategory={selectedCategory}
                            searchQuery={searchQuery}
                            handleSearchChange={handleSearchChange}
                        />
                    </div>
                </div>
            </div>
        </>
    );
};

export default Home;