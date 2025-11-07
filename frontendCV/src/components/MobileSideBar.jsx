
import { Link } from 'react-router-dom'
import { useState, useEffect } from 'react'
import { FaUser, FaTimes, FaFileAlt, FaEnvelope, FaQuestionCircle, FaPhone, FaBell, FaCog, FaSignOutAlt } from 'react-icons/fa'
import { formatImageUrl } from "../utils/imageUtils"
import { useAuth } from "../hooks/useAuth"
import { FilledButton, OutlinedButton } from './Buttons'

export function MobileSideBar({ isOpen, onClose }) {
    const { user, loading, logout } = useAuth()

    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = 'hidden'
        } else {
            document.body.style.overflow = 'unset'
        }
        return () => {
            document.body.style.overflow = 'unset'
        }
    }, [isOpen])

    const handleLogout = async () => {
        await logout()
        onClose()
    }

    const menuItems = [
        { icon: FaFileAlt, label: 'Nos modèles de CV', path: '/models' },
        { icon: FaEnvelope, label: 'Lettre de motivation', path: '/cover-letter' },
        { icon: FaQuestionCircle, label: 'Aide', path: '/help' },
        { icon: FaPhone, label: 'Contacts', path: '/contact' }
    ]

    return (
        <>
            {/* Overlay */}
            <div
                className={`fixed h-[calc(100vh-80px)] right-0 left-0 top-[80px] bottom-0 bg-[#ddf4f073] backdrop-blur-sm transition-opacity duration-400 z-[55] min-[992px]:hidden ${
                    isOpen ? 'opacity-100 visible' : 'opacity-0 invisible delay-400'
                }`}
                onClick={onClose}
            />

            {/* Sidebar */}
            <div
                className={`fixed top-[80px] h-[calc(100vh-80px)] right-0  w-[85%] max-w-[400px] bg-white  transform transition-transform duration-600 ease-out z-[60] min-[992px]:hidden ${
                    isOpen ? 'translate-x-0  delay-400' : 'translate-x-[calc(100%+20px)] '
                }`}
            >
                <div className="flex flex-col h-full">
                    {/* Header */}
                    {/* <div className="flex items-center justify-between p-6 border-b border-gray-100">
                        <Link to="/" className="text-2xl font-bold" onClick={onClose}>
                            <span className="text-(--primary-color)">CV</span>
                            <span className="text-(--primary-color)">Ma</span>
                            <span className="text-(--secondary-color)">ker</span>
                        </Link>
                        <button
                            onClick={onClose}
                            className="p-2 rounded-full hover:bg-gray-100 transition-colors"
                            aria-label="Fermer le menu"
                        >
                            <FaTimes className="text-xl text-gray-600" />
                        </button>
                    </div> */}

                    {/* User Profile Section */}
                    {user && (
                        <div className="p-6 bg-gradient-to-br from-blue-50 to-indigo-50 border-b border-gray-100">
                            <div className="flex items-center gap-4">
                                <div className="relative">
                                    <img
                                        src={formatImageUrl(user?.profile_image, user.name)}
                                        alt={user.name}
                                        className="w-16 h-16 rounded-full object-cover border-2 border-white shadow-md"
                                    />
                                    <div className="absolute -bottom-1 -right-1 w-5 h-5 bg-green-500 rounded-full border-2 border-white"></div>
                                </div>
                                <div className="flex-1 min-w-0">
                                    <h3 className="text-lg font-semibold text-gray-800 truncate">{user.name}</h3>
                                    <p className="text-sm text-gray-600 truncate">
                                        {user?.roles && user.roles.length > 0
                                            ? user.roles[0].replace('_', ' ').charAt(0).toUpperCase() + user.roles[0].replace('_', ' ').slice(1)
                                            : 'Utilisateur'}
                                    </p>
                                </div>
                            </div>

                            {/* Notifications Badge */}
                            <div className="mt-4 flex items-center justify-between p-3 bg-white rounded-lg shadow-sm">
                                <div className="flex items-center gap-2">
                                    <FaBell className="text-blue-600" />
                                    <span className="text-sm font-medium text-gray-700">Notifications</span>
                                </div>
                                <span className="px-2.5 py-0.5 bg-red-500 text-white text-xs font-semibold rounded-full">3</span>
                            </div>
                        </div>
                    )}

                    {/* Navigation Menu */}
                    <nav className="flex-1 overflow-y-auto py-4 mt-6">
                        <div className="px-4 space-y-1">
                            {menuItems.map((item, index) => (
                                <Link
                                    key={index}
                                    to={item.path}
                                    onClick={onClose}
                                    className="flex items-center gap-4 px-4 py-3.5 rounded-xl text-gray-700 hover:bg-gradient-to-r hover:from-blue-50 hover:to-indigo-50 hover:text-(--primary-color) transition-all duration-200 group"
                                >
                                    <item.icon className="text-lg text-gray-400 group-hover:text-(--primary-color) transition-colors" />
                                    <span className="font-medium">{item.label}</span>
                                </Link>
                            ))}
                        </div>

                        {/* Divider */}
                        <div className="my-4 px-4">
                            <div className="h-px bg-gradient-to-r from-transparent via-gray-200 to-transparent"></div>
                        </div>

                        {/* User Actions */}
                        {user && (
                            <div className="px-4 space-y-1">
                                <Link
                                    to="/profile"
                                    onClick={onClose}
                                    className="flex items-center gap-4 px-4 py-3.5 rounded-xl text-gray-700 hover:bg-gray-50 transition-colors"
                                >
                                    <FaUser className="text-lg text-gray-400" />
                                    <span className="font-medium">Mon Profil</span>
                                </Link>
                                <Link
                                    to="/settings"
                                    onClick={onClose}
                                    className="flex items-center gap-4 px-4 py-3.5 rounded-xl text-gray-700 hover:bg-gray-50 transition-colors"
                                >
                                    <FaCog className="text-lg text-gray-400" />
                                    <span className="font-medium">Paramètres</span>
                                </Link>
                            </div>
                        )}
                    </nav>

                    {/* Footer Actions */}
                    <div className="p-4 border-t border-gray-100 space-y-3">
                        {user ? (
                            <button
                                onClick={handleLogout}
                                className="w-full flex items-center justify-center gap-3 px-6 py-3.5 bg-gradient-to-r from-red-500 to-red-600 text-white rounded-xl font-medium shadow-md hover:shadow-lg hover:from-red-600 hover:to-red-700 transition-all duration-200"
                            >
                                <FaSignOutAlt />
                                <span>Se déconnecter</span>
                            </button>
                        ) : (
                            <>
                                <FilledButton
                                    destination="/login"
                                    onClick={onClose}
                                    className="w-full flex items-center justify-center gap-3 px-6 py-3.5 "
                                >
                                    <FaUser />
                                    <span>Se connecter</span>
                                </FilledButton>
                                <OutlinedButton
                                    to="/create-cv"
                                    onClick={onClose}
                                    className="w-full flex items-center justify-center gap-3 px-6 py-3.5 border-2"
                                >
                                    <FaFileAlt />
                                    <span>Créer un CV</span>
                                </OutlinedButton>
                            </>
                        )}
                    </div>
                </div>
            </div>
        </>
    )
}


// Hook personnalisé pour gérer l'état du menu mobile
export function useMobileMenu() {
    const [isOpen, setIsOpen] = useState(false)

    const openMenu = () => setIsOpen(true)
    const closeMenu = () => setIsOpen(false)
    const toggleMenu = () => setIsOpen(prev => !prev)

    return { isOpen, openMenu, closeMenu, toggleMenu }
}
