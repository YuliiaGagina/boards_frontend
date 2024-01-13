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

  const todoStatuses = ["To do", "In progress", "Done"];

  useEffect(() => {
    if (data && data.todos) {
      setLoadedTodos(data.todos);
    }
  }, [data]);

  const handleDragEnd = (result: DropResult) => {
    const { source, destination, draggableId } = result;

    if (!result.destination) {
      return;
    }

    if (
      source.droppableId === destination?.droppableId &&
      source.index === destination?.index
    )
      return;

    if (
      !destination ||
      !destination.droppableId ||
      !destination.hasOwnProperty("index")
    ) {
      return;
    }

    const updatedTodos = [...loadedTodos];

    if (source.droppableId === destination.droppableId) {
      const movedIndex = updatedTodos.findIndex(
        (todo) => todo._id === draggableId
      );
      const movedTodo = updatedTodos[movedIndex];

      updatedTodos.splice(movedIndex, 1);
      updatedTodos.splice(destination.index, 0, movedTodo);
    } else {
      const newStatus = destination.droppableId;
      changeTodoState({ cardId: draggableId, data: { state: newStatus } });
    }

    setLoadedTodos(updatedTodos);
  };

  if (error) return <p>Sorry no data yet!</p>;
  if (changeStateIsLoading) return <Loader />;

  return (
    <>
      <Board>
        <ColumnWrap>
          <DragDropContext onDragEnd={handleDragEnd}>
            {todoStatuses.map((status, index) => (
              <ColumnWrap key={status}>
                <TodoColumn
                  data={data}
                  title={status}
                  todos={loadedTodos.filter((todo) => todo.state === status)}
                />
              </ColumnWrap>
            ))}
          </DragDropContext>
        </ColumnWrap>
      </Board>
    </>
  );
};
