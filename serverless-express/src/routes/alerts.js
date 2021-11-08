const express  = require('express');
const router = express.Router();
const { alert, alerts, createAlert, read } = require("../controllers/alerts");

router.get('/alerts', alerts);
router.get('/alerts/:alertId', alert);
router.post("/alerts", createAlert);
router.post("/read", read);

module.exports = router;