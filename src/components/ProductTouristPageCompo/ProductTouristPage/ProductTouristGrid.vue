<template>
  <div class="col-xs-12 col-sm-8 col-md-9">
    <div class="grid-content clearfix">
      <!--------------------------------- innovationobject -------------------------------------------------->
      <div class="container box">
        <div class="row scrollbar" id="style-1">
          <div v-if="group == 0">
            <h3 class="letter-layout">นวัตกรรมสิ่งประดิษฐ์</h3>
          </div>
          <div>
            <div
              class="list-item-entry"
              v-for="items in innovationobject"
              v-bind:key="items.researcher_innovation_id"
            >
              <div class="hotel-item style-10 bg-white">
                <div class="table-view">
                  <a
                    @click="
                      on_click(
                        1,
                        2,
                        items.researcher_innovation_id,
                        'producttouristdetailpage'
                      )
                    "
                  >
                    <div class="radius-top">
                      <img
                        id="img-travel"
                        :src="items.researcher_innovation_image_cover_link"
                        alt=""
                      />
                    </div>
                    <div class="title">
                      <h4>{{ items.researcher_innovation_name }}</h4>
                    </div>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!--------------------------------- innovationobject -------------------------------------------------->

      <!----------------------- productCommunity ------------------------------------------------------------->
      <div class="container box">
        <div class="row scrollbar" id="style-1">
          <div v-if="group == 0">
            <h3 class="letter-layout">สินค้าในชุมชน</h3>
          </div>
          <div>
            <div
              class="list-item-entry"
              v-for="items in productCommunity"
              v-bind:key="items.product_id"
            >
              <div class="hotel-item style-10 bg-white">
                <div class="table-view">
                  <a
                    @click="
                      on_click(
                        1,
                        2,
                        items.product_id,
                        'producttouristdetailpage'
                      )
                    "
                  >
                    <div class="radius-top">
                      <img
                        id="img-travel"
                        :src="items.product_image_cover_link"
                        alt=""
                      />
                    </div>
                    <div class="title">
                      <h4>{{ items.product_name }}</h4>
                    </div>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!--------------------------------- productCommunity -------------------------------------------------->

      <!----------------------- technology ------------------------------------------------------------->
      <div class="container box">
        <div class="row scrollbar" id="style-1">
          <div v-if="group == 0"><h3 class="letter-layout">เทคโนโลยี</h3></div>
          <div>
            <div
              class="list-item-entry"
              v-for="items in technology"
              v-bind:key="items.researcher_technology_id"
            >
              <div class="hotel-item style-10 bg-white">
                <div class="table-view">
                  <a
                    @click="
                      on_click(
                        1,
                        2,
                        items.researcher_technology_id,
                        'producttouristdetailpage'
                      )
                    "
                  >
                    <div class="radius-top">
                      <img
                        id="img-travel"
                        :src="items.researcher_technology_image_cover_link"
                        alt=""
                      />
                    </div>
                    <div class="title">
                      <h4>{{ items.researcher_technology_name }}</h4>
                    </div>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!--------------------------------- technology -------------------------------------------------->

      <!----------------------- researcherproduct ------------------------------------------------------------->
      <div class="container box">
        <div class="row scrollbar" id="style-1">
          <div v-if="group == 0">
            <h3 class="letter-layout">นวัตกรรมท่องเที่ยว</h3>
          </div>
          <div>
            <div
              class="list-item-entry"
              v-for="items in researcherproduct"
              v-bind:key="items.researcher_tourism_product_id"
            >
              <div class="hotel-item style-10 bg-white">
                <div class="table-view">
                  <a
                    @click="
                      on_click(
                        1,
                        2,
                        items.researcher_tourism_product_id,
                        'producttouristdetailpage'
                      )
                    "
                  >
                    <div class="radius-top">
                      <img
                        id="img-travel"
                        :src="items.researcher_tourism_product_image_cover_link"
                        alt=""
                      />
                    </div>
                    <div class="title">
                      <h4>{{ items.researcher_tourism_product_name }}</h4>
                    </div>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!--------------------------------- researcherproduct -------------------------------------------------->

      <!----------------------- bussinessservice ------------------------------------------------------------->

      <div class="container box">
        <div class="row scrollbar" id="style-1">
          <div v-if="group == 0"><h3 class="letter-layout">การบริการ</h3></div>
          <div>
            <div
              class="list-item-entry"
              v-for="items in bussinessservice"
              v-bind:key="items.bussiness_service_id"
            >
              <div class="hotel-item style-10 bg-white">
                <div class="table-view">
                  <a
                    @click="
                      on_click(
                        1,
                        2,
                        items.bussiness_service_id,
                        'producttouristdetailpage'
                      )
                    "
                  >
                    <div class="radius-top">
                      <img
                        id="img-travel"
                        :src="items.bussiness_service_image_cover_link"
                        alt=""
                      />
                    </div>
                    <div class="title">
                      <h4>{{ items.bussiness_service_name }}</h4>
                    </div>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!--------------------------------- bussinessservice -------------------------------------------------->

      <!----------------------- bussinessproduct ------------------------------------------------------------->

      <div class="container box">
        <div class="row scrollbar" id="style-1">
          <div v-if="group == 0">
            <h3 class="letter-layout">ผลิตภัณฑ์ธุรกิจ</h3>
          </div>
          <div>
            <div
              class="list-item-entry"
              v-for="items in bussinessproduct"
              v-bind:key="items.bussiness_product_id"
            >
              <div class="hotel-item style-10 bg-white">
                <div class="table-view">
                  <a
                    @click="
                      on_click(
                        1,
                        2,
                        items.bussiness_product_id,
                        'producttouristdetailpage'
                      )
                    "
                  >
                    <div class="radius-top">
                      <img
                        id="img-travel"
                        :src="items.bussiness_product_image_cover_link"
                        alt=""
                      />
                    </div>
                    <div class="title">
                      <h4>{{ items.bussiness_product_name }}</h4>
                    </div>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!--------------------------------- bussinessproduct -------------------------------------------------->

      <!----------------------- producttourism ------------------------------------------------------------->

      <div class="container box">
        <div class="row scrollbar" id="style-1">
          <div v-if="group == 0">
            <h3 class="letter-layout">ผลิตภัณฑ์ท่องเที่ยว</h3>
          </div>
          <div>
            <div
              class="list-item-entry"
              v-for="items in producttourism"
              v-bind:key="items.bussiness_product_tourism_id"
            >
              <div class="hotel-item style-10 bg-white">
                <div class="table-view">
                  <a
                    @click="
                      on_click(
                        1,
                        2,
                        items.bussiness_product_tourism_id,
                        'producttouristdetailpage'
                      )
                    "
                  >
                    <div class="radius-top">
                      <img
                        id="img-travel"
                        :src="items.bussiness_product_tourism_image_cover_link"
                        alt=""
                      />
                    </div>
                    <div class="title">
                      <h4>{{ items.bussiness_product_tourism_name }}</h4>
                    </div>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <!--------------------------------- producttourism -------------------------------------------------->

      <!----------------------- businessProductCommunity ------------------------------------------------------------->
      <div class="container box">
        <div class="row scrollbar" id="style-1">
          <div v-if="group == 0">
            <h3 class="letter-layout">ผลิตภัณฑ์ชุมชน</h3>
          </div>
          <div>
            <div
              class="list-item-entry"
              v-for="items in businessProductCommunity"
              v-bind:key="items.bussiness_product_community_id"
            >
              <div class="hotel-item style-10 bg-white">
                <div class="table-view">
                  <a
                    @click="
                      on_click(
                        1,
                        2,
                        items.bussiness_product_community_id,
                        'producttouristdetailpage'
                      )
                    "
                  >
                    <div class="radius-top">
                      <img
                        id="img-travel"
                        :src="
                          items.bussiness_product_community_image_cover_link
                        "
                        alt=""
                      />
                    </div>
                    <div class="title">
                      <h4>{{ items.bussiness_product_community_name }}</h4>
                    </div>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!--------------------------------- businessProductCommunity -------------------------------------------------->
    </div>
    <Pagination />
  </div>
