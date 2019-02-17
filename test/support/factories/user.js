const dataFaker = require('src/infrastructure/support/dataFaker');

module.exports = (factory, { User }) => {
  factory.define('user', User, {
    name: dataFaker.name()
  });
};
