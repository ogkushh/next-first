import Image from "next/image";
import Button from "@/components/Button/Button";

const Page = () => {
    return (<div>
        <div className="w-full h-[300px] relative">
            <Image
                className="object-cover "
                src='https://img.freepik.com/free-photo/paper-people-chain-on-green-grass-unity-concept_632805-35.jpg?w=1380&t=st=1685890833~exp=1685891433~hmac=46f15c2161ca525e238313ec9dc0812864411c64035b664d7abecd75e33494e1'
                alt="About us"
                fill={true}
            />
            <div className="absolute bottom-5 left-5 bg-btn p-2.5">
                <h1 className="">Lorem ipsum dolor sit amet, consectetur.</h1>
                <h2>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias aperiam consequuntur cupiditate
                    dolorem dolorum, fugit inventore iste labore laborum numquam odit possimus quidem recusandae,
                    repudiandae soluta. Alias assumenda atque ratione!</h2>
            </div>
        </div>
        <div className="flex gap-[100px]">
            <div className="flex-1 mt-[50px] flex flex-col gap-[30px]">
                <h1 className="text-4xl font-bold">Who are we?</h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias asperiores atque et iusto minus odit
                    sed, voluptatem? Eius necessitatibus neque quos voluptates. A dolor, dolorem illo odio quasi vitae
                    voluptatem?Lorem ipsum dolor sit amet, consectetur adipisicing elit. Architecto blanditiis,
                    consequatur doloremque esse explicabo harum in ipsam nisi obcaecati quaerat quasi, quidem rem
                    reprehenderit sapiente sequi soluta sunt, vero voluptatibus.
                    <br/>
                    <br/>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci at, doloribus fugit, id nisi
                    nobis porro ratione sint sit, tempore temporibus voluptate. Consectetur, corporis, provident!
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. A aliquam aliquid architecto corporis cum
                    et eveniet ex excepturi magni minus modi, mollitia neque non nostrum numquam omnis recusandae rerum
                    sint voluptas voluptatibus. Delectus deserunt dolore esse, facere ipsam nemo, nihil nostrum optio
                    perferendis quas qui quidem soluta totam veritatis, vitae?
                </p>
            </div>
            <div className="flex-1 mt-[50px] flex flex-col gap-[30px]">
                <h1 className="text-4xl font-bold">Who are we?</h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias asperiores atque et iusto minus odit
                    sed, voluptatem? Eius necessitatibus neque quos voluptates. A dolor, dolorem illo odio quasi vitae
                    voluptatem?Lorem ipsum dolor sit amet, consectetur adipisicing elit. Architecto blanditiis,
                    consequatur doloremque esse explicabo harum in ipsam nisi obcaecati quaerat quasi, quidem rem
                    reprehenderit sapiente sequi soluta sunt, vero voluptatibus.
                    <br/>
                    <br/>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci at, doloribus fugit, id nisi
                    nobis porro ratione sint sit, tempore temporibus voluptate. Consectetur, corporis, provident!
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. A aliquam aliquid architecto corporis cum
                    et eveniet ex excepturi magni minus modi, mollitia neque non nostrum numquam omnis recusandae rerum
                    sint voluptas voluptatibus. Delectus deserunt dolore esse, facere ipsam nemo, nihil nostrum optio
                    perferendis quas qui quidem soluta totam veritatis, vitae?
                </p>
                <div className="self-end">
                    <Button url="/contact">Contact</Button>
                </div>
            </div>
        </div>
    </div>);
};

export default Page;