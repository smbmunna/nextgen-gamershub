"use client";
import { useSearchParams } from "next/navigation";
import { getGenreName } from "../services/getGenreName";

export default function FilteredBy() {
  const searchParams = useSearchParams();
  const paramsArray = Array.from(searchParams.entries());
  const hasParams = searchParams.toString() !== "";

  if (!hasParams) return null;

  const formatKey= (key: string)=>{
    if(key==='parent_platform') return 'Platform'; 
    if(key==='genres') return 'Genre'
  }

  
  return (
    <div className=" text-black p-2 flex gap-2 items-center">
      <span className="text-white bg-gray-700 px-2">Filtered By:</span>
      {
        paramsArray.map(([key, value])=>(
            <div className="bg-green-200 text-black p-1" key={key}>{formatKey(key)}: {value}</div>
        ))
      }
    </div>
  );
}
