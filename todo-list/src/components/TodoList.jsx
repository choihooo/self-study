import TodoItem from "./TodoItem";

const TodoList = ({ todoItem }) => {
  return (
    <>
      <div className="w-[100%]">
        {todoItem.map((todo) => {
          return <TodoItem todo={todo} key={todo.id} />;
        })}
      </div>
    </>
  );
};

export default TodoList;
