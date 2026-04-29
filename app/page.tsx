import Navbar from "./components/Navbar";
import Sidebar from "./Sidebar";


export default async function Home({ searchParams }: { searchParams: Promise<{ genres?: string }> }) {

  const { genres } = await searchParams;  
  return (
    <div >
      <main >
        <Navbar />
        <Sidebar genreId={genres} />
      </main>
    </div>
  );
}
