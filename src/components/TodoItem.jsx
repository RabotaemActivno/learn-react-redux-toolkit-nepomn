import {useDispatch} from 'react-redux'
import { deleteTodo, handleChecked, toggleStatus } from '../store/todoSlice'

const TodoItem = ({ id, title, completed }) => {

    const dispatch = useDispatch()

    return (
        <li className="list-group-item">
            <input type="checkbox" checked={completed} onChange={() => dispatch(toggleStatus(id))} />
            <span>{title}</span>
            <button
                type="button"
                class="btn-close"
                aria-label="Close"
                onClick={() => dispatch(deleteTodo(id))}></button>
        </li>
    )
}

export default TodoItem