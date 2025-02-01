import { XMarkIcon } from "@heroicons/react/16/solid"

interface Props {
    showNav: boolean
    closeNav: () => void
}

const NavMobile = ({ closeNav, showNav }: Props) => {
    const navOpenStyle = showNav ? "translate-x-0" : "translate-x-[-100%]"

    return (
        <div>
            <div className={`fixed top-0 transform ${navOpenStyle} transition-all duration-500 z-[1000] left-0 right-0 bottom-0 bg-black bg-opacity-70`} />
            
            <ul className={`${navOpenStyle} fixed flex items-center flex-col justify-center h-full transform transition-all duration-300 delay-300 w-[60%] bg-white z-[1001]`}>
                <li className="py-4">
                    <a href="#" className="text-gray-800 hover:text-blue-500">
                        Home
                    </a>
                </li>
                <li className="py-4">
                    <a href="#products" className="text-gray-800 hover:text-blue-500">
                        Products
                    </a>
                </li>
                <li className="py-4">
                    <a href="#about" className="text-gray-800 hover:text-blue-500">
                        About
                    </a>
                </li>
                <XMarkIcon 
                    onClick={closeNav} 
                    className="absolute top-4 right-4 w-8 h-8 text-gray-800" 
                />
            </ul>
        </div>
    )
}

export default NavMobile