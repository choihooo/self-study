import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
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
          <div>todo항목</div>
        </section>
      </main>
    </>
  );
}

export default App;
