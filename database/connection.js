const mysql = require('mysql2/promise');
require('dotenv').config(); 

const getDBConnection = async () => {
  const connection = await mysql.createConnection({
    host: process.env.DB_HOST || '127.0.0.1', 
    user: process.env.DB_USER || 'root',     
    password: process.env.DB_PASSWORD || '', 
    database: process.env.DB_DATABASE || 'nbaplayer_db', 
  });
  return connection;
};

module.exports = getDBConnection;
