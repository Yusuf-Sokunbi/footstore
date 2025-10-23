<template>
  <div class="cove">
   <div class="md:flex justify-between mx-4 bg-black p-3 text-white items-center"> 
    <router-link to="/" class="flex items-center gap-2"><img :src="FootIcon" alt="" class="w-[20%] rounded-full"><span class="text-lg font-bold">FootShop</span></router-link>
    <div class="py-4">
      <input type="text" placeholder="Enter your product name"
      @input="debouncedSearch" v-model="searchEntry" class="py-2 px-4 text-black">
    <button @click="searchButton" class="p-2 rounded-sm ml-1 bg-blue-800">Search</button>
  </div>
    <router-link to="/products">Products</router-link>
    <router-link to="/cart">ShoppingCart</router-link>
  </div>
    <div class="flex gap-2">
       <div>
        <select class="md:w-[100px] p-2  border-[#4CAF50] bg-[#F9F9F9] text-[#333] md:text-md"
        id="" v-model="selectedRoute" @change="navigateToSelectdRoute">
               <option value="" disabled>Category</option>
               <option value="shoe">Shoe</option>
               <option value="/sandal">Sandal</option>
               <option value="/palm">Palm</option>
               <option value="/halfshoe">Halfshoe</option> 
       </select>
     </div>
      <div>
        <select class="md:w-[100px] p-2  border-[#4CAF50] bg-[#F9F9F9] text-[#333] md:text-md"
        id="" v-model="selectedRoute" @change="navigateToSelectdRoute">
               <option value="" disabled>Color</option>
               <option value="">White</option>
               <option value="/black">Black</option>
               <option value="">White</option>
               <option value="">Other</option> 
       </select>
     </div>
      <div>
        <select class="md:w-[200px] p-2  border-[#4CAF50] bg-[#F9F9F9] text-[#333] md:text-xl"
        id="" v-model="selectedRoute" @change="navigateToSelectdRoute">
               <option value="" disabled>Price</option>
               <option value="">$0-$5</option>
               <option value="">$6-10$</option>
               <option value="">$11-$20</option>
               <option value="">$21-$100</option> 
       </select>
     </div>
      <div>
        <select class="md:w-[200px] p-2  border-[#4CAF50] bg-[#F9F9F9] text-[#333] md:text-xl"
        id="" v-model="selectedRoute" @change="navigateToSelectdRoute">
               <option value="" disabled>Size</option>
               <option value="">40</option>
               <option value="">41</option>
               <option value="">42</option>
               <option value="">43</option> 
               <option value="">44</option> 
               <option value="">45</option> 
       </select>
     </div>
    </div>
     
    <div><router-view></router-view></div>
    <div >
      <ProductList :products="filteredItems" />
    </div>
  </div>
</template>

<script>
import {products} from './temp-data.js'
import ProductList from './components/ProductList.vue'
import FootIcon from './FOOTIMAGE/footicon.jpg'

export default {
  name: 'App',
  data(){
     return{
      searchEntry:'',
      filteredItems:[],
      filteredName:[],
      loadPage:true,
      selectedRoute:'',
      FootIcon,
      
      
     }
  },
     components: {
   ProductList
  },
  methods:{
    searchButton(){
       this.filteredItems = products.filter((item) =>
        item.category.toLowerCase().includes(this.searchEntry.toLowerCase())
      );
       this.filteredName = products.filter((item) =>
        item.name.toLowerCase().includes(this.searchEntry.toLowerCase())
      );
       console.log('searchWord:', this.searchEntry)
       this.searchEntry= '';
      //  this.loadPage= !this.loadPage
    },

    navigateToSelectdRoute(){
            if(this.selectedRoute){
                this.$router.push(this.selectedRoute)
            }
        }
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

