import Vue from 'vue'
import App from './App.vue'
import proudUI from './packages/index' // 引入自己的ui库
Vue.use(proudUI) // 挂载到全局，在代码里就可以直接用了

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
