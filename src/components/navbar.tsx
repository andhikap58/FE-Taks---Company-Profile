"use client"
import Link from "next/link";
import { useState } from "react";


export default function Navbar (){
  


  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="bg-black bg-opacity-90 w-full py-4 px-12 md:px-24 fixed z-30 text-white overflow-hidden">
      <div className="flex items-center justify-between">

        <Link href="/" className="text-2xl font-[Roboto] text-[#CDA157]">LIFETIME DESIGN</Link>

        <nav className={`hidden md:flex gap-3 text-sm tracking-tighter ${isMenuOpen ? 'flex' : 'hidden'}`}>
          <Link href={"/lifetime-design-estate"}>Brands</Link>
          <Link href="/about-us">About Us</Link>
          <Link href="/team-page">Our Team</Link>
        </nav>

        <button onClick={toggleMenu} className='md:hidden'>
          {isMenuOpen ? (
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 hover:text-primary ease-in duration-300">
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 hover:text-primary ease-in duration-300">
              <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
            </svg>
          )}
        </button>

      </div>
      {/* Menu for mobile */}
      <nav className={`md:hidden flex flex-col gap-3 text-sm tracking-tighter pt-2 ${isMenuOpen ? 'flex' : 'hidden'}`}>
      <Link href={"/lifetime-design-estate"}>Brands</Link>
          <Link href="/about-us">About Us</Link>
          <Link href="/team-page">Our Team</Link> 
      </nav>
    </header>
  )
}

