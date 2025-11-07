import { PiReadCvLogo } from "react-icons/pi"

export function CTASection()
{
    return(
    <div className="flex px-5 md-px-3 items-center justify-center ">
        <div className="max-w-[1250px] my-20 flex flex-col items-stretch justify-center gap-12 pt-(--section-padding-top) w-full rounded-[25px] relative mb-10">
            <div className="max-w-[900px] mx-auto p-7 bg-[#00BCD4] rounded-[25px] relative">
                <h1 className="text-center text-[24px] text-white sm:text-[28px] lg:text-[30px] font-semibold">
                    Prêt à transformer <span className="text-(--primary-color)">votre carrière</span>  ? Créez votre <span className="text-(--primary-color)">CV professionnel</span> dès aujourd'hui !  
                </h1>
                <p className="mt-4 text-white text-center text-sm md:text-base">
                    Démarre en quelques minutes. Notre IA te donne un avantage immédiat sur les recruteurs. 
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Consequatur, atque facere nemo
                </p>
                <div className="flex items-center justify-center">   
                    <button className="mt-8 mx-auto transition-all cursor-pointer hover:shadow-2xl hover:-translate-y-3 hover:font-semibold px-6 flex flex-row items-center justify-center gap-2 py-3 bg-(--primary-color) text-white rounded-2xl ">
                        Créer Mon Document Optimisé
                        <PiReadCvLogo className="text-2xl"/>
                    </button>
                </div>
                <div className="sphere1 hidden lg:block absolute top-0 left-0 -translate-x-[50%] -translate-y-[50%] size-[150px] bg-(--primary-color) rounded-full z-1">

                </div>
                <div className="sphere2 hidden lg:block absolute bottom-0 right-0 size-[150px] bg-(--primary-color) rounded-full z-1 translate-x-[50%] translate-y-[50%]">

                </div>
            </div>
        </div>
    </div>
    )
}