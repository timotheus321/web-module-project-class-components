import React from 'react'
import TodoList from './TodoList';
import TodoForm from './TodoForm'


class App extends React.Component {
  constructor() {
    super();
    this.state = {
      todos: [
        {
          name: "Organize Garage",
          id: 1528817077286,
          completed: false,
        },
        {
          name: "Bake Cookies",
          id: 1528817084358,
          completed: false,
        },
      ],
    }
    }
  

    handleAdd = () => {
    const newTodo = {
    task: "Cook Things",
    id: Date.now(),
    completed: false
    };
    this.setState({
    ...this.state,
    todos: [...this.state.todos, newTodo]
   });
  }

     handleClear = () => {
      this.SetState({
      ...this.state,
      todos: this.state.todos.filter(todo => {
      return (todo.completed === false);
    })
  });
 }

 handleToggle = (clickedId) =>{
  const clickedId = 1528817077286
  this.setState({
    ...this.state,
    todos: this.todos.map(todo => {
      if (todo.id === clickedId) {
      return {
        ...todo,
        completed: !todo.completed
      } 
     }
     return todo;
     })
   });
  }

 

  render() {
    const { todos } = this.state;
    return (
      <div>
        <h1>Todo App</h1>
        <TodoList handleToggle={handleToggle}todos={todos} />
        <TodoForm handleAdd={this.handleAdd}/>
        <button onClick={this.handleClear}>Clear</button>
      </div>
    );
    }
  }

export default App;