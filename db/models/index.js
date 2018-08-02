'use strict';

const Symptom = require('./symptom')
const Diagnosis = require('./diagnosis');

Symptom.hasMany(Diagnosis);
Diagnosis.belongsTo(Symptom);

module.exports = {Symptom, Diagnosis};
