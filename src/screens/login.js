import React from "react";

import LoginCard from "../views/Login/LoginCard";

export default function Login() {
  return (
    <div
      className="loginCard-block"
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
        flex: 1
      }}
    >
      <LoginCard />
    </div>
  );
}
