<template>
    <div class="relative">
        <hr class="border-t-[0.1px] border-gray-400 my-2 w-full mx-"/>
       <div class="flex justify-around w-[70%] border-black border-[2px] border-solid rounded-md">
        <div>
           <div class="flex md:justify-between items-center gap-8 py-4 "
        v-for="product in products" 
        :key="product.id">
          <div class="md:flex md:items-center md:gap-16">
              <img class="w-[100px] h-[100px]"
            :src="product.imageName" alt="">
            <div class="">
                <h2 class="font-bold md:text-2xl">{{ product.name }}-{{ product.color }}</h2>
               <div class="flex mt-5">
                <button @click="decrease(product)">-</button>
                 <input type="number" v-model.number="product.quantity"  @change="validateQuantity(product)" >
                 <button @click="increase(product)">+</button>
                <p> QTY{{ product.quantity }}</p>
                <p>size:{{ product.size }}</p>
                
               </div>
                <p class="md:mt-4">{{ formatCurrency(product.price)}} </p>
  
                
            </div>
          </div>
            <img src="@/FOOTIMAGE/delete.jpg" alt="" @click="deleteItem(product.id)"  class="w-[10%] h-[10%]"/>
        </div>
        </div>
         
       </div>
        <div class="border-black border-[2px] border-solid rounded-md fixed top-40 right-40  w-[25%] py-10" >
          <h1 class="text-3xl font-bold mx-8">Summary</h1>
          <hr class="border-t-[0.1px] border-black my-2 w-[85%] mx-auto"/>
        <div class="flex justify-between mx-8">
          <h3>Total</h3>
          <h3>{{ formatCurrency(cartTotal) }}</h3>
        </div>
         <!-- <p>Number of Item{{ itemsNumber}}</p> -->
        <div class="flex justify-center">
           <button class="text-white bg-black w-[80%] py-3 mt-20 font-bold">Proceed to Checkout</button>
        </div>
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
    validateQuantity(product){
      if(product.quantity < 1){
        product.quantity =1
        console.log('quantity')
      }
    },

    decrease(product) {
  if (product.quantity > 1) {
    product.quantity -= 1;
  } else {
    product.quantity = 1; // Prevent going below 1
  }
 },
      increase(product){
    product.quantity+=1
   },

    formatCurrency(value) {
      return new Intl.NumberFormat('en-NG', {
        style: 'currency',
        currency: 'NGN',
      }).format(value);
    },
 
 },
  computed: {
    cartTotal() {
      return this.products.reduce((total, item) => {
        return total + item.price * item.quantity;
      }, 0);
    },
  },
}
</script>