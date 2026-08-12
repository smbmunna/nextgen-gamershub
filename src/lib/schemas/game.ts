import z from "zod";

export const gameSchema = z.object({
  title: z.string().min(1, "Game name cant be empty"),
  imageUrl: z.string().min(1, "URL cannot be empty!"),
  description: z.string().min(1, "Enter a short description"),
  genreIds: z
    .array(z.coerce.number())
    .min(1, "Please select atleast one Genre"),
  platformIds: z
    .array(z.coerce.number())
    .min(1, "Please select atleast one Platform"),
});

export interface FormState {
  success: boolean;
  message: string | null;
  errors?: Record<string, string[]> | null;
}

export const initialState = {
  success: false,
  message: null,
};
