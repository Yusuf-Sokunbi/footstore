<template>
    <div class="md:flex justify-between mx-4 bg-black p-3 text-white items-center"> 
    <router-link to="/" class="flex items-center gap-2"><img :src="FootIcon" alt="" class="w-[20%] rounded-full"><span class="text-lg font-bold">FootShop</span></router-link>
    <div class="py-4">
    <SearchButton />
  </div>
    <router-link to="/products">Products</router-link>
    <router-link to="/cart">ShoppingCart</router-link>
  </div>
</template>

<script>
import FootIcon from '../FOOTIMAGE/footicon.jpg'
import SearchButton from './SearchButton.vue';

export default {
  name: 'App',
  data(){
     return{
      FootIcon,
     }
  },
  components:{
    SearchButton
  }
 
}
</script>