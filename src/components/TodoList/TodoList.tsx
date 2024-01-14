import React, { useEffect, useState } from "react";
import { ITodo } from "../../types/types";
import { DragDropContext, DropResult } from "react-beautiful-dnd";

import { Loader } from "../Loader/Loader";
import { Board, ColumnWrap } from "./CardList.styled";

import { TodoColumn } from "../TodoColumn/TodoColumn";
import {
  useChangeTodoStateMutation,
  useGetOneCardQuery,
} from "../../redux/todoOperations";

interface TodoListProps {
  currentCardId: string;
}

export const TodoList: React.FC<TodoListProps> = ({ currentCardId }) => {
  const [loadedTodos, setLoadedTodos] = useState<ITodo[]>([]);
  
  const [changeTodoState] = useChangeTodoStateMutation();
  const {
    data,
    error,
    isLoading: changeStateIsLoading,
  } = useGetOneCardQuery(currentCardId || "");


   const [isChangingState, setIsChangingState] = useState(false);

  const todoStatuses = ["To do", "In progress", "Done"];

  useEffect(() => {
    if (data && data.todos) {
      setLoadedTodos(data.todos);
    }
  }, [data]);



  const handleDragEnd = async (result: DropResult) => {
   
     setIsChangingState(true);
    const { source, destination, draggableId } = result;

    if (!destination) {
       setIsChangingState(false);
      return;
    }

    if (source.droppableId === destination.droppableId && source.index === destination.index) {
       setIsChangingState(false);
      return;
    }

    const updatedTodos = [...loadedTodos];
    
   
    const sourceColumnTodos = updatedTodos.filter((todo) => todo.state === source.droppableId);
    
  
    const movedTodo = sourceColumnTodos.find((todo) => todo._id === draggableId);

    if (!movedTodo) {
      setIsChangingState(false);
      
      return;
    }

   
    const filteredSourceColumnTodos = sourceColumnTodos.filter((todo) => todo._id !== draggableId);

  
    filteredSourceColumnTodos.splice(destination.index, 0, movedTodo);


    const updatedTodosCopy = updatedTodos.filter((todo) => todo.state !== source.droppableId);
    updatedTodosCopy.push(...filteredSourceColumnTodos);

   
    setLoadedTodos(updatedTodosCopy);

   
    if (source.droppableId !== destination.droppableId) {
      const newStatus = destination.droppableId;
      await changeTodoState({ cardId: draggableId, data: { state: newStatus } });
    }
     setIsChangingState(false);
  };

  if (error) return <p>Sorry no data yet!</p>;


  return (
    <>
      <Board>
        <ColumnWrap>
          <DragDropContext  onDragEnd={handleDragEnd}>
            {todoStatuses.map((status, index) => (
              <ColumnWrap key={status}>
                <TodoColumn
                  data={data}
                  title={status}
                  todos={loadedTodos.filter((todo: ITodo) => todo.state === status)}
                />
              </ColumnWrap>
            ))}
          </DragDropContext>
        </ColumnWrap>
      </Board>
      {isChangingState  && <Loader />}
     {changeStateIsLoading && <Loader/>}
    </>
  );
};
