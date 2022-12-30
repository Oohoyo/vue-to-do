<script>
import Item from './Item.vue';
export default {
  name: 'List',
  components: { Item },
  props: ['todoList', 'checkTodo', 'deleteTodo'],
  // data() {
  //   return {
  //     todoList: [
  //       { id: '1', name: '抽烟', isFinished: true },
  //       { id: '2', name: '喝酒', isFinished: false },
  //       { id: '3', name: '开车', isFinished: true },
  //     ],
  //   };
  // },
};
</script>

<template>
  <ul class="todo-main">
    <Item
      v-for="todo in todoList"
      :key="todo.id"
      :todo="todo"
      :checkTodo="checkTodo"
      :deleteTodo="deleteTodo"
    ></Item>
  </ul>
</template>

<style scoped>
.todo-main {
  margin-left: 0px;
  border: 1px solid #ddd;
  border-radius: 2px;
  padding: 0px;
}
.todo-empty {
  height: 40px;
  line-height: 40px;
  border: 1px solid #ddd;
  border-radius: 2px;
  padding-left: 5px;
  margin-top: 10px;
}
</style>
