const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "X-Requested-With");
    res.json({
        title: "Title line",
        body: "this is body texts"});
});

module.exports = router