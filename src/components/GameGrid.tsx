import GameCard, { Game } from "./GameCard";
import Platform from "./Platform";
import { getAllData } from "../services/getAllData";
import ClearFilter from "./ClearFilter";
import FilteredBy from "./FilteredBy";


interface GameGridProps {
    genreId: string; 
    platformId: string; 
}




export default async function GameGrid({ genreId, platformId }: GameGridProps) {
    const params = new URLSearchParams();
    if (genreId) params.append('genres', genreId);
    if (platformId) params.append('parent_platforms', platformId);
    //const params= genreId? `&genres=${genreId}` : ''; 
    const games = await getAllData('games', params.toString());

    let activeGenreName=''; 
    let activePlatformName=''; 

    if(genreId){
        const data= await getAllData(`genres/${genreId}`, ''); 
        activeGenreName= data?.name || ''; 
    }

    if(platformId){
        const data= await getAllData('platforms/lists/parents', ''); 
        const matchedPlatform= data.results?.find((pl: any)=> pl.id==platformId); 
        activePlatformName= matchedPlatform?.name; 
    }


    return (
        <div className="ml-4">
            <div className="flex gap-4 items-center">
                <Platform />
                <FilteredBy genreName= {activeGenreName} platformName={activePlatformName}/>
                <ClearFilter />
            </div>
            <h2 className="mb-8 font-semibold text-2xl">Games</h2>
            <div className="grid gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
                {
                    games.results.map((game: Game) => <GameCard key={game.id} game={game} />)
                }
            </div>
        </div>
    )
}