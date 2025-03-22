import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    name: '',
    email: '',
    password: '',
};

const registerSlice = createSlice({
    name: 'register',
    initialState,
    reducers: {
        setName: (state, action) => {
            state.name = action.payload;
        },
        setEmail: (state, action) => {
            state.email = action.payload;
        },
        setPassword: (state, action) => {
            state.password = action.payload;
        },
        resetRegister: (state) => {
            state.name = '';
            state.email = '';
            state.password = '';
        },
    },
});

export const { setName, setEmail, setPassword, resetRegister } = registerSlice.actions;

export default registerSlice.reducer;