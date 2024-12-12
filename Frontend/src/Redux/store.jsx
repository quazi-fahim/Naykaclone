import { applyMiddleware, combineReducers, legacy_createStore}from "redux"
import {thunk}from "redux-thunk";
import{logger} from "redux-logger"
import authReducer from "./signin/reducer";
import cartReducer from "./cart/reducer";







export const rootreducer=combineReducers({
   auth: authReducer,
   cart: cartReducer,
})



 export const store=legacy_createStore(
    rootreducer,
    applyMiddleware(logger,thunk)
 )