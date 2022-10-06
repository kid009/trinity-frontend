<template>
  <div class="container">
    <div class="header-text">
      <h2 class="letter-layout">ผลิตภัณฑ์ธุรกิจ</h2>
    </div>
    <main>
      <article>
        <div
          v-for="items in product"
          v-bind:key="items.bussiness_product_community_id"
        >
          <div v-show="items.bussiness_product_community_id == 2">
            <a
              class="black-hover"
              :href="
                'productDetail?page=4&group=' +
                items.bussiness_product_community_group_id +
                '&id=' +
                items.bussiness_product_community_id
              "
            >
              <img />
              <vue-responsive-image
                :image-url="items.bussiness_product_community_image_cover_link"
                :image-ratio="16 / 9"
                :image-class="'img-full img-responsive img-sizes12'"
              ></vue-responsive-image>
              <h3 class="letter-layout">
                {{ items.bussiness_product_community_name }}
              </h3>
            </a>
          </div>
        </div>
      </article>
      <article>
        <div
          v-for="items in product"
          v-bind:key="items.bussiness_product_community_id"
        >
          <div v-show="items.bussiness_product_community_id == 4">
            <a
              class="black-hover"
              :href="
                'productDetail?page=4&group=' +
                items.bussiness_product_community_group_id +
                '&id=' +
                items.bussiness_product_community_id
              "
            >
              <img />
              <vue-responsive-image
                :image-url="items.bussiness_product_community_image_cover_link"
                :image-ratio="16 / 9"
                :image-class="'img-full img-responsive img-sizes12'"
              ></vue-responsive-image>
              <h3 class="letter-layout">
                {{ items.bussiness_product_community_name }}
              </h3>
            </a>
          </div>
        </div>
      </article>
    </main>
  </div>
</template>

<script>
import { onMounted, ref } from "vue";
import axios from "axios";
import { BASE_API_URL } from "../../../constants";
import VueResponsiveImage from "vue-responsive-image";

export default {
  name: "BussinessProduct",
  components: {
    VueResponsiveImage,
  },

  setup() {
    const product = ref([]);

    const getData = async () => {
      const response = await axios.get(
        `${BASE_API_URL}/businesstourism/productcommunity`
      );

      product.value = response.data.data;

      //console.log(response.data.data);
    };

    onMounted(() => {
      getData();
    });

    return { product };
  },
};
</script>
<style>
.img-sizes12 {
  height: 330px;
  width: 560px;
  display: block;
  margin: auto;
}
</style>

<style scoped>
.letter-layout {
  letter-spacing: 0;
}
.header-text {
  padding-bottom: 50px;
  padding-top: 110px;
  text-align: center;
}
main {
  max-width: 1200px;
  margin: 30px auto;
  padding: 0px;
  width: 100%;
  display: grid;
  /* Define Auto Row size */
  grid-auto-rows: 376px;
  /*Define our columns */
  grid-template-columns: repeat(auto-fill, minmax(49%, 1fr));
  grid-gap: 1em;
  margin-bottom: 50px;
  border-radius: 10px;
}

article {
  border-radius: 10px;
  box-shadow: 1px 1px 5px gray;
}
article img {
  max-width: 100%;
  border-radius: 10px;
}
h3 {
  margin-bottom: 50px;
  margin-top: -70px;
  text-align: center;
  color: wheat;
}
@media only screen and (max-width: 1200px) {
  main {
    grid-auto-rows: 307px;
  }
}
@media only screen and (max-width: 1000px) {
  main {
    grid-auto-rows: 470px;
  }
}
@media only screen and (max-width: 600px) {
  main {
    grid-auto-rows: auto;
  }
}
</style>
