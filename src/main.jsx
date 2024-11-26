import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { AuthProvider } from "./context/AuthContext";
import LoginPage from "./pages/login.jsx";
import RegisterPage from "./pages/register.jsx";
import HomePage from "./pages/home.jsx";
import ProfilePage from "./pages/profile.jsx";
import PrivateRoute from "./context/PrivateRoute";

const router = createBrowserRouter([
  {
    path: "/",
    element: <LoginPage />,
  },
  {
    path: "/register",
    element: <RegisterPage />,
  },
  {
    path: "/home",
    element: <PrivateRoute element={<HomePage />} />,
  },
  {
    path: "/profile",
    element: <PrivateRoute element={<ProfilePage />} />,
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </StrictMode>
);
