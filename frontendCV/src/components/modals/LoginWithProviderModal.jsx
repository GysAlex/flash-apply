import React, { useState, useEffect } from 'react';
import { FaTimes, FaSpinner, FaSave, FaUser, FaEnvelope, FaIdCard, FaLinkedin } from 'react-icons/fa';
import { FcGoogle } from 'react-icons/fc'
import { toast } from 'sonner';
import { ThreeDots } from 'react-loading-icons'
import { useModal } from '../../hooks/useModal';
import { waitAndResolve } from '../../utils/waitAndResolve';


export function LoginWithProviderModal() 
{
    const [googleLoading, setGoogleLoading] = useState(false)
    const [linkedinLoading, setLinkedinLoading] = useState(false)

    const { closeModal } = useModal()

    const onCancel = ()=>{
        closeModal()
    }


    const handleGoogleLogin = async () =>{
        setGoogleLoading(true)
        await waitAndResolve(300)
        window.open('http://localhost:8000/auth/google/redirect', "_self")
    }
    const handleLinkedinLogin = async () =>{
        setLinkedinLoading(true)
        await waitAndResolve(300)
        window.open('http://localhost:8000/auth/linkedin-openid/redirect', "_self")
    }

    return (
        <form
            className="max-w-[500px] flex flex-col max-h-[95vh] overflow-y-auto my-auto items-stretch gap-6 md:w-[70%] w-[80%] bg-white p-4 rounded-xl"
            style={{ boxShadow: "1px 5px 10px rgba(0, 0, 0, .2)" }}
        >
            <div className="my-4 flex items-center justify-between">
                <span className="text-(--dominant-yellow) text-lg font-semibold">Se connecter</span>
                <button
                    onClick={onCancel}
                    type="button"
                    className="cursor-pointer p-2 rounded-full bg-(--dominant-yellow) size-[30px] flex items-center justify-center"
                >
                    <FaTimes className="fa-solid fa-x text-sm text-white" />
                </button>
            </div>

            <div className="space-y-6">

                <button disabled={googleLoading} onClick={handleGoogleLogin} className='flex h-[35px] px-3 py-2 text-sm transition-all cursor-pointer bg-gray-100 hover:bg-gray-50 rounded-2xl items-center justify-center gap-2'>
                    <FcGoogle size={25}  />
                    {!googleLoading ? "Continuer avec google" : <ThreeDots speed=".75" fill="#FFD93D" width="18px"  />}
                </button>

                <button disabled={linkedinLoading} onClick={handleLinkedinLogin} className='flex h-[35px] px-3 py-2 text-sm transition-all cursor-pointer bg-gray-100 hover:bg-gray-50 rounded-2xl items-center justify-center gap-2'>
                    <FaLinkedin size={25} className='text-[#004182]' />
                    {!linkedinLoading ? "Continuer avec linkedin" : <ThreeDots speed=".75" fill="#004182" width="18px"  />}
                </button>

            </div>

        </form>
    );
};


