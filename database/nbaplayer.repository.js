const getDBConnection = require('./connection');

// Create Player Repository Class
class PlayerRepository {
  static async initialize() {
    const conn = await getDBConnection();
    
    try {
      await conn.query(`
        CREATE TABLE IF NOT EXISTS players (
          id INT AUTO_INCREMENT PRIMARY KEY UNIQUE,
          Player VARCHAR(255) NOT NULL,
          start_year INT NOT NULL,
          end_year INT NOT NULL,
          PTS DECIMAL(4,1),
          TRB DECIMAL(4,1),
          AST DECIMAL(4,1),
          STL DECIMAL(4,1),
          BLK DECIMAL(4,1),
          FG DECIMAL(5,3),
          TP DECIMAL(5,3),
          FT DECIMAL(5,3),
          img VARCHAR(250)
        )
      `);

      const greatestNBAPlayers = [
        { id: 1, Player: 'Kareem Abdul-Jabbar', start_year: 1970, end_year: 1989, PTS: 24.6, TRB: 11.2, AST: 3.6, STL: 0.9, BLK: 2.6, FG: 0.559, TP: null, FT: 0.721, img: 'images/kareem.jpg' },
        { id: 2, Player: 'Ray Allen', start_year: 1997, end_year: 2014, PTS: 18.9, TRB: 4.1, AST: 3.4, STL: 1.1, BLK: 0.2, FG: 0.452, TP: 0.400, FT: 0.894, img: 'images/ray-allen.jpg' },
        { id: 3, Player: 'Giannis Antetokounmpo', start_year: 2014, end_year: 2024, PTS: 23.4, TRB: 9.8, AST: 4.9, STL: 1.1, BLK: 1.2, FG: 0.545, TP: 0.286, FT: 0.702, img: 'images/giannis.jpg' },
        { id: 4, Player: 'Carmelo Anthony', start_year: 2004, end_year: 2022, PTS: 22.5, TRB: 6.2, AST: 2.7, STL: 1.0, BLK: 0.5, FG: 0.447, TP: 0.355, FT: 0.814, img: 'images/carmelo.jpg' },
        { id: 5, Player: 'Tiny Archibald', start_year: 1971, end_year: 1984, PTS: 18.8, TRB: 2.3, AST: 7.4, STL: 1.1, BLK: 0.1, FG: 0.467, TP: null, FT: 0.810, img: 'images/tiny-archibald.jpg' },
        { id: 6, Player: 'Paul Arizin', start_year: 1951, end_year: 1962, PTS: 22.8, TRB: 8.6, AST: 2.3, STL: null, BLK: null, FG: 0.421, TP: null, FT: 0.810, img: 'images/paul-arizin.jpg' },
        { id: 7, Player: 'Charles Barkley', start_year: 1985, end_year: 2000, PTS: 22.1, TRB: 11.7, AST: 3.9, STL: 1.5, BLK: 0.8, FG: 0.541, TP: 0.266, FT: 0.735, img: 'images/charles-barkley.jpg' },
        { id: 8, Player: 'Rick Barry', start_year: 1966, end_year: 1980, PTS: 23.2, TRB: 6.5, AST: 5.1, STL: 2.0, BLK: 0.5, FG: 0.449, TP: null, FT: 0.900, img: 'images/rick-barry.jpg' },
        { id: 9, Player: 'Elgin Baylor', start_year: 1959, end_year: 1972, PTS: 27.4, TRB: 13.5, AST: 4.3, STL: null, BLK: null, FG: 0.431, TP: null, FT: 0.780, img: 'images/elgin-baylor.jpg' },
        { id: 10, Player: 'Dave Bing', start_year: 1967, end_year: 1978, PTS: 20.3, TRB: 3.8, AST: 6.0, STL: 1.3, BLK: 0.2, FG: 0.441, TP: null, FT: 0.775, img: 'images/dave-bing.jpg' }
      ];

      // Using a regular for loop to check and insert items
      for (let i = 0; i < greatestNBAPlayers.length; i++) {
        const nbaPlayer = greatestNBAPlayers[i];

        // Check if the item already exists
        const [existingPlayer] = await conn.query(`SELECT * FROM players WHERE Player = ?`, [nbaPlayer.Player]);

        if (existingPlayer.length === 0) {
          await conn.query(
            `INSERT INTO players (Player, start_year, end_year, PTS, TRB, AST, STL, BLK, FG, TP, FT, img) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`,
            [
              nbaPlayer.Player, nbaPlayer.start_year, nbaPlayer.end_year, nbaPlayer.PTS, nbaPlayer.TRB, nbaPlayer.AST, nbaPlayer.STL, nbaPlayer.BLK, nbaPlayer.FG,
              nbaPlayer.TP, nbaPlayer.FT, nbaPlayer.img,
            ]
          );
        }
      }
    } catch (err) {
      console.error('Error initializing the player repository:', err);
    } finally {
      if (conn) await conn.end();
    }
  }

  static async getAllPlayers() {
    const conn = await getDBConnection();
    try {
      const [rows] = await conn.query('SELECT * FROM players');
      return rows;
    } catch (err) {
      console.error('Error fetching all players:', err);
      throw err;
    } finally {
      if (conn) await conn.end();
    }
  }
}

module.exports = PlayerRepository;
