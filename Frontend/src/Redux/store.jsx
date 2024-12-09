import { applyMiddleware, combineReducers, legacy_createStore}from "redux"
import {thunk}from "redux-thunk";
import{logger} from "redux-logger"







export const rootreducer=combineReducers({
 
})



 export const store=legacy_createStore(
    rootreducer,
    applyMiddleware(logger,thunk)
 )