import React, { useEffect } from 'react';
import { IoIosClose } from "react-icons/io";
import Login from './Login';
import Signup from './Signup';
import ResetPassword from './ResetPassword';
import { useRecoilValue, useSetRecoilState } from 'recoil';
import { authModalState } from '@/app/atoms/authModalAtom';

type AuthModalProps = {
    
};

const AuthModal:React.FC<AuthModalProps> = () => {
	const authModal = useRecoilValue(authModalState);
	const closeModal = useCloseModal();
    return (
        <>
			<div className='absolute top-0 left-0 w-full h-full flex items-center justify-center bg-black bg-opacity-60' onClick={closeModal}></div>
			<div className='w-full sm:w-[450px]  absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]  flex justify-center items-center'>
				<div className='relative w-full h-full mx-auto flex items-center justify-center'>
					<div className='rounded-sm shadow relative w-full bg-brand-modal-gray mx-6'>
						<div className='flex justify-end p-2'>
							<button type='button' className='bg-transparent rounded-lg text-sm p-1.5 ml-auto inline-flex items-center hover:bg-brand-emerald hover:text-black text-white'
							onClick={closeModal}>
                                <IoIosClose className='h-7 w-7'/>
							</button>
						</div>
						{authModal.type === 'login' ? <Login/> : authModal.type === 'register' ? <Signup/> : <ResetPassword/>}
					</div>
				</div>
			</div>
		</>
    );
}
export default AuthModal;

function useCloseModal(){
	const setAuthModal = useSetRecoilState(authModalState);
	const closeModal = () => {
		setAuthModal((prev) => ({...prev, isOpen: false, type: "login"}));
	}

	useEffect(() => {
		const handleEsc = (e: KeyboardEvent) => {
			if(e.key === "Escape") closeModal();
		}
		window.addEventListener("keydown",handleEsc);
		return () => window.removeEventListener("keydown", handleEsc);
	},[]);

	return closeModal;
}