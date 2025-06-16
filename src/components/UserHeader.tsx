'use client';

import { FaRegUserCircle, FaShoppingCart } from 'react-icons/fa';
import { useRouter } from 'next/navigation';
import { useSession, signOut } from 'next-auth/react';
import { useState } from 'react';
import LoginModal from './LoginModal';
import UserImage from './UserImage';

// When the project is more polished, we will verify wether the user is logged in or not.
// If yes, we will shouw the options to log out, see the cart or see the account.
// If not, we will show the options to log in and see the cart.
export default function UserHeader(){
    const [isModalOpen, setIsModalOpen] = useState(false);
    const router = useRouter();
    const session = useSession();
    
    console.log('Session status:', session.status);

    return(
        // Adicione flex-wrap para quebra de linha em telas pequenas
        // Ajuste o espaçamento em telas pequenas com space-x-2 e para maiores com md:space-x-8
        <div className='w-full bg-neutral-950 py-0.5 flex justify-center md:justify-end px-4 md:px-12 items-center flex-wrap text-xs md:text-base'> {/* */}
            <div className='flex space-x-4 md:space-x-8 '>
            {
                session.status === "unauthenticated" ? (
                    <>
                        <div className='font-bold hover:text-amber-600 transition whitespace-nowrap'>
                            <button onClick={() => setIsModalOpen(true)} className='cursor-pointer hover:underline'>Entre ou cadastre-se</button>
                            <LoginModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
                        </div>
                    </>
                ) : (
                    <>
                        <div className='font-bold hover:text-amber-600 transition whitespace-nowrap'>
                            <button onClick={() => signOut()} className='cursor-pointer hover:underline'>Sair da conta</button>
                        </div>
                    </>
                )
            }
            <div className="flex items-center font-bold hover:cursor-pointer hover:underline hover:text-amber-600 transition whitespace-nowrap">
                <FaShoppingCart className='mr-2'/> Ver carrinho de compras
            </div>
            </div>
            {
                session.status === "unauthenticated" ? 
                <FaRegUserCircle className="md:hidden text-xl lg:text-3xl hover:cursor-pointer hover:text-amber-600 transition my-2 ml-4 md:ml-12"/> :
                <div className='md:hidden ml-4 my-2'><UserImage /></div>
            }
        </div>
    )
}