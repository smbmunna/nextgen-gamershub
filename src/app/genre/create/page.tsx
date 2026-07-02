"use client";

import z from "zod";
import Link from "next/link";
import { useState } from "react";

const schema = z.object({
  name: z.string().trim().min(1, "Genre name cannot be empty!"),
});

export default function NewGame() {
  const [isLoading, setLoading] = useState(false);
  const [errorMsg, setErrorMsg] = useState<string>("");
  const [successMsg, setSuccessMsg] = useState<string>("");

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
      const response = await fetch("http://localhost:3000/genres", {
        method: "POST",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify(genreData),
      });
      if (!response.ok) {
        throw new Error("Failed to create genre");
      } else {
        setSuccessMsg("Genre created successfully!");
      }

      form.reset();
    } catch (e) {
      const error = e as Error;
      console.log(error.message);
    } finally {
      setLoading(false);
    }
  };
  return (
    <main className="">
      <div className="w-1/2 mx-auto mt-20">
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
    </main>
  );
}
