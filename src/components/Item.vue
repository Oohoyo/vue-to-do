<script>
export default {
  name: 'Item',
  // 声明接收 todo 对象
  props: ['todo', 'checkTodo', 'deleteTodo'],
  // mounted() {
  //   console.log(this.todo);
  // },
  methods: {
    handleCheck(id) {
      this.checkTodo(id);
    },
    handleDelete(id) {
      if (confirm('您确定要删除吗？')) {
        this.deleteTodo(id);
      }
    },
  },
};
</script>

<template>
  <!-- <transition name="todo" appear>
    <li>
      <label>
        <input
          type="checkbox"
          :checked="todo.isFinished"
          @change="handleCheck(todo.id)"
        />
        <span v-show="!todo.isEdit">{{ todo.title }}</span>
        <input
          type="text"
          :value="todo.title"
          v-show="todo.isEdit"
          @blur="handleBlur(todo, $event)"
          ref="inputTitle"
        />
      </label>
      <button class="btn btn-danger" @click="handleDelete(todo.id)">
        删除
      </button>
      <button
        class="btn btn-edit"
        @click="handleEdit(todo)"
        v-show="!todo.isEdit"
      >
        编辑
      </button>
    </li>
  </transition> -->
  <li>
    <label>
      <input
        type="checkbox"
        :checked="todo.isFinished"
        @change="handleCheck(todo.id)"
      />
      <!-- 或者 v-model 双向绑定
      <input
        type="checkbox"
        v-model="todo.isFinished"
      />
      -->
      &nbsp;
      <span>{{ todo.name }}</span>
    </label>
    <button class="btn btn-danger" @click="handleDelete(todo.id)">删除</button>
  </li>
</template>

<style scoped>
li {
  list-style: none;
  height: 36px;
  line-height: 36px;
  padding: 0 5px;
  border-bottom: 1px solid #ddd;
}
li label {
  float: left;
  cursor: pointer;
}
li label li input {
  vertical-align: middle;
  margin-right: 6px;
  position: relative;
  top: -1px;
}
li button {
  float: right;
  display: none;
  margin-top: 3px;
}
li:before {
  content: initial;
}
li:last-child {
  border-bottom: none;
}
li:hover {
  background-color: #ddd;
}
li:hover button {
  display: block;
}
.todo-enter-active {
  animation: todo 0.5s linear;
}
.todo-leave-active {
  animation: todo 0.5s linear reverse;
}
@keyframes todo {
  from {
    transform: translateX(100%);
  }
  to {
    transform: translateX(0px);
  }
}
</style>
