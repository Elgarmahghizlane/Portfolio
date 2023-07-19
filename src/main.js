import './assets/main.css'
import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import './assets/tailwind.css'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faBars } from '@fortawesome/free-solid-svg-icons';
// import { reactive, toRefs } from 'vue'
// import VueSlider from 'vue-slider-component'
// import 'vue-slider-component/theme/antd.css'

library.add(faBars);
const app = createApp(App)

app.use(router)

app.component('font-awesome-icon', FontAwesomeIcon);
// app.component('VueSlider', VueSlider);


app.mount('#app')
