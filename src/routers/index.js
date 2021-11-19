import { useRoutes } from "react-router-dom"
import { PageRouters } from "constants/index"

import NotFound from "components/NotFound" // 404 Page

import Dashboard from "./Dashboard" // Dashboard Route

const AppRouter = () => {
  let elements = useRoutes([
    { path: PageRouters.Dashboard, element: <Dashboard /> },
    { path: "*", element: <NotFound /> },
  ])

  return elements
}

export default AppRouter
