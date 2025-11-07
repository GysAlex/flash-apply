import { TestimonialCarousel } from "./MultiCarousel";

export function Testimonial()
{
    return(
        <div className="flex md-px-3 items-center justify-center mb-10">
            <div className="max-w-[1250px] bg-(--primary-color-trans) flex flex-col items-stretch justify-center pt-(--section-padding-top) w-full rounded-[25px] relative">
                <div className="px-5 ">
                    <div className="mx-auto mb-4">
                        <h1 className="text-center text-[24px] text-(--primary-color) sm:text-[28px] lg:text-[30px] font-semibold">
                            Avis Clients
                        </h1>
                        <p className="mt-4 text-(--text-color) max-w-[850px] mx-auto text-center text-sm md:text-base">
                           Rien n'est plus convaincant que les résultats réels. Lisez les avis de nos utilisateurs qui ont transformé leur CV et trouvé de nouvelles opportunités d'emploi grâce à notre plateforme.
                        </p>
                    </div>
                </div>
                <TestimonialCarousel />
            </div>
        </div>
    )
}