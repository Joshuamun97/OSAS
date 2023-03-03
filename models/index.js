const Users = require('./Users');
const Animals = require('./Animals');
const Adoptable = require('./Adoptable');

Users.hasMany(Adoptable, {
   foreignKey: 'user_id',
    
});
Adoptable.belongsTo(Users
Animals.belongsTo(Adoptable, {
    foreignKey: 'animal_id',
    as: 'type'
});

module.exports = {Users, Animals, Adoptable}