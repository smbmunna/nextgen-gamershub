"use client";

import { useRouter, useSearchParams } from "next/navigation";

interface Props {
  genre: {
    id: number;
    name: string;
  };
}

export default function GenreList({ genre }: Props) {
  const router = useRouter();
  const searchParams = useSearchParams();
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
      <a>{genre.name}</a>
    </li>
  );
}
