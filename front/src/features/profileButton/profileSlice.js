import { createSlice } from '@reduxjs/toolkit'

export const profileSlice = createSlice({
  name: 'profile',
  initialState: {
    value: false,
  },
  reducers: {
    login: (state) => {
        state.value = true;
    },
    logout: (state) => {
        state.value = false
    },
  },
})
// Action creators are generated for each case reducer function
export const { login,logout} = profileSlice.actions

export default profileSlice.reducer