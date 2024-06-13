const fs = require("fs");

function getNums() {
  let ret = "";
  for (let i = 0; i < 100; i++) {
    ret += Math.floor(Math.random() * 100) + (i == 99 ? "" : " ");
  }
  return ret;
}

// Writes data to file
async function writeToFile(data) {
  try {
    await fs.promises.writeFile("file.txt", data);
    await readSort();
  } catch (err) {
    console.log(err);
  }
}

async function readSort() {
  try {
    // Returns "Buffer" : Default return type from fs.readFile functions
    let buffer = await fs.promises.readFile("file.txt");
    let data = buffer.toString(); // .toString() converts buffer to string
    console.log(data);
    let nums = data
      .split(" ")
      .map((value, index) => {
        return Number(value);
      })
      .sort((a, b) => {
        return a - b;
      })
      .join(" ");
    await fs.promises.writeFile("file.txt", nums);
  } catch (err) {
    console.log(err);
  }
}

writeToFile(getNums());
