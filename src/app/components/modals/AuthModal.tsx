import React from 'react';
import { IoIosClose } from "react-icons/io";
import Login from './Login';

type AuthModalProps = {
    
};

const AuthModal:React.FC<AuthModalProps> = () => {
    return (
        <>
			<div className='absolute top-0 left-0 w-full h-full flex items-center justify-center bg-black bg-opacity-60'></div>
			<div className='w-full sm:w-[450px]  absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]  flex justify-center items-center'>
				<div className='relative w-full h-full mx-auto flex items-center justify-center'>
					<div className='rounded-sm shadow relative w-full bg-brand-modal-gray mx-6'>
						<div className='flex justify-end p-2'>
							<button type='button' className='bg-transparent rounded-lg text-sm p-1.5 ml-auto inline-flex items-center hover:bg-brand-emerald hover:text-black text-white'>
                                <IoIosClose className='h-7 w-7'/>
							</button>
						</div>
                        <Login/>
					</div>
				</div>
			</div>
		</>
    );
}
export default AuthModal;