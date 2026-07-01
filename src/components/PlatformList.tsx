'use client'

import { useRouter, useSearchParams } from "next/navigation";
import { Platform } from "./Platform";

interface PlatformListProps{
    platform: Platform
}


export default function PlatformList({platform}: PlatformListProps) {

    const router = useRouter();
    const searchParams= useSearchParams();     

    const isSelected= searchParams.get('platforms') === String(platform.id);     

    const handleClick = (id: string) => {
        const params= new URLSearchParams(searchParams.toString()); 
        params.set('parent_platform', String(id)); 
        router.push(`/?${params}`); 
    }

    return (
        <li onClick={() => handleClick(String(platform.id))} key={platform.id}><a className={isSelected ? 'badge-soft badge-accent font-semibold text-md' : ''}>{platform.name}</a></li>
    )
}