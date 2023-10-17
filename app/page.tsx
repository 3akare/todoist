"use client";
import { useState } from "react";

export default function Home() {
  const [number, setNumber] = useState(0);
  return (
    <main className="flex justify-center items-center w-screen h-screen">
      <button
        className="border-blue-500 border p-1 rounded-md w-24 h-9 hover:scale-105 hover:bg-blue-500 hover:ring-1 active:bg-blue-700 hover:text-white ring-offset-1 transition-all"
        onClick={() => setNumber(number + 1)}
      >
        {number}
      </button>
    </main>
  );
}
