'use client'

import React from 'react'
import { useForm, SubmitHandler } from "react-hook-form"



type FormValues = {
    firstName: string
    lastName: string
    email: string
    password: string
}


const Register = () => {

    const { register, handleSubmit, formState: { errors }, } = useForm<FormValues>()
    const onSubmit: SubmitHandler<FormValues> = (data) => console.log(data)

    return (
        <form className='Register' onSubmit={handleSubmit(onSubmit)}>
            <h1>Register page...</h1>
            <label>First Name</label>
            <input {...register("firstName", { required: true, maxLength: 20 })} />
            {errors.firstName?.type === "required" && (
            <p role="alert">First name is required</p>)}

            <label>Last Name</label>
            <input {...register("lastName", { required: true })} />
            {errors.lastName?.type === "required" && (
            <p role="alert">Last name is required</p>)}

            <label>Email</label>
            <input type="email" {...register("email")} />

            <label>Password</label>
            <input {...register("password")} />
            
            <button type="submit" className="btn"> Register</button>
        </form>
    )
}

export default Register