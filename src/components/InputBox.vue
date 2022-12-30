<script>
import { nanoid } from 'nanoid';

export default {
  name: 'InputBox',
  methods: {
    addTodo(e) {
      // 将用户的输入包装成一个 todo 对象
      // console.log(e.target.value, 'or', this.inputValue);

      // 输入框的值：this.inputValue

      // 校验输入不能为空（trim删除空格）
      if (this.inputValue.trim() === '') {
        alert('输入不能为空！');
        return;
      }

      // 插入数据
      this.receive({
        id: nanoid(),
        name: this.inputValue.trim(),
        isFinished: false,
      });

      // 清空数据
      this.inputValue = '';
    },
  },
  props: ['receive'],
  data() {
    return {
      inputValue: '',
    };
  },
};
</script>

<template>
  <div class="todo-header">
    <input
      type="text"
      placeholder="请输入你的任务名称。输入完成请回车或点击新增按钮。"
      @keyup.enter="addTodo"
      v-model="inputValue"
    />
    <button type="button" @click="addTodo">新增</button>
  </div>
</template>

<style scoped>
input {
  width: 80%;
  height: 28px;
  font-size: 14px;
  border: 1px solid #ccc;
  border-radius: 4px;
  padding: 4px 7px;
  margin-right: 20px;
}
input:focus {
  outline: none;
  border-color: rgba(82, 168, 236, 0.8);
  box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.075),
    0 0 8px rgba(82, 168, 236, 0.6);
}
</style>
