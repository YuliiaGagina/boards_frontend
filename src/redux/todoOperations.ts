import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { ICard, IDataAdd, IDataTodo, IStateTodo, ITodo } from '../types/types';

export const api = createApi({
  baseQuery: fetchBaseQuery({ baseUrl: 'https://boards2311.onrender.com' }),
  tagTypes: ['Todos'],
  endpoints: (builder) => ({
    getAllTodosforCard: builder.query<{ todos: ITodo[] }, string>({
      query: (cardId) => `/api/todos/forCurrent?cardId=${cardId}`,
       providesTags: ["Todos"],
    }),
  
    deleteTodo: builder.mutation<void, string>({
      query: (cardId) => ({
        url: `/api/todos/${cardId}/`,
        method: 'DELETE',
      }),
      invalidatesTags: ["Todos"],
    }),
    ChangeTodo: builder.mutation<void, { cardId: string; data: Partial<IDataTodo> }>({
      query: ({ cardId, data }) => ({
        url: `/api/todos/${cardId}/`,
        method: 'PUT',
        body: data,
      }),
      invalidatesTags: ["Todos"],
    }),
    addTodo: builder.mutation<IDataAdd, { todoData: IDataTodo; cardId: string }>({
      query: ({ todoData, cardId }) => ({
        url: '/api/todos/',
        method: 'POST',
        body: { ...todoData, cardId },
      }),
       invalidatesTags: ["Todos"],
    }),
    ChangeTodoState: builder.mutation<void, { cardId: string; data: Partial<IStateTodo> }>({
      query: ({ cardId, data }) => ({
        url: `/api/todos/${cardId}/state/`,
        method: 'PATCH',
        body: data,
      }),
       invalidatesTags: ["Todos"],
    }),
     getAllCards: builder.query<ICard[], void>({
      query: () => '/api/cards', 
    }),
  }),
});

export const {
  useGetAllTodosforCardQuery,
  useDeleteTodoMutation,
  useChangeTodoMutation,
  useAddTodoMutation,
  useChangeTodoStateMutation,
   useGetAllCardsQuery,
} = api;
