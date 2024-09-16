const { NbaplayerRepository } = require('./database');
const app = require('./create.app'); 

const PORT = process.env.PORT || 3000;

(async () => {
  await NbaplayerRepository.initialize();
  console.log('NbaplayerRepository initialized and ready.');

  app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
  });
})();
