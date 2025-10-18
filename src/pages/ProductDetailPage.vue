<template>
 <div> 
     <div v-if="product">
       <div class="img-wrap">
        <img :src="product.imageName" />
      </div>
      <div class="product-details">
        <h1>{{ product.name }}</h1>
        <h3 class="price">{{ product.price }}</h3>
        <button class="add-to-cart" @click="addToCart">Add to cart</button>
      </div>
     </div>
     <div v-if="!product">
        <h2>product not found</h2>
      <!-- <NotFoundPage /> -->
     </div>
  </div>
  
</template>

<script>
import {products,cartItems } from '../temp-data'

export default{
    name:'ProductDetailPage',
    data(){
        return{
            product : products.find(product => product.id === (this.$route.params.productId)),
          
        }
    },
    methods:{
      addToCart(){
        const existingItem = cartItems.find(cart => cart.id === this.product.id)
        if(existingItem){
          existingItem.quantity++
        }else {
          cartItems.push({ ...this.product, quantity: 1 })
          console.log(this.product, this.quantity)
        }
        
      }
    },
    computed: {
  existingItem() {
    return cartItems.find(cart => cart.id === this.product.id)
  }
}

}
</script>