const sequelize = require('../config/connection');
const { Users, Adoptable } = require('../models');

const userData = require('./userData.json');
const adoptableData = require('./adoptableData.json')

const seedDatabase = async () => {
  await sequelize.sync({ force: true });

  const users = await Users.bulkCreate(userData, {
    individualHooks: true,
    returning: true,
  });

  for (const adoptable of adoptableData) {
   await Adoptable.create({
    ...adoptable,
    user_id: users[Math.floor(Math.random() * users.length)].id,
  });
 }


  process.exit(0);
};

seedDatabase();

// Do I need something for the other data.jsons?