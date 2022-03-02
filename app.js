// ℹ️ Gets access to environment variables/settings
// https://www.npmjs.com/package/dotenv
require("dotenv/config");

// ℹ️ Connects to the database
require("./db");
// Handles http requests (express is node js framework)
// https://www.npmjs.com/package/express
//const express = require("express");
const express = require('express');
const cors = require('cors');
const app = express();
app.use(cors());
const path = require('path');
//handling cross origin requests CORS


// ℹ️ This function is getting exported from the config folder. It runs most pieces of middleware
require("./config")(app);

app.use(express.static(path.join(__dirname, 'public')));

//adding CORS middlewear => cors header in response
//app.use(cors({
  //  origin: 'https://octane-jet.herokuapp.com'
//})); //https://octane-jet.herokuapp.com/

// // Serve static files from client/build folder
app.use(express.static('client/build'));

// For any other routes: serve client/build/index.html SPA



// 👇 Start handling routes here
// Contrary to the views version, all routes are controlled from the routes/index.js
//const allRoutes = require("./routes");
//app.use("/api", allRoutes);

const allRoutes = require('./routes');
app.use('/api', allRoutes,);

const auth = require('./routes/auth');
app.use('/api', auth);

const jetskiRoutes = require('./routes/jetski')
app.use('/api', jetskiRoutes);

const reservation = require("./routes/reservation");
app.use('/api', reservation);


app.use((req, res, next) => {
    res.sendFile(`${__dirname}/client/build/index.html`, err => {
      console.log(err)
      if (err) next(err)
    })
  });

// ❗ To handle errors. Routes that don't exist or errors that you handle in specific routes
require("./error-handling")(app);

module.exports = app;
