import React from 'react'
import { AiFillGithub } from 'react-icons/ai'
import {FcGoogle} from 'react-icons/fc'
import { useCallback, useState } from 'react'
import { FieldValues, SubmitHandler, useForm } from 'react-hook-form'

import useRegisterModal from '@/app/hooks/useRegisterModal'
import axios from 'axios'

const RegisterModal = () => {
    const registerModal = useRegisterModal;
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
            registerModa
        })
    }

  return (
    <div></div>
  )
}

export default RegisterModal