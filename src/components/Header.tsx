'use client';
import CategoryButton from "./CategoryButton";
import SearchBox from "./SearchBox";
import { FaRegUserCircle } from "react-icons/fa";
import { useRouter } from "next/navigation";
import { useSession } from "next-auth/react";
import UserImage from "./UserImage";
import { useState } from "react";
import LoginModal from "./LoginModal";

export default function Header(){
    const [isModalOpen, setIsModalOpen] = useState(false);
    const router = useRouter();
    const session = useSession();
    const categories = [
        "Hardware",
        "Periféricos",
        "Componentes",
        "Contatos",
        "Ajuda"
    ]

    return(
        <div className="flex flex-col md:flex-col lg:flex-row items-center w-full md:space-y-4 lg:space-x-40 bg-neutral-900 py-4 px-4 md:px-8 lg:px-12 mb-4 border-b-[1px] border-neutral-700">
            <button onClick={() => router.push('/')} className="cursor-pointer"><h1 className="font-extrabold font-sans text-4xl inline-block bg-linear-to-r from-orange-500 to-amber-400 text-transparent bg-clip-text mb-4 lg:mb-0">Informac</h1></button>
            <div className="flex flex-col lg:flex-row justify-between items-center w-xs md:w-full space-y-4 lg:space-y-0 lg:space-x-3">
                <SearchBox/>
                <div className="hidden lg:flex space-x-4 xl:space-x-16 text-sm lg:text-base">
                    {categories.map((category, key) => <CategoryButton key={key}>{category}</CategoryButton>)}
                </div>

                {session.status === "unauthenticated" ? 
                <button onClick={() => setIsModalOpen(true)}>
                    <FaRegUserCircle className="hidden md:block text-2xl lg:text-3xl hover:cursor-pointer hover:text-amber-600 transition mt-4 lg:mt-0 "/>
                </button> :
                <div className="flex flex-col items-center space-x-2 hover:cursor-pointer hover:text-amber-600 transition">
                    <div className="hidden md:block">
                        <UserImage/>
                    </div>
                    <p className="hidden md:block text-sm font-bold mt-2">{session.data?.user?.name}</p>
                </div>
                }
                <LoginModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
            </div>
        </div>
    )

}