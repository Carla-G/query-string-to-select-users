const express = require("express");
require("dotenv").config();

const app = express();

app.use(express.json());

const port = process.env.APP_PORT ?? 5000;

const welcome = (req, res) => {
    res.send("Welcome to my app :)");
};
  
app.get("/", welcome);

const usersHandler = require("./usersHandler");

app.get("/api/users", usersHandler.getUsers);
app.get("/api/users/:id", usersHandler.getUsersById);

app.post("/api/users", usersHandler.postUser);

app.put("/api/users/:id", usersHandler.updateUser)

app.delete("/api/users/:id", usersHandler.deleteUser)

app.listen(port, (err) => {
    if (err) {
      console.error("Something bad happened");
    } else {
      console.log(`Server is listening on ${port}`);
    }
  });
