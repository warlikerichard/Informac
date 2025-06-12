import CategoryButton from "./CategoryButton";
import SearchBox from "./SearchBox";
import { FaRegUserCircle } from "react-icons/fa";

export default function Header(){
    const categories = [
        "Hardware",
        "Periféricos",
        "Componentes",
        "Contatos",
        "Ajuda"
    ]

    return(
        <div className="flex flex-col md:flex-col lg:flex-row items-center w-full md:space-y-4 lg:space-x-40 bg-neutral-900 py-4 px-4 md:px-8 lg:px-12 mb-4 border-b-[1px] border-neutral-700">
            <h1 className="font-extrabold font-sans text-4xl inline-block bg-linear-to-r from-orange-500 to-amber-400 text-transparent bg-clip-text mb-4 lg:mb-0">Informac</h1>
            <div className="flex flex-col lg:flex-row justify-between items-center w-xs md:w-full space-y-4 lg:space-y-0 lg:space-x-3">
                <SearchBox/>
                <div className="hidden lg:flex space-x-4 xl:space-x-16 text-sm lg:text-base">
                    {categories.map((category, key) => <CategoryButton key={key}>{category}</CategoryButton>)}
                </div>
                <FaRegUserCircle className="hidden md:block text-2xl lg:text-3xl hover:cursor-pointer hover:text-amber-600 transition mt-4 lg:mt-0"/>
            </div>
        </div>
    )
}