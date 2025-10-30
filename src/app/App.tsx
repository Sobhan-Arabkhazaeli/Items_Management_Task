// ** Third Party Components
import { RouterProvider as ReactRouterProvider } from "react-router-dom";
import { MainRoutes } from "../config/router/MainRoute";
import ParticlesBackground from "../core/utils/Particles";

function App() {
  return (
    <div className="w-screen p-3 font-serif">
    <ParticlesBackground/>
    <ReactRouterProvider router={MainRoutes} />
    </div>
  )
  
  
}

export default App
