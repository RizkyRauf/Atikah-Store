'use client'
import { Bars3CenterLeftIcon } from "@heroicons/react/20/solid"
import { useEffect, useState } from "react"
import { Poppins } from 'next/font/google'

const poppins = Poppins({
    weight: ['400', '600', '700'],
    subsets: ['latin']
})

interface Props {
    openNav: () => void
}

const Nav = ({ openNav }: Props) => {
    const [navSticky, setNavSticky] = useState(false)

    useEffect(() => {
        const handler = () => {
            if (window.scrollY >= 90) {
                setNavSticky(true)
            }
            if (window.scrollY <= 90) {
                setNavSticky(false)
            }
        }
        window.addEventListener('scroll', handler)
        return () => window.removeEventListener('scroll', handler)
    }, [])

    const stickyStyle = navSticky ? "bg-white shadow-lg" : "bg-transparent"

    return (
        <div className={`fixed w-full ${stickyStyle} transition-all duration-300 z-50`}>
            <div className="flex items-center h-16 justify-between w-[90%] mx-auto">
                <div className={`${poppins.className} text-2xl md:text-3xl font-bold`}>
                    <span className={`${navSticky ? 'text-rose-800' : 'text-white'}`}>
                        Atikah Store
                    </span>
                </div>
                
                <ul className="md:flex hidden items-center space-x-6">
                    <li>
                        <a href="#" className={`${navSticky ? 'text-rose-800' : 'text-white'} hover:text-black`}>
                            Home
                        </a>
                    </li>
                    <li>
                        <a href="#products" className={`${navSticky ? 'text-rose-800' : 'text-white'} hover:text-black`}>
                            Products
                        </a>
                    </li>
                    <li>
                        <a href="#about" className={`${navSticky ? 'text-rose-800' : 'text-white'} hover:text-black`}>
                            About
                        </a>
                    </li>
                </ul>
                
                <Bars3CenterLeftIcon 
                    onClick={openNav} 
                    className={`w-8 h-8 md:hidden ${navSticky ? 'text-rose-700' : 'text-white'} rotate-180`} 
                />
            </div>
        </div>
    )
}

export default Nav
