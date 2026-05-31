import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";



export default async function Home({ searchParams }: { searchParams: Promise<{ genres: string,parent_platform: string  }> }) {

  const { genres, parent_platform } = await searchParams;
  return (
    <div>
      <main >
        <Navbar />
        <Sidebar genreId={genres} parentPlatform={parent_platform}/>
      </main>
    </div>
  );
}
