// ** Third Party Components
import { RouterProvider as ReactRouterProvider } from "react-router-dom";
import { MainRoutes } from "../config/router/MainRoute";

function App() {
  return (
    <main className="w-screen p-2">
    <ReactRouterProvider router={MainRoutes} />;
    </main>
  )
  
  
}

export default App
