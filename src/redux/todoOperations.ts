import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import {
  ICard,
  IDataAdd,
  IDataTodo,
  IOneCard,
  IStateTodo,
  ITodo,
} from "../types/types";

export const api = createApi({
  baseQuery: fetchBaseQuery({ baseUrl:'https://boards2311.onrender.com' }),
  tagTypes: ["Todos", "Cards"],
  endpoints: (builder) => ({
    getAllTodosforCard: builder.query<{ todos: ITodo[] }, string>({
      query: (cardId) => `/api/todos/forCurrent?cardId=${cardId}`,
      providesTags: ["Todos", "Cards"],
    }),

    deleteTodo: builder.mutation<void, string>({
      query: (cardId) => ({
        url: `/api/todos/${cardId}/`,
        method: "DELETE",
      }),
      invalidatesTags: ["Todos", "Cards"],
    }),
    ChangeTodo: builder.mutation<
      void,
      { cardId: string; data: Partial<IDataTodo> }
    >({
      query: ({ cardId, data }) => ({
        url: `/api/todos/${cardId}/`,
        method: "PUT",
        body: data,
      }),
      invalidatesTags: ["Todos", "Cards"],
    }),
    addTodo: builder.mutation<
      IDataAdd,
      { todoData: IDataTodo; cardId: string }
    >({
      query: ({ todoData, cardId }) => ({
        url: "/api/todos/",
        method: "POST",
        body: { ...todoData, cardId },
      }),
      invalidatesTags: ["Todos", "Cards"],
    }),
    ChangeTodoState: builder.mutation<
      void,
      { cardId: string; data: Partial<IStateTodo> }
    >({
      query: ({ cardId, data }) => ({
        url: `/api/todos/${cardId}/state/`,
        method: "PATCH",
        body: data,
      }),
      invalidatesTags: ["Todos", "Cards"],
    }),
    getAllCards: builder.query<ICard[], void>({
      query: () => "/api/cards",
    }),
    getOneCard: builder.query<IOneCard, string>({
      query: (cardId) => `/api/cards/${cardId}`,
      providesTags: ["Cards", "Todos"],
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
  useGetOneCardQuery,
} = api;
