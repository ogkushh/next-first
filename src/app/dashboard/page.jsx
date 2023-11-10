"use client"
import {useEffect, useState} from "react";
import useSWR from "swr";

const Page = () => {
    // const [data, setData] = useState([])
    // const [error, setError] = useState(false)
    // const [isLoading, setIsLoading] = useState(true)


    // useEffect(() => {
    //     const getdate = async () => {
    //         const res = await fetch('https://jsonplaceholder.typicode.com/posts',{cache: 'no-store'})
    //
    //         if (!res.ok) {
    //             setError(true)
    //         }
    //         const data = await res.json()
    //         setData(data)
    //         setIsLoading(false)
    //     }
    //     getdate()
    // }, []);
    //
    // console.log(data)

    const fetcher = (...args) => fetch(...args).then(res => res.json())
    const { data, error, isLoading } = useSWR('https://jsonplaceholder.typicode.com/posts', fetcher)
    console.log(data)

    return (
        <div>
            Dashboard
        </div>
    );
};

export default Page;