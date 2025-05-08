import express from 'express';

// app
const app = express();

// middlewares
app.use(express.json());

// routes

// connections and listeners
app.listen(5000, () => {
  console.log("Server opened on port 5000");
});
