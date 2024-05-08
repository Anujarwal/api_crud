import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { addTodo, deleteTodo, fetchTodo, update } from "./todoService";

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
  reducers: {
    removeTodo: (state, action) => {
      return {
        ...state,
        allTodos: state.allTodos.filter((item) => item._id !== action.payload),
      };
    },

    edit : (state , action) =>{
        return{
            ...state,
            edit : {
                todo : action.payload,
                editMode : true,

            }
        }
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(getTodo.pending, (state, action) => {
        state.isLoading = true;
        state.isError = false;
        state.isSuccess = false;
      })
      .addCase(getTodo.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isError = false;
        state.isSuccess = true;
        state.allTodos = action.payload;
      })
      .addCase(getTodo.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.isSuccess = false;
      })
      //
      .addCase(saveTodo.pending, (state, action) => {
        state.isLoading = true;
        state.isError = false;
        state.isSuccess = false;
      })
      .addCase(saveTodo.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isError = false;
        state.isSuccess = true;
        state.allTodos = [action.payload];
      })
      .addCase(saveTodo.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.isSuccess = false;
      });
  },
});

export const { removeTodo , edit } = todoSlice.actions;
export default todoSlice.reducer;

export const getTodo = createAsyncThunk("FETCH/TODO", async () => {
  try {
    return await fetchTodo();
  } catch (error) {
    console.log(error);
  }
});

export const saveTodo = createAsyncThunk("SAVE/TODO", async (formData) => {
  try {
    return await addTodo(formData);
  } catch (error) {
    console.log(error);
  }
});

export const remove = createAsyncThunk("REMOVE/TODO", async (_id) => {
  try {
    return await deleteTodo(_id);
  } catch (error) {
    console.log(error);
  }
});

export const add = createAsyncThunk("ADD/TODO" , async (updated) => {
    try {
        return await update(updated);
    } catch (error) {
        console.log(error)
    }
})


