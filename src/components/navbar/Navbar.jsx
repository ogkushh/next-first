"use client"
import Link from "next/link";
import Button from "@/components/Button/Button";
import DarkMode from "@/components/DarkMode/DarkMode";
const Navbar = () => {
    const links = [
        {
            id: 1,
            title: "Home",
            url: "/",
        },
        {
            id: 2,
            title: "Portfolio",
            url: "/portfolio",
        },
        {
            id: 3,
            title: "Blog",
            url: "/blog",
        },
        {
            id: 4,
            title: "About",
            url: "/about",
        },
        {
            id: 5,
            title: "Contact",
            url: "/contact",
        },
        {
            id: 6,
            title: "Dashboard",
            url: "/dashboard",
        },
    ];
    return (
        <nav className="h-[100px] flex justify-between items-center">
            <Link href='/' className="font-bold text-2xl">MyApp</Link>
            <div className="flex items-center gap-5">
                <DarkMode/>
                {links.map((link) => (
                        <Link
                            key={link.id}
                            href={link.url}
                        >
                            {link.title}
                        </Link>
                    ))}
                <Button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                    onClick={() => console.log('Logout')}
                    url={'/'}
                >Logout</Button>
            </div>
        </nav>
    );
};
export default Navbar;