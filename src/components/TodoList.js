import TodoItem from './TodoItem';
import "../App.css";

const TodoList = ({todo, onToggle, onDel})=> {
    return (
        <div className='TodoList'>
            <h2>TODO LIST</h2>
            <ul className="TodoList">
                {
                    todo&&todo.map((item, i) => <TodoItem key={i} item={item} onToggle={onToggle} onDel={onDel}/>)
                }
            </ul>
        </div>
    );
}

export default TodoList;