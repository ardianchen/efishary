module.exports = {
  host: process.env.DB_HOST || 'localhost',
  dialect: process.env.DB_DIALECT || 'mysql',
  database: process.env.DB_NAME || 'db_test',
  username: process.env.DB_USER || 'root',
  password: process.env.DB_PASSWORD || 'root',
  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000
  },
  // disable logging; default: console.log // show query
  logging: false,
  define: {
    timestamps: false,
    freezeTableName: true,
    // underscored: true,
    paranoid: true
  }
}
