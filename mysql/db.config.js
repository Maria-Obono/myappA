module.exports = {
    HOST: "54.208.95.255",
    USER: "maria",
    PASSWORD: "MyNewPass1!",
    DB: "myapp",
    PORT: "3306",
    dialect: "mysql",
    pool: {
      max: 5,
      min: 0,
      acquire: 30000,
      idle: 10000
    }
  };