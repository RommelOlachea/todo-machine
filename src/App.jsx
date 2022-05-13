// import logo from './logo.svg';
// import './App.css';
import React from "react";
import { TodoCounter } from './TodoCounter';
import { TodoSearch } from './TodoSearch';
import { TodoList } from './TodoList';
import { TodoItem } from './TodoItem';
import { CreateTodoButton } from './CreateTodoButton';

const todos = [
  {text:'Cortar Cebolla', completed:true},
  {text:'Picar Tomate', completed:false},
  {text:'Llorar con la llorona', completed:false},
  {text:'Bla Bla Bla', completed:false},
]

function App() {
  const [searchValue, setSearchValue] = React.useState('');
  return (
    <React.Fragment>
      <TodoCounter/>      
      <TodoSearch
         searchValue={searchValue} 
         setSearchValue={setSearchValue} 
      />
        
      <TodoList>

      {todos.map(todo=>(
        <TodoItem key={todo.text}text={todo.text}/>
      ))}

      </TodoList>
      <CreateTodoButton/>      
    </React.Fragment>    
  );
  
}

export default App;