</template>

<script>
import { onMounted, ref } from "vue";
import axios from "axios";
import { BASE_API_URL } from "../../../constants";

import Pagination from "./Pagination.vue";

export default {
  name: "ProductTouristGrid",
  components: {
    Pagination,
  },

  setup() {
    let page = window.location.search.substr(6, 1);

    let group = window.location.search;
    group = group.split("=");
    group = group[2];
    group = group.substring(0, group.length - 3);

    let id = window.location.search;
    id = id.split("=");
    id = id[3];

    const productCommunity = ref([]);
    const technology = ref([]);
    const innovationobject = ref([]);
    const researcherproduct = ref([]);
    const bussinessservice = ref([]);
    const bussinessproduct = ref([]);
    const producttourism = ref([]);
    const businessProductCommunity = ref([]);

    const getData = async () => {
      if (id == 0 && group == 0) {
        //////////////////////////////////
        const responseproductCommunity = await axios.get(
          `${BASE_API_URL}/innovation-product/productCommunity?page=` +
            page +
            "&group=0&id=0"
        );
        productCommunity.value = responseproductCommunity.data.data;
        //////////////////////////////////////

        //////////////////////////////////
        const response = await axios.get(
          `${BASE_API_URL}/innovation-product/researcherTechnologyAll?page=` +
            page +
            "&group=0&id=0"
        );
        technology.value = response.data.data;
        //////////////////////////////////////

        //////////////////////////////////
        const responseresearcherproduct = await axios.get(
          `${BASE_API_URL}/Researcher/researcherTourismProduct?page=` +
            page +
            "&group=0&id=0"
        );
        researcherproduct.value = responseresearcherproduct.data.data;
        //////////////////////////////////

        //////////////////////////////////
        const responseinnovationobject = await axios.get(
          `${BASE_API_URL}/innovation-product/researcherInnovationObject?page=` +
            page +
            "&group=0&id=0"
        );
        innovationobject.value = responseinnovationobject.data.data;
        //////////////////////////////////

        ///////////////////////////////////
        const responseservice = await axios.get(
          `${BASE_API_URL}/businesstourism/BusinessService?page=` +
            page +
            "&group=0&id=0"
        );
        bussinessservice.value = responseservice.data.data;
        ////////////////////////////////////////

        /////////////////////////////////////////
        const responsebussinessproduct = await axios.get(
          `${BASE_API_URL}/businesstourism/BusinessProduct?page=` +
            page +
            "&group=0&id=0"
        );
        bussinessproduct.value = responsebussinessproduct.data.data;
        ////////////////////////////////

        //////////////////////////////////////
        const responseproducttourism = await axios.get(
          `${BASE_API_URL}/businesstourism/BusinessProductTourism?page=` +
            page +
            "&group=0&id=0"
        );
        producttourism.value = responseproducttourism.data.data;
        //////////////////////////////////

        ////////////////////////////////////
        const responsebusinessProductCommunity = await axios.get(
          `${BASE_API_URL}/businesstourism/BusinessProductCommunity?page=` +
            page +
            "&group=0&id=0"
        );
        businessProductCommunity.value =
          responsebusinessProductCommunity.data.data;
        //////////////////////////////////////
      } else if (group != 0 && id == 0) {
        //////////////////////////////////
        const responseproductCommunity = await axios.get(
          `${BASE_API_URL}/innovation-product/productCommunity?page= ` +
            page +
            "&group=" +
            group +
            "&id=0"
        );
        productCommunity.value = responseproductCommunity.data.data;
        //////////////////////////////////

        //////////////////////////////////
        const response = await axios.get(
          `${BASE_API_URL}/innovation-product/researcherTechnologyAll?page= ` +
            page +
            "&group=" +
            group +
            "&id=0"
        );
        technology.value = response.data.data;
        //////////////////////////////////

        //////////////////////////////////
        const responseresearcherproduct = await axios.get(
          `${BASE_API_URL}/Researcher/researcherTourismProduct?page= ` +
            page +
            "&group=" +
            group +
            "&id=0"
        );
        researcherproduct.value = responseresearcherproduct.data.data;
        //////////////////////////////////

        //////////////////////////////////
        const responseinnovationobject = await axios.get(
          `${BASE_API_URL}/innovation-product/researcherInnovationObject?page= ` +
            page +
            "&group=" +
            group +
            "&id=0"
        );
        innovationobject.value = responseinnovationobject.data.data;
        //////////////////////////////////

        ////////////////////////////////////////
        const responseservice = await axios.get(
          `${BASE_API_URL}/businesstourism/BusinessService?page= ` +
            page +
            "&group=" +
            group +
            "&id=0"
        );
        bussinessservice.value = responseservice.data.data;
        //////////////////////////////////

        ///////////////////////////////////////
        const responsebussinessproduct = await axios.get(
          `${BASE_API_URL}/businesstourism/BusinessProduct?page= ` +
            page +
            "&group=" +
            group +
            "&id=0"
        );
        bussinessproduct.value = responsebussinessproduct.data.data;
        //////////////////////////////////////

        //////////////////////////////////////
        const responseproducttourism = await axios.get(
          `${BASE_API_URL}/businesstourism/BusinessProductTourism?page= ` +
            page +
            "&group=" +
            group +
            "&id=0"
        );
        producttourism.value = responseproducttourism.data.data;
        ////////////////////////////////////////

        /////////////////////////////////////////
        const responsebusinessProductCommunity = await axios.get(
          `${BASE_API_URL}/businesstourism/BusinessProductCommunity?page= ` +
            page +
            "&group=" +
            group +
            "&id=0"
        );
        businessProductCommunity.value =
          responsebusinessProductCommunity.data.data;
        /////////////////////////////////
      } else {
        //////////////////////////////////
        const responseproductCommunity = await axios.get(
          `${BASE_API_URL}/innovation-product/productCommunity?page=` +
            page +
            "&group=0&id=" +
            id
        );
        productCommunity.value = responseproductCommunity.data.data;
        //////////////////////////////////

        //////////////////////////////////
        const response = await axios.get(
          `${BASE_API_URL}/innovation-product/researcherTechnologyAll?page=` +
            page +
            "&group=0&id=" +
            id
        );
        technology.value = response.data.data;
        //////////////////////////////////

        //////////////////////////////////
        const responseresearcherproduct = await axios.get(
          `${BASE_API_URL}/Researcher/researcherTourismProduct?page=` +
            page +
            "&group=0&id=" +
            id
        );
        researcherproduct.value = responseresearcherproduct.data.data;
        //////////////////////////////////

        //////////////////////////////////
        const responseinnovationobject = await axios.get(
          `${BASE_API_URL}/innovation-product/researcherInnovationObject?page=` +
            page +
            "&group=0&id=" +
            id
        );
        innovationobject.value = responseinnovationobject.data.data;
        //////////////////////////////////

        ///////////////////////////////////////
        const responseservice = await axios.get(
          `${BASE_API_URL}/businesstourism/BusinessService?page=` +
            page +
            "&group=0&id=" +
            id
        );
        bussinessservice.value = responseservice.data.data;
        ////////////////////////////////////

        ///////////////////////////////////
        const responsebussinessproduct = await axios.get(
          `${BASE_API_URL}/businesstourism/BusinessProduct?page=` +
            page +
            "&group=0&id=" +
            id
        );
        bussinessproduct.value = responsebussinessproduct.data.data;
        /////////////////////////////////////

        ///////////////////////////////////////
        const responseproducttourism = await axios.get(
          `${BASE_API_URL}/businesstourism/BusinessProductTourism?page=` +
            page +
            "&group=0&id=" +
            id
        );
        producttourism.value = responseproducttourism.data.data;
        //////////////////////////////////////////

        //////////////////////////////////////////
        const responsebusinessProductCommunity = await axios.get(
          `${BASE_API_URL}/businesstourism/BusinessProductCommunity?page=` +
            page +
            "&group=0&id=" +
            id
        );
        businessProductCommunity.value =
          responsebusinessProductCommunity.data.data;
        /////////////////////////////////////////
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
      productCommunity,
      technology,
      innovationobject,
      researcherproduct,
      bussinessservice,
      bussinessproduct,
      producttourism,
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
.container-pad {
  margin-right: 80px;
  margin-left: 80px;
}
@media only screen and (max-width: 1024px) {
  .container-pad {
    margin-right: 5px;
    margin-left: 5px;
  }
}
.hotel-items {
  padding: 20px 0px 40px;
}
.padd-120 {
  padding-bottom: 20px;
}
.border {
  border: 1px solid #ffffff;

  width: 100%;

  background-color: #ffffff;
}

.hotel-item {
  background-color: white;
  box-shadow: 2px 0px 8px #22222275;
}
.hotel-item.style-7 h4 {
  height: 50px;
  letter-spacing: 0px;
  margin-bottom: 3px;
  color: #206ab0;
}
.hotel-item .title {
  position: relative;
  width: 100%;
  height: 130px;
  padding: 15px 15px 15px 15px;
  border: 1px solid #f7f7f7;
}
.hotel-item .title p {
  color: #bebebe;
  padding: 0px;
  font-size: 12px;
  line-height: 0px;
}
main {
  width: 100%;
  display: grid;
  /* Define Auto Row size */
  height: 50px;
  /*Define our columns */
  grid-template-columns: 4fr 6fr;
  grid-gap: 0em;
}

article {
  color: black;
}
article img {
  padding-right: 2px;
}
article a {
  font-size: 13px;
  letter-spacing: 0px;
  font-weight: 400px;
}
article:nth-child(odd) {
  background-color: #55bae900;
}

article:nth-child(even) {
  background-color: #afbe2900;
  text-align: end;
}
.radius-top img {
  width: 100%;

  object-fit: cover;
  display: block;
  height: 200px;
}
@media only screen and(min-width: 1100px) {
  .radius-top img {
    height: 300px;
  }
}

/*------------SCROLL--BAR--------*/
.scrollbar {
  margin-left: 5px;
  float: left;
  height: 320px;
  width: inherit;

  background: #f8f8f8;
  overflow-y: scroll;
  margin-bottom: 25px;
}

.force-overflow {
  min-height: 450px;
}

#wrapper {
  text-align: center;
  width: 500px;
  margin: auto;
}

/* STYLE 1 */

#style-1::-webkit-scrollbar-track {
  border-radius: 10px;
  background-color: #f5f5f5;
}

#style-1::-webkit-scrollbar {
  width: 12px;
  background-color: #f5f5f5;
}

#style-1::-webkit-scrollbar-thumb {
  border-radius: 10px;

  background-color: #555;
}
</style>
