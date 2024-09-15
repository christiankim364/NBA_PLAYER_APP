// server.js
const dotenv = require('dotenv');
dotenv.config();

const createApp = require('./create.app');

const app = createApp();
const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
