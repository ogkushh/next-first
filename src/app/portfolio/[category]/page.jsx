import Button from "@/components/Button/Button";
import Image from "next/image";

const Category = ({params}) => {
    return (
        <div>
            <h1 className="text-btn-blue text-5xl">{params.category}</h1>
            <div className="grid grid-cols-2">
                <div
                    className="flex gap-[50px]">
                    <div className="flex-1 flex flex-col gap-5 justify-center">
                        <h1 className="text-5xl">test</h1>
                        <p className="text-2xl">desc</p>
                        <Button url="#">See more</Button>
                    </div>
                </div>
                <div className="flex-1 h-[500px] relative">
                    <Image className="object-cover"
                           src="/contact.png"
                           alt="Contact"
                           fill={true}
                    />
                </div>
            </div>
        </div>
    );
};

export default Category;