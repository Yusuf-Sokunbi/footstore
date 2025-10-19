<template>
  <div class="cove">
   <div class="route-link"> 
    <router-link to="/">&#8592;</router-link>
    <div>
      <input type="text" placeholder="Enter your product name"
      @input="debouncedSearch" v-model="searchEntry">
    <button @click="searchButton">Search</button>
  </div>
    <router-link to="/products">Products</router-link>
    <router-link to="/cart">ShoppingCart</router-link></div>
     
    <div v-if="!searchEntry"><router-view></router-view></div>
    <div v-if="searchEntry">
      <ProductList :products="filteredItems"/>
    </div>
  </div>
</template>

<script>
import {products} from './temp-data.js'
// import _ from "lodash";
import ProductList from './components/ProductList.vue'
export default {
  name: 'App',
  data(){
     return{
      searchEntry:'',
      filteredItems:[],
      
     }
  },
  // created() {
  //   this.filteredItems = this.items; // Initialize with all items
  //   this.debouncedSearch = _.debounce(this.searchEntry, 300);
  // },
  //  computed: {
  //   filteredItems() {
  //     return products.filter((item) =>
  //       item.name.toLowerCase().includes(this.searchEntry.toLowerCase())
  //     );
  //   },
  // },
     components: {
   ProductList
  },
  methods:{
    searchButton(){
       this.filteredItems = products.filter((item) =>
        item.name.toLowerCase().includes(this.searchEntry.toLowerCase())
      );
       console.log('searchWord:', this.searchEntry)
      //  this.searchEntry= '';
    }
  },
 
}
</script>
<style>
.route-link{
  display: flex;
  justify-content: space-around;
  }
  </style>

