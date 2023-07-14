<template>
  <div class="CartItem">
    <div class="paddingDiv">
      <img :src="SingleCart.image" alt="imagenotfound" />
      <div class="details">
        <h3>{{ SingleCart.brand }} {{ SingleCart.productName }}</h3>
        <p>Price: {{ SingleCart.price }}</p>
        <p>Count: {{ itemCount }}</p>
        <p>Sold By: {{ SingleCart.merchantName }}</p>
      </div>
      <button class="button-38" @click="handleSubtract">-</button
      ><button class="button-38" @click="handleAdd">+</button>
      <button class="button-38" @click="handleRemove">Remove Item</button>
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  data() {
    return {
      cart: [],
      itemCount: 0,
      email: localStorage.getItem("email"),
    };
  },
  watch: {
    itemCount(oldValue, newValue) {
      console.log(oldValue);
      return newValue;
    },
  },
  props: ["SingleCart"],
  methods: {
    handleAdd() {
      axios.post(`http://localhost:8083/user/addToCart/${this.email}`, {
        productId: this.SingleCart.productId,
        merchantId: this.SingleCart.merchantId,
        itemCount: 1,
      });
      this.itemCount = this.itemCount + 1;
    },
    handleSubtract() {
      if (!(this.itemCount == 1)) {
        axios.post(`http://localhost:8083/user/removeFromCart/${this.email}`, {
          productId: this.SingleCart.productId,
          merchantId: this.SingleCart.merchantId,
          itemCount: 1,
        });
        this.itemCount = this.itemCount - 1;
      } else {
        axios.delete(
          `http://localhost:8083/user/deleteFromCart/${this.SingleCart.productId}/${this.SingleCart.merchantId}/${this.email}/`
        );
        window.location.reload();
      }
    },
    handleRemove() {
      axios.delete(
        `http://localhost:8083/user/deleteFromCart/${this.SingleCart.productId}/${this.SingleCart.merchantId}/${this.email}/`
      );
      console.log(this.SingleCart);
      window.location.reload();
    },
    handleBuy() {
      axios.post(`http://localhost:8083/user/checkOut/george@gmail.com`);
    },
  },
  created() {
    this.itemCount = this.SingleCart.itemCount;
    console.log(this.SingleCart);
  },
};
</script>
<style scoped>
.CartItem {
  width: 320px;
  height: 400px;
  padding: 5px;
  margin: 10px;
  background-color: lightgrey;
  border: 1px solid black;
  border-radius: 10px;
}
.CartItem img {
  height: 200px;
  width: 300px;
}

.button-38 {
  background-color: #ffffff;
  margin: 3px;
  margin-top: 8%;
  border: 0;
  border-radius: 0.5rem;
  box-sizing: border-box;
  color: #111827;
  font-family: "Inter var", ui-sans-serif, system-ui, -apple-system, system-ui,
    "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif,
    "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji";
  font-size: 0.875rem;
  font-weight: 600;
  line-height: 1.25rem;
  padding: 0.75rem 1rem;
  text-align: center;
  text-decoration: none #d1d5db solid;
  cursor: pointer;
  user-select: none;
  -webkit-user-select: none;
  touch-action: manipulation;
}

.button-38:hover {
  background-color: rgb(249, 250, 251);
}

.button-38:focus {
  outline: 2px solid transparent;
  outline-offset: 2px;
}

.button-38:focus-visible {
  box-shadow: none;
}
</style>
