import { CreateGameContainer } from "@/src/components/container";
import { getData } from "@/src/services/getData";


export default async function NewGamePage() {
  try {
    const [genres, platforms] = await Promise.all([
      getData("genres"),
      getData("platforms"),
    ]);

    return <CreateGameContainer genres={genres} platforms={platforms} />;
  } catch (err) {
    console.log("Error fetching data: ", err);
  }
}
