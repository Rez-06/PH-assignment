import { useState } from "react";

function Navbar(){
    const [menuOpen, setMenuOpen] = useState(false);
    return (
    <>
    <nav className="sticky top-0 z-50 border-b border-gray-200 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-20 py-4 grid grid-cols-3 items-center gap-4">
       <div className="flex items-center gap-4">
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden text-2xl"
        >
          <img src="/hamburger.png" alt="hamburger" className="w-6 h-6"/>
        </button>

        <a href="/" className="hidden md:flex items-center">
        <img src="/logo-text.png" alt ="Dev Stack" className="w-36"/>
        </a>
       </div>

        <div className="flex items-center justify-center gap-8">
  <a href="/" className="flex items-center md:hidden">
    <img src="/logo-text.png" alt="Dev Stack" className="w-36"/>
  </a>

          <div className="hidden md:flex items-center justify-center gap-8">
                <a href="#home" className="text-gray-700 hover:text-purple-600">Home</a>
                <a href="#technologies" className="text-gray-700 hover:text-purple-600">Technologies</a>
                <a href="#projects" className="text-gray-700 hover:text-purple-600">Projects</a>
                <a href="#about" className="text-gray-700 hover:text-purple-600">About</a>
                <a href="#contact" className="text-gray-700 hover:text-purple-600">Contact</a>
            </div>
          </div>
          <div className="flex items-center justify-end gap-2 md:gap-4">
          <button className="hidden md:inline text-gray-700 hover:text-purple-600">
            Sign In
          </button>

          <button className="bg-[image:var(--gradient-brand)] text-white px-4 py-2 md:px-5 rounded-full text-sm md:text-base">
            Sign Up
          </button>
        </div>
        
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

                    
                </div>
            )
        }


    </nav>
    </>)
}

export default Navbar;
