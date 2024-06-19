const express = require("express");
const cookieSession = require("cookie-session");
const passport = require("passport");
const cors = require("cors");
const app = express();
const PassportSetting = require("./passport");
const authRoute = require("./routes/auth");
const env = require("dotenv");
// const mongoose = require("mongoose");

env.config();

// mongoose
//   .connect(
//     `mongodb+srv://${process.env.MONGO_DB_USER}:${process.env.MONGO_DB_PASSWORD}@theenigmaproject.j6mzx.mongodb.net/${process.env.MONGO_DB_DATABASE}?retryWrites=true&w=majority`,
//     {
//       useNewUrlParser: true,
//       useUnifiedTopology: true,
//     }
//   )
//   .then(() => console.log("..Database Connected"))
//   .catch((err) => {
//     console.log(err);
//   });

app.use(
  cookieSession({
    name: "session",
    keys: ["enigma"],
    maxAge: 24 * 60 * 60 * 50,
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
app.use(express.json());

app.use("/api/auth", authRoute);

app.listen(process.env.PORT, () => {
  console.log(`listening on PORT ${process.env.PORT}`);
});
