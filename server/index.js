
const cookieSession = require("cookie-session");
const express = require("express");
const cors = require("cors");
const passportSetup = require("./passport");
const passport = require("passport");
const authRoute = require("./routes/auth");
const session = require("express-session");

const app = express();

// app.use(
//   cookieSession({ name: "session", keys: ["lama"], maxAge: 24 * 60 * 60 * 100 })
// );
app.use(
  session({
    secret: "your-secret-key",
    resave: false,
    saveUninitialized: false,
  })
);


app.use(passport.initialize());
app.use(passport.session());

app.use(
  cors({
    origin: "http://localhost:3000",
    methods: "GET,POST,PUT,DELETE",
    credentials: true,
  })
);

app.use("/auth", authRoute);

app.listen("5000", () => {
  console.log("Server is running!");
});

// // app.js
// import express from "express";
// import bodyParser from "body-parser";
// const { json: _json, urlencoded } = bodyParser;

// import cookieParser from "cookie-parser";
// import cors from "cors";
// import mongoose from "mongoose";

// import cookieSession from "cookie-session";
// import passportSetup from "./passport.js";
// import passport from "passport";
// import authRoute from "./routes/auth.js";
// const app = express();

// app.use(
//   cookieSession({ name: "session", keys: ["misge"], maxAge: 24 * 60 * 60 * 100 })
// );

// app.use(passport.initialize());
// app.use(passport.session());

// app.use(
//   cors({
//     origin: "http://localhost:3000",
//     methods: "GET,POST,PUT,DELETE",
//     credentials: true,
//   })
// );

// app.use("/auth", authRoute);

// app.listen("5000", () => {
//   console.log("Server is running!");
// });

// import authRoutes from "./routes/authRoutes.js";
// import { DB_URI, PORT } from "./config.js";

// mongoose.connect(DB_URI, {
//   useNewUrlParser: true,
//   useUnifiedTopology: true,
// });
// mongoose.connection.on("connected", () => {
//   console.log("Connected to MongoDB");
// });

// const app = express();
// app.use(cors());
// app.use(_json());
// app.use(urlencoded({ extended: true }));
// app.use(cookieParser());

// app.use("/api/auth", authRoutes);

// app.listen(PORT, () => {
//   console.log(`Server listening on port ${PORT}`);
// });


// // // Middlewares
// // app.use(json());
// // app.use(cookieParser());
// // app.use(cors({ credentials: true, origin: "http://localhost:3000" }));

// // // Connect to MongoDB
// // connect(process.env.MONGODB_URI, {
// //   useNewUrlParser: true,
// //   useUnifiedTopology: true,
// // });



// // // Load routes
// // import authRoutes from "./routes/authRoutes";

// // // Use routes
// // app.use("/api/auth", authRoutes);

// // // Start server
// // app.listen(process.env.PORT || 5000, () => {
// //   console.log(`Server is running on port ${process.env.PORT || 5000}`);
// // });
