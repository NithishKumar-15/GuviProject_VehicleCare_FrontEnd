import { configureStore } from "@reduxjs/toolkit";
import serviceDetailsReducer from "./Reducers/serviceDetails";
import ratings from "./Reducers/ratings";

const store=configureStore({
    reducer:{
        serviceDetailsReducer,
        ratings
    }
})

export default store;