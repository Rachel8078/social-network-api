const router = require('express').Router();
const { 
  getAllThought, 
  getThoughtById, 
  updateThought, 
  createThought, 
  deleteThought 
} = require('../../controllers/thought-controller');

// GET all thoughts & POST thoughts /api/thoughts
router
.route('/')
.get(getAllThought)
.post(createThought)

// GET thought by id, PUT, & DELETE /api/thoughts/<thoughtId>
router
.route('/:id')
.get(getThoughtById)
.put(updateThought)
.delete(deleteThought)

module.exports = router;