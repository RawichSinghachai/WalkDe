import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from '@reduxjs/toolkit'

type RecordType = {
    userRef:string,
    weight:number,
    height:number,
    heartRate:[],
    timeDuration:[],
    realTime:string,
    progress:number[],
    footStep:[],
}

const initialState:RecordType = {
    userRef:"",
    weight:0,
    height:0,
    heartRate:[],
    timeDuration:[],
    realTime:"string",
    progress:[],
    footStep:[],
}

export const RecordStore = createSlice({
    name:"RecordStore",
    initialState,
    reducers:{
        saveRecord:(state,action:PayloadAction<any>)=>{
            state.userRef = action.payload.userRef
            state.weight = action.payload.weight
            state.height = action.payload.height
            state.heartRate = action.payload.heartRate
            state.timeDuration = action.payload.timeDuration
            state.realTime = action.payload.realTime
            state.progress = action.payload.progress
            state.footStep = action.payload.footStep
        },
        
    }
})

export const {saveRecord} = RecordStore.actions
export default RecordStore.reducer