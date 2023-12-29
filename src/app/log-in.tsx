"use client";
import { useState } from "react";
import { logIn, logOut } from "../redux/features/auth-slice";
import { useDispatch } from "react-redux";
import { AppDispatch } from "@/redux/store";

export default function LogIn() {
  const [username, setUsername] = useState("");

  const dispatch = useDispatch<AppDispatch>();

  const onClickLogIn = () => {};

  const onClickToggle = () => {};

  const onClickLogout = () => {};

  return (
    <div>
      <input type="text" onChange={(e) => setUsername(e.target.value)} />
      <br />
      <button>Log In</button>
      <br />
      <button>Log Out</button>
      <br />
      <button>Toggle Moderator Status</button>
    </div>
  );
}

/* WITHOUT REDUX

"use client"; 
import { useState } from "react";


export default function LogIn() {
  const [username, setUsername] = useState("");

  const onClickLogIn = () => {};

  const onClickToggle = () => {};

  const onClickLogout = () => {};

  return (
    <div>
      <input type="text" onChange={(e) => setUsername(e.target.value)} />
      <br />
      <button>Log In</button>
      <br />
      <button>Log Out</button>
      <br />
      <button>Toggle Moderator Status</button>
    </div>
  );
}


*/
