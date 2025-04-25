import {StrictMode} from 'react'
import {createRoot} from 'react-dom/client'
import {createBrowserRouter, Navigate, RouterProvider} from "react-router";
import HomePage from "./pages/HomePage.tsx";
import ComicPage from "./pages/ComicPage.tsx";
import NotFoundView from "./pages/NotFoundView.tsx";

const router = createBrowserRouter([
    {index: true, element: <Navigate to="/Home" replace/>},
    {path: "/home", element: <HomePage/>},
    {path: "/chapter/:id", element: <ComicPage/>},
    {path: "*", element: <NotFoundView/>},
]);

function test() {
    console.log("Hello, world!");
}

createRoot(document.getElementById('root')!).render(
    <StrictMode>
        <RouterProvider router={router}/>
    </StrictMode>,
)
