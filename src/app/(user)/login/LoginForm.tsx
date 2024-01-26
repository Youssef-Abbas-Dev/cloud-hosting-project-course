"use client";
import React, { useState } from 'react';
import { toast } from 'react-toastify';

const LoginForm = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const formSubmitHandler = (e:React.FormEvent) => {
        e.preventDefault();
        if(email === "") return toast.error("Email is required");
        if(password === "") return toast.error("Password is required");

        console.log({ email, password });
    }

    return (
        <form onSubmit={formSubmitHandler} className="flex flex-col">
            <input 
             className="mb-4 border rounded p-2 text-xl" 
             type="email" 
             placeholder="Enter Your Email"
             value={email}
             onChange={(e) => setEmail(e.target.value)}
            />
            <input 
             className="mb-4 border rounded p-2 text-xl" 
             type="password" 
             placeholder="Enter Your Password" 
             value={password}
             onChange={(e) => setPassword(e.target.value)}
            />
            <button type="submit" className="text-2xl text-white bg-blue-800 p-2 rounded-lg font-bold">
                Login
            </button>
        </form>
    )
}

export default LoginForm