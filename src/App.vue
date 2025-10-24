<template>
  <div class="cove">
   <!-- <div class="md:flex justify-between mx-4 bg-black p-3 text-white items-center"> 
    <router-link to="/" class="flex items-center gap-2"><img :src="FootIcon" alt="" class="w-[20%] rounded-full"><span class="text-lg font-bold">FootShop</span></router-link>
    <div class="py-4">
      <input type="text" placeholder="Enter your product name"
      @input="debouncedSearch" v-model="searchEntry" class="py-2 px-4 text-black">
    <button @click="searchButton" class="p-2 rounded-sm ml-1 bg-blue-800">Search</button>
  </div>
    <router-link to="/products">Products</router-link>
    <router-link to="/cart">ShoppingCart</router-link>
  </div> -->
  <NavBar />
   <SelectionRoute />
     
    <div><router-view></router-view></div>
    <div >
      <ProductList :products="filteredItems" />
    </div>
  </div>
</template>

<script>
import {products} from './temp-data.js'
import NavBar from './components/NavBar.vue'
import ProductList from './components/ProductList.vue'
import SelectionRoute from './components/SelectionRoute.vue'

export default {
  name: 'App',
  data(){
     return{
      searchEntry:'',
      filteredItems:[],
      
      loadPage:true,
      selectedRoute:'',
      
      
      
     }
  },
     components: {
    ProductList,
    NavBar,
    SelectionRoute
    
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
 
}
</script>
<style>
.route-link{
  display: flex;
  justify-content: space-around;
  }
  /* select {
  width: 200px;
  padding: 10px;
  border: 2px solid #4CAF50;
  border-radius: 5px;
  background-color: #f9f9f9;
  color: #333;
  font-size: 16px;
} */
  </style>

