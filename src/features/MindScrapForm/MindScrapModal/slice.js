import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { fetchData } from './API'

//** important:  ALWAYS REINITIALIZE ARRAY

const initialState = {
  show: false,
//   fooData: []
  status: 'idle',
};

// export const fetchFoo = createAsyncThunk('foo/fetchFoo', async () => fetchData())

export const Slice = createSlice({
  name: 'mindScrapForm',
  initialState,
  reducers: {
    toggleMindScrapModal: (state) => {
       state.show = !state.show 
    }
  },
  extraReducers: {
    // [fetchFoo.fulfilled]: (state, { payload }) => {
    //   state.fooData = payload
    //   state.status = 'success'
    // },
  }
});

export const { toggleMindScrapModal } = Slice.actions;

// export const selectFoo = (state) => state.header.foo;

export default Slice.reducer;