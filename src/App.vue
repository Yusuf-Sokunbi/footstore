<template>
  <div>
    <router-link to="/products">Products</router-link>
    <router-link to="/cart">ShoppingCart</router-link>
     <router-view></router-view>
  </div>
</template>

<script>


export default {
  name: 'App',
  components: {
    // HelloWorld
  }
}
</script>


