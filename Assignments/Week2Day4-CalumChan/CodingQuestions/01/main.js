// To-Do App v2
// 1) GET: /todos User can read from a file that includes all the to-do item and display them in console. If the file not exist, throw an error says ‘file not exists’
// 2) POST: /todos User can add a to-do item, including title and description, the id,
// timestamp and status(initial value should set to NOT FINISH) should be generated from
// backend.
// 3) PUT: /todo/ User can toggle the status(FINISH or NOT FINISH) of the item by clicking on
// the table row (No Need to Create the UI- Just display updated todo in console)

// Todo: Title, Description, ID, timestamp, status (Store as JSON?)

// ASSUMPTIONS : All data stored in a single file
// File can be of any type. I'm choosing a JSON file so my Todo data can be parsed easily.
// Todo's ID is a random number from 0 - 9999.
// Toggle Todo toggles the TODO based off ID. ID is passed in as a URL Parameter.
// I'm using the fs.promises functions because they return promises and can be used with try/catch and async/await. Prevents callback hell.
const express = require("express");
const fs = require("fs");

const app = express();
app.use(express.json());

// Retrieve All Todos
app.get("/todos", async (_req, res) => {
  try {
    // Retrieve Data From File
    // fs.promises.readFile is better than fs.readFile
    // It returns a promise and can be used in async/await try/catch blocks
    // "utf8" interprets file content as UTF-8 Encoded Text instead of a buffer
    let data = await fs.promises.readFile("data.json", "utf8");
    let todos = JSON.parse(data);
    res.send(todos);
  } catch (err) {
    console.log(err);
    return res.status(404).send({ error: "file not exists" });
  }
});

// Add New Todo
app.post("/todos", async (req, res) => {
  const { title, description } = req.body;

  // Check Params
  if (!title || !description) {
    console.error("No Title or Description Provided");
    return res.status(400).send({ error: "No Title or Description Provided" });
  }

  try {
    // Check if "data.json" file exists. If it doesnt, create it + add [].
    // Can nest try/catch blocks to specify error handling!
    try {
      await fs.promises.access("data.json"); // Checks availability of a file/directory
    } catch (err) {
      // File does not exist, create it with an empty array
      await fs.promises.writeFile("data.json", JSON.stringify([]));
      console.log("data.json created");
    }

    let data = await fs.promises.readFile("data.json", "utf8");
    let todos = JSON.parse(data);

    // Push new Todo
    todos.push({
      title: title,
      description: description,
      id: Math.floor(Math.random() * 10000),
      timestamp: Date.now(),
      status: "NOT FINISH",
    });

    // Write to data.json (Overwrite File Contents)
    // JSON.stringify(JS Object, What properties to include (null = all), spaces for readablility)
    await fs.promises.writeFile("data.json", JSON.stringify(todos, null, 2));
    console.log("Added Todo");
    return res.sendStatus(200);
  } catch (err) {
    console.error(err);
    res.status(500).send({ error: "An error occurred" });
  }
});

// Toggle Todo (ID Passed as URL Parameter)
app.put("/todo/:id", async (req, res) => {
  let { id } = req.params;

  // Check Params
  if (!id) return res.status(400).send({ error: "No ID Provided" });

  try {
    // Read the data from the file
    // fs.promises.readFile is better than fs.readFile
    // It's a promise and can be used in async/await try/catch blocks
    const data = await fs.promises.readFile("data.json", "utf8");
    let todos = JSON.parse(data);

    // Find the todo item with the given ID + update todo.status
    let todoFound = false;
    todos = todos.map((todo) => {
      if (todo.id == id) {
        todoFound = true;
        todo.status = todo.status === "NOT FINISH" ? "FINISH" : "NOT FINISH";
      }
      return todo;
    });

    if (!todoFound)
      return res.status(404).send({ error: "Invalid ID: Todo not found" });

    // Write the updated data back to the file
    await fs.promises.writeFile("data.json", JSON.stringify(todos, null, 2));

    return res.status(200).send({ message: "Updated Todo" });
  } catch (err) {
    return res.status(500).send({ error: "Error Updating Todos" });
  }
});

// start the server and listen on port 3000
app.listen(3000, () => {
  console.log("http://localhost:3000");
});
