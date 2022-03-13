import { Flex, Heading, Spacer, Text } from "@chakra-ui/layout";
import {
  ListItem,
  OrderedList,
  Table,
  Tbody,
  Td,
  Th,
  Thead,
  Tr,
} from "@chakra-ui/react";
import Image from "next/image";
import productMenu from "./menu.png";
import productDemo from "./demo.gif";

export default function ytStreamInfo() {
  return (
    <Flex justifyContent="center" padding="0 5vw">
      <Flex flexDirection="column" maxWidth="40em">
        <Image src={productMenu} alt="" layout="intrinsic" />
        <Heading textAlign="center" color="deri.msuGreen">
          YT Stream Info
        </Heading>
        <Table>
          <Thead>
            <Tr>
              <Th>Technology</Th>
              <Th>Remarks / Why</Th>
            </Tr>
          </Thead>
          <Tbody>
            <Tr>
              <Td>Cloudflare Workers</Td>
              <Td>
                Needed to hide API key and decided to use Function-as-a-Service
                solution such as AWS Lambda but decided on Cloudflare worker due
                to simplicity and generous free tier.
              </Td>
            </Tr>
            <Tr>
              <Td>Vanilla JS</Td>
              <Td>
                Simple project with no need for libraries such as jQuery, etc.
              </Td>
            </Tr>
          </Tbody>
        </Table>
        <Text marginTop="1em" fontSize="3xl" color="deri.blue">
          Why I made this.
        </Text>
        <Text>
          I first decided to make this after learning about APIs in general and
          when I dug through the YouTube API documentation, I found out how much
          info is hidden from the UI. It was also around this time when I
          started watching live streams on YouTube and watching the archives, I
          wanted to watch it in sequence from multiple channels.
        </Text>
        <Text marginTop="1em" fontSize="3xl" color="deri.blue">
          What does it do?
        </Text>
        <Image src={productDemo} alt="" />
        <Text>
          The application fetches live stream information from the YouTube API
          and presents it in a user-friendly UI
        </Text>
        <br />
        <Text>
          The flow of the application goes like this:
          <OrderedList>
            <ListItem>
              Get YouTube video URL from user (via form or query string)
            </ListItem>
            <ListItem>Extract video ID from form using regex</ListItem>
            <ListItem>AJAX fetch from Cloudflare Worker</ListItem>
            <ListItem>
              Worker fetches data from YouTube API and return to browser as JSON
            </ListItem>
            <ListItem>JavaScript transforms JSON into HTML strings</ListItem>
            <ListItem>JavaScript writes to DOM</ListItem>
          </OrderedList>
        </Text>
      </Flex>
    </Flex>
  );
}
