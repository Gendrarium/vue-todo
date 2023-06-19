<template>
  <section class="todos">
    <div class="todos__full-container">
      <form
        class="todos__form"
        @submit.prevent="!isEdit ? addTodo() : editTodo()"
      >
        <input
          class="todos__input"
          v-model="title"
          placeholder="Введите задачу"
        />
        <button class="todos__button" type="submit">Сохранить</button>
      </form>
      <todo-list
        v-if="todos.length > 0"
        :todos="todos"
        :onEdit="editActivate"
        :onDelete="deleteTodo"
        :onCheck="checkTodo"
      />
      <p v-else class="todos__text">Добавьте задачу!</p>
    </div>
  </section>
</template>

<script lang="ts">
import Vue from "vue";
import { v4 as uuidv4 } from "uuid";
import TodoList from "@/components/TodoList.vue";
import store from "@/store";
import { ITodo } from "@/interfaces";

export default Vue.extend({
  name: "TodosPage",
  components: {
    TodoList,
  },
  data: () => {
    return {
      title: "",
      prevTitle: "",
      isEdit: false,
      editedId: "",
    };
  },
  computed: {
    todos() {
      return store.state.todos;
    },
  },
  methods: {
    addTodo: function () {
      const newTodo = {
        id: uuidv4(),
        title: this.title,
        done: false,
      };

      store.commit("addTodo", newTodo);

      this.title = "";
    },
    editActivate: function (id: string) {
      if (this.isEdit && this.editedId === id) {
        return;
      }

      const item = this.todos.find((i) => i.id === id);
      if (item) {
        if (!this.isEdit) {
          this.isEdit = true;
          this.prevTitle = this.title;
        }
        this.title = item.title;
        this.editedId = id;
      }
    },
    editEnd: function () {
      this.title = this.prevTitle;
      this.isEdit = false;
      this.editedId = "";
    },
    editTodo: function () {
      store.commit("editTodo", {
        id: this.editedId,
        title: this.title,
      });

      this.editEnd();
    },
    checkTodo: function (id: string) {
      store.commit("doneUndoneTodo", id);
    },
    deleteTodo: function (id: string) {
      if (this.isEdit && id === this.editedId) {
        this.editEnd();
      }
      store.commit("deleteTodo", id);
    },
  },
  mounted() {
    const todos = localStorage.getItem("todos");
    if (todos) {
      store.commit("addTodosFromLocalStorage", JSON.parse(todos));
    }
  },
  watch: {
    todos(newValue: ITodo[]) {
      localStorage.setItem("todos", JSON.stringify(newValue));
    },
  },
});
</script>

<style lang="scss" scoped>
.todos {
  padding: 10px;
  width: 100%;
  display: flex;

  &__full-container {
    display: flex;
    flex-direction: column;
    max-width: 1200px;
    width: 100%;
    margin: 0 auto;
  }

  &__form {
    display: flex;
    width: 100%;
    margin: 0 auto;

    @include mq(767) {
      flex-direction: column;
    }
  }

  &__input {
    flex: 1 1 auto;
    border: 2px solid $color-blue;
    padding: 5px;
    box-sizing: border-box;
    width: 200px;
    height: 30px;
    border-radius: 5px;
    margin-right: 10px;
    outline: none;
    color: $color-blue;

    @include placeholder {
      color: rgba($color: $color-blue, $alpha: 0.5);
    }

    @include mq(767) {
      width: 100%;
      margin-right: 0;
      margin-bottom: 5px;
    }
  }

  &__button {
    background-color: $color-blue;
    width: 120px;
    height: 30px;
    border-radius: 5px;
    color: $color-white;
    cursor: pointer;
    transition: background-color 0.3s;

    &:hover {
      background-color: $color-white;
      color: $color-blue;
      border: 2px solid $color-blue;
    }

    @include mq(767) {
      width: 100%;
    }
  }

  &__text {
    font-size: 20px;
    margin: 10px auto 0;
  }
}
</style>
