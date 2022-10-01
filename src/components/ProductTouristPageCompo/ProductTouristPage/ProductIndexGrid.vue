<template>
  <div class="bg-color spa">
    <div class="main-wraper padd-90 layout-top">
      <div class="container">
        <div class="row">
          <div class="col-md-12">
            <div class="second-title">
              <h2 class="text text-left center">
                นวัตกรรมเทคโนโลยีการท่องเที่ยวโดยชุมชน
              </h2>
            </div>
          </div>
        </div>
        <div class="row">
          <!-- <div
            class="col-lg-4 col-md-6 col-sm-6 col-xs-12"
            v-for="item in innovation"
            v-bind:key="item"
          >
            <div class="radius-mask tour-block hover-aqua">
              <div class="clip">
                <div
                  class="bg bg-bg-chrome act shadow"
                  v-bind:style="{
                    'background-image':
                      'url(' +
                      item.researcher_innovation_image_cover_link +
                      ')',
                  }"
                ></div>
              </div>
              <div class="tour-layer delay-1"></div>
              <div class="tour-caption">
                <div class="vertical-align">
                  <h3 class="hover-it textshadow">
                    {{ item.researcher_innovation_name }}
                  </h3>
                </div>
                <div class="vertical-bottom">
                  <div class="fl"></div>
                  <a
                    :href="
                      'producttouristdetailpage?page=researcher_innovation&group=' +
                      item.researcher_innovation_group_id +
                      '&id=' +
                      item.researcher_innovation_id
                    "
                    class="c-button b-50 bg-aqua hv-transparent fr"
                    ><span>เพิ่มเติม</span></a
                  >
                </div>
              </div>
            </div>
          </div> -->
          <!------------------------------------ ------------------------------------>
          <div class="col-xs-12">
            <div class="col-md-12">
              <div class="isotope-container row row10">
                <div
                  class="
                    item
                    gal-item
                    grid-sizer
                    col10
                    col-mob-12 col-xs-6 col-sm-4
                  "
                  v-for="item in innovation"
                  v-bind:key="item"
                >
                  <a
                    :href="
                      'producttouristdetailpage?page=researcher_innovation&group=' +
                      item.researcher_innovation_group_id +
                      '&id=' +
                      item.researcher_innovation_id
                    "
                  >
                    <div
                      class="img-all-fr bg-bg-chrome"
                      v-lazy="item.researcher_innovation_image_cover_link"
                    >
                      <div class="img-all-fr color-bg-img"></div>
                    </div>

                    <div class="vertical-bottom">
                      <div class="text_center">
                        <h3 class="hover-it textshadow underline">
                          {{ item.researcher_innovation_name.substring(0, 50) }}
                        </h3>
                        <div class="rate"></div>
                        <p
                          class="textshadow"
                          v-html="
                            item.researcher_innovation_detail.substring(0, 50)
                          "
                        ></p>
                      </div>
                    </div>
                  </a>
                </div>
              </div>
            </div>
          </div>
          <!------------------------- ----------------------------------------->
        </div>
        <div class="row">
          <div class="col-md-12">
            <div class="second-title">
              <h2 class="text text-left center">เทคโนโลยี</h2>
            </div>
          </div>
        </div>
        <div class="row">
          <!-- <div
            class="col-lg-4 col-md-6 col-sm-6 col-xs-12"
            v-for="item in technology"
            v-bind:key="item"
          >
            <div class="radius-mask tour-block hover-aqua">
              <div class="clip">
                <div
                  class="bg bg-bg-chrome act shadow"
                  v-bind:style="{
                    'background-image':
                      'url(' +
                      item.researcher_technology_image_cover_link +
                      ')',
                  }"
                ></div>
              </div>
              <div class="tour-layer delay-1"></div>
              <div class="tour-caption">
                <div class="vertical-align">
                  <h3 class="hover-it textshadow">
                    {{ item.researcher_technology_name }}
                  </h3>
                </div>
                <div class="vertical-bottom">
                  <div class="fl"></div>
                  <a
                    :href="
                      'producttouristdetailpage?page=researcher_technology&group=' +
                      item.researcher_technology_group_id +
                      '&id=' +
                      item.researcher_technology_id
                    "
                    class="c-button b-50 bg-aqua hv-transparent fr"
                    ><span>เพิ่มเติม</span></a
                  >
                </div>
              </div>
            </div>
          </div> -->
          <!------------------------------------ ------------------------------------>
          <div class="col-xs-12">
            <div class="col-md-12">
              <div class="isotope-container row row10">
                <div
                  class="
                    item
                    gal-item
                    grid-sizer
                    col10
                    col-mob-12 col-xs-6 col-sm-4
                  "
                  v-for="item in technology"
                  v-bind:key="item"
                >
                  <a
                    :href="
                      'producttouristdetailpage?page=researcher_technology&group=' +
                      item.researcher_technology_group_id +
                      '&id=' +
                      item.researcher_technology_id
                    "
                  >
                    <div
                      class="img-all-fr bg-bg-chrome"
                      v-lazy="item.researcher_technology_image_cover_link"
                    >
                      <div class="img-all-fr color-bg-img"></div>
                    </div>

                    <div class="vertical-bottom">
                      <div class="text_center">
                        <h3 class="hover-it textshadow underline">
                          {{ item.researcher_technology_name.substring(0, 50) }}
                        </h3>
                        <div class="rate"></div>
                        <p
                          class="textshadow"
                          v-html="
                            item.researcher_technology_detail.substring(0, 50)
                          "
                        ></p>
                      </div>
                    </div>
                  </a>
                </div>
              </div>
            </div>
          </div>
          <!------------------------- ----------------------------------------->
        </div>
        <div class="row">
          <div class="col-md-12">
            <div class="second-title">
              <h2 class="text text-left center">นวัตกรรมผลิตภัณฑ์ท่องเที่ยว</h2>
            </div>
          </div>
        </div>
        <div class="row">
          <!-- <div
            class="col-lg-4 col-md-6 col-sm-6 col-xs-12"
            v-for="item in researcherTourismProduct"
            v-bind:key="item"
          >
            <div class="radius-mask tour-block hover-aqua">
              <div class="clip">
                <div
                  v-if="
                    item.researcher_tourism_product_image_cover_link !=
                    'https://trinitytrip.com/image/research/tourism_product/'
                  "
                  class="bg bg-bg-chrome act shadow"
                  v-bind:style="{
                    'background-image':
                      'url(' +
                      item.researcher_tourism_product_image_cover_link +
                      ')',
                  }"
                ></div>
                <div
                  v-else
                  class="bg bg-bg-chrome act shadow"
                  style="background-image: url('images/nopicture.jpg')"
                ></div>
              </div>
              <div class="tour-layer delay-1"></div>
              <div class="tour-caption">
                <div class="vertical-align">
                  <h3 class="hover-it textshadow">
                    {{ item.researcher_tourism_product_name }}
                  </h3>
                </div>
                <div class="vertical-bottom">
                  <div class="fl"></div>
                  <a
                    :href="
                      'producttouristdetailpage?page=researcher_tourism_product&group=' +
                      item.researcher_tourism_product_group_id +
                      '&id=' +
                      item.researcher_tourism_product_id
                    "
                    class="c-button b-50 bg-aqua hv-transparent fr"
                    ><span>เพิ่มเติม</span></a
                  >
                </div>
              </div>
            </div>
          </div> -->
          <!------------------------------------ ------------------------------------>
          <div class="col-xs-12">
            <div class="col-md-12">
              <div class="isotope-container row row10">
                <div
                  class="
                    item
                    gal-item
                    grid-sizer
                    col10
                    col-mob-12 col-xs-6 col-sm-4
                  "
                  v-for="item in researcherTourismProduct"
                  v-bind:key="item"
                >
                  <a
                    :href="
                      'producttouristdetailpage?page=researcher_tourism_product&group=' +
                      item.researcher_tourism_product_group_id +
                      '&id=' +
                      item.researcher_tourism_product_id
                    "
                  >
                    <div
                      v-if="
                        item.researcher_tourism_product_image_cover_link !=
                        'https://trinitytrip.com/image/research/tourism_product/'
                      "
                      class="img-all-fr bg-bg-chrome"
                      v-bind:style="{
                        'background-image':
                          'url(' +
                          item.researcher_tourism_product_image_cover_link +
                          ')',
                      }"
                    >
                      <div class="img-all-fr color-bg-img"></div>
                    </div>
                    <div
                      v-else
                      class="img-all-fr bg-bg-chrome"
                      style="background-image: url('images/nopicture.jpg')"
                    >
                      <div class="img-all-fr color-bg-img"></div>
                    </div>

                    <div class="vertical-bottom">
                      <div class="text_center">
                        <h3 class="hover-it textshadow underline">
                          {{
                            item.researcher_tourism_product_name.substring(
                              0,
                              50
                            )
                          }}
                        </h3>
                        <div class="rate"></div>
                        <p
                          class="textshadow"
                          v-html="
                            item.researcher_tourism_product_detail.substring(
                              0,
                              50
                            )
                          "
                        ></p>
                      </div>
                    </div>
                  </a>
                </div>
              </div>
            </div>
          </div>
          <!------------------------- ----------------------------------------->
        </div>
        <div class="row">
          <!-- <div
            class="col-lg-4 col-md-6 col-sm-6 col-xs-12"
            v-for="item in businessproductTourism"
            v-bind:key="item"
          >
            <div class="radius-mask tour-block hover-aqua">
              <div class="clip">
                <div
                  v-if="
                    item.bussiness_product_tourism_image_cover_link !=
                    'https://trinitytrip.com/image/bussiness/product_tourism/'
                  "
                  class="bg bg-bg-chrome act shadow"
                  v-bind:style="{
                    'background-image':
                      'url(' +
                      item.bussiness_product_tourism_image_cover_link +
                      ')',
                  }"
                ></div>
                <div
                  v-else
                  class="bg bg-bg-chrome act shadow"
                  style="background-image: url('images/nopicture.jpg')"
                ></div>
              </div>
              <div class="tour-layer delay-1"></div>
              <div class="tour-caption">
                <div class="vertical-align">
                  <h3 class="hover-it textshadow">
                    {{ item.bussiness_product_tourism_name }}
                  </h3>
                </div>
                <div class="vertical-bottom">
                  <div class="fl"></div>
                  <a
                    :href="
                      'producttouristdetailpage?page=bussiness_product_tourism&group=' +
                      item.bussiness_product_tourism_group_id +
                      '&id=' +
                      item.bussiness_product_tourism_id
                    "
                    class="c-button b-50 bg-aqua hv-transparent fr"
                    ><span>เพิ่มเติม</span></a
                  >
                </div>
              </div>
            </div>
          </div> -->
          <!------------------------------------ ------------------------------------>
          <div class="col-xs-12">
            <div class="col-md-12">
              <div class="isotope-container row row10">
                <div
                  class="
                    item
                    gal-item
                    grid-sizer
                    col10
                    col-mob-12 col-xs-6 col-sm-4
                  "
                  v-for="item in businessproductTourism"
                  v-bind:key="item"
                >
                  <a
                    :href="
                      'producttouristdetailpage?page=bussiness_product_tourism&group=' +
                      item.bussiness_product_tourism_group_id +
                      '&id=' +
                      item.bussiness_product_tourism_id
                    "
                  >
                    <div
                      v-if="
                        item.bussiness_product_tourism_image_cover_link !=
                        'https://trinitytrip.com/image/bussiness/product_tourism/'
                      "
                      class="img-all-fr bg-bg-chrome"
                      v-bind:style="{
                        'background-image':
                          'url(' +
                          item.bussiness_product_tourism_image_cover_link +
                          ')',
                      }"
                    >
                      <div class="img-all-fr color-bg-img"></div>
                    </div>
                    <div
                      v-else
                      class="img-all-fr bg-bg-chrome"
                      style="background-image: url('images/nopicture.jpg')"
                    >
                      <div class="img-all-fr color-bg-img"></div>
                    </div>

                    <div class="vertical-bottom">
                      <div class="text_center">
                        <h3 class="hover-it textshadow underline">
                          {{
                            item.bussiness_product_tourism_name.substring(0, 50)
                          }}
                        </h3>
                        <div class="rate"></div>
                        <p
                          class="textshadow"
                          v-html="
                            item.bussiness_product_tourism_detail.substring(
                              0,
                              50
                            )
                          "
                        ></p>
                      </div>
                    </div>
                  </a>
                </div>
              </div>
            </div>
          </div>
          <!------------------------- ----------------------------------------->
        </div>
        <div class="row">
          <div class="col-md-12">
            <div class="second-title">
              <h2 class="text text-left center">ผลิตภัณฑ์ธุรกิจ</h2>
            </div>
          </div>
        </div>
        <div class="row">
          <!-- <div
            class="col-lg-4 col-md-6 col-sm-6 col-xs-12"
            v-for="item in bussinessProduct"
            v-bind:key="item"
          >
            <div class="radius-mask tour-block hover-aqua">
              <div class="clip">
                <div
                  class="bg bg-bg-chrome act shadow"
                  v-bind:style="{
                    'background-image':
                      'url(' + item.bussiness_product_image_cover_link + ')',
                  }"
                ></div>
              </div>
              <div class="tour-layer delay-1"></div>
              <div class="tour-caption">
                <div class="vertical-align">
                  <h3 class="hover-it textshadow">
                    {{ item.bussiness_product_name }}
                  </h3>
                </div>
                <div class="vertical-bottom">
                  <div class="fl"></div>
                  <a
                    :href="
                      'producttouristdetailpage?page=bussiness_product&group=' +
                      item.bussiness_product_group_id +
                      '&id=' +
                      item.bussiness_product_id
                    "
                    class="c-button b-50 bg-aqua hv-transparent fr"
                    ><span>เพิ่มเติม</span></a
                  >
                </div>
              </div>
            </div>
          </div> -->
          <!------------------------------------ ------------------------------------>
          <div class="col-xs-12">
            <div class="col-md-12">
              <div class="isotope-container row row10">
                <div
                  class="
                    item
                    gal-item
                    grid-sizer
                    col10
                    col-mob-12 col-xs-6 col-sm-4
                  "
                  v-for="item in bussinessProduct"
                  v-bind:key="item"
                >
                  <a
                    :href="
                      'producttouristdetailpage?page=bussiness_product&group=' +
                      item.bussiness_product_group_id +
                      '&id=' +
                      item.bussiness_product_id
                    "
                  >
                    <div
                      class="img-all-fr bg-bg-chrome"
                      v-lazy="item.bussiness_product_image_cover_link"
                    >
                      <div class="img-all-fr color-bg-img"></div>
                    </div>

                    <div class="vertical-bottom">
                      <div class="text_center">
                        <h3 class="hover-it textshadow underline">
                          {{ item.bussiness_product_name.substring(0, 50) }}
                        </h3>
                        <div class="rate"></div>
                        <p
                          class="textshadow"
                          v-html="
                            item.bussiness_product_detail.substring(0, 50)
                          "
                        ></p>
                      </div>
                    </div>
                  </a>
                </div>
              </div>
            </div>
          </div>
          <!------------------------- ----------------------------------------->
        </div>
        <div class="row">
          <div class="col-md-12">
            <div class="second-title">
              <h2 class="text text-left center">ผลิตภัณฑ์ชุมชน</h2>
            </div>
          </div>
        </div>
        <div class="row">
          <!-- <div
            class="col-lg-4 col-md-6 col-sm-6 col-xs-12"
            v-for="item in businessProductCommunity"
            v-bind:key="item"
          >
            <div class="radius-mask tour-block hover-aqua">
              <div class="clip">
                <div
                  class="bg bg-bg-chrome act shadow"
                  v-bind:style="{
                    'background-image':
                      'url(' +
                      item.bussiness_product_community_image_cover_link +
                      ')',
                  }"
                ></div>
              </div>
              <div class="tour-layer delay-1"></div>
              <div class="tour-caption">
                <div class="vertical-align">
                  <h3 class="hover-it textshadow">
                    {{ item.bussiness_product_community_name }}
                  </h3>
                </div>
                <div class="vertical-bottom">
                  <div class="fl"></div>
                  <a
                    :href="
                      'producttouristdetailpage?page=bussiness_product_community&group=' +
                      item.bussiness_product_community_group_id +
                      '&id=' +
                      item.bussiness_product_community_id
                    "
                    class="c-button b-50 bg-aqua hv-transparent fr"
                    ><span>เพิ่มเติม</span></a
                  >
                </div>
              </div>
            </div>
          </div> -->
          <!------------------------------------ ------------------------------------>
          <div class="col-xs-12">
            <div class="col-md-12">
              <div class="isotope-container row row10">
                <div
                  class="
                    item
                    gal-item
                    grid-sizer
                    col10
                    col-mob-12 col-xs-6 col-sm-4
                  "
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
                    <div
                      class="img-all-fr bg-bg-chrome"
                      v-lazy="item.bussiness_product_community_image_cover_link"
                    >
                      <div class="img-all-fr color-bg-img"></div>
                    </div>

                    <div class="vertical-bottom">
                      <div class="text_center">
                        <h3 class="hover-it textshadow underline">
                          {{
                            item.bussiness_product_community_name.substring(
                              0,
                              50
                            )
                          }}
                        </h3>
                        <div class="rate"></div>
                        <p
                          class="textshadow"
                          v-html="
                            item.bussiness_product_community_detail.substring(
                              0,
                              50
                            )
                          "
                        ></p>
                      </div>
                    </div>
                  </a>
                </div>
              </div>
            </div>
          </div>
          <!------------------------- ----------------------------------------->
        </div>
        <div class="row">
          <!-- <div
            class="col-lg-4 col-md-6 col-sm-6 col-xs-12"
            v-for="item in product"
            v-bind:key="item"
          >
            <div class="radius-mask tour-block hover-aqua">
              <div class="clip">
                <div
                  class="bg bg-bg-chrome act shadow"
                  v-bind:style="{
                    'background-image':
                      'url(' + item.product_image_cover_link + ')',
                  }"
                ></div>
              </div>
              <div class="tour-layer delay-1"></div>
              <div class="tour-caption">
                <div class="vertical-align">
                  <h3 class="hover-it textshadow">
                    {{ item.product_name }}
                  </h3>
                </div>
                <div class="vertical-bottom">
                  <div class="fl"></div>
                  <a
                    :href="
                      'producttouristdetailpage?page=product&group=' +
                      item.product_group_id +
                      '&id=' +
                      item.product_id
                    "
                    class="c-button b-50 bg-aqua hv-transparent fr"
                    ><span>เพิ่มเติม</span></a
                  >
                </div>
              </div>
            </div>
          </div> -->
          <!------------------------------------ ------------------------------------>
          <div class="col-xs-12">
            <div class="col-md-12">
              <div class="isotope-container row row10">
                <div
                  class="
                    item
                    gal-item
                    grid-sizer
                    col10
                    col-mob-12 col-xs-6 col-sm-4
                  "
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
                    <div
                      class="img-all-fr bg-bg-chrome"
                      v-lazy="item.product_image_cover_link"
                    >
                      <div class="img-all-fr color-bg-img"></div>
                    </div>

                    <div class="vertical-bottom">
                      <div class="text_center">
                        <h3 class="hover-it textshadow underline">
                          {{ item.product_name.substring(0, 50) }}
                        </h3>
                        <div class="rate"></div>
                        <p
                          class="textshadow"
                          v-html="item.product_detail.substring(0, 50)"
                        ></p>
                      </div>
                    </div>
                  </a>
                </div>
              </div>
            </div>
          </div>
          <!------------------------- ----------------------------------------->
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
  name: "ProductIndexGrid",
  setup() {
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
        `${BASE_API_URL}/innovation-product/ProductAll?page=1&group=0&id=0`
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
    };
  },
};
</script>

