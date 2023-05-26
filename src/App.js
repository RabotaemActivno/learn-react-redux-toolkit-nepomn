import { useState, useEffect } from "react";
import TodoList from "./components/TodoList";
import InputField from "./components/InputField";
import { useDispatch, useSelector } from 'react-redux'
import { addNewTodo, fetchTodos } from './store/todoSlice'

function App() {

  const [err, setErr] =useState(null)
  const [title, setTitle] = useState('')
  const { status, error } = useSelector(state => state.todos)
  const dispatch = useDispatch()

  const addTask = () => {
    if (title.trim()) {
      dispatch(addNewTodo(title))
      setTitle('')
    } else {
      setErr('Enter title')
    }
  }
  const handleInput = (title) => {
    setErr(null)
    setTitle(title)
  }

  useEffect(() => {
    dispatch(fetchTodos())
  }, [])

  return (
    <div className="App">
      <div>
        <InputField
          err={err}
          title={title}
          handleInput={handleInput}
          handleSubmit={addTask} />
        {status === 'loading' &&
          <div className="d-flex justify-content-center">
            <div className="spinner-border" role="status">
              <span className="visually-hidden">Loading...</span>
            </div>
          </div>
        }
        {error &&
          <div className="alert alert-danger" role="alert">
            An error occured: {error}
          </div>}
        <TodoList />
      </div>
    </div>
  );
}

export default App;
