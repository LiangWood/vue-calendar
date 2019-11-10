import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify';
import VueTextareaAutosize from 'vue-textarea-autosize';
import firebase from 'firebase/app';
import 'firebase/firestore';

Vue.use(VueTextareaAutosize)

Vue.config.productionTip = false

firebase.initializeApp({
    apiKey: "AIzaSyA3gxYfIZAfggEMqcnwks_tt12O61QzUts",
    authDomain: "vue-calender-project.firebaseapp.com",
    databaseURL: "https://vue-calender-project.firebaseio.com",
    projectId: "vue-calender-project",
    storageBucket: "vue-calender-project.appspot.com",
    messagingSenderId: "563788277548",
    appId: "1:563788277548:web:92ef0045d80a171e8dee89"
})

export const db = firebase.firestore()

new Vue({
  vuetify,
  render: h => h(App)
}).$mount('#app')
