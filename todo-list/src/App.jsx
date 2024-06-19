import { useState } from "react";
import "./main.css";
import "./reset.css";
import TodoInput from "./components/TodoInput";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <main>
        <section>
          <TodoInput />
        </section>
        <section>
          <div className="bg-red-100">todo항목</div>
        </section>
      </main>
    </>
  );
}

export default App;
