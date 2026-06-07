import { createBrowserRouter } from "react-router"
import ErrorPage from "./pages/NotFound"
import BrowseBooks from "./pages/BrowseBooks"
import BookDetails from "./pages/BookDetails"
import AddBook from "./pages/AddBook"
import { RouterProvider } from "react-router-dom";

export default function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: "Home",
      errorElement: <ErrorPage />,
    },
    {
      path: "/books",
      element: <BrowseBooks />,
    },
    {
      path: "/books/:category",
      element: <BrowseBooks />,
    },
    {
      path: "/book/:id",
      element: <BookDetails />,
    },
    {
      path: "/add-book",
      element: <AddBook />,
    },
    {
      path: "*",
      element: <ErrorPage />,
    },
  ]);
  return <RouterProvider router={router}></RouterProvider>;
}
