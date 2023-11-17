import { ActionList, AppProvider, TopBar } from "@shopify/polaris";
import "@shopify/polaris/build/esm/styles.css";
import React from "react";
import {
  ArrowLeftMinor,
  LogOutMinor,
  ProfileMinor,
} from "@shopify/polaris-icons";

function NavbarUi() {
  const userMenuMarkup = (
    <TopBar.UserMenu
      actions={[
        {
          items: [{ content: "Profile Settings", icon: ProfileMinor }],
        },
        {
          items: [{ content: "Community forums" }],
        },
        {
          items: [{ content: "Sign out", icon: LogOutMinor }],
        },
      ]}
      name="Dharma"
      detail="Jaded Pixel"
      initials="D"
      open={false}
      onToggle={() => {}}
    />
  );

  const searchResultsMarkup = (
    <ActionList
      items={[
        { content: "Shopify help center" },
        { content: "Community forums" },
      ]}
    />
  );

  const searchFieldMarkup = (
    <TopBar.SearchField
      onChange={() => {}}
      value={() => {}}
      placeholder="Search"
      showFocusBorder
    />
  );

  return (
    <AppProvider>
      <TopBar
        searchField={searchFieldMarkup}
        searchResults={searchResultsMarkup}
        showNavigationToggle
        userMenu={userMenuMarkup}
      />
    </AppProvider>
  );
}

export default NavbarUi;
