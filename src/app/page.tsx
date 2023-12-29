"use client";

import Login from "./log-in";
import { useAppSelector } from "@/redux/store";

export default function Home() {
  const username = useAppSelector((state) => state.authReducer.value.username);
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <Login />

      <h1> Username: {username}</h1>
    </main>
  );
}
