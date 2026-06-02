import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";



export default async function Home({ searchParams }: { searchParams: Promise<{ genres: string,parent_platform: string, search: string  }> }) {

  const { genres, parent_platform, search } = await searchParams;
  return (
    <div>
      <main >
        <Navbar />
        <Sidebar genreId={genres} parentPlatform={parent_platform} searchText={search}/>
      </main>
    </div>
  );
}
