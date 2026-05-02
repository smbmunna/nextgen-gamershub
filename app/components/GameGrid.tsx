import GameCard from "./GameCard";
import Platform from "./Platform";
import { getAllData } from "../services/getAllData";

interface Game {
    id: number;
    name: string;
    background_image: string; 
    metacritic: number; 
}



export default async function GameGrid({genreId}) {
    const params= genreId? `&genres=${genreId}` : ''; 
    const games = await getAllData('games', params);    
    
    return (
        <div className="ml-4">
            <Platform/>
            <h2 className="mb-8 font-semibold text-2xl">Games</h2>
            <div className="grid gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
                {
                    games.results.map(game => <GameCard key={game.id} game={game} />)
                }
            </div>
        </div>
    )
}