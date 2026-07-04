"use server";
import z from "zod";

const schema = z.object({
  name: z.string().min(1, "Game name cant be empty"),
  genre: z.string().min(1, "Please select a Genre"),
  platform: z.string().min(1, "Please select a Platform"),
});

export async function createGame(prevState: any, formData: FormData) {
  const name = formData.get("name");
  const genre = formData.get("genre");
  const platform = formData.get("platform");

  const gamePayload = {
    name,
    genre,
    platform,
  };

  const validation = schema.safeParse(gamePayload);
  if (!validation.success) {
    const flattened = z.flattenError(validation.error);
    return {
      success: false,
      errors: flattened.fieldErrors,
    };
  }
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

    return {
      success: true,
      errors: null,
    };
    //const savedData = await response.json();
    //console.log("Successfully saved game data", savedData);
  } catch (e) {
    console.log("Error saving game: ", e);
  }
}
