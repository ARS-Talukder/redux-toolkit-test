import { configureStore } from '@reduxjs/toolkit'
import counterSlice from '../features/counter/counterSlice';

export const store = configureStore({
    // devTools: false,
    reducer: {
        counter: counterSlice,
    },
})

export default store;