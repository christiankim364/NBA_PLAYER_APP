const express = require('express');
const path = require('path');
const router = express.Router();

// Serve the players view
router.get('/players', (req, res) => {
  res.render('players'); 
});

// Index Route
router.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '../public', 'index.html')); 
});

module.exports = router;
