import { IoIosArrowDropdown } from "react-icons/io";
import PlatformList from "./PlatformList";
import { getData } from "../services/getData";

export interface Platform {
  id: number;
  name: string;
  image_url: string;
  createdAt: string;
}

export default async function Platform() {
  //const platforms = await ('platforms/lists/parents', '');
  const platforms = await getData("platforms");
  return (
    <div className="dropdown dropdown-bottom">
      <div tabIndex={0} role="button" className="btn m-1">
        Platform <IoIosArrowDropdown fontSize={20} />
      </div>
      <ul
        tabIndex={-1}
        className="dropdown-content menu bg-base-100 rounded-box z-1 w-52  shadow-sm"
      >
        {platforms.map((pl: Platform) => (
          <PlatformList platform={pl} key={pl.id} />
        ))}
      </ul>
    </div>
  );
}
