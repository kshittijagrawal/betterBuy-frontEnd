<template>
  <div class="CartItem">
    <div class="paddingDiv">
      <img :src="SingleHistory.image" alt="imagenotfound" />
      <div class="details">
        <h3>Name: {{ SingleHistory.productName }}</h3>
        <p>Price: {{ SingleHistory.price }}</p>
        <p>Date: {{ SingleHistory.dateOfPurchase }}</p>
        <p>Merchant: {{ SingleHistory.merchantName }}</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      cart: [],
      itemCount: "",
    };
  },

  props: ["SingleHistory"],
  //   async created() {
  //     this.cart = await axios
  //       .get("http://localhost:8083/user/viewCart/george@gmail.com")
  //       .then((res) => (this.cart = res.data));
  //     // console.log(this.cart.cartResponse[0]);

  //     this.cart = this.cart.cartResponse;
  //     console.log(this.cart[0].image);
  //   },
};
</script>
<style scoped>
/* .CartItem { */
/* width: 100%; */
/* margin: 0%; */
/* } */
/* .CartItem {
  border: 2px solid black;
  border-radius: 5%;
  width: 27%;
}

img {
  width: 200px;
  height: 300px;
}
.paddingdiv {
  padding: 5%;
}
.CartItem button {
  display: flex;
  flex-direction: column;
  /* width: 100%; */
.CartItem {
  width: 300px;
  height: 300px;
  padding: 5px;
  margin: 10px;
  background-color: whitesmoke;
  /* margin-left: 200px; */
  /* margin-bottom: 50px; */
  /* margin-top: 10px; */
  /* padding: 10px; */
  border: 2px solid black;
  border-radius: 10px;
  /* border-radius: 5px;  */
}
.CartItem img {
  height: 200px;
  width: 300px;
}
</style>
