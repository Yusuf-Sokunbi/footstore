import VueRouter from "vue-router";

const routes = [
  {
    path: "/",
    name: "Home",
    component: () => import("../pages/MainPage.vue")
  },
  {
    path: "/about",
    name: "About",
    component: () => import("../pages/AboutPage.vue")
  },
  {
    path: "/products",
    name: "Products",
    component: () => import("../pages/ProductPage.vue")
  },
  {
    path: "/cart",
    name: "ShoppingCart",
    component: () => import("../pages/ShoppingCartPage.vue")
  },
  {
    path: "/products/:productId",
    name: "ProductDetails",
    component: () => import("../pages/ProductDetailPage.vue")
  },
  {
    path: "/shoe",
    name: "ShoePage",
    component: () => import("../pages/ShoeStock.vue")
  },
  {
    path: "/sandal",
    name: "SandalPage",
    component: () => import("../pages/SandalStock.vue")
  },
  {
    path: "/halfshoe",
    name: "HalfShoePage",
    component: () => import("../pages/HalfShoeStock.vue")
  },
   {
    path: "/palm",
    name: "PalmPage",
    component: () => import("../pages/PalmStock.vue")
  },
  {
    path: "/black",
    name: "ColorBlack",
    component: () => import("../views/ColorBlack.vue")
  },
   {
    path: "/brown",
    name: "ColorBrown",
    component: () => import("../views/ColorBrown.vue")
  },
   {
    path: "/white",
    name: "ColorWhite",
    component: () => import("../views/ColorWhite.vue")
  },
   {
    path: "/other",
    name: "ColorOther",
    component: () => import("../views/OtherColor.vue")
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
