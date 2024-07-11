"use client";
import React from 'react';
import Navbar from '../components/Navbar';
import AuthModal from '../components/modals/AuthModal';
import { useRecoilValue } from 'recoil';
import { authModalState } from '../atoms/authModalAtom';

type AuthPageProps = {
    
};

const AuthPage:React.FC<AuthPageProps> = () => {
    const authModal = useRecoilValue(authModalState);
    return (
        <div className='bg-brand-gray h-screen'>
            <div className='max-w-7xl mx-auto'>
                <Navbar/>
                {authModal.isOpen && <AuthModal/>}
            </div>
        </div>
    );
}
export default AuthPage;