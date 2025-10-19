<template>
    <div class="cove">
        <h1>FootShop</h1>
        <!-- <img :src="image" alt=""> -->
     <div class="route-link">
         <div >
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
        </div> 
        <div>
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
        </div>
     </div>
   
        
    </div>
</template>

<script>
// import ProductList from '@/components/ProductList.vue'
import Slippers from '../FOOTIMAGE/Palm/cross_slippers.jpeg'
import half from '../FOOTIMAGE/Half_shoe/halfshoe.jpg'
import sandal from '../FOOTIMAGE/Sander/sandal.jpg'
import shoe from '../FOOTIMAGE/Shoe/DriversShoe.jpg'
export default{
    name:'MainPage',
    // props:['filteredItems'],
    data(){
        return{
            Slippers,
            half,
            shoe,
            sandal,
            view:'For more '
        }
    },
  
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