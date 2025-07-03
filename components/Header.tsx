import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { SignedIn, SignedOut } from '@clerk/nextjs'
import { SignInButton, UserButton } from '@clerk/nextjs'
import { Dancing_Script } from "next/font/google";

const dancing = Dancing_Script({
   subsets: ['latin'],
  weight: ['400', '500', '600', '700']
})

function Header() {
    return (
        <div className={`flex items-center justify-between bg-white md:px-5 xs:px-3 py-3`}>

            <div className='flex items-center justify-between w-full md:px-0 px-2'>


                <div className='flex items-center w-full justify-between md:px-4 px-2 '>
                    <Link href="/" className='flex space-x-2 items-center justify-between'>
                        <Image alt="" src="/images/logo.png" width={0} height={0} className='rounded-full md:size-10 size-6' unoptimized />
                        <h1 className={`font-extrabold md:text-4xl text-xl text-green-600 ${dancing.className}`}>TinyWags</h1>
                    </Link>
                    {/* <Link href={"/home"} className="cursor-pointer md:w-[10rem] w-[7rem] md:h-[3rem] h-[2rem] bg-black text-white rounded-full font-bold flex items-center justify-center md:text-[1rem] text-xs">
                        <p>Sign up</p>
                    </Link> */}
                    <SignedOut>
                        <div className='cursor-pointer md:w-[10rem] w-[7rem] md:h-[3rem] h-[2rem] bg-black text-white rounded-full font-bold flex items-center justify-center md:text-[1rem] text-xs'>
                            <SignInButton />
                        </div>
                    </SignedOut>
                    <SignedIn>
                        <UserButton />
                    </SignedIn>
                </div>

            </div>
        </div>
    )
}

export default Header