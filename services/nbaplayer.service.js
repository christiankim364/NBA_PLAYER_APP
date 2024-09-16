const playerRepository = require('../database/nbaplayer.repository');

const fetchAllPlayers = async () => {
  return await playerRepository.getAllPlayers();
};

const fetchPlayerById = async (id) => {
  return await playerRepository.getPlayerById(id);
};

module.exports = {
  fetchAllPlayers,
  fetchPlayerById,
};
