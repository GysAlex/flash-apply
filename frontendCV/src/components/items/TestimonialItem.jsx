import { FaQuoteRight, FaStar } from "react-icons/fa"


export function TestimonialItem({message = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Est, ipsam quaerat? Perspiciatis ullam beatae neque iusto, debitis eos! Dolorem delectus a quia doloribus neque incidunt assumenda ipsa dignissimos, fugit quis exercitationem praesentium quisquam maiores consequatur quibusdam animi? Voluptate eveniet incidunt iste nostrum, quod, cupiditate, a aliquid vel quo reiciendis neque?"
    , author = 'Amina', role = "UI/UX designer", rate = 4})
{
    return (
    <div className="flex flex-col items-stretch justify-start max-w-[300px] bg-white p-4 shadow-lg rounded-xl">
        <div className="rate">
            {
                [0, 0, 0, 0, 0].map((_, index) => (
                    <FaStar key={index} className={`inline ${rate > index ? 'text-yellow-500 mr-1' : 'text-gray-300' }`} />
                ))
            }
        </div>
        <p className="message line-clamp-4 text-(--text-color) mt-4 mb-6">
            {message}
        </p>
        <div className="flex flex-row justify-between items-center">
            <div className="flex flex-col items-start justify-center">
                <span>
                    <strong className="text-(--primary-color)">{author}</strong>
                </span>
                <span className="text-(--text-color)">{role}</span>
            </div>
            <div>
                <FaQuoteRight className="text-3xl text-(--primary-color)" />
            </div>
        </div>
    </div>
    )
}