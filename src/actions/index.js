import axios from 'axios';


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