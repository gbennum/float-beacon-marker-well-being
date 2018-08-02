import { UPDATE_FREQUENCY_START, UPDATE_FREQUENCY_RESULTS, UPDATE_FREQUENCY_ERROR, GET_DIAGNOSES_START,
            GET_DIAGNOSES_RESULTS, GET_DIAGNOSES_ERROR } from '../actions';

const initialState = {
  diagnoses: [],
  loading: false,
  error: null
};

const diagnoses = (state = initialState, action) => {
    switch (action.type) {
        case GET_DIAGNOSES_START:
            return { ...state,
                    loading: true,
                    error: null }
        case GET_DIAGNOSES_RESULTS:
            return { ...state,
                    loading: false,
                    diagnoses: action.payload }
        case GET_DIAGNOSES_ERROR:
            return { ...state,
                    loading: false,
                    error: action.payload,
                    diagnoses: [] }
        case UPDATE_FREQUENCY_START:
            return { ...state,
                    loading: true,
                    error: null }
        case UPDATE_FREQUENCY_RESULTS:
            return { ...state,
                    loading: false,
                    diagnoses: action.payload }
        case UPDATE_FREQUENCY_ERROR:
            return { ...state,
                    loading: false,
                    error: action.payload,
                    diagnoses: [] }
        default:
            return state
    }
}

export default diagnoses;