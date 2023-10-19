const cors = require('cors');
const dotenv = require('dotenv');
const express = require('express');
const passport = require('passport');
const mongoose = require('mongoose');
const bodyparser = require("body-parser");
const session = require('express-session');
const cookiesParser = require("cookie-parser"); 
const authRoutes = require('./routes/userRoutes');
dotenv.config();

require('./passport');

const app = express();
const port = process.env.PORT || 3010;
const dbUri = process.env.MONGODB_URI;

// Middleware
app.use(cookiesParser('Bolingo@defaultpass'));

app.use(cors({
  origin: ['http://localhost:3000'],
  methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
  credentials: true,
}));

mongoose.connect(dbUri, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
  .then(() => {
    console.log('Connected to the database');
  })
  .catch((error) => {
    console.error('Error connecting to the database:', error);
});

dotenv.config();

app.use(cors({
  origin: ['http://localhost:3000'],
  methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
  credentials: true,
}));

app.use(bodyparser.urlencoded({ extended: false }));
app.use(bodyparser.json());
app.set('trust proxy', 1);
app.use(session({
  secret: 'Bolingo@defaultpass',
  resave: false,
  saveUninitialized: true,
  cookie: {
    sameSite: 'lax',
    secure: false,
    maxAge: 172800000
  }
}));

app.use(express.json());
app.use(passport.initialize());
app.use(passport.session());
app.use(express.static('public'));
app.use(express.json());
app.use(cookiesParser());
  
// Define your main routes here
app.use(authRoutes);
  
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
