const router = require('express').Router();
const { Adoptable } = require('../../models');
const withAuth = require('../../utils/auth');

router.post('/', withAuth, async (req, res) => {
  try {
    const newAdoptable = await Adoptable.create({
      ...req.body,
      user_id: req.session.user_id,
    });

    res.status(200).json(newAdoptable);
  } catch (err) {
    res.status(400).json(err);
  }
});

router.delete('/:id', withAuth, async (req, res) => {
  try {
    const adoptableData = await Adoptable.destroy({
      where: {
        id: req.params.id,
        user_id: req.session.user_id,
      },
    });

    if (!adoptableData) {
      res.status(404).json({ message: 'No pet found with this id!' });
      return;
    }

    res.status(200).json(adoptableData);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;