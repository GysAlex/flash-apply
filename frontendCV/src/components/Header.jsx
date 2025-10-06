import { Link  } from 'react-router-dom'
import { useEffect, useRef, useState } from "react"
import { formatImageUrl } from "../utils/imageUtils" 
import { useAuth } from "../hooks/useAuth"

export function Header()
{

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
            <i className="fas fa-chevron-down text-[#9CA3AF] text-xs"></i>
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
                        <i className={`fas fa-chevron-down text-[#9CA3AF] text-xs transition-transform duration-200 ${isUserMenuOpen ? 'rotate-180' : ''}`}></i>
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