//routes/static.route.js
const express = require('express');
const path = require('path');
const router = express.Router();

//static files from the public directory
router.use(express.static(path.join(__dirname, '../public')));

module.exports = router;
