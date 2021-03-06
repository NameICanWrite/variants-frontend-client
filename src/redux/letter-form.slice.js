import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import scheduledLettersApi from '../api/scheduledLetters.api';

//** important:  ALWAYS REINITIALIZE ARRAY 

const initialState = {
//   foo: false,
  // awaitingLettersData: [],
  status: 'idle',
};

// export const fetchAwaitingLetters = createAsyncThunk('awaitingLetters/fetchAwaitingLetters', async () => fetchData())
export const postLetter = createAsyncThunk('scheduledLetters/postLetter', (letter) => scheduledLettersApi.patch(letter))

export const Slice = createSlice({
  name: 'awaitingLetters',
  initialState,
  reducers: {
    // togglefoo: (state) => {
    //   state.foo = !state.foo;
    // }
  },
  extraReducers: {
    [postLetter.fulfilled]: (state, { payload }) => {
      state.sendResponse = payload
      console.log(payload)
      state.status = 'success'
    },
    [postLetter.rejected]: (state, { payload }) => {
      state.sendResponse = payload
      console.log(payload)
      state.status = 'failure'
    },
  }
});

// export const { togglefoo } = Slice.actions;

// export const selectFoo = (state) => state.header.foo;

export default Slice.reducer;