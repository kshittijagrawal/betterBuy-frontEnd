<template>
  <div class="wrapper login">
    <div class="container">
      <div class="col-left">
        <div class="login-text">
          <h2>Welcome!</h2>
          <p>Have an account already?<br />Sign In.</p>
          <a href="/signin" class="btn">Sign In</a>
        </div>
      </div>
      <div class="col-right">
        <div class="login-form">
          <h2>Sign Up</h2>
          <form @submit.prevent="handleSubmit">
            <p>
              <label>First Name<span>*</span></label>
              <input
                v-model="firstName"
                type="text"
                placeholder="Enter your first name"
                required
              />
            </p>
            <p>
              <label>Last Name<span>*</span></label>
              <input
                type="text"
                v-model="lastName"
                placeholder="Enter your last name"
                required
              />
            </p>
            <p>
              <label>Phone Number<span>*</span></label>
              <input
                type="text"
                v-model="mobile"
                placeholder="Enter your contact number"
                required
              />
            </p>
            <p>
              <label>Date of Birth<span>*</span></label>
              <input
                type="text"
                v-model="dob"
                placeholder="Enter your date of birth"
                required
              />
            </p>
            <p>
              <label>Address<span>*</span></label>
              <input
                type="text"
                v-model="address"
                placeholder="Enter your address"
                required
              />
            </p>
            <p>
              <label>Email address<span>*</span></label>
              <input
                type="email"
                v-model="email"
                placeholder="Enter your email"
                required
              />
            </p>
            <p>
              <label>Password<span>*</span></label>
              <input
                type="password"
                v-model="password"
                placeholder="Password"
                required
              />
            </p>
            <p><input type="submit" value="Sign Up" /></p>
          </form>
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
      email: "",
      firstName: "",
      lastName: "",
      mobile: "",
      address: "",
      dob: "",
      password: "",
    };
  },
  methods: {
    async handleSubmit() {
      await axios.post("http://localhost:8083/user/register", {
        emailId: this.email,
        firstName: this.firstName,
        lastName: this.lastName,
        password: this.password,
        dob: this.dob,
        address: this.address,
        mobile: Number(this.mobile),
      });
      this.$router.push("/");
    },
  },
};
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Poppins&display=swap");
* {
  box-sizing: border-box;
}

.wrapper {
  margin: 0 auto;
  width: 100%;
  max-width: 1140px;
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
}

.container {
  position: relative;
  width: 100%;
  max-width: 600px;
  height: auto;
  display: flex;
  background: #ffffff;
  box-shadow: 0 0 30px #999999;
}

.login .col-left,
.login .col-right {
  padding: 30px;
  display: flex;
}

.login .col-left {
  width: 60%;
  clip-path: polygon(0 0, 0% 100%, 100% 0);
  background: #b29999;
}

.login .col-right {
  padding: 60px 30px;
  width: 50%;
  margin-left: -10%;
}

@media (max-width: 575px) {
  .login .container {
    flex-direction: column;
    box-shadow: none;
  }
  .login .col-left,
  .login .col-right {
    width: 100%;
    margin: 0;
    clip-path: none;
  }
  .login .col-right {
    padding: 30px;
  }
}

.login .login-text {
  position: relative;
  color: #ffffff;
}

.login .login-text h2 {
  margin: 0 0 15px 0;
  font-size: 30px;
  font-weight: 700;
}

.login .login-text p {
  margin: 0 0 20px 0;
  font-size: 16px;
  font-weight: 500;
  line-height: 22px;
}

.login .login-text .btn {
  display: inline-block;
  font-family: poppins;
  padding: 7px 20px;
  font-size: 16px;
  letter-spacing: 1px;
  text-decoration: none;
  border-radius: 30px;
  color: #ffffff;
  outline: none;
  border: 1px solid #ffffff;
  box-shadow: inset 0 0 0 0 #ffffff;
  transition: 0.3s;
}

.login .login-text .btn:hover {
  color: #b29999;
  box-shadow: inset 150px 0 0 0 #ffffff;
}

.login .login-form {
  position: relative;
  width: 100%;
}

.login .login-form h2 {
  margin: 0 0 15px 0;
  font-size: 22px;
  font-weight: 700;
}

.login .login-form p {
  margin: 0 0 10px 0;
  text-align: left;
  color: #666666;
  font-size: 15px;
}

.login .login-form p:last-child {
  margin: 0;
  padding-top: 3px;
}

.login .login-form p a {
  color: #b29999;
  font-size: 14px;
  text-decoration: none;
}

.login .login-form label {
  display: block;
  width: 100%;
  margin-bottom: 2px;
  letter-spacing: 0.5px;
}

.login .login-form p:last-child label {
  width: 60%;
  float: left;
}

.login .login-form label span {
  color: #ff574e;
  padding-left: 2px;
}

.login .login-form input {
  display: block;
  width: 100%;
  height: 35px;
  padding: 0 10px;
  outline: none;
  border: 1px solid #cccccc;
  border-radius: 30px;
}

.login .login-form input:focus {
  border-color: #ff574e;
}

.login .login-form button,
.login .login-form input[type="submit"] {
  display: inline-block;
  width: 100%;
  margin-top: 5px;
  color: #b29999;
  font-size: 16px;
  letter-spacing: 1px;
  cursor: pointer;
  background: transparent;
  border: 1px solid #b29999;
  border-radius: 30px;
  box-shadow: inset 0 0 0 0 #b29999;
  transition: 0.3s;
}

.login .login-form button:hover,
.login .login-form input[type="submit"]:hover {
  color: #ffffff;
  box-shadow: inset 250px 0 0 0 #b29999;
}
</style>
