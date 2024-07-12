const express = require('express');
const router = express.Router();
const { getAllUsers,addUser, updateUser,deleteUser} = require('../controllers/userController');

//Get all users
router.get('/getAllUsers', getAllUsers);

//For udd new user
router.post('/add', addUser);

//For update user
router.put('/update/:userID', updateUser);

//for Delete user
router.delete('/delete/:userID', deleteUser);


module.exports = router;
