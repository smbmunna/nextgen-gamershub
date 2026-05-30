import { getAllData } from "./getAllData"

export async function getGenreName (id: string){
    const genreName=  await getAllData('genres', '5')
    return genreName; 
}