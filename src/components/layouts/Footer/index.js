import useStore from "../../../stores/context/useStore";
import { clearCompleted } from "../../../stores/context";
import { changeRender } from "../../../stores/context";
import "./style.scss";

function Footer() {
   const [state, dispatch] = useStore();

   const clear = () => {
      dispatch(clearCompleted());
   };

   const switchTodo = (key) => {
      dispatch(changeRender(key));
   };

   return (
      <div className="footer">
         <span>
            <span>{state.todos.filter((todo) => !todo.completed).length}</span>{" "}
            item left
         </span>
         <ul className="filters">
            {Object.keys(state.filters).map((key, index) => (
               <li
                  key={index}
                  className={`${state.filter === key && "selected"}`}
                  onClick={() => switchTodo(key)}
               >
                  {key[0].toUpperCase() + key.slice(1)}
               </li>
            ))}
         </ul>
         <div className="box-clear">
            {state.todos.filter((todo) => todo.completed).length > 0 && (
               <button className="clear" onClick={clear}>
                  Clear Completed
               </button>
            )}
         </div>
      </div>
   );
}

export default Footer;
