import { createSlice, current } from "@reduxjs/toolkit";

const initialState ={
    priority: '',
    probability: '',
    filterOn: false,
    show: false
}

const tasksFilterSlice = createSlice({
    name: 'tasksFilterSlice',
    initialState,
    reducers: {
        setPriority: (state, priority) => {
            state.priority = priority.payload
            console.log(current.priority)
        },
        setProbability: (state, probability) => {
            state.probability = probability.payload
        },
        filterSwitch: (state) => {
            state.filterOn = !state.filterOn
        },
        toggleShowFilter: (state) => {
            state.show = !state.show
        }
    }
})

export const { setPriority, setProbability, filterSwitch, toggleShowFilter } = tasksFilterSlice.actions

export default tasksFilterSlice.reducer