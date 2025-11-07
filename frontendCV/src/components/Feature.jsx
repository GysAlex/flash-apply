import { FeatureItem } from "./items/FeatureItems"
import { FaMagic } from 'react-icons/fa'
import { TbFileCv } from 'react-icons/tb'
import { FaCloudUploadAlt } from 'react-icons/fa'
import { Tools } from "./Tools"



export function Feature()
{

    const featureItems = [
        {
            id: 1,
            color: "var(--secondary-color)",
            icon: <FaCloudUploadAlt />,
            title: "Extraction & Analyse",
            description: "L'IA extrait vos infos d'un ancien CV pour éviter la saisie manuelle.",
        }, 

        {
            id: 2,
            color: "#00BCD4",
            icon: <FaMagic />,
            title: "Personnaliser",
            description: "Ajustez, complétez et choisissez un design professionnel parmi nos templates modernes.",
        },

        {
            id: 3,
            color: "#1C2A55",
            icon: <TbFileCv />,
            title: "Export ATS Optimisé",
            description: "Téléchargez votre CV en PDF, formaté et prêt à passer les systèmes de recrutement (ATS). lorem ipsum.",
        }

    ]

    return (
        <div className="flex px-5 md-px-3 items-center justify-center ">
            <div className="max-w-[1250px] px-5  bg-(--primary-color-trans) flex flex-col items-stretch justify-center gap-12 pt-(--section-padding-top) w-full rounded-[25px] relative">
                <div className="feature-1">
                    <h1 className="text-center text-[24px] text-(--primary-color) sm:text-[28px] lg:text-[30px] font-semibold">
                        Nos fonctionnalités clés
                    </h1>
                    <div className="feature-card-container flex items-center justify-between flex-wrap mt-9 mb-10">
                        {featureItems.map((item) => (
                            <FeatureItem 
                                key={item.id}
                                color={item.color}
                                icon={item.icon}
                                title={item.title}
                                description={item.description}
                            />
                        ))}
                    </div>
                </div>
                <Tools />
            </div>
        </div>
    )
}