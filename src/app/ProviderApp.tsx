import type React from "react";
import { HeroUIProvider } from "@heroui/react";
const ProviderApp = ({ children }: { children: React.ReactNode }) => {
  return <HeroUIProvider> {children}</HeroUIProvider>;
};

export default ProviderApp;
