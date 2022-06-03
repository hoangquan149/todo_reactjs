import React, { useRef } from "react";
import useStore from "../../../stores/context";
import { set, add } from "../../../stores/context/";
import { ENTER_KEY } from "../../../utils/constants";
import "./style.scss";
function Header() {
   const [state, dispatch] = useStore();
   const inputRef = useRef();

   const addToDo = (e) => {
      if (e.keyCode !== ENTER_KEY) {
         return;
      }

      dispatch(add(state.todo));
      dispatch(set(""));
      inputRef.current.focus();
   };

   return (
      <div className="header">
         <h1>TODOS</h1>
         <input
            ref={inputRef}
            className="new-todo"
            placeholder="Nhập todo"
            value={state.todo.name}
            onChange={(e) => {
               dispatch(set(e.target.value.trim()));
            }}
            onKeyDown={addToDo}
            autoFocus
         />
      </div>
   );
}

export default Header;
