import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./main.css";

// --- Import Komponen Halaman ---
import HomePage from "./pages/HomePage.jsx";
import QuranAppPage from "./pages/QuranAppPage.jsx";
import AboutPage from "./pages/AboutPage.jsx";

// --- Import dari React Router DOM ---
import { createBrowserRouter, RouterProvider } from "react-router-dom";

// Definisikan semua rute aplikasi di sini
const router = createBrowserRouter([
  {
    path: "/", // Rute dasar aplikasi (misal: http://localhost:5173/)
    element: <App />, // App.jsx akan jadi layout utama yang menampung navbar, outlet (Halaman), dan footer
    children: [
      // Child routes ini akan dirender di dalam <Outlet /> di App.jsx
      {
        index: true, // Ini berarti HomePage akan jadi halaman default untuk path "/"
        element: <HomePage />,
      },
      {
        path: "app", // URL akan jadi /app (misal: http://localhost:5173/app)
        element: <QuranAppPage />,
      },
      {
        path: "about", // URL akan jadi /about (misal: http://localhost:5173/about)
        element: <AboutPage />,
      },
    ],
  },
  {
    // Handle 404 Not Found!
    path: "*",
    element: <div className="min-h-screen flex items-center justify-center text-center text-2xl font-bold text-red-600">Error (404) Halaman Tidak Ditemukan!</div>,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    {/* Gunakan RouterProvider untuk menyediakan rute ke seluruh aplikasi */}
    <RouterProvider router={router} />
  </React.StrictMode>
);