<style scoped>
.gal-item:hover {
  transform: scale(1.1);
}
#img {
  width: 100%;
  height: 300px;
  margin-bottom: 10px;
}
.layout-top {
  position: relative;
  /* top: -300px; */
}
.text-left {
  text-align: left;
}
.text-right {
  text-align: right;
}
.second-title {
  position: relative;
  text-align: center;
  padding-top: 60px;
  padding-bottom: 45px;
}
.bg-color {
  background: rgb(255, 255, 255);
  background: linear-gradient(
    90deg,
    rgba(255, 255, 255, 1) 0%,
    rgba(230, 237, 249, 1) 100%
  );
}

.shadow {
  box-shadow: rgba(0, 0, 0, 0.25) 0px 54px 55px,
    rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px,
    rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px;
}

.text {
  /* color: rgb(0, 0, 0); */
  color: rgb(21, 51, 133);
  letter-spacing: 0;
  /* text-shadow: 1px 2px 3px #000000; */
}
.textshadow {
  text-shadow: 2px 2px 3px #000000;
  letter-spacing: 0;
}
.col10 {
  padding-right: 5px;
  padding-left: 5px;
  padding-top: 5px;
  padding-bottom: 5px;
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
.vertical-bottom {
  position: absolute;
  bottom: 0px;
  left: 0px;
  width: 100%;
  padding-right: 10px;
  padding-left: 10px;
  padding-bottom: 20px;
}
.underline:after {
  margin: 5px 0 0px;
  height: 2px;
}
.text_center {
  text-align: center;
}
p {
  font-size: 20px;
  line-height: 1.363rem;
  font-weight: 400;
  color: rgb(184, 184, 184);
}
.img-all-fr {
  width: 100%;
  height: 20rem;
  object-fit: cover;
  display: block;
  border-radius: 20px;
}
h3 {
  /* position: relative; */
  font-size: 26px;
  line-height: 1.563rem;
  font-weight: 500;
  text-transform: capitalize;
  letter-spacing: 1px;
  color: white;
}
@media screen and (max-width: 600px) {
  .center {
    text-align: center;
  }
}
</style>
