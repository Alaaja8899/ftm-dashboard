'use client'
import { ModeToggle } from '@/components/ModeToggle'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import Link from 'next/link'
import React from 'react'

function page() {
  return (
    <div className='flex  flex-col items-center justify-center min-h-screen p-6'>

      <div className="span absolute top-10 right-10">
      <ModeToggle/>

      </div>

      <form  className='md:w-[34rem] border rounded-lg shadow p-6 w-full flex flex-col gap-3'>
        <h2 className='font-bold text-2xl'>Forget password </h2>
        <p className='text-gray-500 '>We 'll send you an email check on inbox or spam folder</p>
        <Input placeholder='Email address' type='email' required/>
        <Button>Fotget Password</Button>

        <span className='text-center'>
        <Link href={'/auth/login'}>
      Login 
      </Link>

          </span>      
      
      </form>



    </div>
  )
}

export default page
