import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
//import router from './router'
//import { VueSelect } from 'vue-select' // не устанаваливается
//createApp(App).use(createPinia()).mount('#app')
//import { CoolSelectPlugin } from 'vue-cool-select' // не работает
//import 'vue-cool-select/dist/themes/bootstrap.css'
//import 'vue-cool-select/dist/themes/material-design.css'

const app = createApp(App)
/*
import { reactive, ref } from 'vue'
import VueSelect from 'vue-next-select'
import 'vue-next-select/dist/index.min.css'
const app = createApp({
  setup() {
    const value = ref(0)
    const options = reactive([0, 1, 2])
    return {
      value,
      options,
    }
  },
  components: {
    // Local registration
    VueSelect,
  },
  template: `
    <vue-select
      v-model="value"
      :options="options"
    ></vue-select
  `,
})
  */
app.use(createPinia())
//app.use(router)
//app.component('v-select', VueSelect)
//app.use(CoolSelectPlugin)
app.mount('#app')
//app.component('vue-select', VueSelect)
//app.mount(document.querySelector('#app'))
