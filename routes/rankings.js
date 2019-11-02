const express = require('express');
const router = express.Router();
const models = require('../models/index.js');

router.get('/', (req, res, next) => {
    models.Ranking.findAll({}).then(ranking => {
        res.send(ranking);
        next();
    });
});

router.post('/', (req, res, next) => {
    models.Ranking.create({
        user_name: req.body.name,
        user_score: req.body.score
    });
    next();
});

module.exports = router;