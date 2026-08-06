import Image from "next/image";
import PlatformIconList from "./PlatformIconList";

export interface Platform {
  id: number;
  name: string;
  slug: string;
}


export interface Genre {
    id: number;
    name: string;
}

export interface Game {
  id: string;
  title: string;
  imageUrl: string;
  platforms: string[]; 
  genres: number []
}

interface Props {
    game: Game
}

export default function GameCard({ game }: Props) {
  const { title, imageUrl, platforms, genres } = game;
  return (
    <div className="card shadow-sm flex flex-col h-full border border-gray-600">
      <Image
        //src={background_image}
        src={imageUrl || '/images/placeholder.jpg'}
        width={200}
        height={150}
        alt="game"
        placeholder="empty"
        className="mx-auto bg-base-300 mt-8"
      />
      <div className="card-body flex flex-col justify-end mt-auto">
        <h2 className="card-title ">{title}</h2>
        <div className="card-actions justify-between flex flex-col">
          <div className="flex justify-between w-full">
            <div className="">
              {/* <PlatformIconList platforms={platforms} /> */}
            </div>
            {/* {metacritic ? (
              <div
                className={`badge badge-soft badge-${metacritic >= 90 ? "primary" : "secondary"}`}
              >
                {metacritic}
              </div>
            ) : (
              <div className="badge badge-soft">N/A</div>
            )} */}
          </div>
          {/* <div className="flex gap-2">
            {genres?<p></p>: 
            genres.map((genre) => (
              <p className="bg-green-300 px-2 py-1 rounded-xl" key={genre.id}>
                {genre.name}
              </p>
            ))}
          </div> */}
        </div>
      </div>
    </div>
  );
}
