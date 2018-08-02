'use strict'

const Sequelize = require('sequelize')
const db = require('../index.js');

const Diagnosis = db.define('diagnoses', {
  name: {
  	type: Sequelize.STRING,
  	allowNull: false
  },

  frequency: {
  	type: Sequelize.INTEGER,
  	allowNull: false,
  	defaultValue: 0,
  	validate: {
  		notEmpty: true,
      isNumeric: true,
  	}
  }
})

module.exports = Diagnosis;
