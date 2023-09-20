import { CreateSlice, createAsyncThunk } from "@reduxjs/toolkit";


export const authReducer = CreateSlice ({
    name: "auth",
    initialState: {
    seccessMessage: " ",
    errorMessage: " ",
    loader: false,
    userInfo: " "
    },
    
    reducers: {
    
},
    
    extreReduces: {
        
    }
  }
)

export default authReducer.reducer