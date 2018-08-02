const db = require('../db') //this is required
const Symptom = require('../db/models/symptom');
const Diagnosis = require('../db/models/diagnosis');
const Sequelize = require('sequelize');

const router = require('express').Router()

router.get('/', function(req, res, next) {
    Symptom.findAll({
            include: [Diagnosis],
            order: Sequelize.col('frequency', 'ASC')
        })
        .then(result => {
            res.status(200).send(result);
        })
        .catch(next);
});

router.get('/:id', function(req, res, next) {
    Symptom.findOne({
            where:{id:req.params.id},
            include: [Diagnosis]
        })
        .then(result => {
            res.status(200).send(result);
        })
        .catch(next);
});

module.exports = router
