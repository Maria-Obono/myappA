module.exports = {
    HOST: "127.0.0.1",
    USER: "root",
    PASSWORD: "Gloria1996!",
    DB: "AWS-ec2",
    PORT: "3306",
    dialect: "mysql",
    pool: {
      max: 5,
      min: 0,
      acquire: 30000,
      idle: 10000
    }
  };