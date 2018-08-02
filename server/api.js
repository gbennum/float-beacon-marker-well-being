const api = module.exports = require('express').Router()
const symptoms = require('./symptoms');
const diagnoses = require('./diagnoses');

api
  .get('/express-test', (req, res) => res.send({express: 'working!'})) //demo route to prove api is working
  .use('/symptoms', symptoms)
  .use('/diagnoses', diagnoses)
// No routes matched? 404.
api.use((req, res) => res.status(404).end())
