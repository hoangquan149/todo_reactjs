import "./App.scss";
import Header from "./components/layouts/Header";
import TodoList from "./components/TodoList";
import Footer from "./components/layouts/Footer";
import useStore from "./stores/context/useStore";
function App() {
   const [state, dispatch] = useStore();

   return (
      <div className="wrapper">
         <Header />
         {state.todos.length > 0 && (
            <>
               <TodoList />
               <Footer />
            </>
         )}
      </div>
   );
}

export default App;
