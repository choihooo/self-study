const TodoInput = ({ text, onChangeInput, addTodo }) => {
  return (
    <form onSubmit={addTodo}>
      <input
        type="text"
        placeholder="할 일을 입력하시오!"
        value={text}
        className="bg-fuchsia-300 pt-2 pb-2 pl-3 rounded-l-xl h-10 focus:outline-none"
        onChange={onChangeInput}
      ></input>
      <button className="bg-fuchsia-400 pt-2 pb-2 pr-3 pl-2 rounded-r-xl h-10">
        등록
      </button>
    </form>
  );
};

export default TodoInput;
