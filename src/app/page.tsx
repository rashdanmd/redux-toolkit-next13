"use client";

import Login from "./log-in";
import { useAppSelector } from "@/redux/store";

export default function Home() {
  const username = useAppSelector((state) => state.authReducer.value.username);
  const isModerator = useAppSelector(
    (state) => state.authReducer.value.isModerator
  );
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <Login />

      <h1> Username: {username}</h1>
      {isModerator && <h1>This user is a moderator</h1>}
    </main>
  );
}
