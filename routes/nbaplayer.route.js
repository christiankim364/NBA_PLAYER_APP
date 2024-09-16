const express = require('express');
const PlayerRepository = require('../database/nbaplayer.repository'); 

const router = express.Router();

//gets the player data from the database
router.get('/players', async (req, res) => {
  try {
    const players = await PlayerRepository.getAllPlayers(); 
    res.json(players);
  } catch (error) {
    console.error('Error fetching players:', error);
    res.status(500).json({ error: 'Failed to fetch players' });
  }
});

module.exports = router;
