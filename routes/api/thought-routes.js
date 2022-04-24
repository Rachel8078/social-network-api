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

// GET thought by id, PUT, & DELETE /api/thoughts/<thoughtId>
router
.route('/:thoughtId')
.get(getThoughtById)
.put(updateThought)
.delete(deleteThought)

// ADD reaction /api/thoughts/<thoughtId>/reactions
router.route('/:thoughtId/reactions').put(addReaction)

// DELETE reactions /api/thoughts/<userId>/<thoughtId>/<reactionId>
router.route('/:thoughtId/reactions/:reactionId').delete(removeReaction)

module.exports = router;