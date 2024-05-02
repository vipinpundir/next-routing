'use client'

import React from 'react'
import { useForm, SubmitHandler } from "react-hook-form"



type FormValues = {
    email: string
    password: string
}


const Login = () => {

    const { register, handleSubmit, formState: { errors }, } = useForm<FormValues>()
    const onSubmit: SubmitHandler<FormValues> = (data) => console.log(data)

    return (
        <form className='Register' onSubmit={handleSubmit(onSubmit)}>
            <h1>Login page...</h1>
            <label>Email</label>
            <input type="email" {...register("email",{ required: true })} />
            {errors.email?.type === "required" && (
            <p role="alert">Email is required</p>)}

            <label>Password</label>
            <input {...register("password",{ required: true })} />
            {errors.password?.type === "required" && (
            <p role="alert">Password is required</p>)}
            
            <button type="submit" className="btn "> Login</button>
        </form>
    )
}

export default Login