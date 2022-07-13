import { act } from 'react-dom/test-utils';
import {createStore} from 'redux';

const initialState = {counter : 0,showCounter:true};

const counterReducer = (state =initialState, action) => {
    if(action.type === 'increment'){
        return {
            counter : state.counter +1,
            showCounter : state.showCounter
        };
    }
    if(action.type === 'decrement'){
        return {
            counter : state.counter -1,
            showCounter : state.showCounter
        };
    }
    if(action.type === 'insrease'){
        return {
            counter : state.counter + action.amount,
            showCounter : state.showCounter
        }
    }
    if(action.type === 'toggle'){
        return {
            showCounter : !state.showCounter,
            counter : state.counter
        };
    }
    return state;
};

const store = createStore(counterReducer);

export default store;