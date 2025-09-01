const express = require('express');
const router = express.Router();
const profileController = require('../controllers/profileController');

router.route('/').get(profileController.getUserProfile);

module.exports = router;
