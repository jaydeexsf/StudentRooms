import { SignInButton, SignedIn, SignedOut, UserButton } from '@clerk/clerk-react'
import React from 'react'

export const Header = () => {
  return (
    <div className='flex justify-between py-4 items-center px-[10%]'>
        <div className="hea">
            <span className='text-2xl text-green-500'>StudentRooms</span>
        </div>
        <div className="right flex items-center">

        <SignedOut>
             <SignInButton className="bg-red-700 py-2 px-4 rounded-sm"/>
        </SignedOut>
        <SignedIn>
             <UserButton />
        </SignedIn>
            {/* <button className="log text-xl bg-red-400 hover:bg-red-500 rounded-sm p-1 px-4">
                sign In
            </button>
            <button className="logged hidden text-lg bg-red-400 rounded-sm p-1 px-4">
                log In
            </button> */}
        </div>
    </div>
  )
}
