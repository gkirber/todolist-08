import {configureStore} from '@reduxjs/toolkit';
import {todolistsReducer} from './model/todolists-reducer';

export const store = configureStore({
    reducer: {
        todolists: todolistsReducer, // Підключення ред'юсера
    },
});

// Типи для використання у хуках
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
