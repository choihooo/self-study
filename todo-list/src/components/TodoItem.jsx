import { FaHeart } from "react-icons/fa";

const TodoItem = ({ todo, onRemove }) => {
  return (
    <>
      <div className="flex items-center mb-2 mt-2 text-xl">
        <FaHeart
          className="ml-2"
          onClick={() => {
            onRemove(todo.id);
          }}
        ></FaHeart>
        <div className="ml-2">{todo.text}</div>
      </div>
    </>
  );
};

export default TodoItem;
