// ** Third Party Components
import { RouterProvider as ReactRouterProvider } from "react-router-dom";
import { MainRoutes } from "../config/router/MainRoute";

function App() {
  return  <ReactRouterProvider router={MainRoutes} />;
}

export default App
