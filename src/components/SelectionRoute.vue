<template>
    <div class="flex gap-2 ml-[20px]">
       <div>
        <select class="md:w-[100px] p-2  border-[#4CAF50] text-[#333] md:text-md"
        id="" v-model="selectedCategory" @change="navigateToSelectdRoute">
               <option value="" disabled>Category</option>
               <option value="shoe">Shoe</option>
               <option value="/sandal">Sandal</option>
               <option value="/palm">Palm</option>
               <option value="/halfshoe">Halfshoe</option> 
       </select>
     </div>
      <div>
        <select class="md:w-[100px] p-2  border-[#4CAF50]  text-[#333] md:text-md"
        id="" v-model="selectedColor" @change="navigateToSelectdRoute">
               <option value="" disabled>Color</option>
               <option value="/brown">Brown</option>
               <option value="/black">Black</option>
               <option value="/white">White</option>
               <option value="/other">Other</option> 
       </select>
     </div>
      <div>
        <select class="md:w-[100px] p-2  border-[#4CAF50]  text-[#333] md:text-md"
        id="" v-model="selectedPrize" @change="navigateToSelectdRoute">
               <option value="" disabled>Price</option>
               <option value="">$0-$5</option>
               <option value="">$6-10$</option>
               <option value="">$11-$20</option>
               <option value="">$21-$100</option> 
       </select>
     </div>
      <div>
        <select class="md:w-[100px] p-2  border-[#4CAF50]  text-[#333] md:text-md"
        id="" v-model="selectedSize" @change="navigateToSelectdRoute">
               <option value="" disabled>Size</option>
               <option value="">40</option>
               <option value="">41</option>
               <option value="">42</option>
               <option value="">43</option> 
               <option value="">44</option> 
               <option value="">45</option> 
       </select>
     </div>
    </div>
</template>

<script>
export default{
 data(){
     return{
      searchEntry:'',
      filteredItems:[],
      
      loadPage:true,
      selectedCategory:'',
      selectedColor:'',
      selectedPrize:'',
      selectedSize:'',
      
      
      
     }
  },
  methods:{
    navigateToSelectdRoute(){
            if(this.selectedCategory){
                this.$router.push(this.selectedCategory)
            }
            if(this.selectedColor){
                this.$router.push(this.selectedColor)
            }
            if(this.selectedPrize){
                this.$router.push(this.selectedPrize)
            }
            if(this.selectedSize){
                this.$router.push(this.selectedSize)
            }
        }
  }
  }
</script>
