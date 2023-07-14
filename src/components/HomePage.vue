<template>
  <div>
    <nav class="navbar">
      <div class="nav">
        <div class="brand-logo">
          <img src="../assets/logo.png" alt="BrandLogo" />
          <div class="nav-items">
            <a @click="productsPage">Products</a>
            <a @click="learningPage">Learn</a>
          </div>
        </div>

        <div class="signOptions">
          <a @click="signIn">Sign In</a>
          <a @click="signUp">Sign Up</a>
          <a @click="handleLogOut" v-if="isLoggedIn != null">Sign Out</a>
        </div>
      </div>
    </nav>

    <div class="about">
      <h3>better</h3>
      <h3>buy.</h3>
      <p>The best. At better prices.</p>
    </div>
    <div id="slider">
      <!-- <transition-group name="fade" tag="div"> -->
      <div id="images" v-for="i in [currentIndex]" :key="i">
        <img :src="currentImg" />
      </div>
    </div>
    <footer>
      <div class="footer-content">
        <img src="../assets/white-logo.png" class="logo" alt="" />
        <div class="footer-ul-container">
          <ul class="category">
            <li class="category-title">Laptop</li>
            <li><a href="#" class="footer-link">Apple</a></li>
            <li><a href="#" class="footer-link">lenovo</a></li>
            <li><a href="#" class="footer-link">HP</a></li>
            <li><a href="#" class="footer-link">dell</a></li>
            <li><a href="#" class="footer-link">acer</a></li>
            <li><a href="#" class="footer-link">MSI</a></li>
            <li><a href="#" class="footer-link">asus</a></li>
            <li><a href="#" class="footer-link">microsoft</a></li>
          </ul>
          <ul class="category">
            <li class="category-title">Camera</li>
            <li><a href="#" class="footer-link">sony</a></li>
            <li><a href="#" class="footer-link">canon</a></li>
            <li><a href="#" class="footer-link">fujifilm</a></li>
            <li><a href="#" class="footer-link">nikon</a></li>
            <li><a href="#" class="footer-link">olympus</a></li>
            <li><a href="#" class="footer-link">panasonic</a></li>
            <li><a href="#" class="footer-link">pentax</a></li>
            <li><a href="#" class="footer-link">Leica</a></li>
          </ul>
        </div>
      </div>
      <div class="footer-social-container">
        <div>
          <a href="#" class="social-link">terms & services</a>
          <a href="#" class="social-link">Privacy page</a>
        </div>
        <div>
          <a href="#" class="social-link">Facebook</a>
          <a href="#" class="social-link">Twitter</a>
        </div>
      </div>
      <p class="footer-credit">© Copyright™ Claimed</p>
    </footer>
  </div>
</template>

