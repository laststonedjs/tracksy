import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface InitialStateTypes {
    isSidebarCollapsed:boolean;
}

const initialState: InitialStateTypes = {
    isSidebarCollapsed: false
}

// slice are just elements of the data store
export const globalSlice = createSlice({
    name: 'global',
    initialState,
    reducers: { // whenever we use this arrow function, will update the Redux store
        setIsSidebarCollapsed: (state, action: PayloadAction<boolean>) => { // action represents the type that we have
            state.isSidebarCollapsed = action.payload; // here we're passing in a value for 'sidebarCollapsed'
        }
    }
});

export const { setIsSidebarCollapsed } = globalSlice.actions;

export default globalSlice.reducer;