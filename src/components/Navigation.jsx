import React from "react";
import { Link } from "react-router-dom";

export const Navigation = () => {
  return (
    <nav>
      <h1>LOGO</h1>
      <ul>
        <li>
          <Link to={"/"}>Tasks</Link>
        </li>
        <li>
          <Link to={"/users"}>Users</Link>
        </li>
        <li>
          <Link to={"/posts"}>Posts</Link>
        </li>
      </ul>
      <div />
    </nav>
  );
};
