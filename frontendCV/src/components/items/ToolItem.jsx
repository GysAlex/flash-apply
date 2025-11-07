export function ToolItem({color, icon, description, bgColor})
{
    return <div style={{"--parent-color": color, backgroundColor: bgColor}} className="flex  tool-item relative flex-col min-h-[300px] lg:w-[45%] items-stretch gap-4 rounded-xl p-6 m-4 hover:scale-105 transition-transform duration-300 ease-in-out">
        <div className="mx-auto"> 
            <div className='size-[100px] text-5xl text-(--parent-color) border border-(--parent-color) rounded-full flex items-center justify-center'>
                {icon}
            </div>
        </div>
        <div className='text-center mx-auto'>
            <p className='text-sm text-(--text-color)'>
                {description}
            </p>
        </div>
    </div>
}