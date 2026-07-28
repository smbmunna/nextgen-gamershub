import { getData } from "./getData";

export async function getGenreName (id: string){
    const genreName=  await getData('genres')
    return genreName; 
}