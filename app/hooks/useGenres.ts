import genres from "../data/genres";

const useGenres = () => {
    return (
        {
            genres,
            isLoading: false,
            error: null
        }
    )
}

export default useGenres; 