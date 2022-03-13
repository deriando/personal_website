import { Flex, Link } from "@chakra-ui/react";
import { useEffect, useState } from "react";

export default function Navbar() {
  const [pathName, setPathName] = useState("");
  useEffect(() => {
    setPathName(window.location.pathname);
  }, []);
  return (
    <Flex justifyContent="center" mt="1em">
      <Link
        variant={pathName === "/" ? "navigationActive" : "navigation"}
        href="/"
      >
        Home
      </Link>
      <Link
        variant={pathName === "/portfolio" ? "navigationActive" : "navigation"}
        href="/portfolio"
      >
        Portfolio
      </Link>
      <Link
        variant={pathName === "/contact" ? "navigationActive" : "navigation"}
        href="/contact"
      >
        Contact
      </Link>
    </Flex>
  );
}
