import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
// import firebase from "firebase";
import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";
Vue.config.productionTip = false;

const firebaseConfig = {
  apiKey: "AIzaSyAASMhwE8O7JC_zTDM8WElism-yX5_4COM",
  authDomain: "ecommerce-337c8.firebaseapp.com",
  projectId: "ecommerce-337c8",
  storageBucket: "ecommerce-337c8.appspot.com",
  messagingSenderId: "951111305509",
  appId: "1:951111305509:web:b4934aefb52ea3a73db2cc",
  measurementId: "G-GDEJST5123",
};

firebase.initializeApp(firebaseConfig);

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
