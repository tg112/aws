const express  = require('express');
const router = express.Router();

router.get("/views", (req, res) => {
    res.render("index.ejs");
})

module.exports = router;
