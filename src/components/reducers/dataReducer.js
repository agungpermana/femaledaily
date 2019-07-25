import { combineReducers } from 'redux';
import { DATA_AVAILABLE, DATA_TEST_AVAILABLE } from '../actions';

let dataState = { data: [], loading: true}

const dataReducer=(state=dataState,action)=>{
    console.log("action type apa ini : ", action)
    switch (action.type) {
        case DATA_AVAILABLE:
            state = Object.assign({}, state, {data: action.data, loading: false})
            return state
        case DATA_TEST_AVAILABLE:
            state = Object.assign({}, state, {dataTest: action.dataTest, loading: false})
            return state
        default:
            return state
    }
}

// Combine all reducers
const rootReducer = combineReducers({
    dataReducer
})

export default rootReducer