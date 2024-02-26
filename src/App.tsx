import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { StateProvider } from "./context/StateContext";
import reducer, { initialState } from "./context/StateReducers";

import PrivateRoute from "./components/PrivateRoute";
import AuthPage from "./pages/AuthPage";
import NotFoundPage from "./pages/NotFoundPage";
import MapPage from "./pages/MapPage";
import Layout from "./components/common/Layout";
import './styles/main.scss'


function App() {

  const router = createBrowserRouter([
    { path: "/", element: <PrivateRoute component={MapPage} /> },
    { path: "/auth", element: <AuthPage /> },
    { path: "*", element: <NotFoundPage /> },
  ]);

  return (
    <StateProvider initialState={initialState} reducer={reducer}>
      <Layout>
        <RouterProvider router={router} />
      </Layout>
    </StateProvider>
  );
}

export default App;
