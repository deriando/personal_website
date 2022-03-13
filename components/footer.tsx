import { Box, Flex, Divider, Text } from "@chakra-ui/react";

export default function Footer() {
  return (
    <Box as="footer" bottom="0" position="absolute" w="100vw">
      <Divider />
      <Flex flexDir="column" m={["1em 1em 0"]}>
        <Text fontSize="sm" textColor="deri.blue">
          This website is a constant work-in-progress as I continue to build
          more products and achieve more experiences.
        </Text>
      </Flex>
    </Box>
  );
}
