import Vue from 'vue'
import blog from './myblog.vue'

Vue.config.productionTip = false

new Vue({
  render: h => h(blog)
}).$mount('#app')
