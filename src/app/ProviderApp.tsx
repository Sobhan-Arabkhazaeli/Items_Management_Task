import type React from "react";
import { HeroUIProvider } from "@heroui/react";
import { Provider } from "react-redux";
import { store } from "../redux/store";
const ProviderApp = ({ children }: { children: React.ReactNode }) => {
  return (
    <Provider store={store}>
      <HeroUIProvider> {children}</HeroUIProvider>
    </Provider>
  );
};

export default ProviderApp;
