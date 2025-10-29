// ** Third Party Components
import { RouterProvider as ReactRouterProvider } from "react-router-dom";
import { MainRoutes } from "../config/router/MainRoute";
import ParticlesBackground from "../core/utils/Particles";

function App() {
  return (
    <main className="w-screen p-2">
    <ParticlesBackground/>
    <ReactRouterProvider router={MainRoutes} />
    </main>
  )
  
  
}

export default App
