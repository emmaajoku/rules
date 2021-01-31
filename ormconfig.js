
const USERNAME = process.env.DATABASE_USERNAME;
const PASSWORD = process.env.DATABASE_PASSWORD;
const HOST = process.env.DATABASE_HOST;
const DATABASENAME = process.env.DATABASE_USERNAME;

module.exports = [
  {
    "type": "mysql",
    "host": HOST,
    "username": USERNAME,
    "password": PASSWORD,
    "database": DATABASENAME,
    "synchronize": true,
    "migrations": [
      "dist/migrations/*.js"
    ],
    "dropSchema": false,
    "logging": false,
    "entities": [ __dirname + "/dist/**/*.entity.js"],
    "cli": {
      "entitiesDir": "app",
      "migrationsDir": "migrations",
      "subscribersDir": "subscriber"
    }
  },
]