
// Layout
import type { FC } from "react";
import { HeaderSection } from "../../components/partials";

// Third-Party Library
import { Outlet } from "react-router-dom";

const MainLayout: FC = () => {
	return (
		<>
			<HeaderSection />
			<Outlet />
		</>
	);
};

export default MainLayout;
