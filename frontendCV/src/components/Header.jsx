import { Link } from 'react-router-dom'
import { use, useEffect, useRef, useState } from "react"
import { FaAngleDown, FaUser } from 'react-icons/fa'
import { formatImageUrl } from "../utils/imageUtils"
import { useAuth } from "../hooks/useAuth"
import { BurgerButton, FilledButton, OutlinedButton } from './Buttons'
import { MobileSideBar, useMobileMenu } from './MobileSideBar'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import ScrollTrigger from "gsap/ScrollTrigger"

gsap.registerPlugin(ScrollTrigger, useGSAP)

export function Header() {

    const [isUserMenuOpen, setIsUserMenuOpen] = useState(false)
    const userMenuRef = useRef(null)

    const { user, loading, logout, setUserState } = useAuth()

    const handleLogout = async () => {
        await logout()
        setUserState(false)
    }

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (userMenuRef.current && !userMenuRef.current.contains(event.target)) {
                setIsUserMenuOpen(false);
            }
        }

        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        }
    }, [])

    const UserProfileSkeleton = () => (
        <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-full bg-gray-200 animate-pulse"></div>
            <div className="hidden sm:block text-left">
                <div className="h-4 bg-gray-200 rounded w-24 animate-pulse mb-1"></div>
                <div className="h-3 bg-gray-200 rounded w-16 animate-pulse"></div>
            </div>
            <FaAngleDown className="text-sm text-white" />
        </div>
    );

    const toggleUserMenu = () => {
        setIsUserMenuOpen(!isUserMenuOpen);
    }

    return (
        <header className="h-16 bg-white shadow-sm border-b border-gray-200 flex items-center justify-between px-6">
            <div className="flex items-center gap-4">

            </div>

            <div className="flex items-center gap-4">
                <button className="relative p-2 rounded-full hover:bg-gray-100 transition-colors">
                    <i className="fas fa-bell text-[#9CA3AF]"></i>
                    <span className="absolute -top-1 -right-1 w-3 h-3 bg-red-500 rounded-full"></span>
                </button>

                <div className="relative" ref={userMenuRef}>
                    {loading ? <UserProfileSkeleton /> : <button
                        onClick={toggleUserMenu}
                        className="flex items-center gap-3 hover:bg-gray-50 rounded-lg px-3 py-2 transition-colors"
                    >
                        {user && <img
                            src={formatImageUrl(user?.profile_image, user.name)} // Utilisez la fonction utilitaire ici
                            alt="Avatar"
                            className="w-8 h-8 rounded-full object-cover"
                        />}
                        {user && <div className="hidden sm:block text-left">
                            <p className="text-sm font-medium text-gray-800">{user?.name}</p>
                            {/* Afficher le premier rôle si disponible, sinon 'Utilisateur' */}
                            <p className="text-xs text-[#9CA3AF]">{user?.roles && user.roles.length > 0 ? user.roles[0].replace('_', ' ').charAt(0).toUpperCase() + user.roles[0].replace('_', ' ').slice(1) : 'Utilisateur'}</p>
                        </div>}
                        <FaAngleDown className={`fas fa-chevron-down text-[#9CA3AF] text-xs transition-transform duration-200 ${isUserMenuOpen ? 'rotate-180' : ''}`} />
                    </button>}

                    {isUserMenuOpen && (
                        <div className="absolute right-0 mt-2 w-48 bg-white rounded-lg shadow-lg border border-gray-200 py-2 z-50">
                            <Link
                                to="profile"
                                className="flex items-center gap-3 px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 transition-colors"
                            >
                                <i className="fas fa-user text-[#9CA3AF] w-4"></i>
                                Profil
                            </Link>
                            <a
                                href="#"
                                className="flex items-center gap-3 px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 transition-colors"
                            >
                                <i className="fas fa-cog text-[#9CA3AF] w-4"></i>
                                Paramètres
                            </a>
                            <hr className="my-2 border-gray-200" />
                            <button
                                onClick={handleLogout}
                                className="flex items-center gap-3 px-4 py-2 text-sm text-red-600 hover:bg-red-50 transition-colors"
                            >
                                <i className="fas fa-sign-out-alt text-red-500 w-4"></i>
                                Se déconnecter
                            </button>
                        </div>
                    )}
                </div>
            </div>
        </header>
    )
}

