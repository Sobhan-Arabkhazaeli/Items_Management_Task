import type React from "react";
import { HeroUIProvider } from "@heroui/react";
import { Provider } from "react-redux";
import { store } from "../redux/store";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { reactQueryConfig } from "../config/react-query";
const ProviderApp = ({ children }: { children: React.ReactNode }) => {
  const queryClient = new QueryClient(reactQueryConfig);

  return (
    <Provider store={store}>
      <QueryClientProvider client={queryClient}>
        <HeroUIProvider> {children}</HeroUIProvider>
      </QueryClientProvider>
    </Provider>
  );
};

export default ProviderApp;
