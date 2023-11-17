"use client";

import React from "react";
import "@shopify/polaris/build/esm/styles.css";
import {
  AppProvider,
  BlockStack,
  Button,
  Card,
  Form,
  FormLayout,
  Link,
  Text,
  TextField,
} from "@shopify/polaris";

function RegisterCard() {
  return (
    <AppProvider>
      <Card>
        <BlockStack gap="300">
          <Text variant="headingLg" as="h4">
            Register
          </Text>
          <Form>
            <FormLayout>
              <BlockStack gap="100">
                <TextField label="Email" type="email" autoComplete="email" />
                <TextField
                  label="Password"
                  type="password"
                  autoComplete="password"
                />
              </BlockStack>
            </FormLayout>
          </Form>
          <Button variant="primary" tone="success" submit>
            Register
          </Button>
          <Text variant="bodyLg" as="p">
            Already have an account? <Link url="/login">Login</Link>
          </Text>
        </BlockStack>
      </Card>
    </AppProvider>
  );
}

export default RegisterCard;
