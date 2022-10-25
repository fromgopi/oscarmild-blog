import React, {ReactElement,FC} from "react";

interface Props {
    title: String
}

const Header: FC<Props> = ({title}): ReactElement => {
    return(
        <nav className="flex justify-start items-center h-16 bg-slate-300">
            <div className="container flex flex-wrap justify-between items-center mx-auto">
                <a href="#" className="flex items-center">
                    <h2>{title}</h2>
                </a>
                <div className="hidden w-full md:block md:w-auto mr-96">
                    <ul className="flex flex-col  md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0 bg-slate-300">
                        <li className="block py-2 pr-4 pl-3 text-black rounded md:bg-transparent  md:p-0 ">Home</li>
                        <li className="block py-2 pr-4 pl-3 text-black rounded md:bg-transparent  md:p-0 ">Blog</li>
                        <li className="block py-2 pr-4 pl-3 text-black rounded md:bg-transparent  md:p-0 ">Categories</li>
                        <li className="block py-2 pr-4 pl-3 text-black rounded md:bg-transparent  md:p-0 ">Fourm</li>
                        <li className="block py-2 pr-4 pl-3 text-black rounded md:bg-transparent  md:p-0 ">About</li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default Header;