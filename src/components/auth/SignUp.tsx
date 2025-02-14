"use client"
import React, { useActionState } from 'react';
import Form from 'next/form'
import { Loader2 } from 'lucide-react';


const initialState={
    message:'',
}

type SignUpProps={
    action:(prevState:any,formData:FormData)=>Promise<{message:string} | undefined>
}

const SignUp = ({action}:SignUpProps) => {

    const[state,formAction,isPending]=useActionState(action,initialState)
    return (
        <Form action={formAction} className='max-w-md mx-auto my-16 p-8 bg-white rounded-lg shadow-md'>
            <h1 className='text-2xl font-bold text-center mb-2'>Join the DEAL Revuletion</h1>
            <p className=' text-sm font-semibold text-center text-rose-500 mb-2'>🎉LIMITED TIME OFFER🎉</p>
            <p className='text-center font-semibold text-sm mb-2 text-gray-500 '>sign up now and get 90% OFF your first order !</p>
            <div className='space-y-6'>
                {/*email*/}
                <div className='space-y-6'>
                    <label htmlFor='email' className='block text-sm font-medium text-gray-700'>Email address</label>
                    <input
                    type='email'
                    id='email'
                    name='email'
                    autoComplete='email'
                    required 
                    className='w-full px-4 py-3 border border-gray-200 rounded-md focus:ring-2 focus:ring-black focus:border-transparent transition-colors'
                    placeholder='Enter your email'
                    />
                </div>

                {/*password*/}
                <div className='space-y-6'>
                <label htmlFor='password' className='block text-sm font-medium text-gray-700'>Password</label>
                    <input
                    type='password'
                    id='password'
                    name='password'
                    autoComplete='new-password'
                    required 
                    className='w-full px-4 py-3 border border-gray-200 rounded-md focus:ring-2 focus:ring-black focus:border-transparent transition-colors'
                    placeholder='Create password'
                    />
                </div>

                {/*copywriting*/}
                <div className='text-center'>
                    <p className='text-xs text-gray-500 mb-2'>⚡️Only 127 welcome bonus packages remaining!</p>
                    <p className='text-xs text-gray-500 mb-2'>🧭offer expires in:13:45</p>
                </div>

                {/*SubmitButton*/}
                <button 
                type='submit'
                disabled={isPending}
                className={'w-full bg-rose-500 py-3 text-white rounded-md hover:bg-rose-700 transition-colors font-medium justify-center gap-2 '}

                
                >{isPending ?(
                    <React.Fragment>
                        <Loader2 className=' h-4 w-4 animate-spin'/>
                        Create Account
                    </React.Fragment>
                ):
                    ('Create Account')}</button>

            </div>
        </Form>
    );
};

export default SignUp;