import {readdir} from "fs/promises"

async function getProjects() {
  try {
    const files = await readdir(__dirname);
    for (const file of files) console.log(file);
    return files;
  } catch (err) {}
}

console.log(getProjects())