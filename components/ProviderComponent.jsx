"use client";

import { AppProvider } from "@shopify/polaris";

function ProviderComponent({ children }) {
  return <AppProvider>{children}</AppProvider>;
}

export default ProviderComponent;
