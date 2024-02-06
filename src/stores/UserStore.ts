import { createSlice, } from "@reduxjs/toolkit";
import type { PayloadAction } from '@reduxjs/toolkit'

type UserType = {
    id:string,
    username:string,
    email:string,
    password:string,
    statuslogin:boolean
}

const initialState:UserType = {
    id:"",
    username:"",
    email:"",
    password:"",
    statuslogin:false,
}

export const UserStore = createSlice({
    name:"UserStore",
    initialState,
    reducers:{
        saveUser:(state,action:PayloadAction<any>)=>{
            state.id = action.payload.id
            state.username = action.payload.username
            state.email = action.payload.email
            state.password = action.payload.password

            if(action.payload.status === 'success'){
                state.statuslogin = true
            }
        },
    }
})

export const {saveUser} = UserStore.actions
export default UserStore.reducer