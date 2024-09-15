// services/nbaplayer.service.js
const playerRepository = require('../database/nbaplayer.repository');

const fetchAllPlayers = async () => {
  return await playerRepository.getAllPlayers();
};

const fetchPlayerById = async (id) => {
  return await playerRepository.getPlayerById(id);
};

// Add more service functions as needed

module.exports = {
  fetchAllPlayers,
  fetchPlayerById,
  // Other functions
};
