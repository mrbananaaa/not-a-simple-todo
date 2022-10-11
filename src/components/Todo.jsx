import xIcn from "../img/x-icn.png";

const style = {
  container: `flex items-center justify-between`,
  card: `py-4 px-4 w-[88%] flex space-x-4 shadow-[0px_4px_12px_rgba(255,255,255,0.25)] rounded-lg overflow-auto`,
  checkbox: `peer accent-dark`,
  todoText: `font-semibold peer-checked:font-normal peer-checked:line-through peer-checked:text-slate-500`,
  xBtn: `cursor-pointer active:opacity-80 select-none`
}

const Todo = ({ text, remove }) => {

  return (
    <div className={style.container}>
      <div className={style.card}>
        <input 
          type="checkbox" 
          className={style.checkbox} 
        />
        <div className={style.todoText}>
          {text}
        </div>
      </div>
      <img
        src={xIcn}
        alt="x"
        width={20}
        height={20}
        className={style.xBtn}
        onClick={remove}
      />
    </div>
  );
};

export default Todo
