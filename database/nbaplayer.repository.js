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

      //Array of player objects
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
        { id: 10, Player: 'Dave Bing', start_year: 1967, end_year: 1978, PTS: 20.3, TRB: 3.8, AST: 6.0, STL: 1.3, BLK: 0.2, FG: 0.441, TP: null, FT: 0.775, img: 'images/dave-bing.jpg' },
        { id: 11, Player: 'Larry Bird', start_year: 1980, end_year: 1992, PTS: 24.3, TRB: 10.0, AST: 6.3, STL: 1.7, BLK: 0.8, FG: 0.496, TP: 0.376, FT: 0.886, img: 'images/larry-bird.jpg' },
        { id: 12, Player: 'Kobe Bryant', start_year: 1997, end_year: 2016, PTS: 25.0, TRB: 5.2, AST: 4.7, STL: 1.4, BLK: 0.5, FG: 0.447, TP: 0.329, FT: 0.837, img: 'images/kobe-bryant.jpg' },
        { id: 13, Player: 'Wilt Chamberlain', start_year: 1960, end_year: 1973, PTS: 30.1, TRB: 22.9, AST: 4.4, STL: null, BLK: null, FG: 0.540, TP: null, FT: 0.511, img: 'images/wilt-chamberlain.jpg' },
        { id: 14, Player: 'Bob Cousy', start_year: 1951, end_year: 1970, PTS: 18.4, TRB: 5.2, AST: 7.5, STL: null, BLK: null, FG: 0.375, TP: null, FT: 0.803, img: 'images/bob-cousy.jpg' },
        { id: 15, Player: 'Dave Cowens', start_year: 1971, end_year: 1983, PTS: 17.6, TRB: 13.6, AST: 3.8, STL: 1.1, BLK: 0.9, FG: 0.460, TP: null, FT: 0.783, img: 'images/dave-cowens.jpg' },
        { id: 16, Player: 'Billy Cunningham', start_year: 1966, end_year: 1976, PTS: 20.8, TRB: 10.1, AST: 4.0, STL: 1.2, BLK: 0.5, FG: 0.446, TP: null, FT: 0.720, img: 'images/billy-cunningham.jpg' },
        { id: 17, Player: 'Stephen Curry', start_year: 2010, end_year: 2024, PTS: 24.8, TRB: 4.7, AST: 6.4, STL: 1.5, BLK: 0.2, FG: 0.473, TP: 0.426, FT: 0.910, img: 'images/stephen-curry.jpg' },
        { id: 18, Player: 'Anthony Davis', start_year: 2013, end_year: 2024, PTS: 24.1, TRB: 10.6, AST: 2.5, STL: 1.3, BLK: 2.3, FG: 0.523, TP: 0.297, FT: 0.795, img: 'images/anthony-davis.jpg' },
        { id: 19, Player: 'Dave DeBusschere', start_year: 1963, end_year: 1974, PTS: 16.1, TRB: 11.0, AST: 2.9, STL: 0.9, BLK: 0.5, FG: 0.432, TP: null, FT: 0.699, img: 'images/dave-debusschere.jpg' },
        { id: 20, Player: 'Clyde Drexler', start_year: 1984, end_year: 1998, PTS: 20.4, TRB: 6.1, AST: 5.6, STL: 2.0, BLK: 0.7, FG: 0.472, TP: 0.318, FT: 0.788, img: 'images/clyde-drexler.jpg' },
        { id: 21, Player: 'Tim Duncan', start_year: 1998, end_year: 2016, PTS: 19.0, TRB: 10.8, AST: 3.0, STL: 0.7, BLK: 2.2, FG: 0.506, TP: 0.179, FT: 0.696, img: 'images/tim-duncan.jpg' },
        { id: 22, Player: 'Kevin Durant', start_year: 2008, end_year: 2024, PTS: 27.3, TRB: 7.0, AST: 4.4, STL: 1.1, BLK: 1.1, FG: 0.501, TP: 0.387, FT: 0.884, img: 'images/kevin-durant.jpg' },
        { id: 23, Player: 'Julius Erving', start_year: 1977, end_year: 1987, PTS: 22.0, TRB: 6.7, AST: 3.9, STL: 1.8, BLK: 1.5, FG: 0.507, TP: null, FT: 0.777, img: 'images/julius-erving.jpg' },
        { id: 24, Player: 'Patrick Ewing', start_year: 1986, end_year: 2002, PTS: 21.0, TRB: 9.8, AST: 1.9, STL: 1.0, BLK: 2.4, FG: 0.504, TP: 0.152, FT: 0.740, img: 'images/patrick-ewing.jpg' },
        { id: 25, Player: 'Walt Frazier', start_year: 1968, end_year: 1980, PTS: 18.9, TRB: 5.9, AST: 6.1, STL: 1.9, BLK: 0.2, FG: 0.490, TP: null, FT: 0.786, img: 'images/walt-frazier.jpg' },
        { id: 26, Player: 'Kevin Garnett', start_year: 1996, end_year: 2016, PTS: 17.8, TRB: 10.0, AST: 3.7, STL: 1.3, BLK: 1.4, FG: 0.497, TP: 0.275, FT: 0.789, img: 'images/kevin-garnett.jpg' },
        { id: 27, Player: 'George Gervin', start_year: 1977, end_year: 1986, PTS: 26.2, TRB: 4.6, AST: 2.8, STL: 1.2, BLK: 0.8, FG: 0.511, TP: null, FT: 0.844, img: 'images/george-gervin.jpg' },
        { id: 28, Player: 'Hal Greer', start_year: 1959, end_year: 1973, PTS: 19.2, TRB: 5.0, AST: 4.0, STL: null, BLK: null, FG: 0.452, TP: null, FT: 0.801, img: 'images/hal-greer.jpg' },
        { id: 29, Player: 'James Harden', start_year: 2010, end_year: 2024, PTS: 24.1, TRB: 5.6, AST: 7.1, STL: 1.5, BLK: 0.6, FG: 0.441, TP: 0.364, FT: 0.861, img: 'images/james-harden.jpg' },
        { id: 30, Player: 'John Havlicek', start_year: 1963, end_year: 1978, PTS: 20.8, TRB: 6.3, AST: 4.8, STL: 1.2, BLK: 0.3, FG: 0.439, TP: null, FT: 0.815, img: 'images/john-havlicek.jpg' },
        { id: 31, Player: 'Elvin Hayes', start_year: 1969, end_year: 1984, PTS: 21.0, TRB: 12.5, AST: 1.8, STL: 1.0, BLK: 2.0, FG: 0.452, TP: null, FT: 0.670, img: 'images/elvin-hayes.jpg' },
        { id: 32, Player: 'Allen Iverson', start_year: 1997, end_year: 2010, PTS: 26.7, TRB: 3.7, AST: 6.2, STL: 2.2, BLK: 0.2, FG: 0.425, TP: 0.313, FT: 0.780, img: 'images/allen-iverson.jpg' },
        { id: 33, Player: 'LeBron James', start_year: 2004, end_year: 2024, PTS: 27.1, TRB: 7.5, AST: 7.4, STL: 1.5, BLK: 0.7, FG: 0.506, TP: 0.348, FT: 0.736, img: 'images/lebron-james.jpg' },
        { id: 34, Player: 'Magic Johnson', start_year: 1980, end_year: 1996, PTS: 19.5, TRB: 7.2, AST: 11.2, STL: 1.9, BLK: 0.4, FG: 0.520, TP: 0.303, FT: 0.848, img: 'images/magic-johnson.jpg' },
        { id: 35, Player: 'Sam Jones', start_year: 1958, end_year: 1969, PTS: 17.7, TRB: 4.9, AST: 2.5, STL: null, BLK: null, FG: 0.456, TP: null, FT: 0.803, img: 'images/sam-jones.jpg' },
        { id: 36, Player: 'Michael Jordan', start_year: 1985, end_year: 2003, PTS: 30.1, TRB: 6.2, AST: 5.3, STL: 2.3, BLK: 0.8, FG: 0.497, TP: 0.327, FT: 0.835, img: 'images/michael-jordan.jpg' },
        { id: 37, Player: 'Jason Kidd', start_year: 1995, end_year: 2013, PTS: 12.6, TRB: 6.3, AST: 8.7, STL: 1.9, BLK: 0.3, FG: 0.400, TP: 0.349, FT: 0.785, img: 'images/jason-kidd.jpg' },
        { id: 38, Player: 'Kawhi Leonard', start_year: 2012, end_year: 2024, PTS: 20.0, TRB: 6.4, AST: 3.0, STL: 1.7, BLK: 0.7, FG: 0.499, TP: 0.391, FT: 0.862, img: 'images/kawhi-leonard.jpg' },
        { id: 39, Player: 'Damian Lillard', start_year: 2013, end_year: 2024, PTS: 25.1, TRB: 4.2, AST: 6.7, STL: 1.0, BLK: 0.3, FG: 0.438, TP: 0.371, FT: 0.897, img: 'images/damian-lillard.jpg' },
        { id: 40, Player: 'Jerry Lucas', start_year: 1964, end_year: 1974, PTS: 17.0, TRB: 15.6, AST: 3.3, STL: 0.4, BLK: 0.3, FG: 0.499, TP: null, FT: 0.783, img: 'images/jerry-lucas.jpg' },
        { id: 41, Player: 'Karl Malone', start_year: 1986, end_year: 2004, PTS: 25.0, TRB: 10.1, AST: 3.6, STL: 1.4, BLK: 0.8, FG: 0.516, TP: 0.274, FT: 0.742, img: 'images/karl-malone.jpg' },
        { id: 42, Player: 'Moses Malone', start_year: 1977, end_year: 1995, PTS: 20.6, TRB: 12.2, AST: 1.4, STL: 0.8, BLK: 1.3, FG: 0.491, TP: null, FT: 0.769, img: 'images/moses-malone.jpg' },
        { id: 43, Player: 'Pete Maravich', start_year: 1971, end_year: 1980, PTS: 24.2, TRB: 4.2, AST: 5.4, STL: 1.4, BLK: 0.3, FG: 0.441, TP: null, FT: 0.820, img: 'images/pete-maravich.jpg' },
        { id: 44, Player: 'Bob McAdoo', start_year: 1973, end_year: 1986, PTS: 22.1, TRB: 9.4, AST: 2.3, STL: 1.0, BLK: 1.5, FG: 0.503, TP: null, FT: 0.754, img: 'images/bob-mcadoo.jpg' },
        { id: 45, Player: 'Kevin McHale', start_year: 1981, end_year: 1993, PTS: 17.9, TRB: 7.3, AST: 1.7, STL: 0.4, BLK: 1.7, FG: 0.554, TP: 0.261, FT: 0.798, img: 'images/kevin-mchale.jpg' },
        { id: 46, Player: 'George Mikan', start_year: 1949, end_year: 1956, PTS: 23.1, TRB: 13.4, AST: 2.8, STL: null, BLK: null, FG: 0.404, TP: null, FT: 0.782, img: 'images/george-mikan.jpg' },
        { id: 47, Player: 'Reggie Miller', start_year: 1988, end_year: 2005, PTS: 18.2, TRB: 3.0, AST: 3.0, STL: 1.1, BLK: 0.2, FG: 0.471, TP: 0.395, FT: 0.888, img: 'images/reggie-miller.jpg' },
        { id: 48, Player: 'Earl Monroe', start_year: 1968, end_year: 1980, PTS: 18.8, TRB: 3.0, AST: 3.9, STL: 1.0, BLK: 0.3, FG: 0.464, TP: null, FT: 0.807, img: 'images/earl-monroe.jpg' },
        { id: 49, Player: 'Steve Nash', start_year: 1997, end_year: 2014, PTS: 14.3, TRB: 3.0, AST: 8.5, STL: 0.7, BLK: 0.1, FG: 0.490, TP: 0.428, FT: 0.904, img: 'images/steve-nash.jpg' },
        { id: 50, Player: 'Dirk Nowitzki', start_year: 1999, end_year: 2019, PTS: 20.7, TRB: 7.5, AST: 2.4, STL: 0.8, BLK: 0.8, FG: 0.471, TP: 0.380, FT: 0.879, img: 'images/dirk-nowitzki.jpg' },
        { id: 51, Player: 'Shaquille O\'Neal', start_year: 1993, end_year: 2011, PTS: 23.7, TRB: 10.9, AST: 2.5, STL: 0.6, BLK: 2.3, FG: 0.582, TP: 0.045, FT: 0.527, img: 'images/shaquille-oneal.jpg' },
        { id: 52, Player: 'Hakeem Olajuwon', start_year: 1985, end_year: 2002, PTS: 21.8, TRB: 11.1, AST: 2.5, STL: 1.7, BLK: 3.1, FG: 0.512, TP: 0.202, FT: 0.712, img: 'images/hakeem-olajuwon.jpg' },
        { id: 53, Player: 'Robert Parish', start_year: 1977, end_year: 1997, PTS: 14.5, TRB: 9.1, AST: 1.4, STL: 0.8, BLK: 1.5, FG: 0.537, TP: null, FT: 0.721, img: 'images/robert-parish.jpg' },
        { id: 54, Player: 'Chris Paul', start_year: 2006, end_year: 2024, PTS: 17.5, TRB: 4.5, AST: 9.4, STL: 2.1, BLK: 0.2, FG: 0.471, TP: 0.369, FT: 0.870, img: 'images/chris-paul.jpg' },
        { id: 55, Player: 'Gary Payton', start_year: 1991, end_year: 2007, PTS: 16.3, TRB: 3.9, AST: 6.7, STL: 1.8, BLK: 0.2, FG: 0.466, TP: 0.317, FT: 0.729, img: 'images/gary-payton.jpg' },
        { id: 56, Player: 'Bob Pettit', start_year: 1955, end_year: 1965, PTS: 26.4, TRB: 16.2, AST: 3.0, STL: null, BLK: null, FG: 0.436, TP: null, FT: 0.761, img: 'images/bob-pettit.jpg' },
        { id: 57, Player: 'Paul Pierce', start_year: 1999, end_year: 2017, PTS: 19.7, TRB: 5.6, AST: 3.5, STL: 1.3, BLK: 0.6, FG: 0.445, TP: 0.368, FT: 0.806, img: 'images/paul-pierce.jpg' },
        { id: 58, Player: 'Scottie Pippen', start_year: 1988, end_year: 2004, PTS: 16.1, TRB: 6.4, AST: 5.2, STL: 2.0, BLK: 0.8, FG: 0.473, TP: 0.326, FT: 0.704, img: 'images/scottie-pippen.jpg' },
        { id: 59, Player: 'Willis Reed', start_year: 1965, end_year: 1974, PTS: 18.7, TRB: 12.9, AST: 1.8, STL: 0.6, BLK: 1.1, FG: 0.476, TP: null, FT: 0.747, img: 'images/willis-reed.jpg' },
        { id: 60, Player: 'Oscar Robertson', start_year: 1961, end_year: 1974, PTS: 25.7, TRB: 7.5, AST: 9.5, STL: 1.1, BLK: 0.1, FG: 0.485, TP: null, FT: 0.838, img: 'images/oscar-robertson.jpg' },
        { id: 61, Player: 'David Robinson', start_year: 1990, end_year: 2003, PTS: 21.1, TRB: 10.6, AST: 2.5, STL: 1.4, BLK: 3.0, FG: 0.518, TP: 0.250, FT: 0.736, img: 'images/david-robinson.jpg' },
        { id: 62, Player: 'Dennis Rodman', start_year: 1987, end_year: 2000, PTS: 7.3, TRB: 13.1, AST: 1.8, STL: 0.7, BLK: 0.6, FG: 0.521, TP: 0.231, FT: 0.584, img: 'images/dennis-rodman.jpg' },
        { id: 63, Player: 'Bill Russell', start_year: 1957, end_year: 1969, PTS: 15.1, TRB: 22.5, AST: 4.3, STL: null, BLK: null, FG: 0.440, TP: null, FT: 0.561, img: 'images/bill-russell.jpg' },
        { id: 64, Player: 'Dolph Schayes', start_year: 1950, end_year: 1964, PTS: 18.5, TRB: 12.1, AST: 3.1, STL: null, BLK: null, FG: 0.380, TP: null, FT: 0.849, img: 'images/dolph-schayes.jpg' },
        { id: 65, Player: 'Bill Sharman', start_year: 1951, end_year: 1961, PTS: 17.8, TRB: 3.9, AST: 3.0, STL: null, BLK: null, FG: 0.426, TP: null, FT: 0.883, img: 'images/bill-sharman.jpg' },
        { id: 66, Player: 'John Stockton', start_year: 1985, end_year: 2003, PTS: 13.1, TRB: 2.7, AST: 10.5, STL: 2.2, BLK: 0.2, FG: 0.515, TP: 0.384, FT: 0.826, img: 'images/john-stockton.jpg' },
        { id: 67, Player: 'Isiah Thomas', start_year: 1982, end_year: 1994, PTS: 19.2, TRB: 3.6, AST: 9.3, STL: 1.9, BLK: 0.3, FG: 0.452, TP: 0.290, FT: 0.759, img: 'images/isiah-thomas.jpg' },
        { id: 68, Player: 'Nate Thurmond', start_year: 1964, end_year: 1977, PTS: 15.0, TRB: 15.0, AST: 2.7, STL: 0.5, BLK: 2.1, FG: 0.421, TP: null, FT: 0.667, img: 'images/nate-thurmond.jpg' },
        { id: 69, Player: 'Wes Unseld', start_year: 1969, end_year: 1981, PTS: 10.8, TRB: 14.0, AST: 3.9, STL: 1.1, BLK: 0.6, FG: 0.509, TP: null, FT: 0.633, img: 'images/wes-unseld.jpg' },
        { id: 70, Player: 'Dwyane Wade', start_year: 2004, end_year: 2019, PTS: 22.0, TRB: 4.7, AST: 5.4, STL: 1.5, BLK: 0.8, FG: 0.480, TP: 0.293, FT: 0.765, img: 'images/dwyane-wade.jpg' },
        { id: 71, Player: 'Bill Walton', start_year: 1975, end_year: 1987, PTS: 13.3, TRB: 10.5, AST: 3.4, STL: 0.8, BLK: 2.2, FG: 0.521, TP: null, FT: 0.660, img: 'images/bill-walton.jpg' },
        { id: 72, Player: 'Jerry West', start_year: 1961, end_year: 1974, PTS: 27.0, TRB: 5.8, AST: 6.7, STL: 2.6, BLK: 0.7, FG: 0.474, TP: null, FT: 0.814, img: 'images/jerry-west.jpg' },
        { id: 73, Player: 'Russell Westbrook', start_year: 2009, end_year: 2024, PTS: 21.7, TRB: 7.1, AST: 8.1, STL: 1.6, BLK: 0.3, FG: 0.438, TP: 0.304, FT: 0.776, img: 'images/russell-westbrook.jpg' },
        { id: 74, Player: 'Lenny Wilkens', start_year: 1961, end_year: 1975, PTS: 16.5, TRB: 4.7, AST: 6.7, STL: 1.3, BLK: 0.2, FG: 0.432, TP: null, FT: 0.774, img: 'images/lenny-wilkens.jpg' },
        { id: 75, Player: 'Dominique Wilkins', start_year: 1983, end_year: 1999, PTS: 24.8, TRB: 6.7, AST: 2.5, STL: 1.3, BLK: 0.6, FG: 0.461, TP: 0.319, FT: 0.811, img: 'images/dominique-wilkins.jpg' }
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
