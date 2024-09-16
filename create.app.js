const express = require('express');
const path = require('path');
const nbaplayerRouter = require('./routes/nbaplayer.route');
const viewsRouter = require('./routes/views.route');
const staticRouter = require('./routes/static.route');

const app = express();

// Serve static files
app.use(express.static(path.join(__dirname, 'public'))); 

// Use routers
app.use('/api/players', nbaplayerRouter);
app.use(viewsRouter);
app.use(staticRouter); 

module.exports = app;
