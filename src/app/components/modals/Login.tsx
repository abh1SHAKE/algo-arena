import { authModalState } from '@/app/atoms/authModalAtom';
import React from 'react';
import { useSetRecoilState } from 'recoil';

type LoginProps = {
    
};

const Login:React.FC<LoginProps> = () => {
    const setAuthModalState = useSetRecoilState(authModalState);
    const handleClick = (type: "login" | "register" | "forgotPassword") => {
        setAuthModalState((prev) => ({...prev,type}));
    }
    return <form className='space-y-6 px-6 pb-4'>
        <div className='flex items-center justify-center'>
            <h3 className='text-xl font-medium text-brand-emerald'>Sign in to <span className='text-white font-semibold'>AlgoArena</span></h3>
        </div>
        <div>
            <label htmlFor='email' className='text-sm font-medium block mb-2 text-white'>
                Email address :
            </label>
            <input type='email' name='email' id='email'
            className='border-2 outline-none sm:text-sm rounded-sm focus:ring-blue-500 focus:border-blue-500 
            block w-full p-2.5 bg-brand-gray border-gray-500 placeholder-gray-300 placeholder-opacity-30 text-white' placeholder='name@gmail.com'>
            </input>
        </div>

        <div>
            <label htmlFor='password' className='text-sm font-medium block mb-2 text-white'>
                Password :
            </label>
            <input type='password' name='password' id='password'
            className='border-2 outline-none sm:text-sm rounded-sm focus:ring-blue-500 focus:border-blue-500 
            block w-full p-2.5 bg-brand-gray border-gray-500 placeholder-gray-300 placeholder-opacity-30 text-white' placeholder='enter password'>
            </input>
        </div>

        <button type='submit' className='w-full text-white focus:ring-2 focus:ring-blue-300 font-medium rounded-sm text-sm
        px-5 py-2.5 text-center bg-brand-emerald-dark hover:text-black'>
            Login
        </button>

        <button className='flex w-full justify-end' onClick={() => handleClick("forgotPassword")}>
            <a href="#" className='text-sm block text-white hover:underline w-full text-right'>
                Forgot Password?
            </a>
        </button>
        <div className='flex items-center justify-center text-sm font-medium text-white py-2'>
            Not Registered?
            <a href='#' className='text-brand-emerald px-2 hover:underline' onClick={() => handleClick("register")}>
                Create account
            </a>
        </div>
    </form>
}
export default Login;