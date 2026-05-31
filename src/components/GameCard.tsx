import Image from "next/image";
import PlatformIconList from "./PlatformIconList";

interface Platform {
  id: number;
  name: string;
  slug: string;
}


interface Genre {
    id: number;
    name: string;
}

export interface Game {
  id: string;
  name: string;
  background_image: string;
  metacritic: number | null;
  parent_platforms: Platform[];
  genres: Genre[];
}

interface Props {
    game: Game
}

export default function GameCard({ game }: Props) {
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
        <h2 className="card-title">{name}</h2>
        <div className="card-actions justify-between flex flex-col">
          <div className="flex justify-between w-full">
            <div className="">
              <PlatformIconList platforms={parent_platforms} />
            </div>
            {metacritic ? (
              <div
                className={`badge badge-soft badge-${metacritic >= 90 ? "primary" : "secondary"}`}
              >
                {metacritic}
              </div>
            ) : (
              <div className="badge badge-soft">N/A</div>
            )}
          </div>
          <div className="flex gap-2">
            {game.genres.map((genre) => (
              <p className="bg-gray-700 px-2 py-1 rounded-xl" key={genre.id}>
                {genre.name}
              </p>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
