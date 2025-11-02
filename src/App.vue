<template>
  <div class="relative">
      <HeaderPage @search="filterProducts" />
      
      <SelectionRoute />
      <div v-if="loadPage" >
        <transition name="fade">
         <div v-if="filteredItems.length" class="results">
           <ProductList :products="filteredItems"  />
         </div>
        </transition>

      </div>
      <div v-else>
        <transition name="slide" mode="out-in">
          <router-view />
        </transition>
      </div>
      <FooterPage />
   </div>
</template>

   <!-- <router-link
      v-for="link in category"
      :key="link.path"
      :to="link.path"
      class="px-4 py-2"
      :class="$route.path === link.path ? 'text-blue-600 font-semibold' : 'text-gray-600'"
    >
      {{ link.name }}
    </router-link> -->

<script>
import {products} from './temp-data.js'
import HeaderPage from './components/HeaderPage.vue'

import ProductList from './components/ProductList.vue'
// import SelectionRoute from './components/SelectionRoute.vue'
import FooterPage from './pages/FooterPage.vue'

export default {
  name: 'App',
  data(){
     return{
      filteredItems:[],
      loadPage:false,
      
      // selectedRoute:'',
      // FootIcon,
      
      
     }
  },
     components: {
    ProductList,
    HeaderPage,
    // SelectionRoute,
    FooterPage
    
  },
  methods: {
    filterProducts(query) {
    this.filteredItems = products.filter((item) =>
        item.name.toLowerCase().includes(query.toLowerCase()) ||
        item.category.toLowerCase().includes(query.toLowerCase()) 
        // item.color.toLowerCase().includes(query.toLowerCase())
      );
      this.loadPage= !this.loadPage
      console.log(this.filteredItems)
    }
  }
 
}
</script>

<style>
fade-enter-active, .fade-leave-active {
  transition: opacity 0.5s ease;
}
.fade-enter, .fade-leave-to {
  opacity: 0;
}

.slide-enter-active, .slide-leave-active {
  transition: transform 0.5s ease;
}
.slide-enter {
  transform: translateX(100%);
}
.slide-leave-to {
  transform: translateX(-100%);
}

</style>

