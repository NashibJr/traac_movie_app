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
 * axios instance is the custom configuration of the axios library.
 * To create an axios instance, we call the create method on the axios object.
 * A baseURL is a string that is preppended on every request that is made by an axios
 * instance
 * config object
 *    url- It is required. It is the endpoint that the we're making the request to.
 *    method - The HTTP method, it defaults to get.
 *    baseURL-
 *    headers-> Object contains tje custom headers. Content-Type, Authorization
 *    data-> the data that is sent to the server.
 *    withCredentials => Cross-Site-Access-Control. => CORS
 *    onUploadProgress: a fn that enable us to monitor the progress of an upload
 *    onDownloadProgress: a fn that enable us to monitor the progress of a download
 *
 *
 * interceptors. The enable us intercept requests and responses.
 * axios.interceptor.[method].use(
 *  config=>{
 *    // does the login
 *    return config
 * },
 * error => Promise.reject(error)
 * )
 */

import React from "react";
import axios from "axios";

// const client = axios.create({
//   baseURL: "http://127.0.0.1:8000/api/v1",
//   headers: {
//     Authorization: "Bearer token",
//   },
// });
const token =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY4NWJmZDU5LTNiZGYtNGE2NC04YmNkLWFhOWMxZTFmYjMyZiIsImlhdCI6MTc0NjAyODIwMiwiZXhwIjoxNzQ2MDM1NDAyfQ.P0ySbOBSf-2x2BAvN3GjB91KTGdhg8hMmzVk9M086Ic";
const client = axios.create();
client.defaults.baseURL = "http://127.0.0.1:8000/api/v1";
client.interceptors.request.use(
  (config) => {
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }

    return config;
  },
  (error) => Promise.reject(error)
);

// I am getting the response but brfoe the response reaches, i intrecept to check if the
// user really is authorized to access this resource.
client.interceptors.response.use(
  (response) => {
    if (response.status === 401) {
      return (window.location.href = "/");
    }

    return response;
  },
  (error) => Promise.reject(error)
);

const Axios = () => {
  const [students, setStudents] = React.useState([]);

  React.useEffect(() => {
    (async () => {
      try {
        // const response = await axios({
        //   url: "http://127.0.0.1:8000/api/v1/students/",
        // });
        const response = await client.get("/students/");
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
      const response = await client.post(
        "/videos/comments/create/685bfd59-3bdf-4a64-8bcd-aa9c1e1fb32f/",
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
