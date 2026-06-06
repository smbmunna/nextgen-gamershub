import GameCard, { Game } from "./GameCard";
import Platform from "./Platform";
import { customFetch } from "../services/customFetch";
import ClearFilter from "./ClearFilter";
import FilteredBy from "./FilteredBy";

interface GameGridProps {
  genreId: string;
  platformId: string;
  searchText?: string;
}

export default async function GameGrid({ genreId, platformId, searchText }: GameGridProps) {
  const params = new URLSearchParams();
  if (genreId) params.append("genres", genreId);
  if (platformId) params.append("parent_platforms", platformId);
  if (searchText) params.append("search", searchText);

  let games: { results: Game[] } = { results: [] };
  try {
    const response = await customFetch("games", params.toString());
    games = await response.json();
  } catch (error) {
    console.error("Error fetching games:", error);
  }

  let activeGenreName = "";
  let activePlatformName = "";

  if (genreId) {
    try {
      const response = await customFetch(`genres/${genreId}`, "");
      const data = await response.json();
      activeGenreName = data?.name || "";
    } catch (error) {
      console.error("Error fetching genres:", error);
    }
  }

  if (platformId) {
    try {
      const response = await customFetch("platforms/lists/parents", "");
      const data = await response.json();
      const matchedPlatform = data.results?.find(
        (pl: any) => pl.id == platformId,
      );
      activePlatformName = matchedPlatform?.name;
    } catch (error) {
      console.error("Error fetching platforms:", error);
    }
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
      <div className="grid gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {games.results.map((game: Game) => (
          <GameCard key={game.id} game={game} />
        ))}
      </div>
    </div>
  );
}
