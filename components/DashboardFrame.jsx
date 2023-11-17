"use client";

import { AppProvider, Frame } from "@shopify/polaris";
import "@shopify/polaris/build/esm/styles.css";
import React from "react";
import NavbarUi from "./ui/NavbarUi";
import SidebarUi from "./ui/SidebarUi";

function DashboardFrame({ children }) {
  const logo = {
    width: 86,
    topBarSource:
      "https://cdn.shopify.com/s/files/1/2376/3301/files/Shopify_Secondary_Inverted.png",
    contextualSaveBarSource:
      "https://cdn.shopify.com/s/files/1/2376/3301/files/Shopify_Secondary_Inverted.png",
    accessibilityLabel: "Shopify",
  };

  return (
    <AppProvider>
      <Frame logo={logo} topBar={<NavbarUi />} navigation={<SidebarUi />}>
        {children}
      </Frame>
    </AppProvider>
  );
}

export default DashboardFrame;
