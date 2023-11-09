import Image from "next/image";
import Button from "@/components/Button/Button";

const Page = () => {
    return (
        <div>
            <h1 className="text-5xl font-bold mb-[100px] text-center">Lets Keep In Touch</h1>
            <div className="flex items-center gap-[100px]">
                <div className="flex-1 h-[500px] relative">
                    <Image src="/contact.png" alt="Contact" fill={true} className="object-contain animate-anim-img"/>
                </div>
                <form action="" className="flex flex-1 flex-col gap-5">
                    <input type="text" placeholder="name"
                           className="p-5 bg-transparent outline-none text-bbb border-solid border-4 border-bbb text-xl font-bold"/>
                    <input type="text" placeholder="email"
                           className="p-5 bg-transparent outline-none text-bbb border-solid border-4 border-bbb text-xl font-bold"/>
                    <textarea className="p-5 bg-transparent outline-none text-bbb border-solid border-4 border-bbb text-xl font-bold"
                        placeholder="message"
                        cols="30"
                        rows="10"
                    >
                    </textarea>
                    <div className="self-end">
                        <Button url="#">Send</Button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Page;