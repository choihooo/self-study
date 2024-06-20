import TodoItem from "./TodoItem";

const TodoList = ({ todoItem, onRemove }) => {
  return (
    <>
      <div className="w-[100%]">
        {todoItem.map((todo) => {
          return <TodoItem todo={todo} key={todo.id} onRemove={onRemove} />;
        })}
      </div>
    </>
  );
};

export default TodoList;
