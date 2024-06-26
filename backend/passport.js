const GoogleStrategy = require("passport-google-oauth20").Strategy;
const GithubStrategy = require("passport-github").Strategy;
// const FacebookStrategy = require("passport-facebook").Strategy;
const passport = require("passport");
const env = require("dotenv");
env.config();

passport.use(
  new GoogleStrategy(
    {
      clientID: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
      callbackURL: "/auth/google/callback",
    },
    function (accessToken, refreshToken, profile, done) {
      done(null, profile);
    }
  )
);
// User.findOrCreate({ googleId: profile.id }, function (err, user) {
//   return cb(err, user);
// });

passport.use(
  new GithubStrategy(
    {
      clientID: process.env.GITHUB_CLIENT_ID,
      clientSecret: process.env.GITHUB_CLIENT_SECRET,
      callbackURL: "/auth/github/callback",
    },
    function (accessToken, refreshToken, profile, done) {
      done(null, profile);
    }
  )
);
// User.findOrCreate({ githubId: profile.id }, function (err, user) {
//   return cb(err, user);
// });

// passport.use(
//   new FacebookStrategy(
//     {
//       clientID: process.env.FACEBOOK_APP_ID,
//       clientSecret: process.env.FACEBOOK_APP_SECRET,
//       callbackURL: "/auth/facebook/callback",
//     },
//     function (accessToken, refreshToken, profile, done) {
//       done(null, profile);
//     }
//   )
// );
// User.findOrCreate({ googleId: profile.id }, function (err, user) {
//   return cb(err, user);
// });

passport.serializeUser((user, done) => {
  done(null, user);
});
// const user = {
//   username: profile.displayName,
//   avatar: profile.photos[0],
// };
// user.save();

passport.deserializeUser((user, done) => {
  done(null, user);
});
