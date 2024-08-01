"use client";
import Navbar from "@/components/Layout/horizontal/navbar";
import client from "@/service";
import { ApolloProvider } from "@apollo/client";
import { Box } from "@mui/material";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
    <ApolloProvider client={client}>
      <Box>
        <Navbar />
      </Box>
      <Box>{children}</Box>
      </ApolloProvider>
    </>
  );
}
