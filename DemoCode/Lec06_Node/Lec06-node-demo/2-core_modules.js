// Core Modules: modules that are built-in to the Node.js runtime environment.
// No need to install additional packages.

//  ----------fs---------

const fs = require("fs");

// // Asynchronous
// // fs.writeFile(filename, content, callback() =>{})
// fs.writeFile("file.txt", "file is created by fs.writeFile", () => {
//   console.log("writeFile finished!"); // 2
// });

// // Asynchronous
// // fs.readFile(filename, callback(err, data) => {})
// fs.readFile("file.txt", (err, data) => {
//   if (!err) {
//     console.log(data.toString()); // 3
//   } else {
//     console.error(err);
//   }
// });

// // Syncronous - Blocks execution until file is written
// // fs.writeFileSync(filename, content)
// fs.writeFileSync("syncFile.txt", "file is created by fs.writeFileSync");
// // Syncronous - Blocks execution until file is written
// // fs.appendFileSync(filename, content)
// // Adds content to file
// fs.appendFileSync("syncFile.txt", "\nadd something new");
// // Syncronous - Blocks execution until file is written
// // Read content of a file
// console.log(fs.readFileSync("syncFile.txt").toString()); // 1

// ----------stream---------

// const fs = require("fs");

// Create a Write Stream targeting "stream.txt" file
// (Streams are better for larger chunks of data- no need to process/store all data at once)
// const writeStream = fs.createWriteStream("stream.txt");

// // Write to the Stream
// for (let i = 0; i < 10000; i++) {
//   writeStream.write(i + "\n"); // Note: Each character and "\n" is one byte each.
// }

// writeStream.end(); // Close the Stream, triggers "finish" event

// // event listener : triggers callback on "finish" event
// writeStream.on("finish", () => console.log("writeStream finished"));

// // Create a Read Stream targeting "stream.txt" file
// // Read bytes from position 0 to 10 (inclusive)
// const readStream = fs.createReadStream("stream.txt", { start: 0, end: 10 });
// // Triggers when a chunk of data is available.
// // By default, triggers on every 64 bytes read.
// readStream.on("data", (chunk) => {
//   console.log("readStream start");
//   console.log(chunk.toString());
// });
// // Triggers when theres no more data to be read
// readStream.on("end", () => {
//   console.log("readStream end");
// });

//  ----------path---------

// const path = require("path"); // Utilities for working with file/directory paths
// console.log("dirname: " + __dirname);
// console.log("filename: " + __filename);
// // path.join() combines path segments into one path
// const filePath = path.join(__dirname, "/1-intro.js");
// console.log("filepath: " + filePath);

// // Can even move up to the parent directory
// const parentDir = path.join(__dirname, "..", "file.txt");
// console.log(parentDir);

//  ----------querystring---------

// const querystring = require("querystring");
// // querystring.parse() converts query to object
// const q = querystring.parse("name=fan&password=psd");
// console.log(JSON.stringify(q)); // Convert to JSON String for console.logging
// // querystring.stringify() converts object to query
// console.log(`after stringify: ${querystring.stringify(q)}`);

//  ----------url---------

// const url = require("url");
// const URL = "http://localhost:3000/index.html?name=fan&password=psd";
// const q = url.parse(URL, true); // Parses a URL into an object

// console.log(q.host);
// console.log(q.pathname);
// console.log(q.search);
// console.log(JSON.stringify(q.query));

//  ----------process---------

// // process : Provides info/control over the current Node.js Process
// // Node.js Process : The current process created to handle JS code execution
// console.log(process.env); // User Environment Variables

// console.log("Architecture:", process.arch);
// console.log(process.cwd());
// console.log(process.memoryUsage());
// console.log(process.cpuUsage());
