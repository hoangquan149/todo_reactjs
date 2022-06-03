import { useState } from "react";
import TodoItem from "../TodoItem";
import useStore from "../../stores/context/useStore";
import "./style.scss";
import { set, toggleAll } from "../../stores/context";

function TodoList() {
   const [checked, setChecked] = useState(false);
   const [state, dispatch] = useStore();
   const { todos, filters, filter } = state;

   const _toggleAll = () => {
      setChecked(!checked);
      dispatch(toggleAll(checked));
   };

   return (
      <div className="main">
         <input
            type={"checkbox"}
            id="toggle-all"
            className="toggle-all"
            onChange={_toggleAll}
            checked={todos.every(filters.completed)}
         />
         <label htmlFor="toggle-all"></label>
         <ul className="todo-list">
            {todos.filter(filters[filter]).map((todo, index) => (
               <TodoItem key={index} todo={todo} index={index} />
            ))}
         </ul>
      </div>
   );
}

export default TodoList;
