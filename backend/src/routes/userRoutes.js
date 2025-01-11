const express = require('express');
const { saveUser, searchUsers } = require('../controllers/userController');

const router = express.Router();

router.get('/users/:username', saveUser);
router.get('/users', searchUsers);

module.exports = router;
