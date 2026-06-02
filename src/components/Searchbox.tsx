"use client";

import { useRouter, useSearchParams } from "next/navigation";

import { useState } from "react";

export default function SearchBox() {
  const router = useRouter();
  const searchParams = useSearchParams();

  const [query, setQuery] = useState("");

  const handleSearch = (e) => {
    e.preventDefault();
    const params = new URLSearchParams(searchParams.toString());
    if (query.trim()) {
      params.set("search", query.trim());
    } else {
      params.delete("search");
    }
    router.push(`/?${params.toString()}`); 
  };

  return (
    <form
      onSubmit={handleSearch}
      className="w-full max-w-md flex gap-4 items-center"
    >
      <input
        type="text"
        name="searchbox"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Search games..."
        className="w-full px-4 py-2 bg-gray-800 text-white rounded-md border border-gray-700 focus:outline-none focus:border-green-400"
      />
      <button className="btn btn-soft btn-success">Search</button>
    </form>
  );
}
