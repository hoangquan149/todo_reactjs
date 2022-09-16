import {
   ADD_TODO,
   EDIT_TODO,
   REMOVE_TODO,
   SET_TODO_INPUT,
   TOGGLE,
   TOGGLE_ALL,
   UPDATE_TODO,
   CLEAR_COMPLETED,
   CHANGE,
   CANCEL_EDIT,
} from "../../utils/constants";
import StorageService from "../../services/StorageService";

export const initState = {
   index: null,
   filter: "all",
   filters: {
      all: () => true,
      active: (todo) => !todo.completed,
      completed: (todo) => todo.completed,
   },
   todo: {
      name: "",
      completed: true,
   },
   todos: StorageService.get()
};

export function reducer(state, action) {
   const { index, todo, todos, filter } = state;
   let newState = { ...state };
   switch (action.type) {
      case SET_TODO_INPUT:
         newState = {
            ...state,
            todo: {
               ...state.todo,
               name: action.payload,
            },
         };
         break;
      case ADD_TODO:
         const newValue = {
            name: action.payload.name,
            completed: action.payload.completed,
         };

         newState = {
            ...state,
            todos: [...state.todos, newValue],
         };
         StorageService.save([...newState.todos]);
         break;
      case REMOVE_TODO:
         newState = {
            ...state,
            todos: [...state.todos].filter(
               (todo, index) => index !== action.payload
            ),
         };
         StorageService.save([...newState.todos]);
         break;
      case UPDATE_TODO:
         if (state.index !== null) {
            if (action.payload) {
               newState.todos[state.index].name = action.payload;
               StorageService.save([...newState.todos]);
            } else {
               newState = {
                  ...state,
                  todos: [...state.todos].filter(
                     (todo, i) => i !== state.index
                  ),
               };
               StorageService.save([...newState.todos]);
            }
            newState = { ...state, index: null };
         }
         break;
      case CHANGE:
         newState = {
            ...state,
            filter: action.payload,
         };
         break;
      case EDIT_TODO:
         newState = {
            ...state,
            index: action.payload,
         };
         break;
      case TOGGLE:
         const { index, checked } = action.payload;
         const todo = todos[index];
         todo.completed = checked;
         newState = {
            ...state,
         };
         StorageService.save(newState.todos);
         break;
      case TOGGLE_ALL:
         const newTodo = todos.map((todo) => {
            todo.completed = action.payload;
            return todo;
         });
         newState = {
            ...state,
            todos: newTodo,
         };
         StorageService.save(newState.todos);
         break;
      case CLEAR_COMPLETED:
         newState = {
            ...state,
            todos: [...state.todos].filter((todo) => !todo.completed),
         };
         StorageService.save([...newState.todos]);
         break;
      case CANCEL_EDIT:
         newState.index = null;
         break;
      default:
         throw new Error("Action does not exist");
   }
   return newState;
}
