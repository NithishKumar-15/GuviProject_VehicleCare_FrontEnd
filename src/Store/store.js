import { configureStore } from "@reduxjs/toolkit";
import serviceDetailsReducer from "./Reducers/serviceDetails";
import ratings from "./Reducers/ratings";
import previousHistory from "./Reducers/previousHistory";

const store=configureStore({
    reducer:{
        serviceDetailsReducer,
        ratings,
        previousHistory
    }
})

export default store;