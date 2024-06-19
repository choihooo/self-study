import { useState, useRef } from "react";
import "./main.css";
import "./reset.css";
import TodoInput from "./components/TodoInput";
import TodoList from "./components/TodoList";

function App() {
  const [todoItem, setTodoItem] = useState([
    { id: 1, text: "축구 해야지", completed: true },
    { id: 2, text: "공부", completed: false },
    { id: 3, text: "농구", completed: false },
  ]);
  const [newText, setNewText] = useState("");
  const idRef = useRef(4);
  // idRef에 값을 기억시킴

  const onChangeInput = (e) => {
    setNewText(e.target.value);
  };

  const addTodo = () => {
    const newItem = {
      id: idRef.current,
      text: newText,
      completed: false,
    };
    idRef.current++;
    const newList = [...todoItem, newItem];
    setNewText("");
    setTodoItem(newList);
  };

  return (
    <>
      <main className="flex flex-col justify-center items-center">
        <section className="mt-[10%]">
          <TodoInput
            text={newText}
            onChangeInput={onChangeInput}
            addTodo={addTodo}
          />
        </section>
        <section className="mt-[10%] w-[50%] flex justify-center items-center flex-col p-3 bg-fuchsia-300 rounded-xl">
          <TodoList todoItem={todoItem} />
        </section>
      </main>
    </>
  );
}

export default App;
