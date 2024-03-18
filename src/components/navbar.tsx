"use client"
import { useState } from "react";

export default function Navbar() {

    const [Navbar, setNavbar] = useState(false)
        const toggleNavbar = () => {
            setNavbar(!Navbar)
        }



  return (
    <div className="flex justify-between items-center w-full h-20 text-white bg-black relative">
      <div>
        <h1 className="text-5xl pl-2">DHIKART STUDIO</h1>
      </div>
      <button onClick={toggleNavbar}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={2}
          stroke="currentColor"
          className="w-10 h-10 pr-2 md:hidden"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
          />
        </svg>
      </button>

      <div className="  gap-2 max-md:hidden">
        <a href="#">Portofolio</a>
        <a href="#">Brands</a>
        <a href="#">About Us</a>
        <a href="#">Article</a>
        <a href="#">Info</a>
        <a href="#">Contact</a>
      </div>

      <div className={`${Navbar ? 'block' : 'hidden'}`}>
        <div className="flex flex-col justify-center items-center gap-2 absolute w-full bg-black bg-opacity-80 top-[80px] text-white md:hidden">
          <a href="#">Portofolio</a>
          <a href="#">Brands</a>
          <a href="#">About Us</a>
          <a href="#">Article</a>
          <a href="#">Info</a>
          <a href="#">Contact</a>
        </div>
      </div>
    </div>
  );
}

// "use client"
// import  { useState } from "react";
// import { FaBars, FaTimes} from 'react-icons/fa'

// export de
//     return (
//         <div className='flex justify-between items-center w-full h-20 px- text-gray-500 fixed bg-black '>
//             <div>
//              <h1 className='text-5xl font-signature ml-2'>Dhika</h1>
//             </div>

//             <ul className="hidden md:flex ">

//             </ul>

//             <div
//             onClick={() => setNav(!nav)}
//             className="cursor-pointer pr-4 z-10 text-gray-500
//             md:hidden"
//             >
//                 {nav ? <FaTimes size={30} /> : <FaBars size={30} />}
//             </div>

//             <ul className="flex flex-col justify-center items-center absolute bg-black bg-opacity-50
//             top-20 left-0 w-full h-auto bg-gradient-to-b- from-black to-gray-500 md:hidden">
//                 <a href="#">About Us</a>
//                  <a href="#">Article</a>
//                  <a href="#">Info</a>
//                  <a href="#">Contact</a>
//             </ul>

//         </div>
//     )
// };

// export default Navbar
