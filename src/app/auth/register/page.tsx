"use client";

import Link from "next/link";
import { useActionState, useEffect } from "react";
import { IoLockClosedOutline } from "react-icons/io5";
import { MdMailOutline } from "react-icons/md";
import { regAction } from "../../actions/auth";

export interface FormState {
  success: boolean;
  error: string | null;
}

const InitialState: FormState = {
  success: false,
  error: null,
};

export default function RegisterPage() {
  const [state, formAction, isPending] = useActionState(
    regAction,
    InitialState,
  );

  // useEffect(()=>{
  //   console.log(state);
  // },[state])

  return (
    <div className="flex items-center justify-center min-h-screen bg-slate-950">
      <div className="w-full max-w-sm">
        {/* heading section */}
        <div className="text-center mb-8">
          <div className="flex items-center justify-center mb-4 bg-teal-500/10 border border-teal-500/20 p-2 w-16 h-16 mx-auto rounded-xl">
            <IoLockClosedOutline size={30} className="text-teal-400" />
          </div>
          <h1 className="text-xl font-semibold text-slate-100">
            Welcome to Gamers Hub
          </h1>
          <p className="text-slate-500 mt-1">Create a new account</p>
        </div>

        <form
          action={formAction}
          className="bg-slate-900 border border-slate-500 p-6 rounded-2xl"
        >
          {/* email */}
          <div className="mb-4">
            <label
              htmlFor="email"
              className="block text-xs font-medium text-slate-400 mb-1.5"
            >
              Email
            </label>
            <div className="relative">
              <MdMailOutline className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-500" />
              <input
                id="email"
                type="email"
                name="email"
                required
                placeholder="you@example.com"
                className="w-full rounded-lg bg-slate-950 border border-slate-800 pl-10 pr-3 py-2.5 text-sm text-slate-100 placeholder-slate-600 outline-none focus:border-teal-500/60 focus:ring-1 focus:ring-teal-500/60 transition-colors"
              />
            </div>
          </div>

          {/* password */}
          <div className="mb-2">
            <div className="flex justify-between items-center mb-1.5">
              <label
                htmlFor="password"
                className="text-xs text-slate-400 mb-1.5"
              >
                Password
              </label>
            </div>
            <div className="relative">
              <IoLockClosedOutline
                size={15}
                className="text-slate-500 absolute left-3 top-1/4"
              />
              <input
                className="bg-slate-950 w-full rounded-lg border border-slate-800 pl-10 pr-10 py-2.5 text-sm text-slate-100 placeholder-slate-600 outline-none focus:border-teal-500/60 transition-colors"
                id="password"
                type="password"
                name="password"
                required
                placeholder="••••••••"
              />
            </div>
          </div>
          {state?.error && (
            <p className="text-red-500 text-sm font-medium mt-1">
              {state?.error}
            </p>
          )}

          {/* button */}
          <button
            type="submit"
            className="mt-5 w-full rounded-lg bg-teal-500 py-2.5 text-sm font-medium text-slate-950 hover:bg-teal-600 active:bg-teal-700 transition-colors"
          >
            Sign up
          </button>
        </form>

        <p className="mt-6 text-center text-sm text-slate-500">
          Already have an account?
          <Link
            href="/auth/login"
            className="text-teal-400 hover:text-teal-300 transition-colors"
          >
            Sign in
          </Link>
        </p>
      </div>
    </div>
  );
}
