const router = require('express').Router();
const {
  getAllUser,
  getUserById,
  createUser,
  updateUser,
  deleteUser,
  addFriend,
  removeFriend,
} = require('../../controllers/user-controller');

// Set up GET all and POST at /api/users
router.route('/').get(getAllUser).post(createUser);

// Set up GET one, PUT, and DELETE at /api/users/<userId>
router
  .route('/:userId')
  .get(getUserById)
  .put(updateUser)
  .put(addFriend)
  .delete(deleteUser);

// Set up DELETE friend at /api/users/<userId>/friends/<friendId>
router.route('/:userId/friends/:friendsId').delete(removeFriend);

module.exports = router;
