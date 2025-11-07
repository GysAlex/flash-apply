import { useCallback, useEffect, useState } from "react";
import { CVItem } from "./items/CVItem";
import { BiPlus, BiSolidArrowFromLeft } from "react-icons/bi"
import { BiChevronRightCircle, BiChevronLeftCircle} from "react-icons/bi"

import { FilledButton } from "./Buttons"
import { TestimonialItem } from "./items/TestimonialItem";


const initialCards = [
    {
        id: 1,
        cvPath: "img1.png"
    },
    {
        id: 2, 
        cvPath: "img2.png"
    },
    {
        id: 3,
        cvPath: "img3.png"
    },
    {
        id: 4,
        cvPath: "img4.png"
    },
    {
        id: 5,
        cvPath: "img5.png"
    },
    {
        id: 6,
        cvPath: "img6.png"
    },
    {
        id: 7,
        cvPath: "img7.png"
    },
    {
        id: 8,
        cvPath: "img8.png"
    },
    {
        id: 9,
        cvPath: "img9.png"
    },

]

export function MultiCarousel()
{
    const [cards, setCards] = useState(initialCards)
    const [centerElementX, setCenterElementX] = useState(0)
    const [isAnimating, setIsAnimating] = useState(false)
    const [offset, setOffset] = useState(0)
    
    const gapBetweenItems = 60
    const cardWidth = 300
    
    const calculateCenterElementX = useCallback(() => { 
        const wrapper = document.querySelector('.wrapper')
        if(wrapper)
            setCenterElementX(wrapper.offsetWidth / 2 - cardWidth / 2)
    }, [cardWidth])
    
    useEffect(() => {
        calculateCenterElementX()
        window.addEventListener('resize', calculateCenterElementX)
        return () => {
            window.removeEventListener('resize', calculateCenterElementX)
        }
    }, [calculateCenterElementX])
    
    const getPosition = (index) => {
        const centerElementIndex = Math.floor(cards.length / 2)
        const offSet = index - centerElementIndex
        return centerElementX + offSet * (cardWidth + gapBetweenItems) + offset
    }
    
    const handleLeftClick = () => {
        if (isAnimating) return
        setCards(prevCards => {
            const firstElement = prevCards[0]
            return [...prevCards.slice(1), firstElement]
        })
    }
    
    const handleRightClick = () => {
        if (isAnimating) return
        setIsAnimating(true)
        
        // Étape 1 : Animation vers la droite
        setOffset(cardWidth + gapBetweenItems)
        
        // Étape 2 : Après l'animation, réorganiser le tableau sans transition
        setTimeout(() => {
            setCards(prevCards => {
                const lastElement = prevCards[prevCards.length - 1]
                return [lastElement, ...prevCards.slice(0, -1)]
            })
            setOffset(0)
            setIsAnimating(false)
        }, 500) // Correspond à la durée de la transition CSS
    }
    
    return (
        <div className="relative pb-4">
            <div className="wrapper transition-all w-full min-h-[450px] bg-gray/100 overflow-x-clip p-5 gap-x-4 flex items-center justify-start relative">
                {cards.map((card, index) => (
                    <div 
                        className={`absolute carousel-item transition-all ${Math.abs(index - Math.floor(cards.length / 2)) > 3 ? 'opacity-0 pointer-events-none ' : Math.abs(index - Math.floor(cards.length / 2)) > 1 ? 'nearest-cv' : Math.abs(index - Math.floor(cards.length / 2)) > 0 ? 'side-cv' : 'main-cv' }`} 
                        style={{
                            transform: `translateX(${getPosition(index)}px)`, 
                            transition: isAnimating || offset === 0 ? 'transform .5s ease-out' : 'transform .5s ease-out'
                        }} 
                        key={card.id}
                    >
                        <CVItem  cvPath={"url(/cvs/"+card.cvPath+")"} />
                    </div>
                ))}
            </div>
            <button 
                onClick={handleLeftClick} 
                disabled={isAnimating}
                className="cursor-pointer z-10 shadow-xs left-4 absolute top-[50%] translate-y-[-50%] disabled:opacity-50"
            >
                <BiChevronLeftCircle className="text-6xl text-(--primary-color)" /> 
            </button>
            <button 
                onClick={handleRightClick} 
                disabled={isAnimating}
                className="cursor-pointer z-10 shadow-xs right-4 absolute translate-y-[-50%] top-[50%] disabled:opacity-50"
            >
                <BiChevronRightCircle className="text-6xl text-(--primary-color)" />
            </button>
            <div className="indicators mx-auto flex items-center justify-center gap-2" style={{width: `${cards.length * (15 + 9)}px`}}>
                {cards.map((card, index) => (
                    <button 
                        key={card.id}
                        className={`size-[15px] rounded-full indicator transition-all duration-300 ${card.id === Math.floor(cards.length / 2) ? 'stretch-ind' : 'normal-ind'}`}
                    >
                </button>
                ))}
            </div>
            <div className="flex items-center justify-center mt-8">
                <FilledButton className="min-w-fit flex flex-row items-center justify-center gap-1">
                    Voir plus de modèles <BiPlus className="text-xl font-bold"/>
                </FilledButton>
            </div>
        </div>
    )
}




