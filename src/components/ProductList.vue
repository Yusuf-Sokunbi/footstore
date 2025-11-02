<template>
    <div>
         <!-- <h1 class="text-2xl text-blue-300 text-center">List of {{ name }}</h1> -->

         <div class="grid grid-cols-1 md:grid-cols-3">
          
        <div class="items-center w-[95%] bg-gray-100 mx-[8px] mt-3 place-items-center pt-3 rounded-lg gap-1"
           v-for="product in products" :key="product.id">
           <router-link 
            :to="'/products/' + product.id">
          <img :src="product.imageName" alt="" class="w-[200px] h-[200px] flex-1 mx-auto">
          <h3 class="text-lg font-semibold text-center">{{ product.name }}</h3>
          <p class="product-price text-center">{{formatCurrency(product.price) }}</p>
          <!-- <router-link 
            :to="'/products/' + product.id"> -->
            <button class="bg-black text-white text-lg font-semibold w-[90%] my-3 py-2 rounded-lg ml-8" >View details</button>
          </router-link>
       </div>
    </div>
    </div>
</template>

<script>
export default{
    name:'MainPage',
   props:['products','name'],
   methods:{
      formatCurrency(value) {
      return new Intl.NumberFormat('en-NG', {
        style: 'currency',
        currency: 'NGN',
      }).format(value);
    },
  },
   
}
</script>