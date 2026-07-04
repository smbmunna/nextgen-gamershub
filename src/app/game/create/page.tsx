"use client";

import { getData } from "@/src/services/getData";
import { useEffect, useState } from "react";
import { createGame } from "./action";
interface data {
  id: string;
  name: string;
}
export default function NewGame() {
  const [genres, setGenres] = useState<data[]>([]);
  const [platforms, setPlatforms] = useState<data[]>([]);
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
  //handle form submission
  const handleSubmit = (
    e: React.SyntheticEvent<HTMLFormElement, SubmitEvent>,
  ) => {
    e.preventDefault();
  };

  return (
    <div className="w-1/2 mx-auto mt-20">
      <h2 className="text-center text-2xl font-medium ">Create new Game</h2>

      <form className="flex flex-col gap-4" action={createGame}>
        <input
          className="input mt-8"
          type="text"
          name="name"
          placeholder="Game Name"
        />
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

        <button className="btn btn-success w-20">Submit</button>
      </form>
    </div>
  );
}
