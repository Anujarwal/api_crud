import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { fetchTodo } from "./todoService";


const todoSlice = createSlice({
  name: "todos",
  initialState: {
    isLoading: false,
    isError: false,
    isSuccess: false,
    allTodos: [],
    edit: {
      todo: {},
      editMode: false,
    },
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
    .addCase(getTodos.pending , (state , action) => {
      state.isLoading = true;
      state.isSuccess = false;
      state.isError = false
    })
    .addCase(getTodos.fulfilled , (state , action) => {
      state.isLoading = false;
      state.isSuccess = true;
      state.allTodos = action.payload;
      state.isError = false;
    })
    .addCase(getTodos.rejected , (state , action) => {
      state.isLoading = false;
      state.isSuccess = false;
      state.isError = true;
    })
  },
});

export default todoSlice.reducer;


export const getTodos = createAsyncThunk("FETCH/TODOS" , async () => {
  try {
    return await fetchTodo()
  } catch (error) {
    console.log(error)
  }
})
