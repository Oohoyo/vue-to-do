<script>
import InputBox from './components/InputBox.vue';
import List from './components/List.vue';
import Footer from './components/Footer.vue';
export default {
  name: 'App',
  components: { InputBox, List, Footer },
  // 数据在哪里，处理数据的方法就在哪里
  data() {
    return {
      todoList: [
        { id: '1', name: '道枝骏佑', isFinished: true },
        { id: '3', name: '肖战', isFinished: false },
      ],
    };
  },
  methods: {
    receive(newTodo) {
      // console.log('收到数据', newTodo);
      this.todoList.push(newTodo);
    },
    checkTodo(id) {
      this.todoList.forEach((todo) => {
        if (todo.id === id) todo.isFinished = !todo.isFinished;
      });
    },
    deleteTodo(id) {
      this.todoList = this.todoList.filter((todo) => {
        return todo.id !== id;
      });
    },
  },
};
</script>

<template>
  <div class="todo-container">
    <div class="todo-wrap">
      <h2 style="text-align: center">待办事宜</h2>
      <InputBox :receive="receive" />
      <List
        :todoList="todoList"
        :checkTodo="checkTodo"
        :deleteTodo="deleteTodo"
      />
      <Footer :todoList="todoList" />
    </div>
  </div>
</template>

<style>
body {
  background: #fff;
}
.btn {
  display: inline-block;
  padding: 4px 12px;
  margin-bottom: 0;
  font-size: 14px;
  line-height: 20px;
  text-align: center;
  vertical-align: middle;
  cursor: pointer;
  box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.2),
    0 1px 2px rgba(0, 0, 0, 0.05);
  border-radius: 4px;
}
.btn-danger {
  color: #fff;
  background-color: #da4f49;
  border: 1px solid #bd362f;
}
.btn-edit {
  color: #fff;
  background-color: lightgreen;
  border: 1px solid green;
  margin-right: 5px;
}
.btn-danger:hover {
  color: #fff;
  background-color: #bd362f;
}
.btn-edit:hover {
  color: #fff;
  background-color: green;
}
.btn:focus {
  outline: none;
}
.todo-container {
  width: 600px;
  margin: 0 auto;
}
.todo-container .todo-wrap {
  padding: 10px;
  border: 1px solid #ddd;
  border-radius: 5px;
}
</style>
