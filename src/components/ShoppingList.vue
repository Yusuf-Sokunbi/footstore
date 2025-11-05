<template>
    <div class="relative">
        <hr class="border-t-[0.1px] border-gray-400 my-2 w-[100%] mx-"/>
    <div class="flex  gap-2">
         <div class="flex ml-2  w-[55%] md:w-[65%] border-black border-[2px] border-solid rounded-md">
        <div>
           <div class="flex md:justify-between md:items-center  md:py-4 "
        v-for="product in products" 
        :key="product.id">
          <div class="md:flex md:items-center md:gap-8">
              <img class=" w-[100px] h-[100px] md:w-[150px] md:h-[150px] xs:flex xs:items-center"
            :src="product.imageName" alt="">
            <div class="">
                <h2 class="font-bold md:text-xl px-2">{{ product.name }}</h2>
               <div class="flex md:mt-2">
                <!-- <button @click="decrease(product)">-</button> -->
                <input type="number" v-model.number="product.quantity" class="ml-2"  @change="validateQuantity(product)" size="5" > 
                 <!-- <button @click="increase(product)">+</button> -->
               </div>
               <p class="px-2">size:{{ product.size }}</p>
               <p class="md:mt-2 px-2">{{ formatCurrency(product.price)}} </p>
            </div>
          </div>
            <img src="@/FOOTIMAGE/delete.jpg" alt="" @click="deleteItem(product.id)"  class="w-[10%] h-[10%]"/>
        </div>
        </div>
         
       </div>
         <div class="border-black border-[2px] border-solid rounded-md md:fixed top-32 right-64 mb-40 w-[40%] md:w-[20%] py-3" >
          <h1 class="text-xl font-bold py-3 mx-4">Summary</h1>
          <hr class="border-t-[0.1px] border-black py-2 md:w-[85%] mx-auto"/>
        <div class="md:flex justify-between mx-3">
          <h3>Total Cost:</h3>
          <h3>{{ formatCurrency(cartTotal) }}</h3>
        </div>
         <p class="ml-3">{{totalQty > 1? "items":"item"}}:{{ totalQty}}</p>
        <div class="flex justify-center">
           <button class="text-white bg-black md:w-[80%] py-3 mt-6 md:font-bold xs:text-xs px-4">Checkout</button>
        </div>
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

//     decrease(product) {
//   if (product.quantity > 1) {
//     product.quantity -= 1;
//   } else {
//     product.quantity = 1; // Prevent going below 1
//   }
//  },
  //     increase(product){
  //   product.quantity+=1
  //  },

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
     totalQty() {
      return this.products.reduce((total, item) => {
        return total +  item.quantity;
      }, 0);
    },
  },
}
</script>