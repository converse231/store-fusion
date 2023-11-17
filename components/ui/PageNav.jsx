"use client";

import { AppProvider, Pagination } from "@shopify/polaris";

function PageNav() {
  return (
    <Pagination
      onPrevious={() => {
        console.log("Previous");
      }}
      onNext={() => {
        console.log("Next");
      }}
      type="table"
      hasNext
      label="1-50 of 8,450 orders"
    />
  );
}

export default PageNav;
