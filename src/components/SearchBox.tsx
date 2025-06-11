import { IoSearch } from "react-icons/io5";

export default function SearchBox() {
    return (
        <div className="flex flex-row items-stretch mx-4 bg-gray-200 rounded-lg ring-2 ring-amber-600 h-8 w-full max-w-sm">
            <input
                type="text"
                placeholder="Pesquise um produto aqui..."
                className="bg-gray-200 placeholder-gray-400 placeholder:font-serif placeholder:font-medium flex-grow pl-2 pr-2 focus:outline-0 text-gray-900 rounded-l-lg"
            />
            <div className="bg-amber-600 w-12 flex items-center justify-center rounded-r-lg">
                <IoSearch className="size-6 text-neutral-800 hover:cursor-pointer hover:text-orange-300 transition" />
            </div>
        </div>
    );
}
