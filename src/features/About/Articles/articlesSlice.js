import { createSlice, createAsyncThunk, current } from '@reduxjs/toolkit'
import { useSelector, useDispatch } from 'react-redux';
import axios from 'axios'

import serverPath from "../../../index";

const initialState = {
  articlesData: [123],
  status: 'idle',
};

export const fetchArticles = createAsyncThunk('articles/fetchArticles', async () => {
  const response = await axios.get(serverPath + '/articles');
  return response.data
})

export const postArticle = createAsyncThunk('articles/postArticle', async (article) => {
  await axios.put(serverPath + `/articles/${article.id}`, article)
  return article
})

export const articlesSlice = createSlice({
  name: 'articles',
  initialState,
  reducers: {
  },
  extraReducers: {
    // [fetchTasks.pending]: (state, action) => {
    //   state.status = 'loading'
    // },
    [fetchArticles.fulfilled]: (state, { payload }) => {
      state.articlesData = payload
      state.status = 'success'
    },
    [postArticle.fulfilled]: (state, { payload }) => {
      state.articlesData.push(payload)
      state.status = 'success'
      console.log(current(state.articlesData))
    }
   }
})

export const selectArticles = (state) => state.tasks.articlesData

// export const { fetchTasks, check } = tasksSlice.actions

export default articlesSlice.reducer