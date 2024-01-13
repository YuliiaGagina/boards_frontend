 export interface ICard {
  _id: string ,
  name: string ,

}

export interface IOneCard{
    _id: string ,
   name: string,
   todos: ITodo[],
}

export interface ITodo {
   _id: string,
   title: string,
   description: string,
   state: string,
   cardId: string

}

 export interface IDataTodo {
   title: string,
   description: string,
 
}

export  interface IDataAdd {
    title: string,
   description: string,
    cardId: string
}

export interface IStateTodo{
   state: string
}