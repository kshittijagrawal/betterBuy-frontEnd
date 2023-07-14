<template>
  <div>
    <div class="Cart">
      <div v-for="(historyItem, index) in history" :key="index">
        <history-view :SingleHistory="historyItem"></history-view>
        <!-- <div class="paddingdiv">
          <div>
            <img :src="cartItem.image" alt="imagenotfound" />
          </div>
          <div class="details">
            <h3>Name: {{ cartItem.productName }}</h3>
            <p>Price: {{ cartItem.price }}</p>
            <p>Number: {{ cartItem.itemCount }}</p>
            <p>Merchant: {{ cartItem.merchantName }}</p>
          </div>
          <button @click="handleSubtract">Subtract Count</button
          ><button @click="handleAdd">Add Count</button>
          <button @click="handleRemove">Remove Item</button> -->
      </div>
    </div>
  </div>
</template>
<script>
import axios from "axios";
import HistoryView from "../components/HistoryView.vue";
export default {
  data() {
    return {
      history: undefined,
      number: 0,
      userId: localStorage.getItem("email"),
    };
  },
  components: {
    HistoryView,
  },
  async created() {
    this.history = await axios
      .get(`http://localhost:8083/user/viewHistory/${this.userId}`)
      .then((res) => (this.cart = res.data));
    // console.log(this.cart.cartResponse[0]);

    this.history = this.history.historyList;
    console.log(this.history);
  },
};
</script>

<style scoped>
.Cart {
  display: flex;
  /* justify-content: space-between; */
  flex-direction: row;
  flex-wrap: wrap;
  width: 100%;
}
</style>
