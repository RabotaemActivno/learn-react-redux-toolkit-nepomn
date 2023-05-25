import {useSelector} from 'react-redux'
import TodoItem from "./TodoItem"

const TodoList = () => {
    const todos = useSelector(state => state.todos.todos)
    return(
        <div className="todo__wrapper">
          <ul className="list-group">
            {
              todos.map(t => {
                return (
                  <TodoItem key={t.id} {...t}/>
                )
              })
            }
          </ul>
        </div>
    )
}

export default TodoList