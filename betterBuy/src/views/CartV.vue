<template>
  <div>
    <div class="nav">
      <div class="brand-logo">
        <img src="../assets/logo.png" alt="" />
      </div>
      <div class="heading">
        <h1>Cart Details</h1>
      </div>
      <div class="nav-items">
        <a href="/userview"><img src="../assets/user.png" alt="" /></a>
        <a href="/products/cartview"><img src="../assets/cart.png" alt="" /></a>
      </div>
    </div>
    <div class="Cart">
      <div v-for="(cartItem, index) in cart" :key="index">
        <cart-view :SingleCart="cartItem"></cart-view>
      </div>
    </div>
    <button v-if="cart.length != 0" @click="handleBuy" class="btn cart-btn">
      checkout
    </button>
    <div class="nothingInCart" v-else>Nothing in Cart</div>

    <button @click="$router.go(-1)" class="btn">back</button>
    <!-- <button v-if="cart.length != 0" class="button-61">checkOut</button> -->
  </div>
</template>
<script>
import axios from "axios";
import CartView from "../components/CartView.vue";
export default {
  data() {
    return {
      cart: undefined,
      number: 0,
      email: localStorage.getItem("email"),
      totalPrice: 0,
    };
  },
  components: {
    CartView,
  },
  async created() {
    this.cart = await axios
      .get(`http://localhost:8083/user/viewCart/${this.email}`)
      .then((res) => (this.cart = res.data));
    // console.log(this.cart.cartResponse[0]);
    for (let i = 0; i < this.cart.length; i++) {
      console.log(this.totalPrice);
      this.totalPrice = this.totalPrice + this.cart[i].price;
    }
    this.cart = this.cart.cartResponse;
    console.log(this.cart);
  },
  computed: {
    number1() {
      return this.cart.itemCount;
    },
  },
  methods: {
    handleBuy() {
      axios.post(`http://localhost:8083/user/checkOut/${this.email}`);
      alert("Thankyou for shopping with us!");
      window.location.reload();
    },
  },
};
</script>

<style scoped>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: "roboto", sans-serif;
}

.nav {
  padding: 0.8%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: sticky;
  top: 0;
  left: 0;
  width: 100%;
  background: #f5f5f5;
  z-index: 9;
  border-bottom: 1px solid #d1d1d1;
}

.brand-logo img {
  height: 60px;
  transition: 1s;
}

.brand-logo :hover {
  transform: rotate(180deg);
}

.nav-items {
  display: flex;
  align-items: center;
}
.nav-items a {
  margin-left: 20px;
  display: flex;
  align-items: center;
}

.nav-items a img {
  width: 30px;
}

.nav-items a:hover {
  top: -10px;
}

h1 {
  text-align: center;
}
.Cart {
  display: flex;
  /* justify-content: space-between; */
  flex-direction: row;
  flex-wrap: wrap;
  width: 100%;
}

.btn {
  width: 15%;
  padding: 20px;
  border-radius: 5px;
  background: none;
  border: 1px solid #383838;
  color: #383838;
  font-size: 20px;
  cursor: pointer;
  margin: 20px 0;
  text-transform: capitalize;
}

.cart-btn {
  margin-right: 2%;
  background: #383838;
  color: #fff;
}

.nothingInCart {
  font-size: 40px;
  text-align: center;
  margin-top: 10%;
}
</style>
