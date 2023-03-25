const router = require('express').Router();
const saveData = require('../db/saveData');

router.get('/', (req, res) => {
  saveData
  .getNotes()
  .then(notes => res.json(notes))
  .catch(err => res.status(500).json(err));
});

router.post('/notes', (req, res) => {
  saveData
  .addNote(req.body)
  .then((note) => res.json(note))
  .catch((err) => res.status(500).json(err));
});

module.exports = router; 