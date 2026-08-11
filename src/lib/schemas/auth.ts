import z from "zod"; 

export const registerSchema = z.object({
  name: z
    .string()
    .min(2, "Name must be atleast 2 characters long.")
    .max(50, "Name cannot exceed 50 characters."),
  email: z.email("Invalid email address"),
  password: z.string().min(6, "Password must be at least 6 characters long."),
});



export interface FormState {
  success: boolean;
  error: string | null;
  fieldErrors?: {
    name?: string[]; 
    email?: string[]; 
    password?:string[]; 
    
  }; 
}

export const InitialState: FormState = {
  success: false,
  error: null,
};
