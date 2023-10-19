const jwt = require('jsonwebtoken');
const passport = require('passport'); 
const bcrypt = require('bcrypt');
const User = require("./models/User");
const GoogleStrategy = require('passport-google-oauth2').Strategy;

const GOOGLE_CLIENT_ID = '930100866404-hhne9ted66u588sjlpkv1itilfke8qtt.apps.googleusercontent.com';
const GOOGLE_CLIENT_SECRET = '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';

passport.serializeUser((user, done) => {
  done(null, user._id);
});

passport.deserializeUser(async (userId, done) => {
  const user = await User.findOne({ id: userId }); 
  done(null, user);
});

//Google Login
passport.use(new GoogleStrategy({
    clientID: GOOGLE_CLIENT_ID,
    clientSecret: GOOGLE_CLIENT_SECRET,
    callbackURL: "http://localhost:3011/google/callback",
    passReqToCallback: true, 
},
async function(request, accessToken, refreshToken, profile, done) {
  try {
    let email = profile.emails[0].value;
    let user = await User.findOne({ where: { email } });

    if (user) {
      return done(null, user);
    } else {
      const newUser = new User({
        fname: profile.displayName,
        email: profile.emails[0].value,
        googleId: profile.id,
      });

      await newUser.save();
      console.log('New user created');
      return done(null, newUser);
    }
  } catch (error) {
      console.error('Error while saving user:', error);
      return done(error, false); 
  }
}
));


