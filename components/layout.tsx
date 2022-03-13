import { Box, Divider } from "@chakra-ui/react";
import Footer from "./footer";
import Navbar from "./navbar";

export default function Layout({ children }: any) {
  return (
    <Box position="relative" minH="95vh">
      <Navbar />
      <main style={{ paddingBottom: "8em" }}>{children}</main>
      <Footer />
    </Box>
  );
}
