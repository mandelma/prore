import { createApp } from 'vue'
import App from './App.vue'



import 'mdb-vue-ui-kit/css/mdb.min.css';
import router from './router'

import VueDatePicker from '@vuepic/vue-datepicker';
import '@vuepic/vue-datepicker/dist/main.css'

import "vue-search-select/dist/VueSearchSelect.css"
//import 'primevue/resources/themes/aura-light-green/theme.css'


import PrimeVue from 'primevue/config';

//import 'url(https://cdnjs.cloudflare.com/ajax/libs/select2/4.0.0/css/select2.min.css)';
// ,{ unstyled: true }
createApp(App).component('VueDatePicker', VueDatePicker)    ;

createApp(App).use(router).use(PrimeVue).mount('#app')
