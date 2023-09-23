import express from "express";
import { PORT, mongoDBURL } from "./config.js";
import mongoose from "mongoose";
import tasksRoute from './routes/tasksRoute.js';
import cors from 'cors';

const app = express();

// Middleware for parsing request body
app.use(express.json());

// Middleware for handling CORS POLICY
// Option 1: Allow all origins with Default of cors(*)
app.use(cors());
// Option 2: Allow custom origin
// app.use(
//   cors({
//     origin: "http://localhost:3000",
//     methods: ["GET", "POST", "PUT", "DELETE"],
//     allowedHeaders: ['Content-Type'],
//   })
// )

app.get('/', (request, response) => {
  console.log(request)
  return response.status(234).send("Hello World!");
});

app.use('/tasks', tasksRoute);

mongoose
  .connect(mongoDBURL)
  .then(() => {
    console.log("App connected to database")
    app.listen(PORT, () => {
      console.log(`Server running on port ${PORT}`);
    });
  })
  .catch((error) => {
    console.log(error)
  })



