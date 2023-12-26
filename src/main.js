import { createApp } from 'vue'
import App from './App.vue'



import 'mdb-vue-ui-kit/css/mdb.min.css';
import router from './router'

import VueDatePicker from '@vuepic/vue-datepicker';
import '@vuepic/vue-datepicker/dist/main.css'



import PrimeVue from 'primevue/config';

createApp(App).component('VueDatePicker', VueDatePicker);

createApp(App).use(router).use(PrimeVue).mount('#app')
