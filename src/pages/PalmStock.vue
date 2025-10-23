<template>
    <div>
        <h1>Product Page</h1>
        <listItems :products="palms" :name="name" />
        <!-- <button @click="findCategory">palm</button> -->
    </div>
</template>

<script>
import {palms} from '../temp-data'
import ListItems from '../components/ProductList.vue'
export default{
    name:'PamlStocks',
      data(){
        return{
         palms,
         name:'Palms'
        }
    },
    components:{
        ListItems
    },
    // created(){
    //  this.findCategory();
    // },
//     methods:{
//     findCategory() {
//       this.palms = products.find(
//         (product) => product.category === this.categoryToFind
//       ); 
//       console.log(this.palms)
//     //   this.category = palms ? palms.category : null;    
//     }
// }
}
</script>