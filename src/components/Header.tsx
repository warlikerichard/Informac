import SearchBox from "./SearchBox";
import { FaRegUserCircle } from "react-icons/fa";

export default function Header(){
    return(
        <div className="flex items-center w-full space-x-40 bg-neutral-900 py-4 px-12 mb-4 border-b-[1px] border-neutral-700">
            <h1 className="font-extrabold font-sans text-4xl inline-block bg-linear-to-r from-orange-500 to-amber-400 text-transparent bg-clip-text">Informac</h1>

            <div className="flex flex-row justify-between items-center w-full space-x-3"> {/*Aqui vai ter barra de pesquisa, ícone para abrir conta de usuário, departamentos (hardware, software etc).*/}
                <SearchBox/>
                <div className="flex space-x-16">
                    <div>Hardware</div>
                    <div>Periféricos</div>
                    <div>Componentes</div>
                    <div>Contatos</div>
                    <div>Ajuda</div>
                </div>
                <FaRegUserCircle className="size-8 hover:cursor-pointer hover:text-amber-600 transition"/>
            </div>
        </div>
    )
}