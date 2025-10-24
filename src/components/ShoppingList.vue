<template>
    <div>
        <hr class="border-t-[0.1px] border-gray-400 my-2 w-full mx-"/>
        <div class="flex md:justify-between items-center gap-8 py-4"
        v-for="product in products" 
        :key="product.id">
          <div class="md:flex md:items-center md:gap-16">
              <img class="w-[100px] h-[100px]"
            :src="product.imageName" alt="">
            <div class="">
                <h2 class="font-bold md:text-2xl">{{ product.name }}</h2>
                <p class="md:mt-4">{{ formatCurrency(product.price)}} </p>
            </div>
          </div>
            <button class="text-xs bg-black px-3 h-[40px] text-white rounded-md md:font-bold md:text-lg" @click="deleteItem(product.id)" >Remove from Cart</button>
        </div>
    </div>
</template>

<script>
import { cartItems } from '@/temp-data';
export default{
    name:'ShoppingCartList',
    props:['products'],
  
 methods:{
    deleteItem(id){
     const updateCart = cartItems.filter(cart => cart.id !== id)
     // mutate the imported array in-place instead of reassigning the module binding
     cartItems.splice(0, cartItems.length, ...updateCart)
    //  console.log('delete:', id)
    alert('Product was removed from cart successfully ')
    },

    formatCurrency(value) {
      return new Intl.NumberFormat('en-NG', {
        style: 'currency',
        currency: 'NGN',
      }).format(value);
    },

 }
}</script>