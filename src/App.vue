<template>
  <div class="cove">
   <div class="route-link"> 
    <router-link to="/">&#8592;</router-link>
    <router-link to="/products">Products</router-link>
    <router-link to="/cart">ShoppingCart</router-link></div>
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
<style>
.route-link{
  display: flex;
  justify-content: space-between;
  }
  </style>

