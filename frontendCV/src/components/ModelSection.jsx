import { MultiCarousel } from "./MultiCarousel";

export function ModelSection()
{
    return (
    <div className="flex md-px-3 items-center justify-center mb-10">
        <div className="max-w-[1250px] bg-(--primary-color-trans) flex flex-col items-stretch justify-center pt-(--section-padding-top) w-full rounded-[25px] relative">
            <div className="px-5 ">
                <div className="mx-auto mb-4">
                    <h1 className="text-center text-[24px] text-(--primary-color) sm:text-[28px] lg:text-[30px] font-semibold">
                        Des Templates Conçus pour Gagner
                    </h1>
                    <p className="mt-4 text-(--text-color) max-w-[500px] mx-auto text-center text-sm md:text-base">
                        Choisissez parmi nos designs élégants et professionnels, tous optimisés pour les recruteurs.
                    </p>
                </div>
            </div>
            <MultiCarousel />
        </div>
    </div>
    )
}