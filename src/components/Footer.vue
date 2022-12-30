<script>
export default {
  name: 'Footer',
  props: ['todoList'],
  computed: {
    finishedCount() {
      // return this.todoList.filter((todo) => todo.isFinished === true).length;
      return this.todoList.reduce((pre, current) => {
        return pre + current.isFinished;
      }, 0);
    },
  },
};
</script>

<template>
  <div class="todo-footer">
    <label>
      <input type="checkbox" @change="checkAll" />
    </label>
    <span>
      <span>已完成{{ finishedCount }}</span> / 全部{{ todoList.length }}
    </span>
    <button class="btn btn-danger" @click="clearAll">清除已完成任务</button>
  </div>
</template>

<style scoped>
.todo-footer {
  height: 40px;
  line-height: 40px;
  padding-left: 6px;
  margin-top: 5px;
}
.todo-footer label {
  display: inline-block;
  margin-right: 20px;
  cursor: pointer;
}
.todo-footer label input {
  position: relative;
  top: -1px;
  vertical-align: middle;
  margin-right: 5px;
}
.todo-footer button {
  float: right;
  margin-top: 5px;
}
</style>
