"use client";

import z from "zod";
import { useEffect, useState } from "react";
import { STATUS_CODE } from "@/src/utils";
import Link from "next/link";
import { getData } from "@/src/services/getData";

const schema = z.object({
  name: z.string().trim().min(1, "Genre name cannot be empty!"),
  image_url: z.string().optional(),
});

interface PropsInterface {
  username: string;
}

interface Genre {
  id: number;
  name: string;
  image_url: string;
  createdAt: string;
}

const CreateGenreContainer = (props: PropsInterface) => {
  const [isLoading, setLoading] = useState(false);
  const [errorMsg, setErrorMsg] = useState<string>("");
  const [successMsg, setSuccessMsg] = useState<string>("");

  const [genres, setGenres] = useState<Genre[]>([]);
  const [genreLoading, setGenreLoading] = useState(false);

  const fetchGenres = async () => {
    setGenreLoading(true);
    try {
      const genres = await getData("genres");
      setGenres(genres);
    } catch (err) {
      console.log(err);
    } finally {
      setGenreLoading(false);
    }
  };

  useEffect(()=>{
    fetchGenres(); 
  },[])

  const handleSubmit = async (
    e: React.SyntheticEvent<HTMLFormElement, SubmitEvent>,
  ) => {
    e.preventDefault();
    const form = e.currentTarget;
    setLoading(true);
    setErrorMsg("");
    setSuccessMsg("");
    const formData = new FormData(e.currentTarget);
    const genreData = Object.fromEntries(formData.entries());

    const result = schema.safeParse(genreData);
    if (!result.success) {
      setErrorMsg(result.error.issues[0].message);

      setLoading(false);
      return;
    }
    try {
      const response = await fetch("http://localhost:5000/api/genres", {
        method: "POST",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify(genreData),
      });
      //const result = await response.json();

      if (response.status === STATUS_CODE.HTTP_201_CREATED) {
        setSuccessMsg("Genre created successfully!");
        form.reset();
        fetchGenres();
      } else {
        setErrorMsg("Failed to create Genre!");
      }
    } catch (e) {
      const error = e as Error;
    } finally {
      setLoading(false);
    }
  };
  return (
    <main className="grid md:grid-cols-2">
      <div className=" mt-20">
        <h2 className="text-center text-2xl font-medium ">Create New Genre</h2>

        <form onSubmit={handleSubmit} className="flex flex-col gap-4 mt-8">
          <input
            type="text"
            placeholder="Genre Name"
            name="name"
            className="input mx-auto  border-gray-400"
          />
          {errorMsg && (
            <p className="text-red-500 text-xs text-center">{errorMsg}</p>
          )}
          {successMsg && (
            <p className="text-green-400 text-xs text-center">{successMsg}</p>
          )}

          <input
            type="text"
            placeholder="Image URL"
            name="image_url"
            className="input mx-auto  border-gray-400"
          />

          <button
            disabled={isLoading}
            className="btn btn-success w-20 mx-auto "
          >
            {isLoading ? "Saving..." : "submit"}
          </button>
          <Link className="text-gray-500 mx-auto mt-10 underline" href="/">
            Back to Home
          </Link>
        </form>
      </div>
      {/* table section*/}
      <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th>Genre</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {genreLoading && genres.length===0 && (
              <tr>
                <td colSpan={2} className="text-center py-6">
                  No genres yet! Create one. 
                </td>
              </tr>
            )}
            {genres.map((genre) => (
              <tr key={genre.id}>
                <td>
                  <div className="flex items-center gap-3">
                    <div className="avatar">
                      <div className="mask mask-squircle h-12 w-12">
                        <img
                          src={
                            genre.image_url
                              ? genre.image_url
                              : "https://placehold.co/400?text=No+Image"
                          }
                          alt="Genre Image"
                        />
                      </div>
                    </div>
                    <div>
                      <div className="font-bold">{genre.name}</div>
                    </div>
                  </div>
                </td>
                <th>
                  <button className="btn btn-ghost btn-xs">Delete</button>
                </th>
              </tr>
            ))}
          </tbody>
          {/* foot */}
        </table>
      </div>
    </main>
  );
};

export default CreateGenreContainer;
