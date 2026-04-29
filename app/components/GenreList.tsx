'use client'

import { useRouter } from "next/navigation";

interface Props {
    genre: {
        id: number;
        name: string;
    }
}

export default function GenreList({ genre }: Props) {
    const router = useRouter();
    const handleClick = (id: number) => {
        router.push(`/?genres=${id}`);
    }
    return (
        <li onClick={() => handleClick(genre.id)} key={genre.id}><a>{genre.name}</a></li>
    )
}