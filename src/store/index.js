import { createSlice , configureStore } from '@reduxjs/toolkit';



const initialCounterState = {counter : 0,showCounter:true};

const counterSlice = createSlice({
    name :'counter',
    initialState : initialCounterState,
    reducers : {
        increment (state){
            state.counter++;
        },
        decrement (state){
            state.counter--;
        },
        increse(state,action){
            state.counter = state.counter + action.payload ;
        },
        toggleCounter(state){
            state.showCounter = !state.showCounter;
        }
    }
});

const initialAuthState = {
    isAuth : false,
 };

 const authSlice = createSlice({
    name : 'auth',
    initialState : initialAuthState,
    reducers:{
        login(state){
            state.isAuth = true;
        },
        logout(state){
            state.isAuth = false;

        },
    }
});

// const counterReducer = (state =initialState, action) => {
//     if(action.type === 'increment'){
//         return {
//             counter : state.counter +1,
//             showCounter : state.showCounter
//         };
//     }
//     if(action.type === 'decrement'){
//         return {
//             counter : state.counter -1,
//             showCounter : state.showCounter
//         };
//     }
//     if(action.type === 'insrease'){
//         return {
//             counter : state.counter + action.amount,
//             showCounter : state.showCounter
//         }
//     }
//     if(action.type === 'toggle'){
//         return {
//             showCounter : !state.showCounter,
//             counter : state.counter
//         };
//     }
//     return state;
// };

const store = configureStore({
    reducer : {counter : counterSlice.reducer , auth : authSlice.reducer}
});

export const counterActions = counterSlice.actions; 
export const authActions = authSlice.actions;
export default store;