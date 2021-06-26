const express = require("express");
const notes = require("./data/notes"); //importing
const dotenv = require("dotenv"); //importing
const connectDB = require("./config/db");
const userRoutes = require("./Routes/UserRoutes");
const { notFound, errorHandler } = require("./middlewares/errorMiddleware");

const app = express();
dotenv.config();
connectDB();
app.use(express.json()); //you have to do it everytime whenever you accept json data

// app.get("/", (req, res) => {
//   res.send("API is working...");
// });

// app.get("/api/notes", (req, res) => {
//   res.json(notes);
// });

app.get("/api/notes/:id", (req, res) => {
  const note = notes.find((n) => n._id === req.params.id); //req.params= bring and request all the parametres that we have in the id;
  res.send(note);
});

app.use("/api/users", userRoutes);

app.use(notFound);
app.use(errorHandler);

const PORT = process.env.port || 5000; //making a variable to call the .env file

app.listen(PORT, console.log(`Server started on PORT ${PORT}`));