export function LogoutHeader() {
    useGSAP(() => {
        const HeaderTimeLine = gsap.timeline({
            scrollTrigger: {
                trigger: ".h-container",
                start: "bottom top",
                end: "top 30%",
                toggleActions: "play none none reverse"
            }
        }).fromTo(".h-container", { backgroundColor: "transparent" }, { backgroundColor: "#ffffffc5", backdropFilter: "blur(10px)", duration: 1, ease: "power1.out" })


        const leftSideTimeline = gsap.timeline()
        .from("#left-side path", {y: (i)=> i%2==0 ? 100 : -100, duration: 1, stagger: .09, ease:"expo.out"}, 1)
        .from("#right-side path", {y: (i)=> i%2==0 ? 100 : -100, duration: 1, stagger: .09, ease:"expo.out"})
        .to("#right-side", {x: "-=20"}, "<")
        .to("#right-side", {x: "+=20"} )
        .from("#pencil", {opacity: 0, duration: .8, ease:"bounce", y: -120})

    }, [])
    const { isOpen, toggleMenu } = useMobileMenu()

    return <>
        <div className="w-full px-5 md-px-3 flex  h-container items-center  justify-center fixed top-0 z-50 overflow-hidden">
            <div className="max-w-(--max-width) w-full mx-auto h-[80px] text-[1.5rem] flex items-center justify-between">
                <div className='logo'>
                    <Link to={'/'} className='text-[1rem]'>
                        <svg width="145" height="29" viewBox="0 0 145 29" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <g id="left-side" >
                                <path d="M0 27.8007V1.7207H11.13C16.58 1.7207 20.59 4.83071 20.59 10.2107C20.59 15.5907 16.58 18.7007 11.13 18.7007H1.16992V27.8107H0V27.8007ZM1.16992 2.82071V17.6107H11.13C16.42 17.6107 19.38 15.2407 19.38 10.2107C19.38 5.23071 16.42 2.8107 11.13 2.8107H1.16992V2.82071Z" fill="none" stroke='#1F2C53' strokeWidth="1" />
                                <path d="M24.0996 27.8008V8.73082H25.0696V13.9808H25.1896C25.8096 10.9808 28.0296 8.34082 32.0796 8.34082C36.5596 8.34082 38.6196 11.7708 38.6196 15.1908V16.4008H37.4496V15.2308C37.4496 11.3808 35.8196 9.43082 31.9596 9.43082C27.4096 9.43082 25.2695 12.5008 25.2695 17.8008V27.8008H24.0996Z" fill="none" stroke='#1F2C53' strokeWidth="1" />
                                <path d="M41.1396 18.2708C41.1396 12.6308 45.1496 8.34082 51.2596 8.34082C57.3696 8.34082 61.3798 12.6208 61.3798 18.2708C61.3798 23.9108 57.3696 28.2008 51.2596 28.2008C45.1496 28.1908 41.1396 23.9108 41.1396 18.2708ZM60.2197 18.2708C60.2197 12.9808 57.2597 9.43082 51.2697 9.43082C45.2797 9.43082 42.3197 12.9708 42.3197 18.2708C42.3197 23.5608 45.2797 27.1108 51.2697 27.1108C57.2597 27.1008 60.2197 23.5608 60.2197 18.2708Z" fill="none" stroke='#1F2C53' strokeWidth="1" />
                                <path d="M65.6699 27.8007V1.7207H83.9299V2.8107H66.84V14.9207H83.34V16.0107H66.84V27.8007H65.6699Z" fill="none" stroke='#1F2C53' strokeWidth="1" />
                            </g >
                            <g id="pencil" className="">
                                <path d="M98.29 2.76054L94.3101 11.3506C94.2201 11.5506 94.1 11.7205 93.96 11.8705C93.99 11.5705 93.9501 11.2706 93.8501 10.9906C93.6801 10.5206 93.3301 10.1205 92.8401 9.90054C92.0601 9.54054 91.1701 9.74056 90.6201 10.3206C90.6401 10.1106 90.7 9.91056 90.79 9.71056L94.77 1.12054C95.22 0.150543 96.3701 -0.269459 97.3501 0.180541C97.8401 0.410541 98.1801 0.810553 98.3601 1.27055C98.5201 1.75055 98.52 2.28054 98.29 2.76054Z" fill="none" stroke='#ED6D47' strokeWidth="1" />
                                <path d="M93.5498 12.991L88.9898 22.821C88.8898 23.041 88.6598 23.171 88.4298 23.151C88.4598 22.821 88.3497 22.481 88.1497 22.191C87.9797 21.941 87.7298 21.731 87.4198 21.591C87.1098 21.451 86.7898 21.401 86.4898 21.421C86.1398 21.451 85.8098 21.591 85.5698 21.831C85.4098 21.661 85.3598 21.411 85.4598 21.191L90.0197 11.361C90.1597 11.061 90.3598 10.821 90.5998 10.631C91.1498 10.211 91.9198 10.101 92.5898 10.411C93.0798 10.641 93.4198 11.041 93.5998 11.501C93.6698 11.681 93.7097 11.881 93.7197 12.071C93.7397 12.381 93.6798 12.701 93.5498 12.991Z" fill="none" stroke='#ED6D47' strokeWidth="1" />
                                <path d="M88.3699 23.9408L88.1598 23.8408C87.7498 24.3708 86.9499 24.5408 86.2299 24.2208L84.6299 27.6608L86.4999 25.8508L88.3398 24.0708C88.3598 24.0308 88.3699 23.9808 88.3699 23.9408Z" fill="none" stroke='#ED6D47' strokeWidth="1" />
                                <path d="M86.17 24.1906L84.5801 27.6306L84.7501 25.0406L84.92 22.4906L84.9301 22.3506L85.2201 22.4806C85.0801 23.1306 85.46 23.8506 86.17 24.1906Z" fill="none" stroke='#ED6D47' strokeWidth="1" />
                                <path d="M86.1849 24.0896L86.1807 24.0986L86.2442 24.1281L86.2484 24.119L86.1849 24.0896Z" fill="none" stroke='#ED6D47' strokeWidth="1" />
                                <path d="M88.4497 23.9708L88.3497 24.0708L86.5096 25.8508L84.6396 27.6608L86.2397 24.2208C86.9597 24.5408 87.7597 24.3708 88.1697 23.8408L88.4497 23.9708Z" fill="none" stroke='#ED6D47' strokeWidth="1" />
                                <path d="M86.1849 24.0896L86.1807 24.0986L86.2442 24.1281L86.2484 24.119L86.1849 24.0896Z" fill="none" stroke='#ED6D47' strokeWidth="1" />
                                <path d="M87.2402 23.411C87.1002 23.711 86.7401 23.841 86.4401 23.701C86.1401 23.561 86.0101 23.201 86.1501 22.901C86.2901 22.601 86.6501 22.471 86.9501 22.611C87.2401 22.751 87.3802 23.111 87.2402 23.411Z" fill="none" stroke='#ED6D47' strokeWidth="1" />
                                <path d="M86.1849 24.0896L86.1807 24.0986L86.2442 24.1281L86.2484 24.119L86.1849 24.0896Z" fill="none" stroke='#ED6D47' strokeWidth="1" />
                                <path d="M85.1797 27.1406L84.6396 27.6606H100.79" fill="none" stroke='black' strokeWidth="1" />
                            </g>
                            <g id="right-side" >                     
                                <path d="M103.77 27.8007V1.7207H104.94V26.7107H122.03V27.8007H103.77Z" fill="none" stroke='#1F2C53' strokeWidth="1" />
                                <path d="M125.524 1.72827V2.81836L144.174 2.81836V1.72827L125.524 1.72827Z" fill="none" stroke='#ED6D47' strokeWidth="1" />
                                <path d="M125.516 14.1257V15.2158L143.566 15.2158V14.1257L125.516 14.1257Z" fill="none" stroke='#ED6D47' strokeWidth="1" />
                                <path d="M125.529 26.5977V27.8076H144.179V26.5977H125.529Z" fill="none" stroke='#ED6D47' strokeWidth="1" />
                            </g>
                        </svg>
                    </Link>
                </div>
                <div className='flex items-center justify-center md:gap-14 max-[992px]:hidden '>
                    <div className='hidden md:flex items-center justify-center text-sm gap-10' id='menu'>
                        <Link>
                            <span className='text-(--primary-color) transition-all'>Nos modèles de CV</span>
                        </Link>

                        <Link>
                            <span className='text-(--primary-color) transition-all'>Lettre de motivation</span>
                        </Link>

                        <Link>
                            <span className='text-(--primary-color) transition-all'> Aide</span>
                        </Link>

                        <Link>
                            <span className='text-(--primary-color) transition-all '>Contacts</span>
                        </Link>
                    </div>

                    <div className='hidden sm:flex items-center justify-center gap-4  '>

                        <OutlinedButton destination={'#'} className='text-sm font-medium flex items-center gap-2 bg-none'>
                            <span className=''>Créer un CV</span>
                        </OutlinedButton>

                        <FilledButton destination={'/login'} className='text-sm font-medium flex items-center gap-2'>
                            <FaUser className='text-sm ' />
                            <span className='text-sm'>Se connecter</span>
                        </FilledButton>
                    </div>
                </div>
                <BurgerButton onClick={toggleMenu} />
            </div>
        </div>
        <MobileSideBar isOpen={isOpen} onClose={toggleMenu} />

    </>


}