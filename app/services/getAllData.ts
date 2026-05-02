
const BASE_URL = 'https://api.rawg.io/api';
const API_KEY = 'a1038004060e47c09682fe8da620ff75';


export const getAllData = async (endpoint: string, params: string) => {
    const res = await fetch(`${BASE_URL}/${endpoint}?key=${API_KEY}${params ? `&${params}` : ''}`);
    return res.json();
}

