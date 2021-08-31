import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { fetchData } from './API'

//** important:  ALWAYS REINITIALIZE ARRAY 

const initialState = {
//   foo: false,
  inboxData: [],
  status: 'idle',
};

export const fetchInbox = createAsyncThunk('inbox/fetchInbox', async () => fetchData())

export const Slice = createSlice({
  name: 'inbox',
  initialState,
  reducers: {

  },
  extraReducers: {
    [fetchInbox.fulfilled]: (state, { payload }) => {
      state.inboxData = payload
      state.status = 'success'
    },
  }
});

// export const { togglefoo } = Slice.actions;

// export const selectFoo = (state) => state.header.foo;

export default Slice.reducer;