import Button from "@/components/Button/Button";
import Hero from "/public/hero.png"
import Image from "next/image";

export default function Home() {
    return (
        <main className="flex items-center gap-[100px]">
            <div className="flex flex-col gap-[50px] flex-1 text-blue-400">
                <h1 className="text-7xl ">
                    The Future of AI in the next few years
                </h1>
                <p>
                    Turning your Idea into Reality. We bring together the teams from the
                    global tech industry.
                </p>
                <Button url={'/portfolio'}>See our Works</Button>
            </div>
            <div className="flex flex-col gap-[50px] flex-1 text-blue-400">
                <Image src={Hero} alt="Main Hero" className="w-full h-[500px] object-contain animate-anim-img"/>
            </div>
        </main>
    )
}
