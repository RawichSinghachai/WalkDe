import { configureStore } from '@reduxjs/toolkit'
import UserStore from './UserStore'
import RecordStore from './RecordStore'


export const store = configureStore({
  reducer: {
    UserStore:UserStore,
    RecordStore:RecordStore,
    
  },
})


export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch