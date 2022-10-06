<template>
  <div class="main-wraper">
    <div class="container">
      <div class="related-block">
        <h3 id="page-detail" class="related-title">นวัฒกรรมอื่นๆ</h3>
        <div class="row">
          <div
            class="item hotels gal-item style-3 col-xs-12 col-sm-4"
            v-for="items in innovation.slice(0, 3)"
            v-bind:key="items.researcher_innovation_id"
          >
            <a
              class="black-hover"
              :href="
                'researcherinnovationdetail?page=1&group=' +
                items.researcher_innovation_group_id +
                'id=' +
                items.researcher_innovation_id
              "
            >
              <div class="gal-item-icon border-more-product">
                <img
                  id="img-more-product"
                  :src="items.researcher_innovation_image_cover_link"
                  alt=""
                />
                <div class="tour-layer delay-1"></div>
                <div class="vertical-align">
                  <button
                    class="c-button small bg-white delay-2"
                    type="button"
                    @click="
                      on_click(
                        1,
                        items.researcher_innovation_group_id,
                        items.researcher_innovation_id,
                        'researcherinnovationdetail'
                      )
                    "
                  >
                    เพิ่มเติม
                  </button>
                </div>
              </div>
              <div class="gal-item-desc delay-1">
                <h4 id="page-detail">{{ items.researcher_innovation_name }}</h4>
              </div>
            </a>
          </div>

          <div
            class="item hotels gal-item style-3 col-xs-12 col-sm-4"
            v-for="items in TourismProduct.slice(0, 3)"
            v-bind:key="items.researcher_tourism_product_id"
          >
            <a
              class="black-hover"
              :href="
                'researcherinnovationdetail?page=2&group=' +
                items.researcher_tourism_product_group_id +
                'id=' +
                items.researcher_tourism_product_id
              "
            >
              <div class="gal-item-icon border-more-product">
                <img
                  id="img-more-product"
                  :src="items.researcher_tourism_product_image_cover"
                  alt=""
                />
                <div class="tour-layer delay-1"></div>
                <div class="vertical-align">
                  <button
                    class="c-button small bg-white delay-2"
                    type="button"
                    @click="
                      on_click(
                        2,
                        item.researcher_tourism_product_group_id,
                        item.researcher_tourism_product_id,
                        'researcherinnovationdetail'
                      )
                    "
                  >
                    เพิ่มเติม
                  </button>
                </div>
              </div>
              <div class="gal-item-desc delay-1">
                <h4 id="page-detail">
                  {{ items.researcher_tourism_product_name }}
                </h4>
              </div>
            </a>
          </div>

          <div
            class="item hotels gal-item style-3 col-xs-12 col-sm-4"
            v-for="items in Technology.slice(0, 3)"
            v-bind:key="items.researcher_technology_id"
          >
            <a
              class="black-hover"
              :href="
                'researcherinnovationdetail?page=3&group=' +
                items.researcher_technology_group_id +
                'id=' +
                items.researcher_technology_id
              "
            >
              <div class="gal-item-icon border-more-product">
                <img
                  id="img-more-product"
                  :src="items.researcher_technology_image_cover_link"
                  alt=""
                />
                <div class="tour-layer delay-1"></div>
                <div class="vertical-align">
                  <span class="c-button small bg-white delay-2"
                    ><span>เพิ่มเติม</span></span
                  >
                </div>
              </div>
              <div class="gal-item-desc delay-1">
                <h4 id="page-detail">{{ items.researcher_technology_name }}</h4>
              </div>
            </a>
          </div>

          <div
            class="item hotels gal-item style-3 col-xs-12 col-sm-4"
            v-for="items in ProductCommunity.slice(0, 3)"
            v-bind:key="items.bussiness_product_community_id"
          >
            <a
              class="black-hover"
              :href="
                'researcherinnovationdetail?page=4&group=' +
                items.bussiness_product_community_group_id +
                'id=' +
                items.bussiness_product_community_id
              "
            >
              <div class="gal-item-icon border-more-product">
                <img
                  id="img-more-product"
                  :src="items.bussiness_product_community_image_cover"
                  alt=""
                />
                <div class="tour-layer delay-1"></div>
                <div class="vertical-align">
                  <span class="c-button small bg-white delay-2"
                    ><span>เพิ่มเติม</span></span
                  >
                </div>
              </div>
              <div class="gal-item-desc delay-1">
                <h4 id="page-detail">
                  {{ items.bussiness_product_community_name }}
                </h4>
              </div>
            </a>
          </div>

          <div
            class="item hotels gal-item style-3 col-xs-12 col-sm-4"
            v-for="items in businessProduct.slice(0, 3)"
            v-bind:key="items.bussiness_product_id"
          >
            <a
              class="black-hover"
              :href="
                'researcherinnovationdetail?page=5&group=' +
                items.bussiness_product_group_id +
                'id=' +
                items.bussiness_product_id
              "
            >
              <div class="gal-item-icon border-more-product">
                <img
                  id="img-more-product"
                  :src="items.bussiness_product_image_cover"
                  alt=""
                />
                <div class="tour-layer delay-1"></div>
                <div class="vertical-align">
                  <span class="c-button small bg-white delay-2"
                    ><span>เพิ่มเติม</span></span
                  >
                </div>
              </div>
              <div class="gal-item-desc delay-1">
                <h4 id="page-detail">{{ items.bussiness_product_name }}</h4>
              </div>
            </a>
          </div>

          <div
            class="item hotels gal-item style-3 col-xs-12 col-sm-4"
            v-for="items in Product.slice(0, 3)"
            v-bind:key="items.product_id"
          >
            <a
              class="black-hover"
              :href="
                'researcherinnovationdetail?page=6&group=' +
                items.product_group_id +
                'id=' +
                items.product_id
              "
            >
              <div class="gal-item-icon border-more-product">
                <img
                  id="img-more-product"
                  :src="items.product_image_cover"
                  alt=""
                />
                <div class="tour-layer delay-1"></div>
                <div class="vertical-align">
                  <span class="c-button small bg-white delay-2"
                    ><span>เพิ่มเติม</span></span
                  >
                </div>
              </div>
              <div class="gal-item-desc delay-1">
                <h4 id="page-detail">{{ items.product_name }}</h4>
              </div>
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { onMounted, ref } from "vue";
import axios from "axios";
import { BASE_API_URL } from "../../../../constants";
export default {
  name: "Other",

  setup() {
    const TourismProduct = ref([]);
    const innovation = ref([]);
    const Technology = ref([]);
    const ProductCommunity = ref([]);
    const businessProduct = ref([]);
    const Product = ref([]);

    let page = window.location.search.substr(6, 1);

    let group = window.location.search;
    group = group.split("=");
    group = group[2];
    group = group.substring(0, group.length - 3);

    let id = window.location.search;
    id = id.split("=");
    id = id[3];

    const getData = async () => {
      if (page == 1) {
        const response = await axios.get(
          `${BASE_API_URL}/innovation-product/researcherInnovation`
        );
        innovation.value = response.data.data.data;
        console.log(response.data.data.data);
      } else if (page == 2) {
        const responses = await axios.get(
          `${BASE_API_URL}/innovation-product/researcherTourismProduct`
        );
        TourismProduct.value = responses.data.data.data;
        console.log(responses.data.data.data);
      } else if (page == 3) {
        const responsess = await axios.get(
          `${BASE_API_URL}/innovation-product/researcherTechnology`
        );
        Technology.value = responsess.data.data.data;
        console.log(responsess.data.data.data);
      } else if (page == 4) {
        const responsesss = await axios.get(
          `${BASE_API_URL}/innovation-product/businessProductCommunity`
        );
        ProductCommunity.value = responsesss.data.data.data;
        console.log(responsesss.data.data.data);
      } else if (page == 5) {
        const responsessss = await axios.get(
          `${BASE_API_URL}/innovation-product/businessProduct`
        );
        businessProduct.value = responsessss.data.data.data;
        console.log(responsessss.data.data.data);
      } else if (page == 6) {
        const responsesssss = await axios.get(
          `${BASE_API_URL}/innovation-product/product`
        );
        Product.value = responsesssss.data.data.data;
        console.log(responsesssss.data.data.data);
      }
    };

    const on_click = (page, group, id, name) => {
      window.location =
        name + "?page=" + page + "&group=" + group + "&id=" + id;
    };

    onMounted(() => {
      getData();
    });

    return {
      innovation,
      TourismProduct,
      Technology,
      ProductCommunity,
      businessProduct,
      Product,
      id,
      page,
      group,
      on_click,
    };
  },
};
</script>

<style>
#img-more-product-bussiness {
  width: auto;
  max-width: 230px;
  height: 215px;
  overflow: hidden;
  display: block;
  margin: auto;
}

.border-more-product {
  border: 5px;
  padding: 5px;
  width: 100%;
  height: 250px;
  background-color: #f5f5f5;
}
#img-more-product {
  width: 100% !important;
  max-width: 100% !important;
  height: 100% !important;
  overflow: hidden !important;
  display: block;
  margin: auto;
  object-fit: cover;
}
.gal-item .black-hover {
  display: block;
  position: relative;
  box-shadow: 0px 0px 5px #00000059;
}
</style>
