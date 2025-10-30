// Layout
import type { FC } from "react";
import { HeaderSection } from "../../components/partials";

// Third-Party Library
import { Outlet } from "react-router-dom";

const MainLayout: FC = () => {
  return (
    <>
      <header>
        <HeaderSection />
      </header>
      
        <Outlet />
      
    </>
  );
};

export default MainLayout;
