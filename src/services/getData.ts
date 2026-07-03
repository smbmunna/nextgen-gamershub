const BASE_URL='http://localhost:3000'

export const getData = async (endpoint: string) => {
    const res= await fetch(`${BASE_URL}/${endpoint}`); 
    if(!res.ok){
        throw new Error(); 
    }
    return await res.json(); 
};
