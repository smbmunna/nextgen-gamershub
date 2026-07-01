"use client";
import Navbar from "@/src/components/Navbar";

export default function NewGame() {
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("form submitted");
  };
  return (
    <main className="">
      <div className="w-1/2 mx-auto mt-20">
        <h2 className="text-center text-2xl font-medium ">Create New game</h2>

        <form onSubmit={handleSubmit} className="flex flex-col gap-4 mt-8">
          <input type="text" placeholder="Genre Name" className="input mx-auto  border-gray-400" />          
          <button className="btn btn-success w-20 mx-auto ">Submit</button>
        </form>
      </div>
    </main>
  );
}
