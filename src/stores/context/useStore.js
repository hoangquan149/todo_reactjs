import { useContext } from "react";
import { storeContext } from ".";

function useStore() {
   const [state, dispatch] = useContext(storeContext);
   return [state, dispatch];
}

export default useStore;
