const express = require("express");
const app = express();
const port = 4000;
const bcrypt = require("bcryptjs");
const { Post, User } = require("./models");
const session = require('express-session');

app.use((req, res, next) => {
    console.log(`Request: ${req.method} ${req.originalUrl}`);
    res.on("finish", () => {
      // the 'finish' event will be emitted when the response is handed over to the OS
      console.log(`Response Status: ${res.statusCode}`);
    });
    next();
  });
  app.use(express.json());

  app.use(session({
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: false,
    cookie: {
      maxAge: 3600000 // 1 hour
    },
  }));

  //lOGIN REQUEST
  app.post('/login', async (req, res) => {
    try {
      // First, find the user by their email address
      const user = await User.findOne({ where: { email: req.body.email } });
  
      if (user === null) {
        // If the user isn't found in the database, return an 'incorrect credentials' message
        return res.status(401).json({
          message: 'Incorrect credentials',
        });
      }
  
      // If the user is found, we then use bcrypt to check if the password in the request matches the hashed password in the database
      bcrypt.compare(req.body.password, user.password, (error, result) => {
        if (result) {
          // Passwords match
          // TODO: Create a session for this user
          req.session.userId = user.id;
  
          res.status(200).json({
            message: 'Logged in successfully',
            user: {
              name: user.name,
              email: user.email,
            },
          });
        } else {
          // Passwords don't match
          res.status(401).json({ message: 'Incorrect credentials' });
        }
      });
    } catch (error) {
        console.error(error);
      res.status(500).json({ message: 'An error occurred during the login process' });
    }
  });

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