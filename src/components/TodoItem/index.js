import { useState } from "react";
import { remove, toggle, edit, update, cancelEdit } from "../../stores/context";
import useStore from "../../stores/context/useStore";
import { CANCEL, ENTER_KEY } from "../../utils/constants";
import "./style.scss";

function TodoItem({ todo: { name, completed }, index }) {
   const [state, dispatch] = useStore();
   const [checked, setChecked] = useState(completed);
   const [inputValue, setInputValue] = useState(name);
   const removeTodoItem = (index) => {
      dispatch(remove(index));
   };

   const toggleTodo = (index) => {
      setChecked(!checked);
      dispatch(toggle({ index, checked }));
   };

   const handleOnEdit = (index) => {
      dispatch(edit(index));
   };

   const editTodo = (e) => {
      const value = e.target.value.trim();
      if (e.keyCode === ENTER_KEY) {
         dispatch(update(inputValue));
      } else if (e.keyCode === CANCEL) {
         dispatch(cancelEdit());
      }

      if (e.type === "blur") {
         dispatch(update(inputValue));
      }
      setInputValue(value);
   };

   return (
      <li
         className={`${completed && "completed"} ${
            index === state.index && "editing"
         }`}
      >
         <div className="view">
            <input
               type="checkbox"
               className="toggle"
               id="toggle"
               checked={completed}
               onChange={() => toggleTodo(index)}
            />
            <label htmlFor="toggle" onDoubleClick={() => handleOnEdit(index)}>
               {name}
            </label>
            <button
               className="destroy"
               onClick={() => removeTodoItem(index)}
            ></button>
         </div>
         <input
            className="edit"
            value={inputValue}
            onKeyUp={editTodo}
            onBlur={editTodo}
            onChange={editTodo}
         />
      </li>
   );
}

export default TodoItem;
