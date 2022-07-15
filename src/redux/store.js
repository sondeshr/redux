import { configureStore } from '@reduxjs/toolkit'
import  TodoSlice from './todoslice'

export const store = configureStore({
  reducer: {
    todo:TodoSlice,
  },
})