import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export function ErrorBag()
{
    const location = useLocation()
    useEffect(()=>{
        console.log(location)
    }, [])
}