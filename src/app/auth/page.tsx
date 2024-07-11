import React from 'react';
import Navbar from '../components/Navbar';
import AuthModal from '../components/modals/AuthModal';

type AuthPageProps = {
    
};

const AuthPage:React.FC<AuthPageProps> = () => {
    return <div className='bg-brand-gray h-screen'>
        <div className='max-w-7xl mx-auto'>
            <Navbar/>
            <AuthModal/>
        </div>
    </div>
}
export default AuthPage;