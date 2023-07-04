'use client'

import React from 'react'
import { AiFillGithub } from 'react-icons/ai'
import {FcGoogle} from 'react-icons/fc'
import { useCallback, useState } from 'react'
import { FieldValues, SubmitHandler, useForm } from 'react-hook-form'

import useRegisterModal from '@/app/hooks/useRegisterModal'
import axios from 'axios'
import Modal from './Modal'
import Heading from '../Heading'
import Input from '../inputs/Input'
import { toast } from 'react-hot-toast'
import Button from '../Button'

const RegisterModal = () => {
    const registerModal = useRegisterModal();
    const [isLoading, setIsLoading] = useState(false)

    const {register, handleSubmit, formState: {
        errors
    }} = useForm<FieldValues>({defaultValues: {
        name:'',
        email: '',
        password:''
    }})

    const onSubmit: SubmitHandler<FieldValues> = (data) => {
        axios.post('/api/register', data)
        .then(() => {
            registerModal.onClose();
        }).catch((error) => {toast.error('Something Went Wrong!')
        }).finally(() => setIsLoading(false))
    }

    const bodyContent = (
        <div className='flex flex-col gap-4'>
                <Heading title='Welcome to Airbnb' subtitle='Create an account'/>
                <Input id='email' label='Email' disabled={isLoading} required errors={errors} register={register}/>
                <Input id='name' label='Name' disabled={isLoading} required errors={errors} register={register}/>
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
        </div>
    )

  return (
    <Modal body={bodyContent} disabled={isLoading} onClose={registerModal.onClose} isOpen={registerModal.isOpen} onSubmit={handleSubmit(onSubmit)} title='Register' actionLabel='Continue'/>
  )
}

export default RegisterModal