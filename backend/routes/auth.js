const router = require("express").Router();
const passport = require("passport");
// const User = require("../models/user");
// const jwt = require("jsonwebtoken");
// const CryptoJS = require("crypto-js");
const env = require("dotenv");
env.config();

router.get("/login/success", (req, res) => {
  if (req.user) {
    res.status(200).json({
      success: true,
      message: "login successful",
      user: req.user,
    });
  }
});
// cookies: req.cookies
//jwt auth

router.get("/logout", (req, res) => {
  req.logout();
  res.redirect(process.env.CLIENT_URL);
});

router.get("/login/failed", (req, res) => {
  res.status(401).json({
    success: false,
    message: "login failed",
  });
});

router.get("/google", passport.authenticate("google", { scope: ["profile"] }));

router.get(
  "/google/callback",
  passport.authenticate("google", {
    successRedirect: process.env.CLIENT_URL,
    failureRedirect: "/login/failed",
  })
);

router.get("/github", passport.authenticate("github", { scope: ["profile"] }));

router.get(
  "/github/callback",
  passport.authenticate("github", {
    successRedirect: process.env.CLIENT_URL,
    failureRedirect: "/login/failed",
  })
);

// router.get("/facebook", passport.authenticate("github", { scope: ["profile"] }));

// router.get(
//   "/facebook/callback",
//   passport.authenticate("facebook", {
//     successRedirect: process.env.CLIENT_URL,
//     failureRedirect: "/login/failed",
//   })
// );

// router.post("/", (req, res) => {});

// router.post("/register", async (req, res) => {
//   const newUser = new User({
//     username: req.body.username,
//     email: req.body.email,
//     password: CryptoJS.AES.encrypt(
//       req.body.password,
//       process.env.PASS_CODE
//     ).toString(),
//   });
//   try {
//     const savedUser = await newUser.save();
//     res.status(201).json(savedUser);
//   } catch (err) {
//     res.status(500).json(err);
//   }
// });

// router.post("/emaillogin", async (req, res) => {
//   try {
//     const emailuser = await User.findOne({
//       username: req.body.username,
//     });
//     !emailuser && res.status(401).json("Incorrect Credentials!");
//     const hashPassword = CryptoJS.AES.decrypt(
//       emailuser.password,
//       process.env.PASS_CODE
//     );
//     const RealPassword = hashPassword.toString(CryptoJS.enc.Utf8);
//     RealPassword !== req.body.password &&
//       res.status(401).json("Incorrect Credentials!");

//     const accessToken = jwt.sign({ id: emailuser._id }, process.env.JWT_CODE, {
//       expiresIn: "1d",
//     });
//     const { password, ...others } = emailuser._doc;
//     res.status(200).json({ ...others, accessToken });
//   } catch (err) {
//     res.status(500).json(err);
//   }
// });

module.exports = router;
