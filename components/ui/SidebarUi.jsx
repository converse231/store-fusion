import { Navigation } from "@shopify/polaris";
import React from "react";
import { HomeMinor, OrdersMinor, StoreMinor } from "@shopify/polaris-icons";

function SidebarUi() {
  return (
    <Navigation location="/">
      <Navigation.Section
        items={[
          {
            url: "/dashboard",
            label: "Home",
            icon: HomeMinor,
          },
          {
            url: "/dashboard/allStores",
            excludePaths: ["#"],
            label: "All Stores",
            icon: StoreMinor,
            badge: "15",
          },
          {
            url: "#",
            excludePaths: ["#"],
            label: "Products",
            icon: OrdersMinor,
          },
        ]}
      />
    </Navigation>
  );
}

export default SidebarUi;
