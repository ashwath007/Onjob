const express = require('express');
const router = express.Router();
const { adminAuth } = require('../controllers/auth');

router.post("/login", adminAuth);


module.exports = router;