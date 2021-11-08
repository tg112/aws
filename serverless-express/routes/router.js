const express  = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    res.json({message : "get"});
});
router.get('/users', (req, res) => {
    res.json([{name: 'Taro'}, {name: 'Hanako'}]);
});

router.get("/test", (req, res) => {
    res.render("index.ejs");
})

module.exports = router;