import Vue from "vue";
import Vuex from "vuex";
import type { ITodo } from "@/interfaces";

Vue.use(Vuex);

export interface RootState {
  todos: ITodo[];
}

export default new Vuex.Store<RootState>({
  state: { todos: [] },
  getters: {},
  mutations: {
    addTodosFromLocalStorage: (state, payload: ITodo[]) => {
      state.todos = payload;
    },
    addTodo: (state, payload: ITodo) => {
      state.todos.push(payload);
    },
    deleteTodo: (state, payload: string) => {
      state.todos = state.todos.filter((i) => i.id !== payload);
    },
    editTodo: (state, payload: { id: string; title: string }) => {
      const newTodos = [...state.todos];
      const todo = newTodos.find((i) => i.id === payload.id);
      if (todo) {
        todo.title = payload.title;
        state.todos = newTodos;
      }
    },
    doneUndoneTodo: (state, payload: string) => {
      const newTodos = [...state.todos];
      const todo = newTodos.find((i) => i.id === payload);
      if (todo) {
        todo.done = !todo.done;
        state.todos = newTodos;
      }
    },
  },
  actions: {},
  modules: {},
});
