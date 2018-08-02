const db = require('../db')

const seedSymptoms = () => db.Promise.map([
  {name: 'sore throat'},
  {name: 'itchy rash'},
  {name: 'runny nose'},
], symptom => db.model('symptoms').create(symptom));

const seedDiagnoses = () => db.Promise.map([
  {name: "common cold", frequency:0 ,symptom_id:1},
  {name: "viral throat infection", frequency:0 ,symptom_id:1},
  {name: "middle ear infection", frequency:0 ,symptom_id:1},
  {name: "seasonal allergies", frequency:0 ,symptom_id:1},
  {name: "strep throat", frequency:0 ,symptom_id:1},
  {name: "mononucleosis infection", frequency:0 ,symptom_id:1},
  {name: "bronchitis", frequency:0 ,symptom_id:1},
  {name: "acid reflux disease", frequency:0 ,symptom_id:1},
  {name: "bacterial sinusitis", frequency:0 ,symptom_id:1},

  {name: "sunburn", frequency:0 ,symptom_id:2},
  {name: "irritant contact dermatitis", frequency:0 ,symptom_id:2},
  {name: "non-specific dermatitis (skin inflammation)n", frequency:0 ,symptom_id:2},
  {name: "hives", frequency:0 ,symptom_id:2},
  {name: "benign skin growth", frequency:0 ,symptom_id:2},
  {name: "allergic reaction to poison ivy/oak/sumac", frequency:0 ,symptom_id:2},
  {name: "chronic hepatitis c", frequency:0 ,symptom_id:2},
  {name: "shingles (herpes zoster)", frequency:0 ,symptom_id:2},
  {name: "perianal skin infection", frequency:0 ,symptom_id:2},
  {name: "seborrheic dermatitis", frequency:0 ,symptom_id:2},

  {name: "common cold", frequency:0 ,symptom_id:3},
  {name: "chronic sinusitis", frequency:0 ,symptom_id:3},
  {name: "non-allergic rhinitis", frequency:0 ,symptom_id:3},
  {name: "chronic allergies", frequency:0 ,symptom_id:3},
  {name: "normal congestion and runny nose", frequency:0 ,symptom_id:3},
  {name: "mononucleosis infection", frequency:0 ,symptom_id:3},
  {name: "viral infection of the larynx (voice box)", frequency:0 ,symptom_id:3},
  {name: "chronic bronchitis", frequency:0 ,symptom_id:3},
  {name: "hand-foot-and-mouth disease", frequency:0 ,symptom_id:3},
  {name: "bronchiectasis", frequency:0 ,symptom_id:3},

 ], diagnosis => db.model('diagnoses').create(diagnosis));

 db.didSync
   .then(() => db.sync({force: true}))
   .then(seedSymptoms)
   .then(symptoms => console.log(`Seeded ${symptoms.length} symptoms OK`))
   .then(seedDiagnoses)
   .then(diagnoses => console.log(`Seeded ${diagnoses.length} diagnoses OK`))
   .catch(error => console.error(error))
   .finally(() => db.close())
