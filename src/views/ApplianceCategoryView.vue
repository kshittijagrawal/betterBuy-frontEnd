<template>
  <div class="navbar">
    <div class="nav">
      <div class="brand-logo">
        <img src="../assets/logo.png" alt="" />
      </div>
      <div class="nav-items">
        <div class="search">
          <input
            v-model="searchText"
            type="text"
            class="search-box"
            placeholder="search product"
          />
          <button @click="searchHandle" class="search-btn">search</button>
        </div>
        <div class="dropdown">
          <a href="/userview"><img src="../assets/user.png" alt="user" /></a>
          <div class="dropdown-content">
            <a v-if="isLoggedIn" href="/userview">Profile</a>
            <a v-if="isLoggedIn" href="/history">Order History</a>
            <a @click="handleLogOut" v-if="isLoggedIn">Sign Out</a>
            <a v-else href="/signIn">Sign In</a>
          </div>
        </div>
        <a href="/products/cartview"><img src="../assets/cart.png" alt="" /></a>
      </div>
    </div>
    <ul class="links-container">
      <li class="link-item">
        <a href="/" class="link">home</a>
      </li>
      <li class="link-item">
        <a href="../products/mobile" class="link">mobile</a>
      </li>
      <li class="link-item">
        <a href="../products/laptop" class="link">laptop</a>
      </li>
      <li class="link-item">
        <a href="../products/appliance" class="link">appliance</a>
      </li>
      <li class="link-item">
        <a href="../products/camera" class="link">camera</a>
      </li>
    </ul>
    <div class="product-list">
      <div
        @click="selected(product)"
        v-for="(product, index) in applianceList"
        :key="index"
        class="product-card"
      >
        <div class="product-image">
          <img :src="product.image" alt="rendering img.." />
        </div>
        <div class="product-description">
          <div class="product-nb">
            <div class="product-name">{{ product.productName }}</div>
            <div class="product-brand">{{ product.brand }}</div>
          </div>
          <div class="product-price">₹ {{ product.price }}</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  data() {
    return {
      isLoggedIn: localStorage.getItem("isLoggedIn"),
      // mail: this.gmail,
      applianceList: [],
      dropShow: false,
      searchText: "",
    };
  },
  created: function () {
    axios
      .get("http://localhost:8082/product/getProductsByCategory/appliance")
      .then((res) => {
        this.applianceList = res.data;
        this.applianceList = this.applianceList.searchResponses;
      });
  },
  computed: {
    gmail() {
      return localStorage.getItem("email") != null
        ? localStorage.getItem("email")
        : "Guest";
    },
  },
  methods: {
    searchHandle() {
      this.productList = axios
        .get(
          "http://localhost:8082/product/getProductBySearchTerm/" +
            this.searchText
        )
        .then((res) => {
          this.productList = res.data;
          this.productList = this.productList.searchResponses;
          console.log(res.data.searchResponses, this.searchText);
        });
    },
    // dropHandle() {
    //   // alert(this.dropShow);
    //   this.dropShow = true;
    // },
    selected(product) {
      this.product = product;
      this.$router.push(`/products/${product.productId}/${product.merchantId}`);
      console.log(this.product);
    },
    handleLogOut() {
      localStorage.clear();
      this.$router.push("/");
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

.navbar {
  position: sticky;
  top: 0;
  left: 0;
  width: 100%;
  background: #f5f5f5;
  z-index: 9;
}

.nav {
  padding: 0.8%;
  display: flex;
  justify-content: space-between;
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

.search {
  width: 500px;
  display: flex;
}

.search-box {
  width: 80%;
  height: 40px;
  padding: 10px;
  border-top-left-radius: 10px;
  border-bottom-left-radius: 10px;
  border: 1px solid #d1d1d1;
  text-transform: capitalize;
  background: none;
  color: #a9a9a9;
  outline: none;
}

.search-btn {
  width: 20%;
  height: 40px;
  padding: 10px 20px;
  border: none;
  outline: none;
  cursor: pointer;
  background: #383838;
  color: #fff;
  text-transform: capitalize;
  font-size: 15px;
  border-top-right-radius: 10px;
  border-bottom-right-radius: 10px;
}

.search-box::placeholder {
  color: #a9a9a9;
}

.nav-items a {
  margin-left: 20px;
  display: flex;
  align-items: center;
}

.nav-items a img {
  width: 30px;
}

.nav-items a img:hover {
  /* top: -10px; */
  animation-name: move;
  animation-duration: 1.5s;
}
.links-container {
  width: 100%;
  display: flex;
  padding: 10px 10vw;
  justify-content: center;
  list-style: none;
  border-top: 1px solid #d1d1d1;
}

.link {
  text-transform: capitalize;
  padding: 0 10px;
  margin: 0 5px;
  text-decoration: none;
  color: #383838;
  opacity: 0.5;
  transition: 0.5s;
}

.link:hover {
  opacity: 1;
}

.product-list {
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  position: relative;
  top: 5px;
  bottom: 30px;
  flex-flow: row wrap;
}
.product-image {
  margin-bottom: 5%;
}

.product-image img {
  height: 250px;
  position: relative;
  width: 300px;
  bottom: 0;
  border-radius: 5px;
}
.product-card {
  justify-content: center;
  text-align: center;
  padding: 2px 2px;
  margin: 30px 30px;
  position: relative;
}
.product-card:hover {
  z-index: 1;
  box-shadow: 1px 1px 1px 0px rgb(33, 30, 30);
  border-radius: 5px;
  cursor: pointer;
}
.product-card {
  border-radius: 5px;
  border: 0.6px ridge darkgray;
  background-color: whitesmoke;
}

.btn {
  color: aliceblue;
  background-color: black;
  border-radius: 2px;
  margin: 2px 2px;
  box-shadow: 2px 2px grey;
}
button.btn:hover {
  cursor: pointer;
  background-color: green;
  color: red;
  box-sizing: border-box;
  box-shadow: 1px 1px cyan;
}

.product-description {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 5%;
}

.product-price {
  font-size: 25px;
  font-weight: bold;
  opacity: 0.8;
}

.product-nb {
  text-transform: capitalize;
}
.product-brand {
  margin-top: 7%;
  font-weight: bold;
  font-size: 16px;
  opacity: 0.8;
}

.product-name {
  font-size: 25px;
}
.dropdown:hover > div.dropdown-content {
  display: block;
  z-index: 10;
  right: 5px;
  border-radius: 3px;
  /* background-color: red; */
}
.dropdown:hover > div.dropdown-content > a {
  display: block;
  z-index: 10;
  /* border-bottom: 1.5px double grey; */
}
.dropdown:hover > div.dropdown-content > a:hover {
  border-bottom: 1.5px double lightgrey;
  cursor: pointer;
  box-shadow: 2px grey;
}
.dropdown-content {
  display: none;
  position: absolute;
  background-color: #f1f1f1;
  /* min-width: 160px; */
  box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
  /* z-index: 10; */
}

.dropdown-content a {
  color: black;
  padding: 12px 16px;
  text-decoration: none;
  display: block;
}

@keyframes move {
  0% {
    padding-bottom: 4px;
  }
  25% {
    padding-bottom: 5px;
  }
  75% {
    padding-bottom: 6px;
  }
  100% {
    padding-bottom: 0px;
  }
}
</style>
