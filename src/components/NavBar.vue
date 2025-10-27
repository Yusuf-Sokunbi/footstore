<template>
    <div class="md:flex justify-between mx-4 bg-black p-3 text-white items-center"> 
    <router-link to="/" class="flex items-center gap-2"><img :src="FootIcon" alt="" class="w-[20%] rounded-full"><span class="text-lg font-bold">FootShop</span></router-link>
    <div class="py-4">
    <!-- <SearchButton :value=""/> -->
        <div>
         <input type="text" placeholder="Enter your product name"
      @input="debouncedSearch" v-model="searchEntry" class="py-2 px-4 text-black">
    <button @click="searchButton" class="p-2 rounded-sm ml-1 bg-blue-800">Search</button> 
    </div>
  </div>
    <router-link to="/products">Products</router-link>
    <router-link to="/cart">ShoppingCart</router-link>
  </div>
</template>

<script>
import { products } from '@/temp-data';
import FootIcon from '../FOOTIMAGE/footicon.jpg'

export default {
  name: 'App',
  props:['name', 'values'],
  data(){
     return{
      FootIcon,
     }
  },
  methods:{
    searchButton(){
       this.filteredItems = products.filter((item) =>
        item.category.toLowerCase().includes(this.searchEntry.toLowerCase())
      );
      //  this.filteredName = products.filter((item) =>
      //   item.name.toLowerCase().includes(this.searchEntry.toLowerCase())
      // );
       console.log('searchWord:', this.searchEntry)
       this.searchEntry= '';
      //  this.loadPage= !this.loadPage
    },
 
 
},
 components:{
    // SearchButton
  }
} 

</script>