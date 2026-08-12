"use client";

import { createGameAction } from "@/src/app/game/create/action";
import { initialState } from "@/src/lib/schemas/game";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useActionState, useEffect, useState } from "react";
import { toast } from "react-toastify";

interface Genre {
  id: string;
  imageUrl: string;
  name: string;
}

interface Platform {
  id: string;
  name: string;
}

interface CreateGameContainerProps {
  genres: Genre[];
  platforms: Platform[];
}

export default function CreateGameContainer({
  genres,
  platforms,
}: CreateGameContainerProps) {
  const [state, formAction, isPending] = useActionState(
    createGameAction,
    initialState,
  );
  const router = useRouter();
  useEffect(() => {
    if (state?.success) {
      toast.success(state.message);
      router.push("/");
    }
  }, [state, router]);

  return (
    <div className="w-1/2 mx-auto mt-20">
      <h2 className="text-2xl font-medium ">Create new Game</h2>

      <form className="flex flex-col gap-4" action={formAction}>
        <input
          className="input mt-8"
          type="text"
          name="title"
          placeholder="Game Name"
        />
        {state?.errors?.title && (
          <p className="text-red-500 text-sm mt-1">{state.errors.title[0]}</p>
        )}

        <input
          className="input"
          type="text"
          name="imageUrl"
          placeholder="Game Image URL"
        />
        {state?.errors?.imageUrl && (
          <p className="text-red-500 text-sm mt-1">
            {state.errors.imageUrl[0]}
          </p>
        )}

        <textarea
          className="textarea"
          name="description"
          placeholder="Description"
        ></textarea>
        {state?.errors?.description && (
          <p className="text-red-500 text-sm mt-1">
            {state.errors.description[0]}
          </p>
        )}

        {/* genre */}
        <div>
          <label className="text-sm">Select Genres</label>
          <div className="border border-gray-500 rounded-lg flex flex-wrap gap-3 p-2 ">
            {genres.map((genre) => (
              <label className="flex gap-1" key={genre.id}>
                <input
                  type="checkbox"
                  name="genreIds"
                  value={genre.id}
                  className="checkbox checkbox-primary checkbox-sm"
                />
                <span>{genre.name}</span>
              </label>
            ))}
          </div>
        </div>

        {state?.errors?.genreIds && (
          <p className="text-red-500 text-sm mt-1">
            {state.errors.genreIds[0]}
          </p>
        )}
        <div>
          <label className="text-sm">Select Platforms</label>
          <div className="border border-gray-500 rounded-lg flex flex-wrap gap-3 p-2 ">
            {platforms.map((pl) => (
              <label className="flex gap-1" key={pl.id}>
                <input
                  type="checkbox"
                  name="platformIds"
                  value={pl.id}
                  className="checkbox checkbox-primary checkbox-sm"
                />
                <span>{pl.name}</span>
              </label>
            ))}
          </div>
        </div>

        {state?.errors?.platformIds && (
          <p className="text-red-500 text-sm mt-1">
            {state.errors.platformIds[0]}
          </p>
        )}

        {state?.success && (
          <p className="text-green-400 text-sm mt-1">
            New Game created successfully!
          </p>
        )}

        {!state?.success && (
          <p className="text-red-400 text-sm mt-1">{state?.message}</p>
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
