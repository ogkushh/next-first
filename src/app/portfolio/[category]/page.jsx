import Button from "@/components/Button/Button";
import Image from "next/image";
import {items} from "@/app/portfolio/[category]/data";
import {notFound} from "next/navigation";

const getDate = (cat) => {
    const data = items[cat]
    if (data)
        return data
    else
        return notFound()
}

const Category = ({params}) => {
    const data = getDate(params.category)
    return (
        <div>
            <h1 className="text-btn-blue text-5xl">{params.category}</h1>
            {
                data.map((item) => (
                    <div className="grid grid-cols-2" key={item.id}>
                        <div
                            className="flex gap-[50px]">
                            <div className="flex-1 flex flex-col gap-5 justify-center">
                                <h1 className="text-5xl">{item.title}</h1>
                                <p className="text-2xl">{item.desc}</p>
                                <Button url="#">See more</Button>
                            </div>
                        </div>
                    </div>
                ))
            }
        </div>
    );
};

export default Category;