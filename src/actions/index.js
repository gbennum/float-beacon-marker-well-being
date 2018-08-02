import axios from 'axios';

export const EXPRESS_TEST_START = "EXPRESS_TEST_START";
export const expressTestStart = () => {
    return { type: EXPRESS_TEST_START }
}

export const EXPRESS_TEST_RESULTS = "EXPRESS_TEST_RESULTS";
export const expressTestResults = (data) => {
    return { type: EXPRESS_TEST_RESULTS, data }
}

export const EXPRESS_TEST_ERROR = "EXPRESS_TEST_ERROR";
export const expressTestError = (data) => {
    return { type: EXPRESS_TEST_ERROR, data }
}

export const EXPRESS_TEST = "EXPRESS_TEST";
export const expressTest = () => {
    return dispatch => {
        dispatch(expressTestStart());
        axios.get(`/api/express-test`)
            .then(res => dispatch(expressTestResults(JSON.stringify(res.data))))
            .catch(err => dispatch(expressTestError(err)))

    }
}

export const DB_TEST_START = "DB_TEST_START";
export const dbTestStart = () => {
    return { type: DB_TEST_START }
}
export const DB_TEST_RESULTS = "DB_TEST_RESULTS";
export const dbTestResults = (data) => {
    return { type: DB_TEST_RESULTS, data }
}
export const DB_TEST_ERROR = "DB_TEST_ERROR";
export const dbTestError = (data) => {
    return { type: DB_TEST_ERROR, data }
}

export const DB_TEST = "DB_TEST"
export const dbTest = () => {
    return dispatch => {
        dispatch(dbTestStart());
        axios.get(`/api/symptoms`)
            .then(res => dispatch(dbTestResults(JSON.stringify(res.data))))
            .catch(err => dispatch(dbTestError(err)))

    }
}

export const GET_SYMPTOMS_START = "GET_SYMPTOMS_START";
export const getSymptomsStart = () => {
    return { type: GET_SYMPTOMS_START }
}
export const GET_SYMPTOMS_RESULTS = "GET_SYMPTOMS_RESULTS";
export const getSymptomsResults = (data) => {
    return { type: GET_SYMPTOMS_RESULTS,
             payload: data }
}
export const GET_SYMPTOMS_ERROR = "GET_SYMPTOMS_ERROR";
export const getSymptomsError = (error) => {
    return { type: GET_SYMPTOMS_ERROR,
             payload: error }
}

export const GET_SYMPTOMS = "GET_SYMPTOMS"
export const getSymptoms = () => {
    return dispatch => {
        dispatch(getSymptomsStart());
        axios.get(`/api/symptoms`)
            .then(res => dispatch(getSymptomsResults(res.data)))
            .catch(err => dispatch(getSymptomsError(err)))

    }
}

export const GET_DIAGNOSES_START = "GET_DIAGNOSES_START";
export const getDiagnosesStart = () => {
    return { type: GET_DIAGNOSES_START }
}
export const GET_DIAGNOSES_RESULTS = "GET_DIAGNOSES_RESULTS";
export const getDiagnosesResults = (data) => {
    return { type: GET_DIAGNOSES_RESULTS,
             payload: data }
}
export const GET_DIAGNOSES_ERROR = "GET_DIAGNOSES_ERROR";
export const getDiagnosesError = (error) => {
    return { type: GET_DIAGNOSES_ERROR,
             payload: error }
}

export const GET_DIAGNOSES = "GET_DIAGNOSES"
export const getDiagnoses = () => {
    return dispatch => {
        dispatch(getDiagnosesStart());
        axios.get(`/api/diagnoses`)
            .then(res => dispatch(getDiagnosesResults(res.data)))
            .catch(err => dispatch(getDiagnosesError(err)))

    }
}

export const UPDATE_FREQUENCY_START = "UPDATE_FREQUENCY_START";
export const updateFrequencyStart = () => {
    return { type: UPDATE_FREQUENCY_START }
}
export const UPDATE_FREQUENCY_RESULTS = "UPDATE_FREQUENCY_RESULTS";
export const updateFrequencyResults = (data) => {
    return { type: UPDATE_FREQUENCY_RESULTS,
             payload: data }
}
export const UPDATE_FREQUENCY_ERROR = "UPDATE_FREQUENCY_ERROR";
export const updateFrequencyError = (error) => {
    return { type: UPDATE_FREQUENCY_ERROR,
             payload: error }
}

export const UPDATE_FREQUENCY = "UPDATE_FREQUENCY"
export const updateFrequency = (id) => {
    return dispatch => {
        dispatch(updateFrequencyStart());
        axios.put(`/api/diagnoses/` + id)
            .then(res => dispatch(updateFrequencyResults(res.data)))
            .catch(err => dispatch(updateFrequencyError(err)))

    }
}