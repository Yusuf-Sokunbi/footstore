<template>
    <div class="bg-gray-200">
    <ProductList v-if="filteredItems" :products="filteredItems" />
    <ProductList v-else :products="newProducts" :name=name  />
   
    

         <!-- <div >
        <div class="poster"> 
            <img :src="Slippers" alt="" width="300px" height="300px" />
            <br>
            <router-link to="/palm" class="button-link"><button>{{ view }}&#8594;</button></router-link>
        </div> 
        <div class="poster">
            <img :src="half" alt="" width="300px" height="300px">
            <br>
            <router-link to="/halfshoe" class="button-link"><button>{{ view }}&#8594;</button></router-link>
        </div> 
        </div>  -->
        <!-- <div>
        <div class="poster">
            <img :src="sandal" alt="" width="300px" height="300px" />
            <br>
            <router-link to="/sandal" class="button-link"><button>{{ view }}&#8594;</button></router-link>
        </div> 
        <div class="poster">
            <img :src="shoe" alt="" width="300px" height="300px">
            <br>
           <router-link to="/shoe" class="button-link"><button>{{ view }}&#8594;</button></router-link>
        </div>
        </div> -->
     <!-- </div> -->
   
        
    </div>
</template>

<script>
import { products } from '@/temp-data';
import ProductList from '@/components/ProductList.vue';
// import SelectionRoute from './components/SelectionRoute.vue'
export default{
    name:'MainPage',
    props:['filteredItems'],
    data(){
        return{
            newProducts:products.filter(item => item._id <= 6 ),
            view:'For more ',
            name:'Products'
          
        }
    },
    components:{
        ProductList,
        // SelectionRoute

    },

    methods:{
      
    }
  
}
</script>

<style>
.button-link{
    /* margin:auto */
    display: flex;
    justify-content: center;
}
.poster{
    background-color: rgb(238, 237, 235);
    padding: 10px 50px ;
    margin: 10px auto;
    border-radius: 8px;
}
</style>