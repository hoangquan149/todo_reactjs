import {
   ADD_TODO,
   EDIT_TODO,
   REMOVE_TODO,
   SET_TODO_INPUT,
   TOGGLE,
   TOGGLE_ALL,
   CLEAR_COMPLETED,
   UPDATE_TODO,
   CHANGE,
   CANCEL_EDIT,
} from "../../utils/constants";
const set = (payload) => {
   return {
      payload,
      type: SET_TODO_INPUT,
   };
};

const add = (payload) => {
   return {
      payload,
      type: ADD_TODO,
   };
};

const remove = (payload) => {
   return {
      payload,
      type: REMOVE_TODO,
   };
};

const toggle = (payload) => {
   return {
      payload,
      type: TOGGLE,
   };
};

const toggleAll = (payload) => {
   return {
      payload,
      type: TOGGLE_ALL,
   };
};

const edit = (payload) => {
   return {
      payload,
      type: EDIT_TODO,
   };
};

const update = (payload) => {
   return {
      payload,
      type: UPDATE_TODO,
   };
};

const clearCompleted = () => {
   return {
      type: CLEAR_COMPLETED,
   };
};

const changeRender = (payload) => {
   return {
      payload,
      type: CHANGE,
   };
};

const cancelEdit = () => {
   return {
      type: CANCEL_EDIT,
   };
};

export {
   set,
   add,
   edit,
   remove,
   toggle,
   toggleAll,
   clearCompleted,
   update,
   changeRender,
   cancelEdit,
};
