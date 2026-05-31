import { FaAndroid, FaApple, FaDesktop, FaLinux, FaPlaystation, FaWindows } from "react-icons/fa";
import { FaXbox } from "react-icons/fa";
import { IconType } from "react-icons";
import { MdPhoneIphone } from "react-icons/md";
import { BsGlobe, BsNintendoSwitch } from "react-icons/bs";
import { Platform } from "./Platform";



interface PlatformIconListProps{
    platforms: Platform[]
}


export default function PlatformIconList({ platforms }: PlatformIconListProps) {
    const iconMap: Record<string, IconType> = {
        pc: FaWindows,
        playstation: FaPlaystation,
        xbox: FaXbox,
        mac: FaApple,
        linux: FaLinux,
        android: FaAndroid,
        ios: MdPhoneIphone,
        web: BsGlobe,
        nintendo: BsNintendoSwitch
    }
    return (
        <div className="flex gap-4">
            {
                platforms.map((pl) => {
                    const Icon = iconMap[pl.slug];
                    if (!Icon) return null;
                    return <Icon key={pl.id} />
                })
            }
        </div>
    )
}