"use server";
import { FormState } from "@/src/lib/schemas/game";
import { STATUS_CODE } from "@/src/utils";
import { gameSchema } from "@/src/lib/schemas/game";
import z from "zod";


export async function createGameAction(prevState: FormState, formData: FormData): Promise<FormState> {
  const title = formData.get("title");
  const description = formData.get("description");
  const imageUrl = formData.get("imageUrl");
  const genreIds = formData.getAll("genreIds").map(Number);
  const platformIds = formData.getAll("platformIds").map(Number);

  const gamePayload = {
    title,
    description,
    imageUrl,
    genreIds,
    platformIds,
  };

  const validation = gameSchema.safeParse(gamePayload);
  if (!validation.success) {
    const flattened = z.flattenError(validation.error);
    return {
      success: false,
      message: "Please fix the validation errors.", 
      errors: flattened.fieldErrors,
    };
  }
  try {
    const response = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/games`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(gamePayload),
    });

    //console.log(await response.json());
    const data = await response.json();
    if (response.status !== STATUS_CODE.HTTP_201_CREATED) {
      return {
        success: false,
        message:
          data?.message || `Request failed with status code ${response.status}`,
      };
    }
    return {
      success: true,
      message: "Game created successfully.",
      errors: null,
    };
  } catch (e) {
    return {
      success: false,
      message:
        "Unable to connect to the backend server. Please check if the server is running.",
      errors: null,
    };
  }
}
