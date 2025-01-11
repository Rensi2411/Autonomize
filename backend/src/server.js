require('dotenv').config();
const app = require('./app');
const sequelize = require('./utils/db');

const PORT = process.env.PORT || 5000;

sequelize.sync({ force: false }).then(() => {
  console.log('Database connected!');
  app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));
});
