// require('dotenv').config();

// const Sequelize = require('sequelize');

// const sequelize = process.env.JAWSDB_URL
//   ? new Sequelize(process.env.JAWSDB_URL)
//   : new Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PW, {
//     // : new sequelize(DB_NAME= 'ecommerce_db', DB_USER= 'root', DB_PASSWORD= '605291Lmtz$',{   
//       host: '127.0. 0.1.',
//       dialect: 'mysql',
//       dialectOptions: {
//         decimalNumbers: true,
//       },

//       port: 3001,
//     });

// module.exports = sequelize;

const Sequelize = require('sequelize');
require('dotenv').config();

let sequelize;

if (process.env.JAWSDB_URL) {
  sequelize = new Sequelize(process.env.JAWSDB_URL);
} else {
  sequelize = new Sequelize(
    // process.env.DB_NAME,
    // process.env.DB_USER,
    // process.env.DB_PASSWORD,
    DB_NAME='ecommerce_db',
    DB_USER='root',
    DB_PW='605291Lmtz$',
    {
      host: '127.0.0.1.',
      dialect: 'mysql',
      dialectOption:{
        decimalNumbers: true,
      },
    }
  );
}

module.exports = sequelize;