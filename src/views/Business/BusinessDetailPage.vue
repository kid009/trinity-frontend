<template>
    <div class="BusinessDetailPage">
   <Banner/>
   <Detail/>
   <ImageCarousel/>
   <!--<Product/>-->
    </div>
</template>
<script>
import Banner from "../../components/Business/Banner.vue"
import Detail from "../../components/Business/Detail.vue"
//import Product from "../../components/Business/Product.vue"
import ImageCarousel from "../../components/Business/ImageCarousel.vue"
export default {
  name: "BusinessDetailPage",

  components: {
    Banner,
    Detail,
    ImageCarousel,
    //Product,
  },
};
</script>
