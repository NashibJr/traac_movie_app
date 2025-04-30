import React from "react";
import { Navigation } from "../components/Navigation";
import { Outlet, useLocation } from "react-router-dom";

const Users = () => {
  const pathname = useLocation().pathname;

  return (
    <>
      {pathname === "/users" ? (
        <>
          <Navigation />
          <main>
            <h1>Users</h1>
          </main>
        </>
      ) : null}
      <Outlet />
    </>
  );
};

export default Users;
