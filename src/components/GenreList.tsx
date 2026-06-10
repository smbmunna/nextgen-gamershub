"use client";

import { useRouter, useSearchParams } from "next/navigation";
import { Genre } from "./GameCard";

interface Props {
  genre: Genre;
}

export default function GenreList({ genre }: Props) {
  const router = useRouter();
  const searchParams = useSearchParams();

  const isSelected = searchParams.get("genres") === String(genre.id);
  console.log(isSelected);

  const handleClick = (id: number) => {
    const params = new URLSearchParams(searchParams.toString());

    params.set("genres", String(id));
    router.push(`/?${params.toString()}`);
  };
  return (
    <li
      
      onClick={() => {
        handleClick(genre.id);
      }}
      key={genre.id}
    >
      <a className={isSelected ? 'badge-soft badge-accent font-semibold text-md' : ''}>{genre.name}</a>
    </li>
  );
}
