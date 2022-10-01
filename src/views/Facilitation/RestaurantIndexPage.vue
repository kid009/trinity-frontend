<template>
<div>
    <VdoBanner />
        <div class="container-fluid">

            <RestaurantRegional />
            <RestaurantRecommend />
            <RestaurantPopular />
        </div>

</div>
    
  
</template>

<script>
import VdoBanner from "../../components/Facilitation/Restaurant/VdoBanner.vue"
import RestaurantRecommend from "../../components/Facilitation/Restaurant/RestaurantRecommend.vue"
import RestaurantPopular from "../../components/Facilitation/Restaurant/RestaurantPopular.vue"
import RestaurantRegional from "../../components/Facilitation/Restaurant/RestaurantRegional.vue"

export default {
    name: "RestaurantIndexPage",
    components: {
    VdoBanner,
    RestaurantRecommend,
    RestaurantPopular,
    RestaurantRegional,
  },

}
</script>

<style>

</style>