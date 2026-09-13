import { useState } from "react";

function Navbar(){
    const [menuOpen, setMenuOpen] = useState(false);
    return (
    <>
    <nav className="sticky top-0 z-50 border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-20 py-4 flex items-center justify-between">
        <a href="/" className="flex items-center">
        <img src="/logo-text.png" alt ="Dev Stack" className="w-36"/>
        </a>

        <div className="hidden md:flex items-center gap-8">
            <a href="#home" className="text-gray-700 hover:text-purple-600">Home</a>
            <a href="#technologies" className="text-gray-700 hover:text-purple-600">Technologies</a>
            <a href="#projects" className="text-gray-700 hover:text-purple-600">Projects</a>
            <a href="#about" className="text-gray-700 hover:text-purple-600">About</a>
            <a href="#contact" className="text-gray-700 hover:text-purple-600">Contact</a>
        </div>
        <div className="hidden md:flex items-center gap-4">
          <button className="text-gray-700 hover:text-purple-600">
            Sign In
          </button>

          <button className="bg-pink-600 text-white px-5 py-2 rounded-full hover:bg-pink-700">
            Sign Up
          </button>
        </div>
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden text-2xl"
        >
          <img src="/hamburger.png" alt="hamburger"/>
        </button>
        </div>

        {
            menuOpen && (
                <div className="md:hidden px-6 pb-4 flex flex-col gap-4 border-t border-gray-100">
                    <a href="#home">Home</a>
                    <a href="#technologies">Technologies</a>
                    <a href="#projects">Projects</a>
                    <a href="#about">About</a>
                    <a href="#contact">Contact</a> 
                    <button className="text-left">Sign In</button>

                    <button className="bg-purple-600 text-white px-5 py-2 rounded-full w-fit">
                    Sign Up
                     </button>
                </div>
            )
        }


    </nav>
    </>)
}

export default Navbar;
