module.exports = {
    HOST: "localhost",
    USER: "root",
    PASSWORD: "Gloria1996!",
    DB: "AWS-ec2",
    dialect: "mysql",
    pool: {
      max: 5,
      min: 0,
      acquire: 30000,
      idle: 10000
    }
  };