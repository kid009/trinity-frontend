<template>
  <div class="list-wrapper bg-grey-2">
    <div class="container box">
      <div class="row">
        <div class="col-xs-12 col-sm-8 col-md-9">
          <h3 class="text-layout-topic">นวัตกรรมการท่องเที่ยวโดยชุมชน</h3>
          <div class="grid-content clearfix">
            <div
              v-for="items in innovation"
              v-bind:key="items"
              class="list-item-entry"
            >
              <div class="hotel-item style-3 bg-white">
                <div class="table-view">
                  <div class="radius-top cell-view">
                    <img
                      class="img-product"
                      :src="items.researcher_innovation_image_cover_link"
                      alt=""
                    />
                  </div>
                  <div class="title hotel-middle clearfix cell-view"></div>
                  <div class="title hotel-right clearfix cell-view">
                    <div class="hotel-person color-dark-2">
                      <h4>
                        <b class="text-name">{{
                          items.researcher_innovation_name
                        }}</b>
                      </h4>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <h3 class="text-layout-topic">เทคโนโลยี</h3>
          <div class="grid-content clearfix">
            <div
              v-for="items in technology"
              v-bind:key="items"
              class="list-item-entry"
            >
              <div class="hotel-item style-3 bg-white">
                <div class="table-view">
                  <div class="radius-top cell-view">
                    <img
                      class="img-product"
                      :src="items.researcher_technology_image_cover_link"
                      alt=""
                    />
                  </div>
                  <div class="title hotel-middle clearfix cell-view"></div>
                  <div class="title hotel-right clearfix cell-view">
                    <div class="hotel-person color-dark-2">
                      <h4>
                        <b class="text-name">{{
                          items.researcher_technology_name
                        }}</b>
                      </h4>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <h3 class="text-layout-topic">นวัตกรรมผลิตภัณฑ์ท่องเที่ยว</h3>
          <div class="grid-content clearfix">
            <div
              v-for="items in researcherTourismProduct"
              v-bind:key="items"
              class="list-item-entry"
            >
              <div class="hotel-item style-3 bg-white">
                <div class="table-view">
                  <div class="radius-top cell-view">
                    <img
                      class="img-product"
                      :src="items.researcher_tourism_product_image_cover_link"
                      alt=""
                    />
                  </div>
                  <div class="title hotel-middle clearfix cell-view"></div>
                  <div class="title hotel-right clearfix cell-view">
                    <div class="hotel-person color-dark-2">
                      <h4>
                        <b class="text-name">{{
                          items.researcher_tourism_product_name
                        }}</b>
                      </h4>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="grid-content clearfix">
            <div
              v-for="items in businessproductTourism"
              v-bind:key="items"
              class="list-item-entry"
            >
              <div class="hotel-item style-3 bg-white">
                <div class="table-view">
                  <div class="radius-top cell-view">
                    <img
                      class="img-product"
                      :src="items.bussiness_product_tourism_image_cover_link"
                      alt=""
                    />
                  </div>
                  <div class="title hotel-middle clearfix cell-view"></div>
                  <div class="title hotel-right clearfix cell-view">
                    <div class="hotel-person color-dark-2">
                      <h4>
                        <b class="text-name">{{
                          items.bussiness_product_tourism_name
                        }}</b>
                      </h4>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <h3 class="text-layout-topic">ผลิตภัณฑ์ธุรกิจ</h3>
          <div class="grid-content clearfix">
            <div
              v-for="items in bussinessProduct"
              v-bind:key="items"
              class="list-item-entry"
            >
              <div class="hotel-item style-3 bg-white">
                <div class="table-view">
                  <div class="radius-top cell-view">
                    <img
                      class="img-product"
                      :src="items.bussiness_product_image_cover_link"
                      alt=""
                    />
                  </div>
                  <div class="title hotel-middle clearfix cell-view"></div>
                  <div class="title hotel-right clearfix cell-view">
                    <div class="hotel-person color-dark-2">
                      <h4>
                        <b class="text-name">{{
                          items.bussiness_product_name
                        }}</b>
                      </h4>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <h3 class="text-layout-topic">ผลิตภัณฑ์ชุมชน</h3>
          <div class="grid-content clearfix">
            <div
              v-for="items in businessProductCommunity"
              v-bind:key="items"
              class="list-item-entry"
            >
              <div class="hotel-item style-3 bg-white">
                <div class="table-view">
                  <div class="radius-top cell-view">
                    <img
                      class="img-product"
                      :src="items.bussiness_product_community_image_cover_link"
                      alt=""
                    />
                  </div>
                  <div class="title hotel-middle clearfix cell-view"></div>
                  <div class="title hotel-right clearfix cell-view">
                    <div class="hotel-person color-dark-2">
                      <h4>
                        <b class="text-name">{{
                          items.bussiness_product_community_name
                        }}</b>
                      </h4>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="grid-content clearfix">
            <div
              v-for="items in product"
              v-bind:key="items"
              class="list-item-entry"
            >
              <div class="hotel-item style-3 bg-white">
                <div class="table-view">
                  <div class="radius-top cell-view">
                    <img
                      class="img-product"
                      :src="items.product_image_cover_link"
                      alt=""
                    />
                  </div>
                  <div class="title hotel-middle clearfix cell-view"></div>
                  <div class="title hotel-right clearfix cell-view">
                    <div class="hotel-person color-dark-2">
                      <h4>
                        <b class="text-name">{{ items.product_name }}</b>
                      </h4>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { onMounted, ref } from "vue";
import axios from "axios";
import { BASE_API_URL } from "../../../constants";

export default {
  name: "ProductTouristGridAll",

  setup() {
    let page = window.location.search;
    page = page.split("=");
    page = page[1];
    page = page.substring(0, page.length - 6);

    let group = window.location.search;
    group = group.split("=");
    group = group[2];
    group = group.substring(0, group.length - 3);

    let id = window.location.search;
    id = id.split("=");
    id = id[3];

    const all = ref([]);
    const product = ref([]);
    const technology = ref([]);
    const innovation = ref([]);
    const researcherTourismProduct = ref([]);
    const bussinessProduct = ref([]);
    const businessproductTourism = ref([]);
    const businessProductCommunity = ref([]);

    const getData = async () => {
      const response = await axios.get(
        `${BASE_API_URL}/innovation-product/ProductAll?page=` +
          page +
          "&group=" +
          group +
          "&id=" +
          id
      );
      all.value = response.data;
      product.value = response.data.data_product;
      technology.value = response.data.data_researcher_technology;
      innovation.value = response.data.data_researcher_innovation;
      researcherTourismProduct.value =
        response.data.data_researcher_tourism_product;
      bussinessProduct.value = response.data.data_bussiness_product;
      businessproductTourism.value =
        response.data.data_bussiness_product_tourism;
      businessProductCommunity.value =
        response.data.data_bussiness_product_community;
    };

    const on_click = (page, group, id) => {
      window.location =
        "producttouristdetailpage?page=" +
        page +
        "&group=" +
        group +
        "&id=" +
        id;
    };

    onMounted(() => {
      getData();
    });

    return {
      all,
      product,
      technology,
      innovation,
      researcherTourismProduct,
      bussinessProduct,
      businessproductTourism,
      businessProductCommunity,
      on_click,
      id,
      page,
      group,
    };
  },
};
</script>

<style scoped>
.img-product {
  width: auto;
  max-width: 250px;
  height: 200px;
  overflow: hidden;
  display: block;
  margin: auto;
}
.text-name {
  letter-spacing: 0;
}
.text-layout-topic {
  letter-spacing: 0;
  padding: 20px;
}
</style>
