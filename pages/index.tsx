import {
  Container,
  Flex,
  Heading,
  Link,
  ListItem,
  Text,
  Box,
  textDecoration,
  Divider,
} from "@chakra-ui/react";
import Head from "next/head";
import Image from "next/image";

export default function Home() {
  return (
    <div>
      <Head>
        <meta charSet="utf-8"></meta>
        <title>Deriando&apos;s Website</title>
        <meta
          name="description"
          content="All things done by me and experiences"
        ></meta>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1"
        ></meta>

        <meta property="og:title" content="Deriando's Site" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.deriando.com" />
        <meta
          property="og:image"
          content="https://www.deriando.com/profile.jpg"
        />
      </Head>

      <Flex
        direction="column"
        m={["1em 10vw 3em", "5em 20vw 3em"]}
        maxW={["20em", "35em"]}
      >
        <Heading size="3xl" color="deri.msuGreen" whiteSpace="pre-wrap">
          Hi! I’m{"\n"}Deriando Goh 👋
        </Heading>
        <Box as="ul" fontSize="2xl" textColor="deri.blue" m={["0.5em 0 0"]}>
          <Text>{"\u2022"} Front-end</Text>
          <Text>{"\u2022"} Back-end</Text>
          <Text>{"\u2022"} System Admin</Text>
          <Text>{"\u2022"} DevOps</Text>
        </Box>
        <Box
          as="a"
          display="inline"
          bg="deri.yellowRed"
          textColor="deri.blue"
          borderRadius="25px"
          p="0.2em 0.8em"
          fontWeight="semibold"
          m="1em 0 0"
          href="./Deriando-Goh-Resume.pdf"
          target="_blank"
          _hover={{ textDecoration: "underline" }}
          maxW="13em"
          textAlign="center"
        >
          Download Résumé / CV
        </Box>
      </Flex>
    </div>
  );
}
