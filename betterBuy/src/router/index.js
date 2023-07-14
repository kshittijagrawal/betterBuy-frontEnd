import Vue from "vue";
import VueRouter from "vue-router";
// import HomeView from "../views/HomeView.vue";
import HomePage from "../components/HomePage.vue";
import ProductsPage from "../components/ProductsPage.vue";
import SignIn from "../components/SignIn.vue";
import SignUp from "../components/SignUp";
import CartV from "../views/CartV.vue";
import ProductDescription from "../components/ProductDescription";
import UserView from "../components/UserView";
import HistoryV from "../views/HistoryV.vue";
import MerchantLogin from "../components/MerchantLogin";
import MerchantRegister from "../components/MerchantRegister";
import MobileCategoryView from "../views/MobileCategoryView";
import LaptopCategoryView from "../views/LaptopCategoryView";
import CameraCategoryView from "../views/CameraCategoryView";
import ApplianceCategoryView from "../views/ApplianceCategoryView";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "home",
    component: HomePage,
  },
  {
    path: "/products",
    name: "products",
    component: ProductsPage,
  },
  {
    path: "/products/mobile",
    name: "MobileCategory",
    component: MobileCategoryView,
  },
  {
    path: "/products/laptop",
    name: "LaptopCategory",
    component: LaptopCategoryView,
  },
  {
    path: "/products/camera",
    name: "CameraCategory",
    component: CameraCategoryView,
  },
  {
    path: "/products/appliance",
    name: "ApplianceCategory",
    component: ApplianceCategoryView,
  },
  {
    path: "/products/:productId/:merchantId",
    name: "productsDescription",
    component: ProductDescription,
  },
  {
    path: "/signin",
    name: "signin",
    component: SignIn,
  },
  {
    path: "/signup",
    name: "signup",
    component: SignUp,
  },
  {
    path: "/products/cartview",
    name: "products/cartview",
    component: CartV,
  },
  {
    path: "/userview",
    name: "userview",
    component: UserView,
  },
  {
    path: "/history",
    name: "history",
    component: HistoryV,
  },
  {
    path: "/merchant/register",
    name: "MerchantRegister",
    component: MerchantRegister,
  },
  {
    path: "/merchant/login",
    name: "MerchantLogin",
    component: MerchantLogin,
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
