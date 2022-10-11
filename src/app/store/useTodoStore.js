import create from "zustand";
import { persist } from "zustand/middleware";
import { v4 as uuid } from "uuid";

const useTodoStore = create(
  persist(
    (set, get) => ({
      todos: [
        {
          id: uuid(),
          text: "your first todos!"
        }
      ],
      addTodo: (payload) =>
        set({
          todos: [
            ...get().todos,
            {
              id: uuid(),
              text: payload,
            },
          ],
        }),
      removeTodo: (id) =>
        set({ todos: get().todos.filter((todo) => todo.id !== id) }),
    }),
    {
      name: "todo-react-pwa-todos",
      version: 1.0
    }
  )
);

export default useTodoStore;
