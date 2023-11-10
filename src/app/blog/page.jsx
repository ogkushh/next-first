import Link from "next/link";
import Image from "next/image";

async function getData() {
    const res = await fetch('http://localhost:3000/api/posts',{cache: 'no-store'})

    if (!res.ok) {
        throw new Error('Failed to fetch data')
    }

    return res.json()
}

const Page = async () => {
    const data = await getData()
    return (
        <div>
            {data.map((item) => (
                <Link
                    href={`blog/${item._id}`}
                    className="flex items-center gap-[50px] mb-5"
                    key={item._id}
                >
                    <div>
                        <Image
                            src={item.img}
                            alt=""
                            width={400}
                            height={250}
                            className="object-cover"
                        />
                    </div>
                    <div>
                        <h1 className="text-2xl mb-5">{item.title}</h1>
                        <p className="text-xl text-gray-400">{item.desc}</p>
                    </div>
                </Link>
            ))}
        </div>
    );
};

export default Page;