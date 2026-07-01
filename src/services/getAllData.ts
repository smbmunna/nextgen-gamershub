
//const BASE_URL = 'https://api.rawg.io/api';
const BASE_URL = 'http://localhost:3000';
//const API_KEY = 'a1038004060e47c09682fe8da620ff75';


export const getAllData = async (endpoint: string, params: string) => {
    //const res = await fetch(`${BASE_URL}/${endpoint}?key=${API_KEY}${params ? `&${params}` : ''}`);    
    const res = await fetch(`${BASE_URL}/${endpoint}${params ? `&${params}` : ''}`);    
    //const res = await fetch('http://localhost:3000/games?name_like=portal');    
    return res.json();
}

