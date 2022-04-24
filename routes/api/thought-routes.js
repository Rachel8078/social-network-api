const router = require('express').Router();
const { 
  getAllThought, 
  getThoughtById, 
  updateThought, 
  createThought, 
  deleteThought,
  addReaction,
  removeReaction 
} = require('../../controllers/thought-controller');

// GET all thoughts /api/thoughts
router
.route('/')
.get(getAllThought)

// POST thought to user by id /api/thoughts/<userId>
router.route('/:userId').post(createThought)

// GET thought by id, PUT, & DELETE /api/thoughts/<userId/<thoughtId>
router
.route('/:thoughtId')
// .post(createThought)
.get(getThoughtById)
.put(updateThought)
.put(addReaction)
.delete(deleteThought)


// DELETE reactions /api/thoughts/<userId>/<thoughtId>/<reactionId>
router.route('/:userId/:thoughtId/:reactionId').delete(removeReaction)

module.exports = router;