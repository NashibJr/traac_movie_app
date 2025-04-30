/**
 * Axios: A promise based HTTP client for node.js.
 * It runs on both the client (Browser) and the server sides of js.
 *
 * Features of axios.
 *  - It makes XMLHTTP (Client) requests and HTTP requests(server.).
 *  - It supports Promises => async/await.
 *  - Intercepts requests and responses.
 *  - Automatically handles JSON data.
 *
 * Installation.
 *   - npm install axios.
 *
 * How to make requests with axios.
 *  - GET, POST, PUT, DELETE, PATCH
 * Call the axios object and pass the configuration object.
 * axios(config)
 * - Alternatively (Common): Call the method on to the axios object.
 * get=> axios.get(url,data,config)
 */

import React from "react";
import axios from "axios";

const Axios = () => {
  const [students, setStudents] = React.useState([]);

  React.useEffect(() => {
    (async () => {
      try {
        // const response = await axios({
        //   url: "http://127.0.0.1:8000/api/v1/students/",
        // });
        const response = await axios.get(
          "http://127.0.0.1:8000/api/v1/students/"
        );
        setStudents(response.data);
      } catch (error) {
        console.log(error);
      }
    })();
  }, []);

  console.log(students, ":::::");

  const handleAddComment = async () => {
    try {
      // const response = await axios({
      //   url: "http://127.0.0.1:8000/api/v1/videos/comments/create/685bfd59-3bdf-4a64-8bcd-aa9c1e1fb32f/",
      //   method: "post",
      //   data: {
      //     video: "ecfeef3a-74df-4753-93a0-f0ae907ea766",
      //     body: "I loved it, I enjoyed it",
      //   },
      // });
      const response = await axios.post(
        "http://127.0.0.1:8000/api/v1/videos/comments/create/685bfd59-3bdf-4a64-8bcd-aa9c1e1fb32f/",
        {
          video: "ecfeef3a-74df-4753-93a0-f0ae907ea766",
          body: "I loved it, I enjoyed it",
        }
      );

      console.log(response.data, ">>>>");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <h2>Axios</h2>
      <button onClick={handleAddComment}>Click me!</button>
    </div>
  );
};

export default Axios;
