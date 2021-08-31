import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

//** important:  ALWAYS REINITIALIZE ARRAY 

const initialState = {
  show: true,
//   fooData: []
  status: 'idle',
};

// export const fetchFoo = createAsyncThunk('foo/fetchFoo', async () => fetchData())

export const Slice = createSlice({
  name: 'createLetterModal',
  initialState,
  reducers: {
    toggleShow: (state) => {
      state.show = !state.show;
      console.log('toggle')
    }
  },
  extraReducers: {
    // [fetchFoo.fulfilled]: (state, { payload }) => {
    //   state.fooData = payload
    //   state.status = 'success'
    // },
  }
});

export const { toggleShow } = Slice.actions;

// export const selectFoo = (state) => state.header.foo;

export default Slice.reducer;