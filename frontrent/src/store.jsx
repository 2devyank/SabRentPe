import {configureStore} from "@reduxjs/toolkit"
import { rentApi } from "./features/rentSlice"

export const store =configureStore({
    reducer:{
// [rentApi.reducerPath]:rentApi.reducer
    }
})