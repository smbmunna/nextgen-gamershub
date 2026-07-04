"use server";

export async function createGame(formData: FormData) {
  const name = formData.get("name");
  const genre = formData.get("genre");
  const platform = formData.get("platform");

  const gamePayload = {
    name,
    genre,
    platform,
  };
  try {
    const response = await fetch("http://localhost:3000/games", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(gamePayload),
    });
    if (!response.ok) {
      throw new Error("Failed to save the game");
    }
    const savedData = await response.json();
    console.log("Successfully saved game data", savedData);
  } catch (e) {
    console.log("Error saving game: ", e);
  }
}
