// Mainly uses streams and event handling...?

const fs = require("fs");

const writeStream = fs.createWriteStream("file.txt");

// Add 100 Random Numbers to writeStream, one by one
for (let i = 0; i < 100; i++) {
  let num = Math.floor(Math.random() * 100);
  writeStream.write(num + " ");
}
writeStream.end(); // Close the Stream, triggers "finish" event

const readStream = fs.createReadStream("file.txt");
let str = "";
writeStream.on("finish", () => {
  // Print the 100 Random Numbers AFTER writeStream has finished
  readStream.on("data", (chunk) => {
    let data = chunk.toString();
    console.log(data);
    str += data;
  });
});

// Triggers once readStream completes
readStream.on("end", () => {
  str = str
    .split(" ")
    .sort((a, b) => {
      return a - b;
    })
    .join(" "); // Sort Numbers
  fs.writeFile("file.txt", str); // Replace Original Content
});