<script>
export default {
  name: "HomeView2",
  data() {
    return {
      isLoggedIn: localStorage.getItem("isLoggedIn"),
      images: [
        "https://play-lh.googleusercontent.com/_G2Y9hUj1g09iUt7x2beSOwb3pFUoVcHsMOUFxQd0nSdYPNrm4WcKnEZ8MdqhqyJfQ",
        "https://www.pngmart.com/files/16/Laptop-Top-View-PNG-Photos.png",
        "https://pngimg.com/d/iphone_12_PNG35.png",
        "https://freepngimg.com/save/21872-digital-video-camera-transparent/1300x799",
        "https://www.pngarts.com/files/4/Apple-Macbook-Pro-PNG-Image-Transparent-Background.png",
      ],
      timer: null,
      currentIndex: 0,
    };
  },
  mounted: function () {
    this.startSlide();
  },
  methods: {
    handleLogOut() {
      localStorage.clear();
      alert("User Logged Out.");
      window.location.reload();
    },
    signIn() {
      if (this.isLoggedIn != null) {
        alert("User already Logged In");
        this.$router.push("/products");
      } else {
        this.$router.push("/signin");
      }
    },
    signUp() {
      this.$router.push("/signup");
    },
    productsPage() {
      this.$router.push("/products");
    },
    learningPage() {
      this.$router.push("#");
    },
    startSlide: function () {
      this.timer = setInterval(this.next, 2000);
    },

    next: function () {
      this.currentIndex += 1;
    },
    prev: function () {
      this.currentIndex -= 1;
    },
  },
  computed: {
    currentImg: function () {
      return this.images[Math.abs(this.currentIndex) % this.images.length];
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
  border-bottom: 1px solid #d1d1d1;
}
.nav {
  padding: 0.8%;
  display: flex;
  justify-content: space-between;
}
.nav a {
  font-weight: lighter;
}

.brand-logo {
  display: flex;
}

.brand-logo img {
  height: 60px;
  transition: 1s;
}
.brand-logo img:hover {
  transform: rotate(180deg);
}
.nav-items {
  position: relative;
  /* left: 10%; */
  display: flex;
  align-items: center;
}
div.nav-items > a {
  text-decoration: none;
  margin-right: 20px;
  margin-left: 20px;
  padding: 5px 5px;
}
div.nav-items > a:hover {
  /* box-shadow: 2px 2px 2px 2px grey; */
  cursor: pointer;
  opacity: 1;
  transition: 0.5s;
  /* color: red; */
}

.signOptions {
  padding: 0.8%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 2px;
  padding: 2px;
  box-sizing: border-box;
  font-family: "roboto", sans-serif;
}
div.signOptions > a {
  margin-right: 20px;
  margin-left: 20px;
  padding: 5px 5px;
  font-family: "roboto", sans-serif;
  font-size: 20px;
  opacity: 0.5;
  transition: 0.5s;
  /* box-shadow: 2px 2px grey; */
}
div.signOptions > a:hover {
  cursor: pointer;
  opacity: 1;
  /* box-shadow: 2px 2px 2px 2px grey; */
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

.nav-items {
  padding: 0.8%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 2px;
  padding: 2px;
  box-sizing: border-box;
  font-family: "roboto", sans-serif;
}
div.nav-items > a {
  margin-right: 20px;
  margin-left: 20px;
  padding: 5px 5px;
  font-family: "roboto", sans-serif;
  font-size: 20px;
  opacity: 0.5;
  transition: 0.5s;
}
div.nav-items > a:hover {
  cursor: pointer;
  opacity: 1;
}

.about {
  padding-left: 1.5%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  box-sizing: content-box;
  /* position: absolute; */
  /* top: 34%; */
  left: 0;
  height: 50%;
  width: 40%;
  font-size: 78px;
  margin-top: 19%;
}

.about p {
  margin-top: 6%;
  font-size: 45px;
  font-weight: lighter;
}

footer {
  position: relative;
  width: 100%;
  padding: 40px 10vw;
  padding-bottom: 80px;
  background: #383838;
  margin-top: 6%;
}

.footer-content {
  display: flex;
  width: 100%;
  justify-content: space-between;
}

.footer-content .logo {
  height: 160px;
}

.footer-ul-container {
  width: 45%;
  display: flex;
  justify-content: space-between;
}

.category {
  width: 200px;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 10px;
  list-style: none;
}

.category-title {
  grid-column: span 2;
  text-transform: capitalize;
  color: #fff;
  font-size: 20px;
  margin-bottom: 20px;
}

.category .footer-link {
  text-decoration: none;
  text-transform: capitalize;
  color: rgba(255, 255, 255, 0.75);
}

.footer-link:hover {
  color: #fff;
}

.footer-social-container {
  margin-top: 40px;
  display: flex;
  justify-content: space-between;
}

.social-link {
  color: #fff;
  margin-left: 20px;
  text-transform: capitalize;
}

.social-link:nth-child(1) {
  margin-left: 0;
}

.footer-credit {
  width: 100%;
  padding: 10px;
  position: absolute;
  left: 0;
  bottom: 0;
  text-align: center;
  color: #fff;
  background: rgba(0, 0, 0, 0.2);
}
#slider {
  position: absolute;
  right: 5%;
  top: 20%;
  height: 60%;
  width: 48%;
  overflow: hidden;
  border-radius: 5px;
  /* border: 1px solid red; */
  /* box-sizing: border-box; */
}
/* .fade-enter-active,
.fade-leave-active {
  transition: all 0.9s ease;
  overflow: hidden;
  visibility: visible;
  position: absolute;
  width: 100%;
  opacity: 1;
}

.fade-enter,
.fade-leave-to {
  visibility: hidden;
  width: 100%;
  opacity: 0;
} */

/* #slider img {
  height: 80%;
  width: 100%;
} */
#images {
  /* position: relative; */
  /* right: 0; */
  /* top: 20%; */
  height: 100%;
  /* width: 40%; */
  /* overflow: hidden; */
  /* border-radius: 5px; */
  /* width: ; */
  /* border: 2px solid black; */
}
#images img {
  /* height: 300; */
  /* width: 450; */
  width: 40vw;
  height: 60vh;
  border-radius: 5px;
  object-fit: fill;
}
</style>
