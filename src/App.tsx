import { createBrowserRouter, RouterProvider } from "react-router-dom";
import PrivateRoute from "./components/routes/PrivateRoute";
import AuthPage from "./pages/AuthPage";
import NotFoundPage from "./pages/NotFoundPage";
import MapPage from "./pages/MapPage";
import { ToastProvider } from "./context/ToastContext";
import Layout from "./components/common/Layout";
import './styles/main.scss'

function App() {

  const router = createBrowserRouter([
    { path: "/", element: <PrivateRoute component={MapPage} /> },
    { path: "/auth", element: <AuthPage /> },
    { path: "*", element: <NotFoundPage /> },
  ]);

  return (
    <ToastProvider>
      <Layout>
        <RouterProvider router={router} />
      </Layout>
    </ToastProvider>
  );
}

export default App;
