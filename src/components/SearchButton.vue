<template>
    <div>
         <input type="text" placeholder="Enter your product name"
      @input="debouncedSearch" v-model="searchEntry" class="py-2 px-4 text-black">
    <button @click="searchButton" class="p-2 rounded-sm ml-1 bg-blue-800">Search</button> 
    </div>
</template>

<script>
import {products} from '../temp-data.js'
export default {
  name: 'App',
  data(){
     return{
      searchEntry:'',
      filteredItems:[],
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

   
 
}
}
</script>