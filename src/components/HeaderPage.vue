


<template>
  <nav class="md:sticky top-0 md:flex justify-between mx-4 bg-[#252424] p-3 text-white items-center">
    <router-link to="/" class="flex items-center gap-1"
    :class="$route.path === '/' ? 'text-blue-600 font-semibold' : 'text-[#9f9d9d]'"><img src="@/FOOTIMAGE/ycicon.jpg" alt="" class="w-[50px] h-[50px] border-gray-400 border-solid border-2 rounded-full"><span class="text-base font-bold hover:bg-white  hover:text-black p-2">Footwear</span></router-link>
    <SearchButton @search="handleSearch" />
    <router-link to="/products" 
     class="hover:bg-white 
      hover:text-black p-2" 
      :class="$route.path === '/products' ? 'text-blue-600 font-semibold' : 'text-[#FFF]'"
      >Products</router-link>
    <router-link to="/cart" 
    class="hover:bg-white  hover:text-black p-2" 
    :class="$route.path === '/cart' ? 'text-blue-600 font-semibold' : 'text-[#FFF]'"
    >ShoppingCart</router-link>
    <!-- <router-link to="/signup" 
     class="hover:bg-white  hover:text-black p-2"
      :class="$route.path === '/signup' ? 'text-blue-600 font-semibold' : 'text-[#FFF]'"
      >Create Account</router-link>
    <router-link to="/login" 
    class="hover:bg-white  hover:text-black p-2" 
    :class="$route.path === '/login' ? 'text-blue-600 font-semibold' : 'text-[#FFF]'"
    >Log in</router-link> -->
  </nav>
</template>

<script>
import SearchButton from './SearchButton.vue';


export default {
  data(){
    return{
      //  FootIcon,
      }
  },
  components: { SearchButton },
  methods: {
    handleSearch(query) {
      this.$emit('search', query);
    },
    handleMouseOver() {
      console.log("Mouse is over the link!");
      // You can trigger animations, tooltips, or preload data here
    },
    handleMouseLeave() {
      console.log("Mouse left the link.");
    }
  }

};
</script>
