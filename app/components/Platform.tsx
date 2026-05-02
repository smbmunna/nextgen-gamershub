import { IoIosArrowDropdown } from "react-icons/io";
import { getAllData } from "../services/getAllData";


export default async function Platform() {

    const platforms = await getAllData('platforms/lists/parents', '');
    console.log(platforms);

    return (
        <div className="dropdown dropdown-bottom mb-4">
            <div tabIndex={0} role="button" className="btn m-1">Platform <IoIosArrowDropdown fontSize={20} /></div>
            <ul tabIndex="-1" className="dropdown-content menu bg-base-100 rounded-box z-1 w-52  shadow-sm">
                {
                    platforms.results.map(pl => <li key={pl.id}><a>{pl.name}</a></li>)
                }
            </ul>
        </div>
    )
}