import { createSlice } from '@reduxjs/toolkit'

export const profileNameSlice = createSlice({
  name: 'profileName',
  initialState: {
    value: 'Salah',
  },
  reducers: {
    changeName: (state,action) => {
        state.value = action.payload ; 
    }
  },
})
// Action creators are generated for each case reducer function
export const { changeName} = profileNameSlice.actions

export default profileNameSlice.reducer