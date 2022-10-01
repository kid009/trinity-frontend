<template>
  <div class="hotel-itemss">
    <div class="col-xs-12 col-md-12">
      <div class="isotope-container row row10">
        <div
          class="item gal-item grid-sizer col10 col-mob-12 col-xs-6 col-sm-4"
          v-for="item in businessProductCommunity"
          v-bind:key="item"
        >
          <a
            :href="
              'producttouristdetailpage?page=bussiness_product_community&group=' +
              item.bussiness_product_community_group_id +
              '&id=' +
              item.bussiness_product_community_id
            "
          >
            <div class="block_grids">
              <div
                class="img-all bg-bg-chrome"
                v-lazy="item.bussiness_product_community_image_cover_link"
              >
                <div class="img-all color-bg-img"></div>
              </div>
              <div class="inner_position_bottom_bottom">
                <h3 class="">
                  {{ item.bussiness_product_community_name.substring(0, 50) }}
                </h3>
              </div>
            </div>
          </a>
        </div>
      </div>

      <div
        class="item gal-item grid-sizer col10 col-mob-12 col-xs-6 col-sm-4"
        v-for="item in product"
        v-bind:key="item"
      >
        <a
          :href="
            'producttouristdetailpage?page=product&group=' +
            item.product_group_id +
            '&id=' +
            item.product_id
          "
        >
          <div class="block_grids">
            <div
              class="img-all bg-bg-chrome"
              v-lazy="item.product_image_cover_link"
            >
              <div class="img-all color-bg-img"></div>
            </div>
            <div class="inner_position_bottom_bottom">
              <h3 class="">
                {{ item.product_name.substring(0, 50) }}
              </h3>
            </div>
          </div>
        </a>
      </div>
    </div>
  </div>
</template>

<script>
import { onMounted, ref } from "vue";
import axios from "axios";
import { BASE_API_URL } from "../../../../../constants";
export default {
  name: "TabProduct",
  setup() {
    let page = window.location.search.substr(6, 1);

    let group = window.location.search;
    group = group.split("=");
    group = group[2];
    group = group.substring(0, group.length - 3);

    let id = window.location.search;
    id = id.split("=");
    id = id[3];

    const all = ref([]);
    const product = ref([]);

    const businessProductCommunity = ref([]);

    const getData = async () => {
      const response = await axios.get(
        `${BASE_API_URL}/innovation-product/ProductAll?page=1&group=0&id=0`
      );
      all.value = response.data;
      product.value = response.data.data_product;

      businessProductCommunity.value =
        response.data.data_bussiness_product_community;
    };

    onMounted(() => {
      getData();
    });

    return {
      id,
      page,
      group,
      all,
      product,
      businessProductCommunity,
    };
  },
};
</script>

<style scoped>
.hotel-itemss {
  position: relative;
  width: 100%;
  float: left;
  display: inline-block;
  background: rgba(237, 237, 237, 0);
  box-shadow: 4px 3px 5px 0px rgb(0 0 0 / 3%);
  border-radius: 15px;
  padding-right: 5px;
  padding-left: 5px;
  padding-top: 15px;
  padding-bottom: 10px;
}
.block_grids:hover {
  transform: scale(1.1);
}
.col-md-3 {
  padding-right: 5px;
  padding-left: 5px;
}
.vl {
  border-right: 2px solid rgb(255, 255, 255);
  height: 20px;
  margin-top: -25px;
}
nav {
  float: right;
}
.nav {
  text-align: center;
  padding: 5px 0px 5px;
}
.text_color {
  color: rgba(8, 114, 201, 0.999);
}
.dropmenu {
  border-radius: 10px;

  z-index: 10000;
}

.link-to {
  color: rgb(255, 255, 255);
  padding-right: 20px;
  padding-left: 20px;
  padding-top: 10px;
  padding-bottom: 5px;
  text-align: center;
}
.color-bg-img {
  background: rgba(255, 0, 0, 0);
  background: -webkit-linear-gradient(
    rgba(255, 0, 0, 0),
    rgba(255, 0, 0, 0),
    #000000
  );
  background: -o-linear-gradient(
    rgba(255, 0, 0, 0),
    rgba(255, 0, 0, 0),
    #000000
  );
  background: -moz-linear-gradient(
    rgba(255, 0, 0, 0),
    rgba(255, 0, 0, 0),
    #000000
  );
  background: linear-gradient(rgba(255, 0, 0, 0), rgba(255, 0, 0, 0), #000000);
}
.community {
  /* position: absolute; */
  /* background: #ebe5ca; */
  background: rgba(255, 0, 0, 0);
  max-width: 120rem;
  width: 100%;
  height: 30rem;
  border-radius: 20px;
  /* box-shadow: 2px 1px 5px #222222; */
  padding: 0px 15px 0px 15px;
}

.radius-top-community {
  width: 100%;
  height: 30rem;
  object-fit: cover;
  display: block;
  border-radius: 20px;
  /* box-shadow: 2px 1px 5px #222222; */
}
.img-all-fr {
  width: 100%;
  height: 23rem;
  object-fit: cover;
  display: block;
  border-radius: 20px;
}
.img-all {
  width: 100%;
  height: 11rem;
  object-fit: cover;
  display: block;
  border-radius: 0px;
}
.col10 {
  padding-right: 20px;
  padding-left: 20px;
  padding-top: 15px;
  padding-bottom: 5px;
}
.gal-item.col10 {
  margin-bottom: 5px;
}
h2 {
  font-size: 30px;
  line-height: 2.363rem;
  font-weight: 500;
  text-transform: none;
  letter-spacing: 1px;
  color: white;
  text-shadow: 2px 2px 3px #000000;
}
h3 {
  /* position: relative; */
  font-size: 1.1rem;
  line-height: 1.663rem;
  font-weight: 500;
  text-transform: capitalize;
  letter-spacing: 0;
  color: white;
}
h4 {
  /* position: relative; */
  font-size: 16px;
  line-height: 1.663rem;
  font-weight: 500;
  text-transform: capitalize;
  letter-spacing: 0;
  /* color: white; */
}
.inner_position_top_bottom {
  position: relative;
  display: block;
  text-align: center;
  height: 50px;
  width: 100%;
  bottom: 210px;
  z-index: 999;
}

.inner_position_bottom_bottom {
  position: absolute;
  display: block;
  text-align: center;
  height: 50px;
  max-width: 310px;
  width: 100%;
  /* left: 10px; */
  bottom: 10px;
  z-index: 999;
}
.hotel-items {
  border-radius: 20px;
  padding-right: 5px;
  padding-left: 5px;
  padding-top: 0px;
  padding-bottom: 5px;
  /* box-shadow: 2px 1px 5px #222222; */
  background: rgba(255, 255, 255, 0);
}
.hotel-item {
  border-radius: 20px;
  padding-right: 5px;
  padding-left: 5px;
  padding-top: 5px;
  padding-bottom: 5px;
  /* box-shadow: 2px 1px 5px #222222; */
  background: rgba(8, 114, 201, 0.999);
}
@media screen and (max-width: 600px) {
  .inner_position_bottom_bottom {
    position: absolute;
    display: block;
    text-align: center;
    height: 50px;
    max-width: 280px;
    width: 100%;
    /* left: 10px; */
    bottom: 10px;
    z-index: 999;
  }
  .hotel-item {
    border-radius: 20px;
    padding-right: 5px;
    padding-left: 5px;
    padding-top: 5px;
    padding-bottom: 5px;
    margin-top: 25px;
    /* box-shadow: 2px 1px 5px #222222; */
    background: rgba(8, 114, 201, 0.999);
  }
}
</style>
