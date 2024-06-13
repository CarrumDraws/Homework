//* 1. Set up the repository.
// npm init -y
// npm i express
// npm i -D typescript @types/node @types/express

//* 2. Configure tsconfig.json.
// npx tsc --init

//* 3. Set up live transpiling and reloading.
// npm i -D nodemon

//* Option 1: nodemon and tsc
// "nodemon": "nodemon --watch src --ext ts --exec \"tsc && node dist/index.js\""

//* Option 2: nodemon and concurrently
// npm i -D concurrently
// "concurrently": "concurrently \"tsc --watch\" \"nodemon dist/index.js\""

//* Option 3: nodemon and ts-node
// npm i -D ts-node
// "ts-node": "nodemon --watch src --ext ts --exec \"ts-node src/index.ts\"",

//* Option 4: bun
// npm i -D bun
// "bun": "bun --watch src/index.ts"

// { Express, Request, Response, NextFunction } are Types
import express, { Express, Request, Response, NextFunction } from "express";

const app: Express = express();
const port: number = 3000;

app.get("/", (_req: Request, res: Response, _next: NextFunction) => {
  res.json({ message: "Express TS" });
});

app.listen(port, () => {
  console.log(`Express is listening at http://localhost:${port}`);
});
