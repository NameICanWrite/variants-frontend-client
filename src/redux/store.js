import { configureStore } from '@reduxjs/toolkit';
import ModalsReducer from './modals.slice'
import scheduledLettersReducer from './letter-form.slice'

export const store = configureStore({
  reducer: {
    modals: ModalsReducer,

  },
});
