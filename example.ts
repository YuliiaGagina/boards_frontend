// store


// import { configureStore } from '@reduxjs/toolkit';

// import {
 
//   FLUSH,
//   REHYDRATE,
//   PAUSE,
//   PERSIST,
//   PURGE,
//   REGISTER,
// } from 'redux-persist';




// import { todoReducer } from './todosSlice';



// export const store = configureStore({
//   reducer: {

//     todos: todoReducer,
//   },

//   middleware: getDefaultMiddleware =>
//     getDefaultMiddleware({
//       serializableCheck: {
//         ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
//       },
//     }),
// });

// export type RootState = ReturnType<typeof store.getState>;
// export type AppDispatch = typeof store.dispatch;



// oparetions 




// import { createAsyncThunk } from '@reduxjs/toolkit';
// // import { instance } from './user/operations';
// import axios from 'axios';

// // import { IForm } from '../components/ContactForm/ContactForm';
// import { IContact, IDataTodo, IStateTodo, ITodo } from '../types/types';

//  const instance = axios.create({
//   baseURL: 'https://boards2311.onrender.com',
// });


// export const getAllTodosforCard = createAsyncThunk('todos/getAll', async (cardId: String): Promise<ITodo[]> => {
//   const response = await instance.get(`/api/todos/forCurrent?cardId=${cardId}`);
//     return  response.data.todos  ;
// });

// export const deleteTodo = createAsyncThunk(
//   'todos/deleteTodo',
//   async(cardId : string) => {
//     const response = await instance.delete(`/api/todos/${cardId}/`);
    
//     return response.data;
//   }
// );

// export const ChangeTodo = createAsyncThunk(
//   'todos/changeTodo',
//   async ({ cardId, data }: {
//     cardId: string, data: Partial<IDataTodo>;
//   }) => {
//     const response = await instance.put(`/api/todos/${cardId}/`, data);
//     return response.data;
//   }
// );

// export const addTodo = createAsyncThunk(
//   'todos/addTodo',
//   async (todoData : ITodo, cardId) => {
//       const response = await instance.post(`/api/todos/`, { ...todoData, cardId: cardId });

//     return response.data;
//   }
// );

// export const ChangeTodoState = createAsyncThunk(
//   'todos/changeTodo',
//   async ({ cardId, data }: {
//     cardId: string, data: Partial<IStateTodo>;
//   }) => {
//     const response = await instance.patch(`/api/todos/${cardId}/state/`, data);
//     return response.data;
//   }
// );



// slice 

// import { createSlice, PayloadAction, } from '@reduxjs/toolkit';


// import { getAllTodosforCard, deleteTodo, ChangeTodo, addTodo, ChangeTodoState } from "./todoOperations";
// import {  IDataTodo, ITodo } from '../types/types';





// interface TodoState {
//  todos: ITodo[],
//   isLoading: boolean,
//   error: null | string,
//   cardId: null | string,
// }

// const initialState : TodoState = {
//   todos: [],
//   isLoading: false,
//   error: '',
//   cardId: "",
// };

// export const todoSlice = createSlice({
//   name: 'todos',
//   initialState: initialState,
//   reducers: {
//     resetError(state) {
//       state.error = null;
//     },
//   },
  
//   extraReducers: (builder) =>
//       builder
//         .addCase(getAllTodosforCard.pending, state => {
//           state.isLoading = true;
//         })
//         .addCase(getAllTodosforCard.fulfilled, (state, action : PayloadAction<ITodo[]> ) => {
//           state.isLoading = false;
//           state.todos = [...action.payload];
//            state.cardId = action.payload[0].cardId
        

//         })
//         .addCase(getAllTodosforCard.rejected, (state   , {payload } )=> {
//           state.isLoading = false;
//           state.error = "Error Loading";
//         })
//         //  delete todo
//         .addCase(deleteTodo.pending, (state) => {
//           state.isLoading = true;
//         })
//         .addCase(deleteTodo.fulfilled, (state, action : PayloadAction<string>) => {
//           state.todos = state.todos.filter(item => item._id !== action.payload);
//           state.isLoading = false;
//           console.log(state.todos);
          
//         })
//         .addCase(deleteTodo.rejected, ( state, action ) => {
//           state.error = "Error Loading";
//           state.isLoading = false;
//         })
//         //  add todo
//         .addCase(addTodo.pending, (state, action) => {
//           state.isLoading = true;
//         })
//         .addCase(addTodo.fulfilled, (state, action : PayloadAction<ITodo>) => {
//           state.todos = [action.payload, ...state.todos];
//           state.isLoading = false;
//         })
//         .addCase(addTodo.rejected, (state , action) => {
//           state.error = "Error Loading";
//           state.isLoading = false;
//         })
//         // change todo
//         .addCase(ChangeTodo.pending, (state, action) => {
//           state.isLoading = true;
//         })
//         .addCase(ChangeTodo.fulfilled, (state, action : PayloadAction<ITodo>) => {
        
//           state.isLoading = false;
//           state.error = null;
//           const updatedTodo = action.payload;
//           const index = state.todos.findIndex(
//             todo => todo._id === updatedTodo._id
//           );

//           if (index !== -1) {
//             state.todos[index] = updatedTodo;
//           }
//         })
//         .addCase(ChangeTodo.rejected, (state , action) => {
       
//           state.isLoading = false;
//           state.error = "Error Loading";
//         })
            
//   });

// export const todoReducer = todoSlice.reducer;







