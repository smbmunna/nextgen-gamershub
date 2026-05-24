import Image from "next/image";
import PlatformIconList from "./PlatformIconList";


export default function GameCard({ game }) {
    const { id, name, background_image, metacritic, parent_platforms } = game;
    return (
        <div className="card bg-base-100 shadow-sm flex flex-col h-full">
            <Image
                src={background_image}
                width={250}
                height={150}
                alt="game"
                placeholder="empty"
                className="w-full h-auto mx-auto bg-base-300"
            />
            <div className="card-body flex flex-col justify-end mt-auto">
                <h2 className="card-title">
                    {name}
                </h2>
                <div className="card-actions justify-between">
                    <div><PlatformIconList platforms={parent_platforms} /></div>
                    <div className={`badge badge-soft badge-${metacritic >= 90 ? 'primary' : 'secondary'}`}>{metacritic}</div>
                </div>
            </div>
        </div>
    )
}