import GameCard from "./GameCard";
import Platform from "./Platform";
import { getAllData } from "../services/getAllData";
import ClearFilter from "./ClearFilter";

interface Game {
    id: number;
    name: string;
    background_image: string;
    metacritic: number;
}



export default async function GameGrid({ genreId, platformId }) {
    const params = new URLSearchParams();
    if (genreId) params.append('genres', genreId);
    if (platformId) params.append('parent_platforms', platformId);
    //const params= genreId? `&genres=${genreId}` : ''; 
    const games = await getAllData('games', params.toString());


    return (
        <div className="ml-4">
            <div className="flex gap-4 items-center">
                <Platform />
                <ClearFilter />
            </div>
            <h2 className="mb-8 font-semibold text-2xl">Games</h2>
            <div className="grid gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
                {
                    games.results.map(game => <GameCard key={game.id} game={game} />)
                }
            </div>
        </div>
    )
}