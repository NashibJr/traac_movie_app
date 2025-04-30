import { Route, Routes } from "react-router-dom";
import Tasks from "./pages/Tasks";
import Users from "./pages/Users";
import Posts from "./pages/Posts";
import User from "./pages/User";
import SingleTask from "./pages/SingleTask";
import Axios from "./pages/Axios";

/**
 * Features
 * - Defines routes using components
 * <Route path='' element={<Home />} />
 * - Allows dynamic routes.
 * <Route path="user/:id" element={<UserDetails />} />
 * - Creates a hierachical routes => nest routes.
 * - Provides hooks that can programatically route users .useNavigate(), useParams(), useLocation()
 * - Allows allows protected routes.
 */

/**
 * Configuring routes.
 *  - Wrap the App component in the main.jsx with the BrowserRouter component.
 *  - We then define our routes in the App Component.
 *
 * => Nested Routes. -> Routes in Routes -> The parent route is automatically passed to
 *      each child paths/routes
 */
function App() {
  return (
    <Routes>
      <Route path="" element={<Axios />} />
      <Route path="task/:id" element={<SingleTask />} />
      <Route path="posts" element={<Posts />} />
      <Route path="users" element={<Users />}>
        {/* /users/user-details */}
        <Route path="user-details" element={<User />} />
      </Route>
    </Routes>
  );
}

export default App;
