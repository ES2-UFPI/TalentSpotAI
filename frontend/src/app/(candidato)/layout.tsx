import Navbar from "@/components/Layout/horizontal/navbar";
import { Box } from "@mui/material";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Box>
        <Navbar />
      </Box>
      <Box>{children}</Box>
    </>
  );
}
