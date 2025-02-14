"use client"
import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import { User } from '@prisma/client';
import { logoutUser } from '@/actions/auth';

const AnnouncementBar=()=>{
    return(
        <div className='w-full bg-black py-2'>
            <div className='container mx-auto flex items-center justify-center px-8'>
                <samp className='text-center text-sm font-medium tracking-wide text-white'>
                    shope now
                </samp>
            </div>
        </div>
    )
}
type HeaderProps={
    user:Omit<User,"passwordHash">|null;
}
const Header = ({user}:HeaderProps) => {
    const [isOpen,setIsOpen]=useState<boolean>(true);
    const [prevScrolly,setPrevScrolly]=useState<number>(0)

    useEffect(()=>{
        const handleScroll=()=>{
            const currentScrolly=window.scrollY;
            const scrolledUp=currentScrolly<prevScrolly;
            if(scrolledUp){
                setIsOpen(true);

            }else if(currentScrolly>100){
                setIsOpen(false)

            }
            setPrevScrolly(currentScrolly)
        }
        setPrevScrolly(window.scrollY);
        window.addEventListener('scroll',handleScroll);
        return()=>{
            window.removeEventListener('scroll',handleScroll)
        }
    },[prevScrolly])

    
    
    return (
        <header className='w-full sticky top-0 z-50'>
            <div className={'w-full transform transition-transform duration-300 ease-in-out'}>
                <AnnouncementBar/>
                <div className='w-full flex justify-between items-center py-3 bg-white/80 shadow-sm border-gray-100  backdrop-blur-sm'>
                    <div className='flex justify-between items-center container mx-auto px-8'>
                        <div className='flex flex-1 justify-start items-center gap-4 sm:gap-6 text-gray-800'>
                            <button className='text-gray-800 hover:text-gray-900 md:hidden'>
                            <svg xmlns='http://www.w3.org/2000/svg' className='h-5 w-5 sm:h-6 sm:w-6' fill='none' viewBox='0 0 24 24' stroke='currentColor'>
                                    <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M4 6h16M4 12h16M4 18h16' />
                                </svg>
                            </button>

                            <nav className='hidden md:flex gap-4 lg:gap-6 text-sm font-medium'>
                                <Link href='#'>Shop</Link>
                                <Link href='#'>New Arrivals</Link>
                                <Link href='#'>Sale</Link>
                            </nav>
                            <Link href='#' className='absolute left-1/2 translate-x-1/2'>
                            <span className='text-xl sm:text-2xl font-bold traking-tight'>DEAL</span>
                            </Link>

                            <div className='flex flex-1 justify-end items-center gap-2 sm:gap-4'>
                                <button className='text-gray-700 hover:text-gray-900 hidden sm:block'>
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="11" cy="11" r="8"></circle><path d="m21 21-4.3-4.3"></path></svg>
                                </button>

                                {user ?(<div className='flex items-center gap-2 sm:gap-4'>
                                    <span className='text-sm text-gray-700 hidden md:block'>{user.email}</span>
                                    <Link
                                    href={'#'} className=' py-1 rounded-md text-gray-700 transition-colors font-medium justify-center'
                                    onClick={async(e)=>{
                                        e.preventDefault();
                                        await logoutUser();
                                    }}
                                    >Sign Out</Link>
                                </div>) : (

                                    <React.Fragment>
                                        <Link href='/auth/sign-in'>sign In</Link>
                                        <Link href='/auth/sign-up'>sign Up</Link>
                                    </React.Fragment>
                                    
                                )}
                                


                                <button className='text-gray-70 hover:text-gray-900 relative'>
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="8" cy="21" r="1"></circle><circle cx="19" cy="21" r="1"></circle><path d="M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12"></path></svg>
                                    <span className='absolute -top-1 right-1.5 bg-slate-100 text-black text-[10px] sm:text-xs w-4 sm:w-3.5 rounded-md flex items-center justify-center'>0</span>
                                </button>
                                </div>

                        </div>
             
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Header;