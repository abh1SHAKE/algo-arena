import React from 'react';
import Navbar from '../components/Navbar';

type AuthPageProps = {
    
};

const AuthPage:React.FC<AuthPageProps> = () => {
    return <div className='bg-black h-screen'>
        <div className='max-w-7xl mx-auto'>
            <Navbar/>
        </div>
    </div>
}
export default AuthPage;