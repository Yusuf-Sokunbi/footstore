<template>
 <div> 
     <div v-if="product" class="w-[60%] mx-auto text-center">
       <div class="">
        <img :src="product.imageName" class="w-[60%] h-[400px] mx-auto" />
      </div>
      <div >
        <div class="flex justify-between font-bold text-xl mb-2">
           <h1>{{ product.name }}</h1>  
          <h3 class="price">{{ formatCurrency(product.price) }}</h3>
        </div>
        <hr class="border-t-[0.1px] border-gray-400  my-8 w-full mx-"/>
        <button class="bg-black py-3 w-[100%] text-white rounded-lg" @click="addToCart">Add to cart</button>
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
          // console.log(this.product, this.quantity)
          alert('Product added successfully')
        }
        
      },
      formatCurrency(value) {
      return new Intl.NumberFormat('en-NG', {
        style: 'currency',
        currency: 'NGN',
      }).format(value);
    },
   },
    computed: {
  existingItem() {
    return cartItems.find(cart => cart.id === this.product.id)
  }
}

}
</script>