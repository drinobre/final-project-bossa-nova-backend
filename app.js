import express from "express";
import cors from "cors";
import usersRouter from "./routes/users.js";
import mongoose from "mongoose";
import resourcesRouter from "./routes/resources.js";

// connect to Mongoose database via the credentials defined on .env file
mongoose.connect(
  process.env.NODE_ENV === "test"
    ? process.env.TEST_DATABASE_URL
    : process.env.DATABASE_URL
);
export const db = mongoose.connection;

// check the connection
db.on("error", (error) => console.log(error));
db.once("open", () => console.log("Connected to Database"));

// .use add a middleware
const app = express();

app.use(express.json());

app.use(cors());

app.use("/api/user", usersRouter);
app.use("/api/resources", resourcesRouter);

export default app;
