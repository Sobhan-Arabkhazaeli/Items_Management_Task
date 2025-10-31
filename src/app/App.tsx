// ** Third Party Components
import { RouterProvider as ReactRouterProvider } from "react-router-dom";
import { MainRoutes } from "../config/router/MainRoute";

function App() {
  return (
    <div className="w-screen min-h-screen bg-bg font-Satoshi-Bold ">
      <ReactRouterProvider router={MainRoutes} />
    </div>
  );
}

export default App;
