export const getData = async (endpoint: string) => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/${endpoint}`);
  
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
