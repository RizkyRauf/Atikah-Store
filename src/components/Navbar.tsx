// 'use client'
// import { useState, useEffect } from 'react'

// export default function Navbar() {
//   const [isScrolled, setIsScrolled] = useState(false)
//   const [isMenuOpen, setIsMenuOpen] = useState(false)

//   useEffect(() => {
//     const handleScroll = () => {
//       if (window.scrollY > 0) {
//         setIsScrolled(true)
//       } else {
//         setIsScrolled(false)
//       }
//     }

//     window.addEventListener('scroll', handleScroll)
//     return () => window.removeEventListener('scroll', handleScroll)
//   }, [])

//   return (
//     <nav className={`fixed w-full z-50 transition-all duration-300 ${
//       isScrolled ? 'bg-white shadow-lg' : 'bg-transparent'
//     }`}>
//       <div className="container mx-auto px-4">
//         <div className="flex justify-between items-center h-16">
//           <div className={`text-xl font-bold ${
//             isScrolled ? 'text-gray-800' : 'text-white'
//           }`}>
//             AffiliateStore
//           </div>

//           {/* Hamburger Menu Button */}
//           <button 
//             className="md:hidden"
//             onClick={() => setIsMenuOpen(!isMenuOpen)}
//           >
//             <svg 
//               className={`w-6 h-6 ${isScrolled ? 'text-gray-800' : 'text-white'}`}
//               fill="none" 
//               strokeLinecap="round" 
//               strokeLinejoin="round" 
//               strokeWidth="2" 
//               viewBox="0 0 24 24" 
//               stroke="currentColor"
//             >
//               {isMenuOpen ? (
//                 <path d="M6 18L18 6M6 6l12 12" />
//               ) : (
//                 <path d="M4 6h16M4 12h16M4 18h16" />
//               )}
//             </svg>
//           </button>

//           {/* Desktop Menu */}
//           <div className="hidden md:flex space-x-4">
//             <a href="#" className={`${
//               isScrolled ? 'text-gray-800' : 'text-white'
//             } hover:text-blue-500`}>Home</a>
//             <a href="#products" className={`${
//               isScrolled ? 'text-gray-800' : 'text-white'
//             } hover:text-blue-500`}>Products</a>
//             <a href="#about" className={`${
//               isScrolled ? 'text-gray-800' : 'text-white'
//             } hover:text-blue-500`}>About</a>
//           </div>
//         </div>

//         {/* Mobile Menu */}
//         <div className={`md:hidden ${isMenuOpen ? 'block' : 'hidden'}`}>
//           <div className="px-2 pt-2 pb-3 space-y-1 bg-white shadow-lg rounded-lg mt-2">
//             <a href="#" className="block px-3 py-2 text-gray-800 hover:bg-blue-500 hover:text-white rounded">
//               Home
//             </a>
//             <a href="#products" className="block px-3 py-2 text-gray-800 hover:bg-blue-500 hover:text-white rounded">
//               Products
//             </a>
//             <a href="#about" className="block px-3 py-2 text-gray-800 hover:bg-blue-500 hover:text-white rounded">
//               About
//             </a>
//           </div>
//         </div>
//       </div>
//     </nav>
//   )
// }
