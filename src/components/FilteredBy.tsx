"use client";
import { useSearchParams } from "next/navigation";


interface FilteredByProps {
  genreName: string;
  platformName: string;
  searchText?:string; 
}

export default function FilteredBy({
  genreName,
  platformName,
  searchText
}: FilteredByProps) {
  if (!genreName && !platformName && !searchText) return null;

  // const searchParams = useSearchParams();
  // const paramsArray = Array.from(searchParams.entries());
  // const hasParams = searchParams.toString() !== "";

  // if (!hasParams) return null;

  // const formatKey= (key: string)=>{
  //   if(key==='parent_platform') return 'Platform';
  //   if(key==='genres') return 'Genre'
  // }

  return (
    <div className=" text-black p-2 flex gap-2 items-center">
      <span className="text-white bg-gray-700 px-2">Filtered By:</span>
      {/* {
        paramsArray.map(([key, value])=>(
            <div className="bg-green-200 text-black p-1" key={key}>{formatKey(key)}: {value}</div>
        ))
      } */}
      {genreName && (
        <div className="bg-green-200 text-black p-1">Genre: {genreName}</div>
      )}
      {platformName && (
        <div className="bg-green-200 text-black p-1">
          Platform: {platformName}
        </div>
      )}
      {searchText && (
        <div className="bg-green-200 text-black p-1">
          Search: {searchText}
        </div>
      )}
    </div>
  );
}
