import Image from "next/image";
const Footer = () => {
    return (
        <footer className="h-[50px] text-sm flex items-center justify-between">
            <div>2023 MyApp. All rights reserved</div>
            <div className="flex items-center gap-2.5">
                <Image src="/vk.png" width={18} height={18} alt="vk.com" className="opacity-80 cursor-pointer"/>
                <Image src="/inst.png" width={18} height={18} alt="instagram.com" className="opacity-80 cursor-pointer"/>
                <Image src="/twitter.png" width={18} height={18} alt="twitter.com" className="opacity-80 cursor-pointer"/>
                <Image src="/yt.png" width={18} height={18} alt="youtube.com" className="opacity-80 cursor-pointer"/>
            </div>
        </footer>
    );
};

export default Footer;