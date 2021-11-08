import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

const initialState = {
  show: true,
//   fooData: []
  status: 'idle',
};


export const Slice = createSlice({
  name: 'createLetterModal',
  initialState,
  reducers: {
    toggleCreateLetterModal: (state) => {
      state.show = !state.show;
      console.log('toggle')
    }
  },
  extraReducers: {
  }
});

export const {
  toggleCreateLetterModal
} = Slice.actions;



export default Slice.reducer;