import GenreList from "./components/GenreList";
import GameGrid from "./GameGrid";
import useGenres from "./hooks/useGenres"

export default function Sidebar({genreId}) {    
    const { genres } = useGenres();    
    return (
        <div className="drawer lg:drawer-open my-8">
            <input id="my-drawer-3" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content flex justify-center">
                {/* Page content here */}
                <label htmlFor="my-drawer-3" className="btn drawer-button lg:hidden ">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block h-5 w-5 stroke-current"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path> </svg>
                </label>
                {/* Main content starts     */}
                <GameGrid genreId= {genreId}/>
                {/* Main content ends     */}
            </div>
            <div className="drawer-side">
                <label htmlFor="my-drawer-3" aria-label="close sidebar" className="drawer-overlay"></label>
                <ul className="menu bg-base-200 min-h-full w-60 p-4">
                    {/* Sidebar content here */}
                    <h2 className="mb-4 font-semibold text-xl">Genres</h2>
                    {
                        genres.map(genre => <GenreList key={genre.id} genre={genre} />)
                    }
                </ul>
            </div>
        </div>
    )
}