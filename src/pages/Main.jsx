import { useState } from "react";
import useAuthStore from "../app/store/useAuthStore";
import useTodoStore from "../app/store/useTodoStore";
import editBtn from "../img/edit-btn.png"
import Todo from "../components/Todo";

const style = {
  wrapper: `relative selection:bg-white selection:text-dark`,
  titleContainer: `mt-20 text-center`,
  titleWrapper: `flex justify-center items-center space-x-2`,
  title: `text-2xl font-semibold`,
  editBtn: `cursor-pointer active:opacity-80`,
  subtitle: `pt-1 text-sm text-slate-200`,
  todoWrapper: `mt-20 flex flex-col px-5 space-y-4 mb-20`,
  inputWrapper: `mt-10 flex justify-center items-center space-x-4 select-none`,
  input: `px-4 py-2 rounded-lg outline-none text-white bg-dark font-medium shadow-[0px_4px_12px_rgba(255,255,255,0.25)]`,
  addBtn: `px-4 py-2 rounded-lg font-semibold bg-dark text-white shadow-[0px_4px_12px_rgba(255,255,255,0.25)] active:bg-opacity-80`,
};

const Main = () => {
  const [input, setInput] = useState("");
  const name = useAuthStore((state) => state.profile.name);
  const todos = useTodoStore((state) => state.todos);
  const addTodo = useTodoStore((state) => state.addTodo);
  const removeTodo = useTodoStore((state) => state.removeTodo);

  const addTodoHandler = () => {
    if (input.length === 0) return;

    addTodo(input);

    setInput("");
  };

  const keyUpHandler = (e) => {
    if (e.code === "Enter" || e.keyCode === 13) {
      addTodoHandler();
    }
  };

  return (
    <div className={style.wrapper}>
      <div className={style.titleContainer}>
        <div className={style.titleWrapper}>
          <div className={style.title}>Hello, {name}!</div>
          <img 
            src={editBtn} 
            alt="edit" 
            width={15} 
            height={15}
            className={style.editBtn} 
          />
        </div>
        <div className={style.subtitle}>wdyt? wanna do something today?</div>
      </div>

      <div className={style.inputWrapper}>
        <input
          type="text"
          value={input}
          placeholder="what?"
          className={style.input}
          onChange={(e) => setInput(e.target.value)}
          onKeyUp={keyUpHandler}
        />
        <button className={style.addBtn} onClick={addTodoHandler}>
          add
        </button>
      </div>

      <div className={style.todoWrapper}>
        {todos &&
          todos
            .map(({ id, text }) => (
              <Todo key={id} text={text} remove={() => removeTodo(id)} />
            ))
            .reverse()}
      </div>
    </div>
  );
};

export default Main;
