import { configureStore } from '@reduxjs/toolkit'

import profileReducer from './features/profileButton/profileSlice';
import profileName from './features/profileName/profileName';


export default configureStore({
  reducer: {
    
    profile : profileReducer,
    profileName : profileName
  },
})
