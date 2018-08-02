import { GET_SYMPTOMS_START, GET_SYMPTOMS_RESULTS, GET_SYMPTOMS_ERROR } from '../actions';

const initialState = {
  symptoms: [],
  loading: false,
  error: null
};

const symptoms = (state = initialState, action) => {
    switch (action.type) {
        case GET_SYMPTOMS_START:
            return { ...state,
                    loading: true,
                    error: null }
        case GET_SYMPTOMS_RESULTS:
            return { ...state,
                    loading: false,
                    symptoms: action.payload }
        case GET_SYMPTOMS_ERROR:
            return { ...state,
                    loading: false,
                    error: action.payload,
                    symptoms: [] }
        default:
            return state
    }
}

export default symptoms;