import {StrictMode} from 'react'
import {createRoot} from 'react-dom/client'
import {createBrowserRouter, Navigate, RouterProvider} from "react-router";
import HomePage from "./pages/HomePage";
import ComicPage from "./pages/ComicPage";
import NotFoundView from "./pages/NotFoundView";

const router = createBrowserRouter([
    {index: true, element: <Navigate to="/Home" replace/>},
    {path: "/home", element: <HomePage/>},
    {path: "/chapter/:id", element: <ComicPage/>},
    {path: "*", element: <NotFoundView/>},
]);

createRoot(document.getElementById('root')!).render(
    <StrictMode>
        <RouterProvider router={router}/>
    </StrictMode>,
)
