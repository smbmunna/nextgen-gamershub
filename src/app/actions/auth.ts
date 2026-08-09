"use server";

import { STATUS_CODE } from "@/src/utils";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import { FormState } from "../auth/login/page";

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
      message: "Email and password not found",
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
        message: "Authentication Failed!",
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
      message: "Auth error",
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
