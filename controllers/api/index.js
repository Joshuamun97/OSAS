const router = require('express').Router();
const userRoutes = require('./userRoutes');
const animalRoutes = require('./animalRoutes');
const adoptableRoutes = require('./adoptableRoutes');

router.use('/users', userRoutes);
router.use('/animals', animalRoutes);
router.use('/adoptable', adoptableRoutes);

module.exports = router;