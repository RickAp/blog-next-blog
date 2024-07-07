import React from "react";
import Link from "next/link";

const NavBar = () => {
  return (
    <nav className="bg-white border-b border-gray-200">
      <div className="container mx-auto flex items-center justify-between p-4">
        <div className="flex items-center hidden sm:block">
          <Link href="/">
            <div className="flex items-center">
              <img src="/logo.png" alt="Genio Logo" width={80} height={80} />
            </div>
          </Link>
        </div>
        <div className="flex items-center space-x-4">
          <Link href="/"><div className="text-gray-700 hover:text-black">Inicia sesión</div></Link>
          <Link href="/"><div className="bg-black text-white px-3 py-2 rounded-md hover:bg-gray-800 text-center">Registrate a Genio.soy Blogs</div></Link>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;