import { createSlice } from '@reduxjs/toolkit';


const initialState = {
  showDetails: '',
  status: 'idle',
};

export const detailsSlice = createSlice({
  name: 'details',
  initialState,
  // The `reducers` field lets us define reducers and generate associated actions
  reducers: {
    setShowDetails: (state, {payload}) => {
      state.showDetails = payload;
    }
  }
});

export const { setShowDetails } = detailsSlice.actions;

// The function below is called a selector and allows us to select a value from
// the state. Selectors can also be defined inline where they're used instead of
// in the slice file. For example: `useSelector((state: RootState) => state.counter.value)`
export const selectShowDetails = (state) => state.details.showDetails;

export default detailsSlice.reducer;