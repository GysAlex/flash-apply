import { ToolItem } from "./items/ToolItem"
import { BiBrain } from 'react-icons/bi'
import { LuFileSearch } from 'react-icons/lu';

export function Tools()
{
    const tools = [
        {
            id: 1,
            icon: <BiBrain />,
            color: "#545ADA",
            bgColor: "rgba(28, 42, 85, 0.04)",
            description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates excepturi dolores ipsa porro. Nulla, quae. Eos suscipit odio earum numquam tempora repellendus itaque optio nihil consectetur aliquam in, quam non fugiat? Perferendis fugiat quis, doloribus hic ullam labore totam commodi."  
        },

        {
            id: 2,
            icon: <LuFileSearch />,
            bgColor: "rgba(255, 110, 64, 0.04)",
            color: "var(--secondary-color)",
            description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem corrupti libero quaerat obcaecati ducimus aperiam necessitatibus. Beatae maiores voluptas deleniti veritatis suscipit? Ut totam commodi fuga eos ipsam! Iusto vel, soluta saepe asperiores vitae error?,3"
        }
    ]

    return <div className="">
            <h1 className="text-center text-[24px] text-(--primary-color) sm:text-[28px] lg:text-[30px] font-semibold">
            Nos outils
        </h1>
        <div className="flex items-center justify-between gap-5 flex-wrap mt-9 mb-10">
            {   tools.map((tool) => (
                    <ToolItem 
                        key={tool.id}
                        icon={tool.icon}
                        bgColor={tool.bgColor}
                        color={tool.color}
                        description={tool.description}
                    />
                ))
            }
        </div>
    </div>
}