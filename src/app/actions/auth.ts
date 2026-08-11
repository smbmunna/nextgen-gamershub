"use server";

import { STATUS_CODE } from "@/src/utils";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import { FormState } from "@/src/lib/schemas/auth";
import { registerSchema } from "@/src/lib/schemas/auth"; 
import z from "zod";

export async function loginAction(
  prevState: FormState,
  formData: FormData,
): Promise<FormState> {
  const email = formData.get("email");
  const password = formData.get("password");

  if (!email || !password) {
    //return { error: "Email and password are required!" };
    return {
      success: false,
      error: "Validation error",
    };
  }

  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_BASE_URL}/api/auth/login`,
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
      },
    );

    //Catching error
    if (res.status !== STATUS_CODE.HTTP_200_OK) {
      const errorData = await res.json().catch(() => ({}));
      return {
        success: false,
        error: errorData.message || "Invalid email or password!",
      };
    }

    const data = await res.json();
    //set cookies
    const cookieStore = await cookies();
    cookieStore.set("token", data.token, {
      httpOnly: true,
      secure: true,
      sameSite: "lax", //for CSRF protection
      path: "/", // the cookie is available website-wide.
      maxAge: 7 * 24 * 60 * 60, //7 days validity
    });
  } catch (err) {
    return {
      success: false,
      error: "An unexpected login error occurred",
    };
  }
  redirect("/");
}

//----------------------------Logout
export async function logoutAction() {
  const cookieStore = await cookies();
  cookieStore.delete("token");
  redirect("/auth/login");
}

//----------------------------Registration
export async function regAction(
  prevState: FormState,
  formData: FormData,
): Promise<FormState> {
  const rawData = {
    email: formData.get("email")?.toString().trim(),
    password: formData.get("password")?.toString().trim(),
    name: formData.get("name")?.toString().trim(),
  };
  const validation = registerSchema.safeParse(rawData);
  if (!validation.success) {
    const { fieldErrors } = z.flattenError(validation.error);
    return {
      success: false,
      error: "zod error",
      fieldErrors: fieldErrors,
    };
  }

  const { name, email, password } = validation.data;

  //make post request
  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_BASE_URL}/api/auth/register`,
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, password }),
      },
    );

    const data = await res.json();

    if (res.status !== STATUS_CODE.HTTP_201_CREATED) {
      return { success: false, error: data.error || "Registration failed. " };
    }

    //Store token and auto login
    if (data.token) {
      const cookieStore = await cookies();
      cookieStore.set("token", data.token, {
        httpOnly: true,
        secure: process.env.NODE_ENV === "production",
        sameSite: "lax",
        path: "/",
        maxAge: 7 * 24 * 60 * 60,
      });
    }
  } catch (err) {
    return {
      success: false,
      error: "Unable to connect to the server. Please try again.",
    };
  }

  redirect("/");
}
