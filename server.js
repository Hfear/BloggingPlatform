const express = require("express");
const app = express();
const port = 4000;
const bcrypt = require("bcryptjs");
const { Post, User } = require("./models");

app.use((req, res, next) => {
    console.log(`Request: ${req.method} ${req.originalUrl}`);
    res.on("finish", () => {
      // the 'finish' event will be emitted when the response is handed over to the OS
      console.log(`Response Status: ${res.statusCode}`);
    });
    next();
  });
  app.use(express.json());

//SIGNUP REQUEST
app.post("/signup", async (req, res) => {

    const hashedPassword = await bcrypt.hash(req.body.password, 10);
  
    try {
      const user = await User.create({
        name: req.body.name,
        email: req.body.email,
        password: hashedPassword,
      });
  
      // Send a response to the client informing them that the user was successfully created
      res.status(201).json({
        message: "User created!",
        user: {
          name: user.name,
          email: user.email,
        },
      });
    } catch (error) {
      if (error.name === "SequelizeValidationError") {
        return res.status(422).json({ errors: error.errors.map((e) => e.message) });
      }
      res.status(500).json({
        message: "Error occurred while creating user",
        error: error,
      });
    }
  });


app.get("/", (req, res) => {
  res.send("Welcome ");
});

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});