export default {
  install(Vue) {
    console.log('run install', Vue);
    
    // 全局过滤器
    Vue.filter('mySlice', function(value) {
      return value.slice(0, 4)
    })

    // 定义全局指令

    // 定义混入

    // 给 Vue 原型上添加一个方法，vm 和 vc 就都能用了
    Vue.prototype.hello = () => {
      alert('你好');
    };
  },
};
