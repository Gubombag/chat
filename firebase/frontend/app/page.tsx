'use client'

import { useState } from "react";

import AuthPage from "./pages/AuthPage";
import ChatPage from "./pages/ChatsPage";
import Loading from "./pages/Loading";
import { auth } from "@/firebase";
import { User } from "firebase/auth";

export default function Home() {
  const [user, setUser] = useState<User | null>();
  auth.onAuthStateChanged((user) => setUser(user));

  if (user === undefined) {
    return <Loading />;
  } else if (user === null) {
    return <AuthPage />;
  } else {
    return <ChatPage user={user} />;
  }
}