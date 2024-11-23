import "./styles/style.scss";
import Form from "./components/Form";
import List from "./components/List";
import { useEffect } from "react";
import GetLocal from "./components/GetLocal";
import { useSetAtom } from "jotai";
import { items } from "./components/states";

function App() {
  const setTodos = useSetAtom(items);

  useEffect(() => {
    GetLocal(setTodos);
  }, []);

  return (
    <div className="App">
      <Form />
      <List />
    </div>
  );
}

export default App;
