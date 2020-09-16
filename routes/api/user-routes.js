const router = require('express').Router();
const {
    getAllUser,
    getUserById,
    createUser,
    addFriend,
    updateUser,
    deleteUser,
    removeFriend
} = require('../../controlers/user-controller');

router
    .route('/')
    .get(getAllUser)
    .post(createUser);

router
    .route('/:id')
    .get(getUserById)
    .put(updateUser)
    .delete(deleteUser)

router
    .route('/:userId/friends/:friendId')
    .put(addFriend)
    .put(removeFriend)

module.exports = router;