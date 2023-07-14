<template>
  <div class="register">
    <form @submit.prevent="handleSubmit">
      <h1>Merchant Register</h1>

      <div>
        <p><label for="name">Name :</label></p>
        <input v-model="name" type="text" name="name" id="name" />
      </div>
      <div>
        <p><label for="email">Email :</label></p>
        <input v-model="email" type="email" name="email" id="email" />
      </div>
      <div>
        <p><label for="pasasword">Password :</label></p>
        <input
          v-model="password"
          type="password"
          name="password"
          id="password"
        />
      </div>
      <div>
        <p><label for="username">UserName :</label></p>
        <input v-model="username" type="text" name="username" id="username" />
      </div>
      <div>
        <p><label for="address">Address :</label></p>
        <input v-model="address" type="text" name="address" id="address" />
      </div>
      <div>
        <p><label for="phone">Phone Number :</label></p>
        <input v-model="phone" type="text" name="phone" id="phone" />
      </div>
      <div class="submit-button">
        <button type="submit">Submit</button>
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
      username: "",
      phone: "",
      address: "",
      name: "",
      show: true,
    };
  },
  methods: {
    async handleSubmit() {
      const response = await axios.post(
        "http://localhost:8081/merchant/insertorupdate",
        {
          merchantEmail: this.email,
          merchantName: this.name,
          merchantAddress: this.address,
          merchantContactNo: this.phone,
          merchantUsername: this.username,
          merchantPassword: this.password,
        }
      );
      console.log(response);
      //   if (response.data === true) {
      //     localStorage.setItem("email", this.email);
      //     // this.show = false;
      //     this.$router.push("/merchant/products");
      //   }
    },
  },
};
</script>

<style scoped>
.register {
  display: flex;
  justify-content: center;
  text-align: center;
  align-items: center;
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
