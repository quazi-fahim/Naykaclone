import { applyMiddleware, combineReducers, legacy_createStore}from "redux"
import {thunk}from "redux-thunk";
import{logger} from "redux-logger"
import authReducer from "./signin/reducer";







export const rootreducer=combineReducers({
   auth: authReducer,
})



 export const store=legacy_createStore(
    rootreducer,
    applyMiddleware(logger,thunk)
 )