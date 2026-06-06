
const BASE_URL = 'https://api.rawg.io/api';
const API_KEY = 'a1038004060e47c09682fe8da620ff75';


export const customFetch = async (endpoint: string, params: string) => {
    return fetch(`${BASE_URL}/${endpoint}?key=${API_KEY}${params ? `&${params}` : ''}`);
}

