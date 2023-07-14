// Toast.vue
<template>
  <div>
    <!-- <button @click="handleToast">Click Me</button> -->
    <div v-if="show" class="toast-container">
      <div class="toast-message">{{ message }}</div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ToastMsg",
  props: {
    message: {
      type: String,
      default: "Invalid User",
    },
  },
  data() {
    return {
      show: true,
    };
  },
  created() {
    this.show = true;
    setTimeout(() => {
      this.show = false;
    }, 2000);
  },
  methods: {
    // handleToast() {
    //   this.show = true;
    //   setTimeout(() => {
    //     this.show = false;
    //   }, 2000);
    // },
  },
};
</script>

<style scoped>
.toast-container {
  position: fixed;
  bottom: 20px;
  right: 500px;
  z-index: 999;
}

.toast-message {
  background-color: #333;
  color: #fff;
  padding: 20px;
  border-radius: 5px;
}
</style>
