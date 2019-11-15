const express = require('express');
const router = express.Router();
const models = require('../models/index.js');

// スコアランキングを降順で返す
router.get('/desc', (req, res, next) => {
    models.Ranking.findAll({
        order: [
            ['user_score', 'DESC']
        ]
    }).then((ranking) => {
        res.send(ranking);
        next();
    });
});

// スコアランキングを昇順で返す
router.get('/asc', (req, res, next) => {
    models.Ranking.findAll({
        order: [
            ['user_score', 'ASC']
        ]
    }).then((ranking) => {
        res.send(ranking);
        next();
    });
});

// ランキングにユーザを登録する
router.post('/', (req, res, next) => {
    models.Ranking.create({
        user_name: req.body.name,
        user_score: req.body.score
    });
    next();
});

module.exports = router;