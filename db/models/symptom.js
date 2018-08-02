'use strict'

const Sequelize = require('sequelize');
const db = require('../index.js');

const Symptom = db.define('symptoms', {
  name: {
  	type: Sequelize.STRING,
  	allowNull: false
  }

});

module.exports = Symptom;
