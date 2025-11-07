import { MdEmail, MdPhone } from 'react-icons/md'
import { FaFacebook, FaInstagram, FaXTwitter } from 'react-icons/fa6'
import { Link } from 'react-router-dom'
import { FaCopy } from 'react-icons/fa'
import { PiCopyrightThin } from 'react-icons/pi'

export function Footer() {
    return (
        <footer className="flex w-full mt-20 bg-(--primary-color-trans) px-5 md-px-3 items-center justify-center">
            <div className="max-w-[1250px]  flex flex-col items-stretch justify-center gap-2 pt-(--section-padding-top) w-full rounded-[25px] relative">
                {/* Header Section */}
                <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-12 gap-6">
                    <div>
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
                    <p className="text-gray-600 max-w-[350px] mt-4">
                        Transforme ta carrière avec l'intelligence artificielle.
                    </p>
                    </div>

                    <div className="flex items-center relative gap-3 w-full md:w-auto">
                        <input
                            type="email"
                            placeholder="Entrez Votre Mail"
                            className="px-6 py-3 border-2 border-gray-300 rounded-full flex-1 md:w-80 focus:outline-none focus:border-blue-500"
                        />
                        <button className="bg-orange-500 right-0 absolute hover:bg-orange-600 text-white px-8 py-3 rounded-full font-medium transition-colors whitespace-nowrap">
                            Soumettre
                        </button>
                    </div>
                </div>

                {/* Links Section */}
                <div className="grid grid-cols-2 md:grid-cols-5 gap-8 mb-12">
                    {/* Informations */}
                    <div>
                        <h3 className="font-medium text-lg mb-4 text-(--secondary-color)">Informations</h3>
                        <div className="space-y-3">
                            <Link to="mailto:ameena@gmail.com" className="flex items-center gap-2 text-(--text-color) hover:text-blue-600 transition-colors">
                                <MdEmail size={20} />
                                <span>ameena@gmail.com</span>
                            </Link>
                            <Link to="tel:55555555" className="flex items-center gap-2 text-gray-600 hover:text-blue-600 transition-colors">
                                <MdPhone size={20} />
                                <span>55 55 55 55</span>
                            </Link>
                        </div>
                    </div>

                    {/* Liens Rapides */}
                    <div>
                        <h3 className="font-medium text-lg mb-4 text-(--secondary-color)">Liens Rapides</h3>
                        <ul className="space-y-2">
                            <li>
                                <Link to="#" className="text-gray-600 hover:text-blue-600 transition-colors">
                                    Accueil
                                </Link>
                            </li>
                            <li>
                                <Link to="#" className="text-gray-600 hover:text-blue-600 transition-colors">
                                    Fonctionnalités
                                </Link>
                            </li>
                            <li>
                                <Link to="#" className="text-gray-600 hover:text-blue-600 transition-colors">
                                    Outils
                                </Link>
                            </li>
                        </ul>
                    </div>

                    {/* Legal */}
                    <div>
                        <h3 className="font-medium text-lg mb-4 text-(--secondary-color)">Legal</h3>
                        <ul className="space-y-2">
                            <li>
                                <Link to="#" className="text-gray-600 hover:text-blue-600 transition-colors">
                                    Conditions d'utilisation
                                </Link>
                            </li>
                            <li>
                                <Link to="#" className="text-gray-600 hover:text-blue-600 transition-colors">
                                    Politique de confidentialité
                                </Link>
                            </li>
                        </ul>
                    </div>

                    {/* Support */}
                    <div>
                        <h3 className="font-medium text-lg mb-4 text-(--secondary-color)">Support</h3>
                        <ul className="space-y-2">
                            <li>
                                <Link to="#" className="text-gray-600 hover:text-blue-600 transition-colors">
                                    FAQ
                                </Link>
                            </li>
                            <li>
                                <Link to="#" className="text-gray-600 hover:text-blue-600 transition-colors">
                                    Contact
                                </Link>
                            </li>
                            <li>
                                <Link to="#" className="text-gray-600 hover:text-blue-600 transition-colors">
                                    Guide d'utilisation
                                </Link>
                            </li>
                        </ul>
                    </div>

                    {/* Suivez Nous */}
                    <div>
                        <h3 className="font-medium text-lg mb-4 text-(--secondary-color)">Suivez Nous</h3>
                        <div className="flex gap-3">
                            <Link
                                to="#"
                                className="w-10 h-10 bg-blue-600 hover:bg-blue-700 text-white rounded-full flex items-center justify-center transition-colors"
                                aria-label="Facebook"
                            >
                                <FaFacebook size={20} />
                            </Link>
                            <Link
                                to="#"
                                className="w-10 h-10 bg-pink-600 hover:bg-pink-700 text-white rounded-full flex items-center justify-center transition-colors"
                                aria-label="Instagram"
                            >
                                <FaInstagram size={20} />
                            </Link>
                            <Link
                                to="#"
                                className="w-10 h-10 bg-black hover:bg-gray-800 text-white rounded-full flex items-center justify-center transition-colors"
                                aria-label="X (Twitter)"
                            >
                                <FaXTwitter size={20} />
                            </Link>
                        </div>
                    </div>
                </div>

                {/* Divider */}
                <div className="border-t border-gray-300"></div>
                <div className='flex flex-row items-center justify-start gap-2'>
                    <div className=' flex flex-row items-center justify-start gap-1'>
                        <PiCopyrightThin className='text-(--secondary-color) text-2xl' />
                        copyright 2025. Tous droits réservés.
                    </div>
                        
                    <div className='logo my-4'>
                        <Link to={'/'} className='text-[1rem]'>
                            <svg width="90" height="18" viewBox="0 0 145 29" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <g id="" >
                                    <path d="M0 27.8007V1.7207H11.13C16.58 1.7207 20.59 4.83071 20.59 10.2107C20.59 15.5907 16.58 18.7007 11.13 18.7007H1.16992V27.8107H0V27.8007ZM1.16992 2.82071V17.6107H11.13C16.42 17.6107 19.38 15.2407 19.38 10.2107C19.38 5.23071 16.42 2.8107 11.13 2.8107H1.16992V2.82071Z" fill="none" stroke='#1F2C53' strokeWidth="1" />
                                    <path d="M24.0996 27.8008V8.73082H25.0696V13.9808H25.1896C25.8096 10.9808 28.0296 8.34082 32.0796 8.34082C36.5596 8.34082 38.6196 11.7708 38.6196 15.1908V16.4008H37.4496V15.2308C37.4496 11.3808 35.8196 9.43082 31.9596 9.43082C27.4096 9.43082 25.2695 12.5008 25.2695 17.8008V27.8008H24.0996Z" fill="none" stroke='#1F2C53' strokeWidth="1" />
                                    <path d="M41.1396 18.2708C41.1396 12.6308 45.1496 8.34082 51.2596 8.34082C57.3696 8.34082 61.3798 12.6208 61.3798 18.2708C61.3798 23.9108 57.3696 28.2008 51.2596 28.2008C45.1496 28.1908 41.1396 23.9108 41.1396 18.2708ZM60.2197 18.2708C60.2197 12.9808 57.2597 9.43082 51.2697 9.43082C45.2797 9.43082 42.3197 12.9708 42.3197 18.2708C42.3197 23.5608 45.2797 27.1108 51.2697 27.1108C57.2597 27.1008 60.2197 23.5608 60.2197 18.2708Z" fill="none" stroke='#1F2C53' strokeWidth="1" />
                                    <path d="M65.6699 27.8007V1.7207H83.9299V2.8107H66.84V14.9207H83.34V16.0107H66.84V27.8007H65.6699Z" fill="none" stroke='#1F2C53' strokeWidth="1" />
                                </g >
                                <g id="" className="">
                                    <path d="M98.29 2.76054L94.3101 11.3506C94.2201 11.5506 94.1 11.7205 93.96 11.8705C93.99 11.5705 93.9501 11.2706 93.8501 10.9906C93.6801 10.5206 93.3301 10.1205 92.8401 9.90054C92.0601 9.54054 91.1701 9.74056 90.6201 10.3206C90.6401 10.1106 90.7 9.91056 90.79 9.71056L94.77 1.12054C95.22 0.150543 96.3701 -0.269459 97.3501 0.180541C97.8401 0.410541 98.1801 0.810553 98.3601 1.27055C98.5201 1.75055 98.52 2.28054 98.29 2.76054Z" fill="#ED6D47" />
                                    <path d="M93.5498 12.991L88.9898 22.821C88.8898 23.041 88.6598 23.171 88.4298 23.151C88.4598 22.821 88.3497 22.481 88.1497 22.191C87.9797 21.941 87.7298 21.731 87.4198 21.591C87.1098 21.451 86.7898 21.401 86.4898 21.421C86.1398 21.451 85.8098 21.591 85.5698 21.831C85.4098 21.661 85.3598 21.411 85.4598 21.191L90.0197 11.361C90.1597 11.061 90.3598 10.821 90.5998 10.631C91.1498 10.211 91.9198 10.101 92.5898 10.411C93.0798 10.641 93.4198 11.041 93.5998 11.501C93.6698 11.681 93.7097 11.881 93.7197 12.071C93.7397 12.381 93.6798 12.701 93.5498 12.991Z" fill="#ED6D47" />
                                    <path d="M88.3699 23.9408L88.1598 23.8408C87.7498 24.3708 86.9499 24.5408 86.2299 24.2208L84.6299 27.6608L86.4999 25.8508L88.3398 24.0708C88.3598 24.0308 88.3699 23.9808 88.3699 23.9408Z" fill="#ED6D47" />
                                    <path d="M86.17 24.1906L84.5801 27.6306L84.7501 25.0406L84.92 22.4906L84.9301 22.3506L85.2201 22.4806C85.0801 23.1306 85.46 23.8506 86.17 24.1906Z" fill='#ED6D47' />
                                    <path d="M86.1849 24.0896L86.1807 24.0986L86.2442 24.1281L86.2484 24.119L86.1849 24.0896Z" fill='#ED6D47' />
                                    <path d="M88.4497 23.9708L88.3497 24.0708L86.5096 25.8508L84.6396 27.6608L86.2397 24.2208C86.9597 24.5408 87.7597 24.3708 88.1697 23.8408L88.4497 23.9708Z" fill='#ED6D47' />
                                    <path d="M86.1849 24.0896L86.1807 24.0986L86.2442 24.1281L86.2484 24.119L86.1849 24.0896Z" fill='#ED6D47' />
                                    <path d="M87.2402 23.411C87.1002 23.711 86.7401 23.841 86.4401 23.701C86.1401 23.561 86.0101 23.201 86.1501 22.901C86.2901 22.601 86.6501 22.471 86.9501 22.611C87.2401 22.751 87.3802 23.111 87.2402 23.411Z" fill='#ED6D47' />
                                    <path d="M86.1849 24.0896L86.1807 24.0986L86.2442 24.1281L86.2484 24.119L86.1849 24.0896Z" fill='#ED6D47' />
                                    <path d="M85.1797 27.1406L84.6396 27.6606H100.79" fill="black"  />
                                </g>
                                <g id="" >                     
                                    <path d="M103.77 27.8007V1.7207H104.94V26.7107H122.03V27.8007H103.77Z" fill="none" stroke='#1F2C53' strokeWidth="1" />
                                    <path d="M125.524 1.72827V2.81836L144.174 2.81836V1.72827L125.524 1.72827Z" fill="none" stroke='#ED6D47' strokeWidth="1" />
                                    <path d="M125.516 14.1257V15.2158L143.566 15.2158V14.1257L125.516 14.1257Z" fill="none" stroke='#ED6D47' strokeWidth="1" />
                                    <path d="M125.529 26.5977V27.8076H144.179V26.5977H125.529Z" fill="none" stroke='#ED6D47' strokeWidth="1" />
                                </g>
                            </svg>
                        </Link>
                    </div>

                </div>

            </div>
        </footer>
    );
}