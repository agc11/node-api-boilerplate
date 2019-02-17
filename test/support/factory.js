const path = require('path');
const { factory, SequelizeAdapter } = require('factory-girl');
const { FactoriesLoader } = require('src/infrastructure/factoryGirl');
const models = require('src/infrastructure/database/models');

const factoryGirl = new factory.FactoryGirl();
factoryGirl.setAdapter(new SequelizeAdapter());

module.exports = FactoriesLoader.load({
  factoryGirl,
  models,
  baseFolder: path.join(__dirname, 'factories')
});
