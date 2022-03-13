import { Flex } from "@chakra-ui/react";
import { useState } from "react";
// import { readdir } from "fs/promises";

/*
async function getProjects() {
  try {
    const files = await readdir(__dirname);
    for (const file of files) console.log(file);
    return files;
  } catch (err) {}
}
*/
export default function Portfolio() {
  const [projects, setProjects] = useState<String[]>([]);

  return <Flex flexDirection="column"></Flex>;
}
