<template>
  <div class="productDetails">
    <div class="nav">
      <div class="brand-logo">
        <img src="../assets/logo.png" alt="" />
      </div>
      <div class="heading">
        <h1>Product Details</h1>
      </div>
      <div class="nav-items">
        <a href="/userview"><img src="../assets/user.png" alt="" /></a>
        <a href="/products/cartview"><img src="../assets/cart.png" alt="" /></a>
      </div>
    </div>
    <section v-if="showProd" class="product-details">
      <div class="product-image">
        <img :src="this.product.image" alt="img not available" />
      </div>
      <div class="details">
        <h2 class="product-name">
          {{ product.brand }} {{ product.productName }}
        </h2>
        <p class="product-usp">
          {{ product.productUsp }}
        </p>
        <p class="product-short-des">
          {{ product.description }}
        </p>
        <span class="product-price">₹{{ product.price }}</span>

        <p class="product-sub-heading">sold by : {{ merchantName }}</p>

        <button @click="addToCart" class="btn cart-btn">add to cart</button>
        <button @click="$router.go(-1)" class="btn">back</button>
      </div>
    </section>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "productView",
  data() {
    return {
      isDetails: true,
      productId: "",
      showProd: true,
      product: {},
      merchantId: "",
      merchantName: "",
      userId: localStorage.getItem("email"),
    };
  },
  async mounted() {
    this.productId = this.$route.params.productId;
    this.merchantId = this.$route.params.merchantId;
    console.log("index = ", this.productId);
    let prod = await axios
      .get(
        "http://localhost:8082/product/findMerchantProduct/" +
          this.productId +
          "/" +
          this.merchantId
      )
      .then((res) => {
        this.product = res.data;
        console.log(this.product);
      });
    console.log(prod);

    let merc = await axios
      .get("http://localhost:8081/merchant/getMerchantName/" + this.merchantId)
      .then((res) => {
        this.merchantName = res.data;
        console.log(this.merchantName);
      });
    console.log(merc);
  },
  methods: {
    async addToCart() {
      if (localStorage.getItem("isLoggedIn") != null) {
        await axios.post(
          `http://localhost:8083/user/addToCart/${this.userId}`,
          {
            productId: this.productId,
            merchantId: this.merchantId,
            itemCount: 1,
          }
        );
        console.log("Added one");
        alert("Item added to Cart.");
      } else {
        alert("User needs to Log In.");
        this.$router.push("/signin");
      }
    },
    details() {
      console.log("button clicked...");
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

.product-details {
  width: 100%;
  padding: 60px 10vw;
  display: flex;
  justify-content: space-between;
  padding-top: 5%;
}

.product-image img {
  height: 500px;
  position: relative;
  width: 500px;
  bottom: 0;
  border-radius: 25px;
}
.product-image {
  justify-content: center;
  text-align: center;
  padding: 1px 1px;
  position: relative;
  border-radius: 20px;
}

.details {
  width: 50%;
  text-transform: capitalize;
  padding-top: 5%;
}

.details .product-brand {
  text-transform: capitalize;
  font-size: 30px;
}

.details .product-usp {
  font-size: 17px;
  line-height: 10px;
  height: auto;
  margin: 15px 0 30px;
  opacity: 0.5;
}

.details .product-short-des {
  font-size: 25px;
  line-height: 25px;
  height: auto;
  margin: 15px 0 30px;
}

.product-price {
  font-weight: 700;
  font-size: 30px;
}

.product-sub-heading {
  font-size: 25px;
  text-transform: uppercase;
  margin: 60px 0 10px;
  font-weight: 300;
}

.btn {
  width: 48%;
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
</style>