const initialTestimonials = [
    {
        id: 1,
        message: "Cette plateforme a transformé ma recherche d'emploi. En quelques minutes, j'ai pu créer un CV professionnel qui a attiré l'attention des recruteurs. Merci !",
    },
    {
        id: 2,
        message: "Les modèles proposés sont élégants et adaptés aux attentes des recruteurs. J'ai reçu plusieurs appels pour des entretiens après avoir utilisé ce service.",
    },
    {
        id: 3,
        message: "Simple, rapide et efficace ! J'ai pu créer un CV qui reflète vraiment mes compétences et mon expérience. Je recommande vivement cette plateforme.",
    },
    {
        id: 4,
        message: "Grâce à cette plateforme, j'ai pu obtenir un entretien dans une entreprise de renom. Le CV que j'ai créé était à la fois professionnel et attrayant.",
    },
    {
        id: 5,
        message: "Je n'avais jamais pensé qu'il serait aussi facile de créer un CV de qualité. Cette plateforme m'a vraiment aidé à me démarquer dans le processus de recrutement.",
    },
]

export function TestimonialCarousel()
{
    const [cards, setCards] = useState(initialTestimonials)
    const [centerElementX, setCenterElementX] = useState(0)
    const [isAnimating, setIsAnimating] = useState(false)
    const [offset, setOffset] = useState(0)
    
    const gapBetweenItems = 60
    const cardWidth = 300
    
    const calculateCenterElementX = useCallback(() => { 
        const wrapper = document.querySelector('.wrapper')
        if(wrapper)
            setCenterElementX(wrapper.offsetWidth / 2 - cardWidth / 2)
    }, [cardWidth])
    
    useEffect(() => {
        calculateCenterElementX()
        window.addEventListener('resize', calculateCenterElementX)
        return () => {
            window.removeEventListener('resize', calculateCenterElementX)
        }
    }, [calculateCenterElementX])
    
    const getPosition = (index) => {
        const centerElementIndex = Math.floor(cards.length / 2)
        const offSet = index - centerElementIndex
        return centerElementX + offSet * (cardWidth + gapBetweenItems) + offset
    }
    
    const handleLeftClick = () => {
        if (isAnimating) return
        setCards(prevCards => {
            const firstElement = prevCards[0]
            return [...prevCards.slice(1), firstElement]
        })
    }
    
    const handleRightClick = () => {
        if (isAnimating) return
        setIsAnimating(true)
        
        // Étape 1 : Animation vers la droite
        setOffset(cardWidth + gapBetweenItems)
        
        // Étape 2 : Après l'animation, réorganiser le tableau sans transition
        setTimeout(() => {
            setCards(prevCards => {
                const lastElement = prevCards[prevCards.length - 1]
                return [lastElement, ...prevCards.slice(0, -1)]
            })
            setOffset(0)
            setIsAnimating(false)
        }, 500) // Correspond à la durée de la transition CSS
    }
    
    return (
        <div className="relative pb-4">
            <div className="wrapper transition-all w-full min-h-[350px] bg-gray/100 overflow-x-clip p-5 gap-x-4 flex items-center justify-start relative">
                {cards.map((card, index) => (
                    <div 
                        className={`absolute carousel-item transition-all ${Math.abs(index - Math.floor(cards.length / 2)) > 3 ? 'opacity-0 pointer-events-none ' : Math.abs(index - Math.floor(cards.length / 2)) > 1 ? 'nearest-cv' : Math.abs(index - Math.floor(cards.length / 2)) > 0 ? 'side-cv' : 'main-cv' }`} 
                        style={{
                            transform: `translateX(${getPosition(index)}px)`, 
                            transition: isAnimating || offset === 0 ? 'transform .5s ease-out' : 'none'
                        }} 
                        key={card.id}
                    >
                        <TestimonialItem message={card.message} />
                    </div>
                ))}
            </div>
            <button 
                onClick={handleLeftClick} 
                disabled={isAnimating}
                className="cursor-pointer z-10 shadow-xs left-4 absolute top-[50%] translate-y-[-50%] disabled:opacity-50"
            >
                <BiChevronLeftCircle className="text-6xl text-(--primary-color)" /> 
            </button>
            <button 
                onClick={handleRightClick} 
                disabled={isAnimating}
                className="cursor-pointer z-10 shadow-xs right-4 absolute translate-y-[-50%] top-[50%] disabled:opacity-50"
            >
                <BiChevronRightCircle className="text-6xl text-(--primary-color)" />
            </button>
            <div className="indicators mx-auto flex items-center justify-center gap-2" style={{width: `${cards.length * (15 + 9)}px`}}>
                {cards.map((card, index) => (
                    <button 
                        key={card.id}
                        className={`size-[15px] rounded-full indicator transition-all duration-300 ${card.id === Math.floor(cards.length / 2) ? 'stretch-ind' : 'normal-ind'}`}
                    >
                </button>
                ))}
            </div>
        </div>
    )
}