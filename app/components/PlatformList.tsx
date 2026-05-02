'use client'

import { useRouter } from "next/navigation";

export default function PlatformList({platform}) {

    const router = useRouter();

    const handleClick = (id: string) => {
        router.push(`/?parent_platform=${id}`)
    }

    return (
        <li onClick={() => handleClick(platform.id)} key={platform.id}><a>{platform.name}</a></li>
    )
}