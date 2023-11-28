import {useContext,createContext} from 'react'


export const TodoContext = createContext({
    Todos:[
        {
            id : 1,
            todo : "Todo message",
            completed : false
        }
     
    ]
    ,
    addTodo : (todo)=>{},
    updateTodo : (id,todo)=>{},
    deleteTodo:(id)=>{},
    togglecomplete : (id)=>{}
})

export const TodoProvider = TodoContext.Provider;

export const useTodo = ()=>{
    return useContext(TodoContext);
}