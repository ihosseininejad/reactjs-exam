import { createBrowserRouter, RouterProvider } from "react-router-dom";

import PrivateRoute from "./components/routes/PrivateRoute";

import AuthPage from "./pages/AuthPage";
import NotFoundPage from "./pages/NotFoundPage";
import MapPage from "./pages/MapPage";

function App() {

  const router = createBrowserRouter([
    { path: "/", element: <PrivateRoute component={MapPage} /> },
    { path: "/auth", element: <AuthPage /> },
    { path: "*", element: <NotFoundPage /> },
  ]);

  return (
    <RouterProvider router={router} />
  );
}

export default App;
