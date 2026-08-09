"use client";

import { CiDark } from "react-icons/ci";

export default function Toggle() {
  return (
    <fieldset className="fieldset bg-base-100 border-base-300 rounded-box w-64 border p-4">
      <label className="label">
        <input type="checkbox" defaultChecked className="toggle" />
        <CiDark size={25}/>
      </label>
    </fieldset>
  );
}
