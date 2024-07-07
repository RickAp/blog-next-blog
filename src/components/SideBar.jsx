import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faTwitter, faLinkedinIn, faWhatsapp } from '@fortawesome/free-brands-svg-icons';

const Sidebar = ({ categories, handleCategoryChange, selectedCategory, searchQuery, handleSearchChange }) => {
  return (
    <div className="bg-gray-50 p-6 rounded-lg shadow-lg">
      <div className="mb-6">
        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="search">
          Buscar
        </label>
        <input
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          id="search"
          type="text"
          placeholder="Buscar"
          value={searchQuery}
          onChange={handleSearchChange}
        />
      </div>
      <div className="mb-6">
        <p className="text-gray-700 text-sm font-bold mb-2">Comparte en tus redes sociales</p>
        <div className="flex space-x-2">
          <a href="#" className="bg-blue-600 text-white rounded-full p-2">
            <FontAwesomeIcon icon={faFacebookF} />
          </a>
          <a href="#" className="bg-blue-400 text-white rounded-full p-2">
            <FontAwesomeIcon icon={faTwitter} />
          </a>
          <a href="#" className="bg-blue-700 text-white rounded-full p-2">
            <FontAwesomeIcon icon={faLinkedinIn} />
          </a>
          <a href="#" className="bg-green-500 text-white rounded-full p-2">
            <FontAwesomeIcon icon={faWhatsapp} />
          </a>
        </div>
      </div>
      <div>
        <h2 className="text-lg font-bold mb-2">Categorías</h2>
        <ul className="list-disc list-inside">
          <li 
            className={`cursor-pointer text-black hover:underline ${!selectedCategory ? 'font-bold' : ''}`}
            onClick={() => handleCategoryChange(null)}
          >
            Todas las Categorías
          </li>
          {categories.map((category) => (
            <li 
              key={category.id} 
              className={`cursor-pointer text-black hover:underline ${selectedCategory === category.id ? 'font-bold' : ''}`}
              onClick={() => handleCategoryChange(category.id)}
            >
              {category.name}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;