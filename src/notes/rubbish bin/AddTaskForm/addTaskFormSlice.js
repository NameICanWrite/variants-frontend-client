import { createSlice, current } from '@reduxjs/toolkit';
import './style.sass'

const initialState = {
    selectTriggerMode: false,
    selectedTrigger: {},
  status: 'idle',
};

export const addTaskFormSlice = createSlice({
  name: 'addTaskForm',
  initialState,
  // The `reducers` field lets us define reducers and generate associated actions
  reducers: {
    toggleSelectTriggerMode: (state) => {
      state.selectTriggerMode = !state.selectTriggerMode;
    },
    selectTrigger: (state, {payload}) => {
        state.selectedTrigger = payload
    },
    deleteTrigger: (state) => {
      state.selectedTrigger ={}
    }
  }
});

export const { toggleSelectTriggerMode, selectTrigger, deleteTrigger } = addTaskFormSlice.actions;

// The function below is called a selector and allows us to select a value from
// the state. Selectors can also be defined inline where they're used instead of
// in the slice file. For example: `useSelector((state: RootState) => state.counter.value)`
export const selectSelectTriggerMode = (state) => state.addTaskForm.selectTriggerMode;

export default addTaskFormSlice.reducer;