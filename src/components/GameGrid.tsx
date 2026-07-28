import GameCard, { Game } from "./GameCard";
import Platform from "./Platform";
import ClearFilter from "./ClearFilter";
import FilteredBy from "./FilteredBy";
import { getData } from "../services/getData";

interface GameGridProps {
  genreId: string;
  platformId: string;
  searchText?: string;
}

export default async function GameGrid({
  genreId,
  platformId,
  searchText,
}: GameGridProps) {
  const params = new URLSearchParams();
  if (genreId) params.append("genres", genreId);
  if (platformId) params.append("parent_platforms", platformId);
  //if (searchText) params.append("search", searchText);
  if (searchText) params.append("q", searchText); // change search to 'q' for json-server version json-server@0.17.4

  const games = await getData("games");

  let activeGenreName = "";
  let activePlatformName = "";

  if (genreId) {
    const data = await getData('genres');
    activeGenreName = data?.name || "";
  }

  if (platformId) {
    const data = await getData('platforms');
    // console.log(data);
    const matchedPlatform = data.find((pl: any) => pl.id == platformId);
    activePlatformName = matchedPlatform?.name;
  }

  return (
    <div className="ml-4">
      <div className="flex gap-4 items-center">
        <Platform />
        <FilteredBy
          genreName={activeGenreName}
          platformName={activePlatformName}
          searchText={searchText}
        />
        <ClearFilter />
      </div>
      <h2 className="mb-8 font-semibold text-2xl">Games</h2>
      <div className="grid gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
        {games.map((game: Game) => (
          <GameCard key={game.id} game={game} />
        ))}
      </div>
    </div>
  );
}
