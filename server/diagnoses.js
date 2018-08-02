const db = require('../db') //this is required
const Diagnosis = require('../db/models/diagnosis');
const Symptom = require('../db/models/symptom');
const Sequelize = require('sequelize');

const router = require('express').Router()

router.get('/', function(req, res, next) {
    Diagnosis.findAll({
            include: [Symptom]
        })
        .then(result => {
            res.status(200).send(result);
        })
        .catch(next);
});

router.get('/:id', function(req, res, next) {
    Diagnosis.findOne({
            where:{id:req.params.id},
            include: [Symptom]
        })
        .then(result => {
            res.status(200).send(result);
        })
        .catch(next);
});

router.put('/:id', function(req, res, next) {
    Diagnosis.increment(
        { frequency: 1 },
        { where:{id:req.params.id} }
        )
        .then(result => {
            res.status(200).send(result[0][0]);
        })
        .catch(next);
});

module.exports = router;
