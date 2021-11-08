const express  = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    res.json({message : "get"});
});
router.post('/users', (req, res) => {
    const { name, time } = req.body;
    res.status(200).send({ name, time })
});

router.get("/test", (req, res) => {
    res.render("index.ejs");
})

module.exports = router;