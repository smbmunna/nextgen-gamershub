const BASE_URL='http://localhost:3000'

export const getData = async (endpoint: string) => {
    return fetch(BASE_URL); 
};
