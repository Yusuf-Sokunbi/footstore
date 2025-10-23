<template>
    <div>
        <h1 class="text-2xl text-blue-300 text-center">List of {{ name }}</h1>
         <div class="grid grid-cols-1 md:grid-cols-3">
        <div class="items-center w-[95%] bg-gray-100 mx-[8px] mt-3 place-items-center pt-3 rounded-lg gap-1"
           v-for="product in products" :key="product.id">
          <img :src="product.imageName" alt="" class="max-w-[200px] h-[200px] flex-1 ">
          <h3 class="text-lg font-semibold ">{{ product.name }}</h3>
          <p class="product-price">{{ product.price }}</p>
          <router-link 
            :to="'/products/' + product.id">
            <button >View details</button>
          </router-link>
       </div>
    </div>
    </div>
</template>

<script>
export default{
    name:'MainPage',
   props:['products','name']
}
</script>