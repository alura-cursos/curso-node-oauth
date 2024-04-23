const passport = require('passport')
const GitHubStrategy = require('passport-github2').Strategy
require('dotenv').config()

passport.serializeUser(function (user, done) {
    done(null, user)
})


passport.deserializeUser(function (obj, done) {
    done(null, obj)
})

passport.use(new GitHubStrategy({
    clientID: GITHUB_CLIENT_ID,
    clientSecret: GITHUB_CLIENT_SECRET,
    callbackURL: "http://127.0.0.1:3000/auth/github/callback"
  },
  function(accessToken, refreshToken, profile, done) {
    // User.findOrCreate({ githubId: profile.id }, function (err, user) {
      return done(err, profile.id);
    })
)