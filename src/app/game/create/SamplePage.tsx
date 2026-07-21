import { CreateGameContainer } from "@/src/components/container";
import { getData } from "@/src/services/getData";

export default async function NewGamePage() {
    let genres; 
    let platforms; 
  try {
    const [genresData, platformsData] = await Promise.all([
      getData("genres"),
      getData("platforms"),
    ]);
    genres=genresData; 
    platforms=platformsData; 
    // setGenres(genresData);
    // setPlatforms(platformsData);
  } catch (err) {
    throw new Error("Error fetching Genres");
  }
  return <CreateGameContainer genres={genres} platforms={platforms} />;
}
