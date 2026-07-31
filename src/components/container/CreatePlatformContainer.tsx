"use client";

import { getData } from "@/src/services/getData";
import { STATUS_CODE } from "@/src/utils";
import Link from "next/link";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import z from "zod";

const schema = z.object({
  name: z.string().min(1, "Platform name required"),
});

interface Platform {
  id: number;
  name: string;
  createdAt: string;
}

export default function CreatePlatformContainer() {
  const [isLoading, setLoading] = useState<boolean>(false);
  const [errorMsg, setErrorMgs] = useState<string>("");
  const [successMsg, setSuccessMsg] = useState<string>("");

  const [platforms, setPlatforms] = useState<Platform[]>([]);
  const [platformLoading, setPlatformLoading] = useState(false);

  const fetchPlatforms = async () => {
    setPlatformLoading(true);
    try {
      const platforms = await getData("platforms");
      setPlatforms(platforms);
    } catch (err) {
      console.log(err);
    } finally {
      setPlatformLoading(false);
    }
  };

  useEffect(() => {
    fetchPlatforms();
  }, []);

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
      const response = await fetch("http://localhost:5000/api/platforms", {
        method: "POST",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify(platformData),
      });
      if (response.status === STATUS_CODE.HTTP_201_CREATED) {
        setSuccessMsg("Successfully created new Platform");
        toast.success("Successfully created new Platform");
        form.reset();
        fetchPlatforms();
      } else {
        throw new Error("Error creating new platform");
      }
    } catch (e) {
      const error = e as Error;
      console.log(error);
    } finally {
      setLoading(false);
    }
  };
  return (
    <div className="grid md:grid-cols-2">
      <div className="w-1/2 mx-auto mt-20">
        <h2 className="text-center text-2xl font-medium ">
          Create New Platform
        </h2>

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

      {/* Platform Grid */}
      <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th>Platform Name</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {/* row 1 */}
            {platformLoading && platforms.length === 0 && (
              <tr>
                <td>No platforms yet! Create One...</td>
              </tr>
            )}

            {platforms.map((pl) => (
              <tr key={pl.id}>
                <td>
                  <div className="flex items-center gap-3">
                    <div>
                      <div className="font-bold">{pl.name}</div>
                    </div>
                  </div>
                </td>
                <th>
                  <button className="btn btn-error btn-xs">Delete</button>
                </th>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
