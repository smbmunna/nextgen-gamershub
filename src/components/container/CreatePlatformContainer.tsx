"use client";

import Link from "next/link";
import { useState } from "react";
import z from "zod";

const schema = z.object({
  name: z.string().min(1, "Platform name required"),
});

export default function CreatePlatformContainer() {
  const [isLoading, setLoading] = useState<boolean>(false);
  const [errorMsg, setErrorMgs] = useState<string>("");
  const [successMsg, setSuccessMsg] = useState<string>("");

  const handleSubmit = async (
    e: React.SyntheticEvent<HTMLFormElement, SubmitEvent>,
  ) => {
    e.preventDefault();
    setLoading(true);
    setSuccessMsg("");
    setErrorMgs("");
    const form = e.currentTarget;
    const formData = new FormData(e.currentTarget);
    const platformData = Object.fromEntries(formData.entries());

    //zod validation
    const validationResult = schema.safeParse(platformData);
    if (!validationResult.success) {
      setErrorMgs(validationResult.error.issues[0].message);
      setLoading(false);
      return;
    }

    //Post request
    try {
      const response = await fetch("http://localhost:3000/platforms", {
        method: "POST",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify(platformData),
      });
      if (!response.ok) {
        throw new Error("Error creating new platform");
      } else {
        setSuccessMsg("Successfully created new Platform");
        form.reset();
      }
    } catch (e) {
      const error = e as Error;
      console.log(error);
    } finally {
      setLoading(false);
    }
  };
  return (
    <div className="w-1/2 mx-auto mt-20">
      <h2 className="text-center text-2xl font-medium ">Create New Platform</h2>

      <form onSubmit={handleSubmit} className="flex flex-col gap-4 mt-8">
        <input
          type="text"
          name="name"
          placeholder="Platform Name"
          className="input mx-auto "
        />
        {errorMsg && (
          <p className="text-red-500 text-xs text-center">{errorMsg}</p>
        )}
        {successMsg && (
          <p className="text-green-400 text-xs text-center">{successMsg}</p>
        )}
        <button disabled={isLoading} className="btn btn-success w-20 mx-auto ">
          {isLoading ? "Saving..." : "submit"}
        </button>
        <Link className="text-gray-500 mx-auto mt-10 underline" href="/">
          Back to Home
        </Link>
      </form>
    </div>
  );
}
