import type React from "react";
import { HeroUIProvider } from "@heroui/react";
import { Provider } from "react-redux";
import { store } from "../redux/store";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { reactQueryConfig } from "../config/react-query";
import { Toaster } from "react-hot-toast";
import { CompareButton } from "../components/common";
const ProviderApp = ({ children }: { children: React.ReactNode }) => {
  const queryClient = new QueryClient(reactQueryConfig);

  return (
    <Provider store={store}>
      <QueryClientProvider client={queryClient}>
        <HeroUIProvider> {children}</HeroUIProvider>
        <Toaster />
        <CompareButton />
      </QueryClientProvider>
    </Provider>
  );
};

export default ProviderApp;
