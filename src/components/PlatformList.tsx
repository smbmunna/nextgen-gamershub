'use client'

import { useRouter, useSearchParams } from "next/navigation";

export default function PlatformList({platform}) {

    const router = useRouter();
    const searchParams= useSearchParams(); 

    const handleClick = (id: string) => {
        const params= new URLSearchParams(searchParams.toString()); 
        params.set('parent_platform', String(id)); 
        router.push(`/?${params}`); 
    }

    return (
        <li onClick={() => handleClick(platform.id)} key={platform.id}><a>{platform.name}</a></li>
    )
}