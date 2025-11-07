import { useEffect, useState } from "react"
import { useModal } from "../hooks/useModal"
import { LoginWithProviderModal } from "../components/modals/LoginWithProviderModal"
import { Header } from "../components/Header"
import { useLocation } from "react-router-dom"
import { toast } from "sonner"
import { waitAndResolve } from "../utils/waitAndResolve"

export default function Dashboard()
{
    const [loading, setLoading] = useState(false)

    const { openModal } = useModal()

    const handleClick = async ()=>{
        openModal(LoginWithProviderModal, {})
    }

    const location = useLocation()
	
    useEffect(()=>{


        const waitAndNotify = async () =>{

            await waitAndResolve(1000)
            const params = new URLSearchParams(location.search)
            const errorMessageValue = params.get('error');
             
            if(errorMessageValue)
            {
                toast.error(errorMessageValue, {
                    description: "Erreur de connexion avec le provider veillez réessayer plutard"
                })
                window.history.replaceState(null, '', location.pathname);
            }
        }

        waitAndNotify()

    }, [location])

    return <div>

        <Header />
        <div className="h-[90vh] grid place-items-center bg-amber-300">
            Bonjour patron
        </div>
        
    </div>
}