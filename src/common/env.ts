require('dotenv').config();

export default () => ({
  // Add your own properties here however you'd like
  port: parseInt(process.env.PORT, 10) || 3000,
  database: {
    url: process.env.DB_URL,
  }
});
