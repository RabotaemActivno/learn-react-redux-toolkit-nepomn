import {useDispatch} from 'react-redux'
import { removeTodo, handleChecked } from '../store/todoSlice'

const TodoItem = ({ id, text, checked }) => {

    const dispatch = useDispatch()

    return (
        <li className="list-group-item">
            <input type="checkbox" checked={checked} onChange={() => dispatch(handleChecked({id}))} />
            <span>{text}</span>
            <button
                type="button"
                class="btn-close"
                aria-label="Close"
                onClick={() => dispatch(removeTodo({id}))}></button>
        </li>
    )
}

export default TodoItem