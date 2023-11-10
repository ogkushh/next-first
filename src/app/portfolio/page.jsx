import Link from "next/link";

const Page = () => {
    return (
        <div>
            <h1 className="text-5xl mb-5">Choose a gallery</h1>
            <div className="grid grid-cols-3">
                <Link className=" group border-solid border-4 border-bbb rounded w-[300px] h-[400px] relative bg-cover bg-img-port1" href="portfolio/illustration">
                    <span className="absolute right-10 bottom-10 text-4xl font-bold group-hover:text-btn-blue">Illustration</span>
                </Link>
                <Link className=" group border-solid border-4 border-bbb rounded w-[300px] h-[400px] relative bg-cover bg-img-port2" href="portfolio/websites">
                    <span className="absolute right-10 bottom-10 text-4xl font-bold group-hover:text-btn-blue">Websites</span>
                </Link>
                <Link className=" group border-solid border-4 border-bbb rounded w-[300px] h-[400px] relative bg-cover bg-img-port3" href="portfolio/application">
                    <span className="absolute right-10 bottom-10 text-4xl font-bold group-hover:text-btn-blue">Application</span>
                </Link>
            </div>
        </div>
    );
};

export default Page;