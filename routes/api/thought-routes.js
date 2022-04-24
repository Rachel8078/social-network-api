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

// GET thought by id, PUT, & DELETE /api/thoughts/<userId>/<thoughtId>
router
.route('/:userId/:thoughtId')
.get(getThoughtById)
.put(updateThought)
.delete(deleteThought)

router.route('/:userId/reactions/:thoughtId').put(addReaction)

// DELETE reactions /api/thoughts/<userId>/<thoughtId>/<reactionId>
router.route('/:userId/reactions/:thoughtId/:reactionId').delete(removeReaction)

module.exports = router;