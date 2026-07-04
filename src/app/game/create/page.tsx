"use client";

import { getData } from "@/src/services/getData";
import { useActionState, useEffect, useState } from "react";
import { createGame } from "./action";
import Link from "next/link";

interface data {
  id: string;
  name: string;
}

export default function NewGame() {
  const [genres, setGenres] = useState<data[]>([]);
  const [platforms, setPlatforms] = useState<data[]>([]);
  const [state, formAction, isPending] = useActionState(createGame, null);

  //Fetching genres and platforms
  useEffect(() => {
    const fetchGenres = async () => {
      try {
        const [genresData, platformsData] = await Promise.all([
          getData("genres"),
          getData("platforms"),
        ]);
        setGenres(genresData);
        setPlatforms(platformsData);
      } catch (err) {
        throw new Error("Error fetching Genres");
      }
    };
    fetchGenres();
  }, []);

  return (
    <div className="w-1/2 mx-auto mt-20">
      <h2 className="text-center text-2xl font-medium ">Create new Game</h2>

      <form className="flex flex-col gap-4" action={formAction}>
        <input
          className="input mt-8"
          type="text"
          name="name"
          placeholder="Game Name"
        />
        {state?.errors?.name && (
          <p className="text-red-500 text-sm mt-1">{state.errors.name[0]}</p>
        )}

        <select
          defaultValue="Select a Genre"
          name="genre"
          className="w-1/3 select"
        >
          <option disabled={true}>Select a Genre</option>
          {genres.map((genre) => (
            <option key={genre.id} value={genre.id}>
              {genre.name}
            </option>
          ))}
        </select>
        {state?.errors?.genre && (
          <p className="text-red-500 text-sm mt-1">{state.errors.genre[0]}</p>
        )}

        <select
          defaultValue="Select a Platform"
          name="platform"
          className="w-1/3 select"
        >
          <option disabled={true}>Select a Platform</option>
          {platforms.map((pl) => (
            <option key={pl.id} value={pl.id}>
              {pl.name}
            </option>
          ))}
        </select>
        {state?.errors?.platform && (
          <p className="text-red-500 text-sm mt-1">
            {state.errors.platform[0]}
          </p>
        )}

        {state?.success && (
          <p className="text-green-400 text-sm mt-1">
            New Game created successfully!
          </p>
        )}

        <button className="btn btn-success w-20">
          {isPending ? "Saving..." : "Submit"}
        </button>
        <Link className="text-gray-500 mx-auto mt-10 underline" href="/">
          Back to Home
        </Link>
      </form>
    </div>
  );
}
