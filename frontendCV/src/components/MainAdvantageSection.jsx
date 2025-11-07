import { PiReadCvLogoBold } from "react-icons/pi"
import { FilledButton } from "./Buttons"


export function MainAdvantageSection()
{
    return(    
    <div className="flex md-px-3 items-center justify-center flex-col mb-10">
        <div className="max-w-[1250px] px-5 gap-2 flex items-start justify-center pt-(--section-padding-top) w-full rounded-[25px] relative">
            <div className="circle size-[250px] absolute rounded-full bg-(--primary-color-trans) -z-1 left-[140px] top-[30%] -translate-y-[50%] ">
                
            </div>
            <div className="h-auto my-10  ">
                <h1 className="text-4xl font-semibold text-(--primary-color) max-w-[600px]" style={{lineHeight: "50px"}}>
                    Plus de <span className="text-(--secondary-color)">90%</span> des utilisateurs ont obtenu un entretien grâce à nos 
                    <span className="text-(--secondary-color)"> CV professionnels.</span>
                </h1>
                <p className="text-(--text-color) max-w-[500px] mt-4">
                    Ne perdez plus de temps ! obtenez votre document professionnel et optimisé en moins de 5 minutes.
                </p>
                <div className="mt-8 max-w-[350px]">
                    <FilledButton to="#" className="min-w-fit flex flex-row items-center justify-center gap-2">
                        Créer mon CV maintenant
                        <PiReadCvLogoBold className="text-xl"/>
                    </FilledButton>
                </div>
            </div>
            <div className="min-w-[250px] relative hidden sm:block h-[350px]">
                <img src="/ad2.png" alt="advantages illustration" className="absolute top-20"/>
            </div>
        </div>
    </div>
    )
}