

export function FeatureItem({color, icon, title, description})
{
    return <div style={{"--parent-color": color}} className="flex fearture-item m-4 relative flex-col min-[926px]:max-w-[310px] h-[350px] grow items-stretch gap-4 shadow-lg bg-white rounded-xl p-6 hover:scale-105 transition-transform duration-300 ease-in-out">
        <div className="mx-auto"> 
            <div className='size-[60px] text-3xl text-(--parent-color) border border-(--parent-color) rounded-full flex items-center justify-center'>
               {icon} 
            </div>
        </div>
        <h2 className='text-center' >
            <span className="text-(--primary-color) font-semibold text-lg">{title}</span>
        </h2>
        <div className='text-center mx-auto'>
            <p className='text-sm text-(--text-color)'>
                {description}
            </p>
        </div>

    </div>
}