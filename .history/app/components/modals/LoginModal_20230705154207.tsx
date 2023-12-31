'use client'

import React from 'react'
import { AiFillGithub } from 'react-icons/ai'
import {FcGoogle} from 'react-icons/fc'
import { useCallback, useState } from 'react'
import { FieldValues, SubmitHandler, useForm } from 'react-hook-form'
import {signIn} from 'next-auth/react'

import useRegisterModal from '@/app/hooks/useRegisterModal'
import axios from 'axios'
import Modal from './Modal'
import Heading from '../Heading'
import Input from '../inputs/Input'
import { toast } from 'react-hot-toast'
import Button from '../Button'
import useLoginModal from '@/app/hooks/useLoginModal'
import { useRouter } from 'next/navigation'

const LoginModal = () => {

    const router = useRouter()
    const loginModal = useLoginModal()
    const [isLoading, setIsLoading] = useState(false)

    const {register, handleSubmit, formState: {
        errors
    }} = useForm<FieldValues>({defaultValues: {
        email: '',
        password:''
    }})

    const onSubmit: SubmitHandler<FieldValues> = (data) => {
        signIn('credentials', {
            ...data,
            redirect: false
        }).then((callback) => {
            setIsLoading(false)
            if(callback?.ok) {
                toast.success('Logged in')
            }
            router.refresh()
            loginModal.onClose()

            if(callback?.error) {
                toast.error(callback.error)
            }
        })
    }

    const bodyContent = (
        <div className='flex flex-col gap-4'>
                <Heading title='Welcome back' subtitle='Login to your account!'/>
                <Input id='email' label='Email' disabled={isLoading} required errors={errors} register={register}/>
                <Input id='password' label='Password' type='password' disabled={isLoading} required errors={errors} register={register}/>
        </div>
    )

    const footerContent = (
        <div className='
        flex
        flex-col
        gap-4
        mt-3'>
            <hr/>
            <Button
            outline
            label='Signup with Google'
            icon={FcGoogle}
            onClick={() => {}}
            />
            <Button
            outline
            label='Signup with Github'
            icon={AiFillGithub}
            onClick={() => {}}
            />
            <div className='text-neutral-500
            text-center
            mt-4
            font-light'>
                <div className='justify-center flex flex-row gap-2 items-center'>
                <div>
                    Already have an account
                </div>
                <div className='text-neutral-800
                cursor-pointer
                hover:underline'>
                    Log in
                </div>
                </div>
            </div>
        </div>
    )

  return (
    <Modal body={bodyContent} disabled={isLoading} onClose={loginModal.onClose} isOpen={loginModal.isOpen} onSubmit={handleSubmit(onSubmit)} title='Login' actionLabel='Continue' footer={footerContent}/>
  )
}

export default LoginModal