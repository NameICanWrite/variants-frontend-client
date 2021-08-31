import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    priorityScale: 5,
    probabilityScale: 10,
}

const scalesSlice = createSlice({
    name: 'scales',
    initialState,
    reducers: {},
})

export default scalesSlice.reducer