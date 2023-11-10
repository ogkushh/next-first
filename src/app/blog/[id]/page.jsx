import Image from "next/image";

async function getData(id) {
    const res = await fetch(`http://localhost:3000/api/posts/${id}`,{cache: 'no-store'})

    if (!res.ok) {
        throw new Error('Failed to fetch data')
    }

    return res.json()
}
const BlogId = async ({params}) => {
    const data = await getData(params.id)
    return (
        <div>
            <div className="flex">
                <div className="flex-1 flex flex-col justify-between">
                    <h1 className="text-3xl">{data.title}</h1>
                    <p className="text-xl">{data.desc}</p>
                    <div className="flex items-center gap-2.5">
                        <Image
                            src={data.img}
                            alt=""
                            width={40}
                            height={40}
                            className="object-cover rounded-[50%]"
                        />
                        <span>{data.username}</span>
                    </div>
                </div>
                <div className="flex-1 h-[300px] relative">
                    <Image src={data.img} alt="" fill={true} className="object-cover" />
                </div>
            </div>
            <div className="mt-5 text-2xl text-gray-400 text-justify">
                <p>{data.content}</p>
            </div>
        </div>
    );
};

export default BlogId;