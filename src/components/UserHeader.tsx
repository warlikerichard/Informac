import { FaShoppingCart } from 'react-icons/fa';

// When the project is more polished, we will verify wether the user is logged in or not.
// If yes, we will shouw the options to log out, see the cart or see the account.
// If not, we will show the options to log in and see the cart.
export default function UserHeader(){
    return(
        <div className='w-full bg-neutral-950 py-0.5 flex justify-end px-12 items-center space-x-8'>
            <div className='font-bold hover:cursor-pointer hover:underline hover:text-amber-600 transition'>Entre ou cadastre-se</div>
            <div className="flex items-center font-bold hover:cursor-pointer hover:underline hover:text-amber-600 transition">
                <FaShoppingCart className='mr-2'/> Ver carrinho de compras
            </div>
        </div>
    )
}