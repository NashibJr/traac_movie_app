import React from "react";
import { Navigation } from "../components/Navigation";
import { useParams } from "react-router-dom";

const SingleTask = () => {
  const { id } = useParams(); // enables us to get access to the params

  return (
    <>
      <Navigation />
      <main>
        <h1>Task title: Thfhfh</h1>
      </main>
    </>
  );
};

export default SingleTask;
