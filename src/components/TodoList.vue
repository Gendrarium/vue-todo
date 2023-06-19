<template>
  <ul class="todo">
    <li class="todo__li" v-for="todo in todos" :key="todo.id">
      <label class="todo__label">
        <input
          class="todo__checkbox"
          type="checkbox"
          :checked="todo.done"
          @change="onCheck(todo.id)"
        />
        <span class="todo__span">{{ todo.title }}</span>
      </label>
      <div class="todo__buttons-container">
        <button class="todo__button" @click="onEdit(todo.id)" type="button">
          <edit-icon class="todo__icon" />
        </button>
        <button class="todo__button" type="button" @click="onDelete(todo.id)">
          <cross-icon class="todo__icon" fillClass="todo__cross-fill" />
        </button>
      </div>
    </li>
  </ul>
</template>

<script lang="ts">
import Vue, { PropType } from "vue";
import { ITodo } from "@/interfaces";
import CrossIcon from "@/assets/icons/CrossIcon.vue";
import EditIcon from "@/assets/icons/EditIcon.vue";

export default Vue.extend({
  props: {
    todos: { type: Array as PropType<ITodo[]>, required: true },
    onEdit: {
      type: Function as PropType<(id: string) => void>,
      required: true,
    },
    onDelete: {
      type: Function as PropType<(id: string) => void>,
      required: true,
    },
    onCheck: {
      type: Function as PropType<(id: string) => void>,
      required: true,
    },
  },
  components: { CrossIcon, EditIcon },
  name: "TodoList",
});
</script>

<style lang="scss">
.todo {
  &__ul {
    display: flex;
    flex-direction: column;
  }

  &__li {
    display: flex;
    border: 1px solid $color-blue;
    border-radius: 5px;
    padding: 5px;
    box-sizing: border-box;
    margin-top: 20px;
    align-items: center;
  }

  &__label {
    display: flex;
    flex: 1 1 auto;
    align-items: center;
    cursor: pointer;
  }

  &__checkbox {
    margin-right: 5px;
    &:checked + .todo__span {
      text-decoration: line-through;
    }
  }

  &__span {
    word-break: break-all;
    font-size: 20px;
    color: $color-text;

    @include mq(767) {
      font-size: 14px;
    }
  }

  &__buttons-container {
    display: flex;
  }

  &__button {
    cursor: pointer;
    display: flex;
    align-items: center;
    margin-left: 10px;
  }

  &__icon {
    width: 15px;
    height: 15px;
  }

  &__cross-fill {
    fill: $color-red;
  }
}
</style>
