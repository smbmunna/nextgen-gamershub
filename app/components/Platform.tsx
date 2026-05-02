import { IoIosArrowDropdown } from "react-icons/io";


export default function Platform() {

    return (
        <div className="dropdown dropdown-bottom mb-4">
            <div tabIndex={0} role="button" className="btn m-1">Platform <IoIosArrowDropdown fontSize={20}/></div>
            <ul tabIndex="-1" className="dropdown-content menu bg-base-100 rounded-box z-1 w-52  shadow-sm">
                <li><a>Item 1</a></li>
                <li><a>Item 2</a></li>
            </ul>
        </div>
    )
}