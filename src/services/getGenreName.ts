import { customFetch } from "./customFetch"

export async function getGenreName (id: string){

    try {
        const response = await customFetch(`genres/${id}`, '');
        const data = await response.json();
        return data?.name || '';
    } catch (error) {
        console.error("Error fetching genre name:", error);
    }
}