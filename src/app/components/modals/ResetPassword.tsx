import React from 'react';

type ResetPasswordProps = {
    
};

const ResetPassword:React.FC<ResetPasswordProps> = () => {
    
    return (
        <form className='space-y-6 px-6 lg:px-8 pb-4 sm:pb-6 xl:pb-8'>
            <div className='flex items-center justify-center'>
                <h3 className='text-xl font-medium text-white'>Reset Password</h3>
            </div>
			<p className='text-sm text-white'>
				Forgotten your <span className='text-brand-emerald'>password</span> ? Enter your e-mail address below, and we&apos;ll send you an e-mail allowing you
				to reset it.
			</p>
			<div>
				<label htmlFor='email' className='text-sm font-medium block mb-2 text-gray-300'>
					Your email
				</label>
				<input
					type='email'
					name='email'
					id='email'
					className='border-2 outline-none sm:text-sm rounded-sm focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 bg-brand-gray border-gray-500 placeholder-gray-300 placeholder-opacity-30 text-white'
					placeholder='name@gmail.com'
				/>
			</div>

			<button
				type='submit'
				className={`w-full text-white focus:ring-2 focus:ring-blue-300 font-medium rounded-sm text-sm px-5 py-2.5 text-center 
                bg-brand-emerald-dark hover:text-black`}>
				Reset Password
			</button>
		</form>
    );
}
export default ResetPassword;