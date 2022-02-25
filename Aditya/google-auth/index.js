const express = require('express');
const app = express();
var session = require('express-session')
require('./auth');
const passport = require('passport');


function isLoggedIn(req, res, next) {
    req.user ? next() : res.sendStatus(401);
  }

  app.use(session({
    secret: 'keyboard cat',
    resave: false,
    saveUninitialized: true,
    // cookie: { secure: true }
  }))

app.use(passport.initialize());
app.use(passport.session());



app.get('/', (req, res) => {
    res.send('<a href="/auth/google">Authenticate with Google</a>');
});

app.get('/auth/google',
    passport.authenticate('google', { scope: ['email', 'profile'] }
    ));

app.get('/auth/google/callback',
    passport.authenticate('google', {
        successRedirect: '/protected',
        failureRedirect: '/auth/google/failure'
    })
);


app.get('/protected', isLoggedIn, (req, res) => {
    res.send(`Hello ${req.user.displayName}`);
  });

  app.get('/logout', (req, res) => {
    req.logout();
    req.session.destroy();
    res.send('Goodbye!');
  });

app.get('/auth/google/failure', (req, res) => {
    res.send('Failed to authenticate..');
});


app.listen(5000, () => console.log('http://localhost:5000'));