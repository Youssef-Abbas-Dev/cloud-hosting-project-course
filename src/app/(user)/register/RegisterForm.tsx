"use client";
import React, { useState } from 'react';
import { toast } from 'react-toastify';
import axios from 'axios';
import { DOMAIN } from '@/utils/constants';
import ButtonSpinner from '@/components/ButtonSpinner';
import { useRouter } from 'next/navigation';

const RegisterForm = () => {
    const router = useRouter();

    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [loading, setLoading] = useState(false);

    const formSubmitHandler = async (e:React.FormEvent) => {
        e.preventDefault();
        if(username === "") return toast.error("Username is required");
        if(email === "") return toast.error("Email is required");
        if(password === "") return toast.error("Password is required");

        try {
            setLoading(true);
            await axios.post(`${DOMAIN}/api/users/register`, { email, password, username });
            router.replace('/');
            setLoading(false);
            router.refresh();
        } catch (error:any) {
            toast.error(error?.response?.data.message);
            console.log(error);
            setLoading(false);
        }
    }

    return (
        <form onSubmit={formSubmitHandler} className="flex flex-col">
            <input 
             className="mb-4 border rounded p-2 text-xl" 
             type="text" 
             placeholder="Enter Your Username"
             value={username}
             onChange={(e) => setUsername(e.target.value)}
            />
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
            <button disabled={loading} type="submit" className="text-2xl text-white bg-blue-800 p-2 rounded-lg font-bold">
                {loading ? <ButtonSpinner /> : "Register"}
            </button>
        </form>
    )
}

export default RegisterForm