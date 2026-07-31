"use server";
import z from "zod";

const schema = z.object({
  title: z.string().min(1, "Game name cant be empty"),
  imageUrl: z.string().min(1,"URL cannot be empty!"), 
  description: z.string().min(1,"Enter a short description"), 
  genreIds: z.array(z.coerce.number()).min(1, "Please select atleast one Genre"),
  platformIds: z.array(z.coerce.number()).min(1, "Please select atleast one Platform"),
});

export async function createGame(prevState: any, formData: FormData) {
  const title = formData.get("title");
  const description= formData.get("description"); 
  const imageUrl= formData.get("imageUrl"); 
  const genreIds = formData.getAll("genreIds").map(Number);
  const platformIds = formData.getAll("platformIds").map(Number);

  const gamePayload = {
    title,
    description,
    imageUrl,
    genreIds,
    platformIds,
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
    const response = await fetch("http://localhost:5000/api/games", {
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
