const TodoItem = ({ todo }) => {
  return (
    <>
      <div className="flex items-center mb-2 mt-2 text-xl">
        <div className="ml-2">{todo.completed ? "☑" : "□"}</div>
        <div className="ml-2">{todo.text}</div>
      </div>
    </>
  );
};

export default TodoItem;
