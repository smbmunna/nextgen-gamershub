const BASE_URL = "http://localhost:5000/api";

export const getData = async (endpoint: string) => {
  const res = await fetch(`${BASE_URL}/${endpoint}`);
  console.log(res); 
  if (!res.ok) {
    // const errorBody = await res.text().catch(() => null);
    // throw new Error(
    //   `Failed to fetch ${endpoint}: ${res.status} ${res.statusText}${
    //     errorBody ? ` — ${errorBody}` : ""
    //   }`,
    // );
    return []; 
  }
  return await res.json();
};
