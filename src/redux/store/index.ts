import { configureStore, createSlice } from '@reduxjs/toolkit';

import rootReducers from '../reducer';

// const store = configureStore({rootReducers})

export const store = configureStore({
    reducer: {
        todos: rootReducers,
    }
})