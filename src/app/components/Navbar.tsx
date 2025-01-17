import Link from 'next/link';
import React from 'react';
import { useSetRecoilState } from 'recoil';
import { authModalState } from '../atoms/authModalAtom';

type NavbarProps = {
    
};

const Navbar:React.FC<NavbarProps> = () => {  
    const setAuthModalState = useSetRecoilState(authModalState);
    const handleClick = () => {
        setAuthModalState((prev) => ({...prev, isOpen: true}));
    }
    return (
        <div className='flex items-center justify-between sm:px-12 px-2 md:px-24'>
        <Link href='/' className='flex items-center justify-center h-20'>
            <h1 className='text-white text-xl font-semibold'>AlgoArena</h1>
        </Link>
        <div className='flex items-center'>
            <button className='bg-brand-emerald-dark text-white px-2 py-1 sm:px-4 rounded-sm text-sm font-medium
            hover:text-brand-emerald hover:bg-white'
            onClick={handleClick}>
                Sign In
            </button>
        </div>
    </div>
    );
}
export default Navbar;