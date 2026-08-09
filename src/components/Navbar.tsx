"use client";
import dynamic from "next/dynamic";
import { logoutAction } from "../app/actions/auth";

const SearchBox = dynamic(() => import("./Searchbox"), { ssr: false });

import Image from "next/image";
import logo from "@/public/logo.jpg";
import Toggle from "./Toggle";
import Link from "next/link";
import { useTransition } from "react";
// import SearchBox from "./Searchbox";

export default function Navbar() {
  const [isPending, startTransition] = useTransition();

  const handleLogout = () => {
    startTransition(async () => {
      await logoutAction();
    });
  };
  return (
    <div className="flex justify-between items-center gap-4">
      <Image src={logo} alt="site logo" width={50} loading="eager" />
      <SearchBox />
      <Toggle />
      <div className="flex gap-2">
        <Link href="/auth/login" className="btn btn-success btn-sm">
          Login
        </Link>
        <button
          disabled={isPending}
          onClick={handleLogout}
          className="btn btn-error btn-sm"
        >
          {isPending ? "Logging Out" : "Logout"}
        </button>
      </div>
    </div>
  );
}
