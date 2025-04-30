import React from "react";
import { useNavigate } from "react-router-dom";

/**
 * - You might want to render different Components depending on the different conditions.
 * - You'd want to render nothing if the condition is false. In this case return null
 */

const styles = {
  container: {
    padding: "0.5px 20px 0.5px 20px",
    boxShadow: "0 0 10px 0 rgba(0, 0, 0, .3)",
    borderRadius: 10,
    maxWidth: 120,
  },
  status: {
    marginTop: -20,
    fontSize: 14,
    opacity: 0.7,
  },
};

const Task = ({ title, status, id }) => {
  // useNavigate => returns a function that programatically routes to different pages.
  const navigate = useNavigate();

  const handleNavigate = () => {
    navigate(`/task/${id}`);
  };
  return (
    <div style={styles.container} onClick={handleNavigate}>
      <h2>{title}</h2>
      <p style={styles.status}>{status}</p>
    </div>
  );
};

export default Task;
