import { createSlice, createAsyncThunk, current } from '@reduxjs/toolkit'
import { useSelector, useDispatch } from 'react-redux';
import axios from 'axios'

import serverPath from "../../index";

const initialState = {
  logData: [123],
  status: 'idle',
};

export const fetchLog = createAsyncThunk('log/fetchLog', async () => {
  const response = await axios.get(serverPath + '/log');
  return response.data
})

export const postLogRecord = createAsyncThunk('log/addLogRecord', async (logRecord) => {
  await axios.post(serverPath + '/log', logRecord)
  return logRecord
})

export const logSlice = createSlice({
  name: 'log',
  initialState,
  reducers: {
  },
  extraReducers: {
    // [fetchTasks.pending]: (state, action) => {
    //   state.status = 'loading'
    // },
    [fetchLog.fulfilled]: (state, { payload }) => {
      state.logData = payload
      state.status = 'success'
    },
    [postLogRecord.fulfilled]: (state, { payload }) => {
      state.logData.push(payload)
      state.status = 'success'
      console.log(current(state.logData))
    }
   }
})

export const selectLog = (state) => state.tasks.logData

// export const { fetchTasks, check } = tasksSlice.actions

export default logSlice.reducer