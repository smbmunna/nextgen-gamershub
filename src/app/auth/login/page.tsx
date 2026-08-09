"use client";

import Link from "next/link";
import { useActionState } from "react";
import { IoLockClosedOutline } from "react-icons/io5";
import { MdMailOutline } from "react-icons/md";
import { loginAction } from "../../actions/auth";

export default function LoginPage() {
  const [state, formAction, isPending] = useActionState(loginAction, null);
  return (
    <div className="flex items-center justify-center min-h-screen bg-slate-950">
      <div className="w-full max-w-sm">
        {/* heading section */}
        <div className="text-center mb-8">
          <div className="flex items-center justify-center mb-4 bg-teal-500/10 border border-teal-500/20 p-2 w-16 h-16 mx-auto rounded-xl">
            <IoLockClosedOutline size={30} className="text-teal-400" />
          </div>
          <h1 className="text-xl font-semibold text-slate-100">Welcome Back</h1>
          <p className="text-slate-500 mt-1">
            Sign in to continue to your account
          </p>
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
                type="text"
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
              <a
                href="#"
                className="text-xs text-teal-400 hover:text-teal-600 transition-colors"
              >
                Forgot?
              </a>
            </div>
            <div className="relative">
              <IoLockClosedOutline
                size={15}
                className="text-slate-500 absolute left-3 top-1/4"
              />
              <input
                className="bg-slate-950 w-full rounded-lg border border-slate-800 pl-10 pr-10 py-2.5 text-sm text-slate-100 placeholder-slate-600 outline-none focus:border-teal-500/60 transition-colors"
                id="password"
                name="password"
                type="password"
                required
                placeholder="••••••••"
              />
            </div>
          </div>

          {/* button */}
          <button
            type="submit"
            className="mt-5 w-full rounded-lg bg-teal-500 py-2.5 text-sm font-medium text-slate-950 hover:bg-teal-600 active:bg-teal-700 transition-colors"
          >
            Sign in
          </button>
        </form>

        <p className="mt-6 text-center text-sm text-slate-500">
          Don't have an account?
          <Link
            href="/auth/register"
            className="text-teal-400 hover:text-teal-300 transition-colors"
          >
            Sign up
          </Link>
        </p>
      </div>
    </div>
  );
}
