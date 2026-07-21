const BASE_URL = "http://localhost:3000";

export const getData = async (endpoint: string) => {
  const res = await fetch(`${BASE_URL}/${endpoint}`);
  if (!res.ok) {
    const errorBody = await res.text().catch(() => null);
    throw new Error(
      `Failed to fetch ${endpoint}: ${res.status} ${res.statusText}${
        errorBody ? ` — ${errorBody}` : ""
      }`,
    );
  }
  return await res.json();
};
