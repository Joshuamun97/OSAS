const Users = require('./Users');
const Animals = require('./Animals');
const Adoptable = require('./Adoptable');

Animals.belongsTo(Adoptable, {
    foreignKey: 'animal_type',
});