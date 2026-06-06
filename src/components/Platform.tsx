

import { IoIosArrowDropdown } from "react-icons/io";
import { customFetch } from "../services/customFetch";
import PlatformList from "./PlatformList";

export interface Platform{
    id: number; 
    name: string; 
    slug: string
}


export default async function Platform() {
    let platforms: { results: Platform[] } = { results: [] };
    try {
        const response = await customFetch('platforms/lists/parents', '');
        platforms = await response.json();
    } catch (error) {
        console.error("Error fetching platforms:", error);
    }
    
    return (
        <div className="dropdown dropdown-bottom">
            <div tabIndex={0} role="button" className="btn m-1">Platform <IoIosArrowDropdown fontSize={20} /></div>
            <ul tabIndex={-1} className="dropdown-content menu bg-base-100 rounded-box z-1 w-52  shadow-sm">
                {
                    platforms.results.map((pl: Platform) => <PlatformList platform={pl} key={pl.id} />)

                }
            </ul>
        </div>
    )
}