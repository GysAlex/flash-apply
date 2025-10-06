import { useEffect, useState } from "react"
import { useModal } from "../hooks/useModal"
import { LoginWithProviderModal } from "../components/modals/LoginWithProviderModal"
import { Header } from "../components/Header"
import { useLocation } from "react-router-dom"
import { toast } from "sonner"
export default function Home()
{
    const [loading, setLoading] = useState(false)

    const { openModal } = useModal()

    const handleClick = async ()=>{
        openModal(LoginWithProviderModal, {})
    }

    const location = useLocation()
	
    useEffect(()=>{
        const params = new URLSearchParams(location.search)

        const errorMessageValue = params.get('error');

        if(errorMessageValue)
        {
            toast.error(errorMessageValue)
            window.history.replaceState(null, '', location.pathname);
        }
    }, [location])

    return <div>

        <Header />
        <button onClick={handleClick} className="bg-gray-50 border-2 rounded-2xl px-3 py-2 border-amber-200 text-(--text-color)">
            Se connecter
        </button>
        

    </div>
}