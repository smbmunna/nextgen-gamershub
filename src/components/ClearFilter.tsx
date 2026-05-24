'use client'
import { useRouter, useSearchParams } from "next/navigation";


export default function ClearFilter(){
    const router= useRouter(); 

    const searchParams= useSearchParams();
    const hasParams= searchParams.toString() !== ''; 

    if(!hasParams) return null; 
    
    const handleClick=()=>{
        router.push('/')
    }

    return (
        <div>
            <button
             onClick={()=> handleClick()}   
             className="btn px-2 bg-blue-600 h-10 text-[15px]">Clear All Filters</button>
        </div>
    )
}