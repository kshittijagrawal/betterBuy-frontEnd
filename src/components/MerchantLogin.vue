<template>
  <div class="login">
    <form @submit.prevent="handleSubmit">
      <h1>Merchant Sign in</h1>
      <div>
        <p><label for="email">Email</label></p>
        <input v-model="email" type="email" name="email" id="email" />
      </div>
      <div>
        <p><label for="password">Password</label></p>
        <input
          v-model="password"
          type="password"
          name="password"
          id="password"
        />
      </div>
      <div class="submit-button">
        <button @submit.prevent="handleSubmit">Submit</button>
      </div>
      <div>
        <p>
          Not a user
          <button @click="() => this.$router.push('/merchantRegister')">
            Sign Up
          </button>

          <!-- Not a user? <router-link to="/merchantRegister">Sign up</router-link> -->

          <!-- <router-view /> -->
        </p>
      </div>
    </form>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "MerchantLogin",
  data() {
    return {
      email: "",
      password: "",
      show: true,
    };
  },
  methods: {
    async handleSubmit() {
      const response = await axios.post(
        "http://localhost:8081/merchant/login/" + this.email + this.password,
        {
          email: this.email,
          password: this.password,
        }
      );
      console.log(response);
      if (response.data === true) {
        localStorage.setItem("email", this.email);
        // this.show = false;
        // this.$router.push("/merchant/products");
      }
    },
  },
};
</script>

<style scoped>
.signin-page {
  display: flex;
  justify-content: center;
}

form {
  margin-top: 40px;
  margin-left: 70px;
  border: 2px solid black;
  width: 40%;
  padding-bottom: 10px;
}

.name {
  display: flex;
  justify-content: space-around;
}

.bottom {
  display: flex;
  flex-wrap: wrap;
}

#address {
  width: 70%;
}

/* .phone, .email, .password, .confirm {
        float: left;
    } */

.field {
  padding: 10px;
}
</style>
