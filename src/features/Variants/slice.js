import { createSlice, createAsyncThunk, current } from '@reduxjs/toolkit';
import axios from 'axios';
import { fetchData, postData, deleteData, changeData } from './API'
import { Variant, EventData, Choice } from './Variant/API';




const initialState = {
  variantsData: [],
  eventsData: [],
  status: 'idle',
};

export const fetchVariants = createAsyncThunk('variants/fetchVariants', async () => fetchData())
export const postEvents = createAsyncThunk('variants/postVariants', async (eventsData) => postData(eventsData))
export const deleteVariants = createAsyncThunk('variants/deleteVariants', async (id) => deleteData(id))
export const changeVariants = createAsyncThunk('variants/changeVariants', async (variant) => changeData(variant))

export const variantsSlice = createSlice({
  name: 'variants',
  initialState,
  reducers: {
    addEventData: (state, {payload}) => {
      state.eventData = [...state.eventData, payload.data]
    },
    createAllEventsData: (state) => {
      state.eventsData = state.variantsData.map(variant => new EventData().setName(variant.name))
    },
    receiveEvent: (state, {payload}) => {
      state.eventsData = state.eventsData.map(item => {
        if (item.name == payload.name) return item.receiveEvent(payload.event.choiceName, payload.event.variantName)
        return item
      })
    },
    addVariant: (state, {payload}) => {
      state.variantsData = [...state.variantsData, payload]
      state.eventsData = [...state.eventsData, new EventData().setName(payload.name)]
    },
    addChoice: (state, { payload }) => {
      state.variantsData = state.variantsData.map(item => {
        if (item.id == payload.id) return item.receiveChoice(new Choice(payload.choiceName))
        return item
      })
    },
    addVariantToChoice: (state, {payload}) => {
      state.variantsData = state.variantsData.map(variant => {
        variant.choices = variant.choices.map(choice => {
          if (choice.name == payload.choiceName) return choice.receiveVariant(payload.variant)
          return choice
        })
        return variant
      })
    }
  },
  extraReducers: {
    [fetchVariants.fulfilled]: (state, { payload }) => {
      state.variantsData = payload
      state.eventsData = state.variantsData.map(variant => new EventData().setName(variant.name))
      console.log(current(state).variantsData)
      state.status = 'success'
    },
    [postEvents.fulfilled]: (state, { payload }) => {
      console.log(payload);
      state.status = 'success'
    },
    [deleteVariants.fulfilled]: (state, action) => {
      state.variantsData = state.variantsData.filter((task) => task.id !== action.payload)
    },
    [changeVariants.fulfilled]: (state, action) => {
      state.variantsData = state.variantsData.map((task) => {

        if (task.id == action.payload.id) {
          task = action.payload
        }
        return task
      })
    }
  }
});

export const { addEventData, modifyEventData, addChoice, addVariant, addVariantToChoice, createAllEventsData, receiveEvent } = variantsSlice.actions;

export default variantsSlice.reducer;