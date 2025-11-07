import { useEffect, useRef } from "react"
import { Link } from "react-router-dom"

export function FilledButton({children, destination, onClick=() => null, className=''}) {
    return (
        <Link 
            to={destination}
            onClick={onClick}
            className={`bg-(--secondary-color) text-(--white) px-4 py-2 rounded-2xl hover:shadow-md hover:font-medium hover:shadow-orange-300 hover:translate-y-[-0.4em] transition-all ${className}`}
        >
            {children}
        </Link>
    )
}

export function OutlinedButton({children, destination, className=''}) {
    return (
        <Link 
            to={destination}
            className={`border-2 text-(--secondary-color) transition-all  px-3 py-2 rounded-2xl hover:border-(--primary-color) hover:text-(--primary-color) hover:bg-white ${className}`}
        >
            {children}
        </Link>
    )
}

export function BurgerButton({onClick})
{
    const burgerRef = useRef(null)

    useEffect(()=>{
        burgerRef.current.addEventListener('click', function(){
            burgerRef.current.getAttribute('aria-expanded') == 'false' ? 
            burgerRef.current.setAttribute('aria-expanded', 'true') : burgerRef.current.setAttribute('aria-expanded', 'false')
        })
    }, [])

    return (
    <button onClick={onClick} ref={burgerRef} className="button3 min-[991px]:hidden" id="myBurger" aria-expanded="false">
        <svg viewBox="-5 -6 120 120" fill="none" width="60" className="hamburger"
            stroke="var(--button-color)"
        >
            <path 
            className="line"
            strokeWidth="10"
            strokeLinecap="round"
            strokeLinejoin="round"
            d="m 27 40 h 60 a 1 1 0 0 1 0 20 h -60 a 1 1 0 0 1 0 -40 h 30  v 70">

            </path>
        </svg>
    </button>
    )
}