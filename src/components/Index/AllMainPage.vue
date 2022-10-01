<template>
  <div class="top-baner">
    <div class="clip">
      <div class="bg bg-bg-chrome act" v-lazy="'images/bg/bg-index.jpg'"></div>
    </div>
    <div class="main-wraper padd-70-70">
      <div class="container">
        <div class="hotel-item bg-white">
          <!------------------------------------------ community ---------------------------------------------->

          <!-- <div class="row">
            <div
              class="col-md-4"
              v-for="item in community.slice(0, 6)"
              v-bind:key="item.community_id"
            >
              <div class="thumbnail">
                <img style="width:100%;height:11rem;" :src="item.community_image_cover_link" />
                <div class="caption">
                  <p>{{ item.community_name.substring(0, 32) }}</p>
                </div>
              </div>
            </div>
          </div> -->

          <div class="row">
            <div class="col-md-6">
              <div class="second-title">
                <h2 class="text text-left">ท่องเที่ยวโดยชุมชน</h2>
              </div>
            </div>
            <div class="col-md-6">
              <div class="second-title">
                <router-link to="community"
                  ><h3 class="text text-right">ดูทั้งหมด</h3></router-link
                >
              </div>
            </div>
          </div>
          <div class="row">
            <div class="col-xs-12">
              <div class="col-md-4">
                <div class="row">
                  <div class="item gal-item col-mob-12 col-xs-6 col-sm-12">
                    <router-link class="" to="community">
                      <div
                        class="img-all-fr bg-bg-chrome"
                        v-lazy="'images/index/Artboardท่องเที่ยว.png '"
                      >
                        <div class="img-all-fr color-bg-img"></div>
                      </div>
                      <div class="vertical-bottom">
                        <div class="text_center">
                          <h2 class="text-spac">ท่องเที่ยวโดยชุมชน</h2>
                        </div>
                      </div>
                    </router-link>
                  </div>
                </div>
              </div>
              <div class="col-md-8">
                <carousel
                  :items-to-show="3"
                  :wrap-around="true"
                  :autoplay="3000"
                >
                  <slide
                    v-for="item in community.slice(0, 4)"
                    v-bind:key="item.community_id"
                  >
                    <a :href="'communitydetail?id=' + item.community_id">
                      <div class="card card-price">
                        <div class="card-img" style="width: 100%">
                          <img
                            :src="item.community_image_cover_link"
                            :key="item.community_image_cover_link"
                            style="height: 8rem; width: 100%"
                            class="img-responsive"
                          />                         
                        </div>
                        <div class="card-body" style="text-align: left">
                          <h6>
                            {{ item.community_name.substring(0, 20) }}
                          </h6>
                        </div>
                      </div>
                    </a>
                  </slide>
                </carousel>
                <carousel
                  :items-to-show="3"
                  :wrap-around="true"
                  :autoplay="3000"
                >
                  <slide
                    v-for="item in community.slice(4, 8)"
                    v-bind:key="item.community_id"
                  >
                    <a :href="'communitydetail?id=' + item.community_id">
                      <div class="card card-price">
                        <div class="card-img" style="width: 100%">
                          <img
                            :src="item.community_image_cover_link"
                            :key="item.community_image_cover_link"
                            style="height: 8rem; width: 100%"
                            class="img-responsive"
                          />
                        </div>
                        <div class="card-body" style="text-align: left">
                          <h6>
                            {{ item.community_name.substring(0, 20) }}
                          </h6>
                        </div>
                      </div>
                    </a>
                    <!-- <a
                      :href="'communitydetail?id=' + item.community_id"
                      class="img-all bg-bg-chrome"
                      v-lazy="item.community_image_cover_link"
                    >
                      <div class="img-all color-bg-img"></div>

                      <div class="vertical-bottom">
                        <div class="text_center">
                          <p class="textshadow color_p" style="color: white">
                            {{ item.community_name.substring(0, 28) }}
                          </p>
                        </div>
                      </div>
                    </a> -->
                  </slide>
                </carousel>
                <!-- <div class="isotope-container row row10">
                  <div
                    class="
                      item
                      gal-item
                      grid-sizer
                      col10
                      col-mob-12 col-xs-6 col-sm-4
                    "
                    v-for="item in community.slice(0, 6)"
                    v-bind:key="item.community_id"
                  >
                    <a :href="'communitydetail?id=' + item.community_id">
                      <div
                        class="img-all bg-bg-chrome"
                        v-lazy="item.community_image_cover_link"
                      >
                        <div class="img-all color-bg-img"></div>
                      </div>

                      <div class="vertical-bottom">
                        <div class="text_center">
                          <h3 class="hover-it textshadow">
                            {{ item.community_name.substring(0, 32) }}
                          </h3>
                        </div>
                      </div>
                    </a>
                  </div>
                </div> -->
              </div>
            </div>
          </div>

          <!------------------------------------------ community ---------------------------------------------->

          <!------------------------------------------ Product ---------------------------------------------->

          <div class="row">
            <div class="col-md-6">
              <div class="second-title">
                <h2 class="text text-left">
                  นวัตกรรมเทคโนโลยีการท่องเที่ยวโดยชุมชน
                </h2>
              </div>
            </div>
            <div class="col-md-6">
              <div class="second-title">
                <router-link to="ProductIndex"
                  ><h3 class="text text-right">ดูทั้งหมด</h3></router-link
                >
              </div>
            </div>
          </div>
          <div class="row">
            <div class="col-xs-12">
              <div class="col-md-4">
                <div class="row">
                  <div class="item gal-item col-mob-12 col-xs-6 col-sm-12">
                    <router-link class="" to="ProductIndex">
                      <div
                        class="img-all-fr bg-bg-chrome"
                        v-lazy="'images/index/Artboardนวัต.png '"
                      >
                        <div class="img-all-fr color-bg-img"></div>
                      </div>

                      <div class="vertical-bottom">
                        <div class="text_center">
                          <h2 class="text-spac">
                            นวัตกรรมเทคโนโลยีการท่องเที่ยวโดยชุมชน
                          </h2>
                        </div>
                      </div>
                    </router-link>
                  </div>
                </div>
              </div>
              <div class="col-md-8">
                <carousel
                  :items-to-show="3"
                  :wrap-around="true"
                  :autoplay="3000"
                >
                  <slide
                    v-for="item in innovation.slice(0, 4)"
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
                      <div class="card card-price">
                        <div class="card-img" style="width: 100%">
                          <img
                            :src="item.researcher_innovation_image_cover_link"
                            style="height: 8rem; width: 100%"
                            class="img-responsive"
                          />
                        </div>
                        <div class="card-body" style="text-align: left">
                          <h6>
                            {{
                              item.researcher_innovation_name.substring(0, 20)
                            }}
                          </h6>
                          <p
                            style="color: gray; font-size: 10px"
                            v-html="
                              item.researcher_innovation_detail.substring(0, 26)
                            "
                          ></p>
                        </div>
                      </div>
                    </a>
                  </slide>
                </carousel>
                <carousel
                  :items-to-show="3"
                  :wrap-around="true"
                  :autoplay="2500"
                >
                  <slide
                    v-for="item in innovation.slice(4, 8)"
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
                      <div class="card card-price">
                        <div class="card-img" style="width: 100%">
                          <img
                            :src="item.researcher_innovation_image_cover_link"
                            style="height: 8rem; width: 100%"
                            class="img-responsive"
                          />
                        </div>
                        <div class="card-body" style="text-align: left">
                          <h6>
                            {{
                              item.researcher_innovation_name.substring(0, 20)
                            }}
                          </h6>
                          <p
                            style="color: gray; font-size: 10px"
                            v-html="
                              item.researcher_innovation_detail.substring(0, 26)
                            "
                          ></p>
                        </div>
                      </div>
                    </a>
                    <!-- <a
                      :href="
                        'producttouristdetailpage?page=researcher_innovation&group=' +
                        item.researcher_innovation_group_id +
                        '&id=' +
                        item.researcher_innovation_id
                      "
                      class="img-all bg-bg-chrome"
                      v-lazy="item.researcher_innovation_image_cover_link"
                    >
                      <div class="img-all color-bg-img"></div>

                      <div class="vertical-bottom">
                        <div class="text_center">
                          <p class="textshadow color_p" style="color: white">
                            {{
                              item.researcher_innovation_name.substring(0, 28)
                            }}
                          </p>
                        </div>
                      </div>
                    </a> -->
                  </slide>
                </carousel>
                <!-- <div class="isotope-container row row10">
                  <div
                    class="
                      item
                      gal-item
                      grid-sizer
                      col10
                      col-mob-12 col-xs-6 col-sm-4
                    "
                    v-for="item in innovation.slice(0, 6)"
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
                        class="img-all bg-bg-chrome"
                        v-lazy="item.researcher_innovation_image_cover_link"
                      >
                        <div class="img-all color-bg-img"></div>
                      </div>
                      <div class="vertical-bottom">
                        <div class="text_center">
                          <h3 class="hover-it textshadow underline">
                            {{
                              item.researcher_innovation_name.substring(0, 32)
                            }}
                          </h3>
                          <div class="rate"></div>
                          <p
                            class="textshadow color_p"
                            v-html="
                              item.researcher_innovation_detail.substring(0, 35)
                            "
                          ></p>
                        </div>
                      </div>
                    </a>
                  </div>
                </div> -->
              </div>
            </div>
          </div>

          <!------------------------------------------ Product ---------------------------------------------->

          <!------------------------------------------ activity ---------------------------------------------->

          <div class="row">
            <div class="col-md-6">
              <div class="second-title">
                <h2 class="text text-left">กิจกรรมท่องเที่ยว</h2>
              </div>
            </div>
            <div class="col-md-6">
              <div class="second-title">
                <router-link to="ActivityIndex?page=1&group=0&id=0"
                  ><h3 class="text text-right">ดูทั้งหมด</h3></router-link
                >
              </div>
            </div>
          </div>
          <div class="row">
            <div class="col-xs-12">
              <div class="col-md-4">
                <div class="row">
                  <div class="item gal-item col-mob-12 col-xs-6 col-sm-12">
                    <router-link
                      class=""
                      to="ActivityIndex?page=1&group=0&id=0"
                    >
                      <div
                        class="img-all-fr bg-bg-chrome"
                        v-lazy="'images/index/Artboardกิจกรรม.png '"
                      >
                        <div class="img-all-fr color-bg-img"></div>
                      </div>
                      <div class="vertical-bottom">
                        <div class="text_center">
                          <h2 class="text-spac">กิจกรรมท่องเที่ยว</h2>
                        </div>
                      </div>
                    </router-link>
                  </div>
                </div>
              </div>
              <div class="col-md-8">
                <carousel
                  :items-to-show="3"
                  :wrap-around="true"
                  :autoplay="3000"
                >
                  <slide
                    v-for="item in event.slice(0, 4)"
                    v-bind:key="item.activity_id"
                  >
                    <a
                      :href="
                        'ActivityDetailAll?page=1&group=0&id=' +
                        item.activity_id
                      "
                    >
                      <div class="card card-price">
                        <div class="card-img" style="width: 100%">
                          <img
                            :src="item.activity_image_cover_link"
                            style="height: 8rem; width: 100%"
                            class="img-responsive"
                          />
                        </div>
                        <div class="card-body" style="text-align: left">
                          <h6>
                            {{ item.activity_name.substring(0, 20) }}
                          </h6>
                          <p
                            style="color: gray; font-size: 10px"
                            v-html="
                              item.activity_duration_text.substring(0, 26)
                            "
                          ></p>
                        </div>
                      </div>
                    </a>
                  </slide>
                </carousel>
                <carousel
                  :items-to-show="3"
                  :wrap-around="true"
                  :autoplay="2500"
                >
                  <slide
                    v-for="item in event.slice(4, 8)"
                    v-bind:key="item.activity_id"
                  >
                    <a
                      :href="
                        'ActivityDetailAll?page=1&group=0&id=' +
                        item.activity_id
                      "
                    >
                      <div class="card card-price">
                        <div class="card-img" style="width: 100%">
                          <img
                            :src="item.activity_image_cover_link"
                            style="height: 8rem; width: 100%"
                            class="img-responsive"
                          />
                        </div>
                        <div class="card-body" style="text-align: left">
                          <h6>
                            {{ item.activity_name.substring(0, 20) }}
                          </h6>
                          <p
                            style="color: gray; font-size: 10px"
                            v-html="
                              item.activity_duration_text.substring(0, 26)
                            "
                          ></p>
                        </div>
                      </div>
                    </a>
                    <!-- <a
                      :href="
                        'ActivityDetailAll?page=1&group=0&id=' +
                        item.activity_id
                      "
                      class="img-all bg-bg-chrome"
                      v-lazy="item.activity_image_cover_link"
                    >
                      <div class="img-all color-bg-img"></div>

                      <div class="vertical-bottom">
                        <div class="text_center">
                          <p class="textshadow color_p" style="color: white">
                            {{ item.activity_name.substring(0, 28) }}
                          </p>
                        </div>
                      </div>
                    </a> -->
                  </slide>
                </carousel>
                <!-- <div class="isotope-container row row10">
                  <div
                    class="
                      item
                      gal-item
                      grid-sizer
                      col10
                      col-mob-12 col-xs-6 col-sm-4
                    "
                    v-for="item in event.slice(0, 6)"
                    v-bind:key="item.activity_id"
                  >
                    <a
                      :href="
                        'ActivityDetailAll?page=1&group=0&id=' +
                        item.activity_id
                      "
                    >
                      <div
                        class="img-all bg-bg-chrome"
                        v-lazy="item.activity_image_cover_link"
                      >
                        <div class="img-all color-bg-img"></div>
                      </div>
                      <div class="vertical-bottom">
                        <div class="text_center">
                          <h3 class="hover-it textshadow underline">
                            {{ item.activity_name.substring(0, 32) }}
                          </h3>
                          <div class="rate"></div>
                          <p class="textshadow color_p">
                            {{ item.activity_duration_text.substring(0, 35) }}
                          </p>
                        </div>
                      </div>
                    </a>
                  </div>
                </div> -->
              </div>
            </div>
          </div>

          <!------------------------------------------ activity ---------------------------------------------->

          <!------------------------------------------ tour ---------------------------------------------->

          <div class="row">
            <div class="col-md-6">
              <div class="second-title">
                <h2 class="text text-left">เส้นทางท่องเที่ยว</h2>
              </div>
            </div>
            <div class="col-md-6">
              <div class="second-title">
                <router-link to="touristroute?page=1&group=0&id=0">
                  <h3 class="text text-right">ดูทั้งหมด</h3>
                </router-link>
              </div>
            </div>
          </div>
          <div class="row">
            <div class="col-xs-12">
              <div class="row">
                <div class="col-md-4">
                  <div class="item gal-item col-mob-12 col-xs-6 col-sm-12">
                    <router-link class="" to="touristroute?page=1&group=0&id=0">
                      <div
                        class="img-all-fr bg-bg-chrome"
                        v-lazy="'images/index/Untitled-1_0.jpg '"
                      >
                        <div class="img-all-fr color-bg-img"></div>
                      </div>
                      <div class="vertical-bottom">
                        <div class="text_center">
                          <h2 class="text-spac">เส้นทางท่องเที่ยว</h2>
                        </div>
                      </div>
                    </router-link>
                  </div>
                </div>
                <div class="col-md-8" style="margin-top: -10px">
                  <!-- <div class="isotope-container row row10"> -->
                  <carousel
                    :items-to-show="3"
                    :wrap-around="true"
                    :autoplay="3000"
                  >
                    <slide
                      v-for="items in mainRoute.slice(0, 4)"
                      v-bind:key="items.tourism_main_route_id"
                    >
                      <a
                        @click="
                          on_click(page, group, items.tourism_main_route_id)
                        "
                      >
                        <div class="card card-price">
                          <div class="card-img" style="width: 100%">
                            <img
                              :src="items.tourism_main_route_image"
                              style="height: 8rem; width: 100%"
                              class="img-responsive"
                            />
                          </div>
                          <div class="card-body" style="text-align: left">
                            <h6>
                              {{
                                items.tourism_main_route_name.substring(0, 20)
                              }}
                            </h6>
                            <p
                              style="color: gray; font-size: 10px"
                              v-html="
                                items.tourism_main_route_detail.substring(0, 26)
                              "
                            ></p>
                          </div>
                        </div>
                      </a>
                    </slide>
                    <template #addons>
                      <!-- <navigation />  -->
                    </template>
                  </carousel>
                  <carousel
                    :items-to-show="3"
                    :wrap-around="true"
                    :autoplay="2500"
                  >
                    <slide
                      v-for="items in mainRoute.slice(4, 8)"
                      v-bind:key="items.tourism_main_route_id"
                    >
                      <a
                        @click="
                          on_click(page, group, items.tourism_main_route_id)
                        "
                      >
                        <div class="card card-price">
                          <div class="card-img" style="width: 100%">
                            <img
                              :src="items.tourism_main_route_image"
                              style="width: 100%; height: 8rem"
                              class="img-responsive"
                            />
                          </div>
                          <div class="card-body" style="text-align: left">
                            <h6>
                              {{
                                items.tourism_main_route_name.substring(0, 23)
                              }}
                            </h6>
                            <p
                              style="color: gray; font-size: 10px"
                              v-html="
                                items.tourism_main_route_detail.substring(0, 30)
                              "
                            ></p>
                          </div>
                        </div>
                      </a>
                    </slide>
                  </carousel>
                </div>
              </div>
            </div>
          </div>

          <!------------------------------------------ tour ---------------------------------------------->

          <!------------------------------------------ Productcommu ---------------------------------------------->

          <div class="row">
            <div class="col-md-6">
              <div class="second-title">
                <h2 class="text text-left">ผลิตภัณฑ์ชุมชน</h2>
              </div>
            </div>
            <div class="col-md-6">
              <div class="second-title">
                <router-link to="ProductIndex"
                  ><h3 class="text text-right">ดูทั้งหมด</h3></router-link
                >
              </div>
            </div>
          </div>
          <div class="row">
            <div class="col-xs-12">
              <carousel :items-to-show="3" :wrap-around="true" :autoplay="3000">
                <slide
                  v-for="item in businessProductCommunity.slice(0, 6)"
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
                    <div class="card card-price">
                      <div class="card-img">
                        <img
                          :src="
                            item.bussiness_product_community_image_cover_link
                          "
                          style="width: 100%; height: 18rem"
                          class="img-responsive"
                        />
                      </div>
                      <div class="card-body">
                        <strong>{{
                          item.bussiness_product_community_name.substring(0, 32)
                        }}</strong>
                      </div>
                    </div>
                  </a>
                </slide>
              </carousel>
              <!-- <div class="isotope-container row row10"> -->
              <!-- Carousel -->
              <!-- <carousel :items-to-show="3" :wrap-around="true" :autoplay="3000">
                <slide
                  v-for="item in businessProductCommunity.slice(0, 6)"
                  v-bind:key="item"
                >
                  <a
                    :href="
                      'producttouristdetailpage?page=bussiness_product_community&group=' +
                      item.bussiness_product_community_group_id +
                      '&id=' +
                      item.bussiness_product_community_id
                    "
                    class="img-all-fr bg-bg-chrome carousel__item"
                    v-lazy="item.bussiness_product_community_image_cover_link"
                  >
                    <div class="img-all-fr color-bg-img"></div>
                  </a>

                  <div class="vertical-bottom">
                    <div class="text_center">
                      <h3 class="hover-it textshadow">
                        {{
                          item.bussiness_product_community_name.substring(0, 32)
                        }}
                      </h3>
                      <div class="rate"></div>
                    </div>
                  </div>
                </slide>
              </carousel> -->
              <!-- Carousel -->
              <!-- </div> -->
              <!-- <div class="isotope-container row row10">
                  <div
                    class="
                      item
                      gal-item
                      grid-sizer
                      col10
                      col-mob-12 col-xs-6 col-sm-4
                    "
                    v-for="item in businessProductCommunity.slice(0, 3)"
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
                        v-lazy="
                          item.bussiness_product_community_image_cover_link
                        "
                      >
                        <div class="img-all-fr color-bg-img"></div>
                      </div>

                      <div class="vertical-bottom">
                        <div class="text_center">
                          <h3 class="hover-it textshadow underline">
                            {{
                              item.bussiness_product_community_name.substring(
                                0,
                                32
                              )
                            }}
                          </h3>
                          <div class="rate"></div>
                          <p
                            class="textshadow color_p"
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
                </div> -->
            </div>
          </div>

          <!------------------------------------------ Productcommu ---------------------------------------------->
        </div>
      </div>
    </div>
  </div>
</template>

<script type="module">
import { onMounted, ref } from "vue";
import axios from "axios";
import { BASE_API_URL } from "../../constants";
// Carousel
import { Carousel, Slide } from "vue3-carousel";
import "vue3-carousel/dist/carousel.css";

export default {
  name: "AllMainPage",
  components: {
    Carousel,
    Slide,
    // Navigation,
  },
  setup() {
    const community = ref([]);
    const innovation = ref([]);
    const event = ref([]);
    const mainRoute = ref([]);
    const businessProductCommunity = ref([]);

    const getData = async () => {
      const responsecommunity = await axios.get(
        `${BASE_API_URL}/community-tourism/CommunityAll/0`
      );
      community.value = responsecommunity.data.data;

      const responseinnovation = await axios.get(
        `${BASE_API_URL}/innovation-product/ProductAll?page=1&group=0&id=0`
      );
      innovation.value = responseinnovation.data.data_researcher_innovation;

      const responseevent = await axios.get(`${BASE_API_URL}/home/activity`);
      event.value = responseevent.data.data;

      const responsemainRoute = await axios.get(
        `${BASE_API_URL}/tourism-route/mainRoute`
      );
      mainRoute.value = responsemainRoute.data.data.data;

      const responsebusinessProductCommunity = await axios.get(
        `${BASE_API_URL}/innovation-product/ProductAll?page=1&group=0&id=0`
      );
      businessProductCommunity.value =
        responsebusinessProductCommunity.data.data_bussiness_product_community;
    };

    onMounted(() => {
      getData();
    });

    function on_click(page, group, id) {
      window.location =
        "TouristRouteSubRoute?page=" + page + "&group=" + group + "&id=" + id;
    }

    return {
      community,
      mainRoute,
      innovation,
      event,
      businessProductCommunity,
      on_click,
    };
  },
};
</script>
<style>
p {
  font-size: 14px;
  line-height: 26px;
  font-weight: 400;
}
.color_p {
  color: rgb(184, 184, 184);
}
</style>

<style scoped>
.gal-item:hover {
  transform: scale(1.1);
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
.hotel-item {
  border-radius: 40px;
  padding-right: 40px;
  padding-left: 40px;
  padding-top: 10px;
  padding-bottom: 60px;
  /* background: rgba(105, 200, 255, 0.493); */
  box-shadow: 2px 1px 5px #222222;
  background: rgba(
    8,
    114,
    201,
    0.637
  ); /* For browsers that do not support gradients */
  background: -webkit-linear-gradient(
    -90deg,
    rgba(8, 114, 201, 0.637),
    rgba(105, 200, 255, 0.493),
    rgba(105, 200, 255, 0.493)
  ); /* For Safari 5.1 to 6.0 */
  background: -o-linear-gradient(
    -90deg,
    rgba(8, 114, 201, 0.637),
    rgba(105, 200, 255, 0.493),
    rgba(105, 200, 255, 0.493)
  ); /* For Opera 11.1 to 12.0 */
  background: -moz-linear-gradient(
    -90deg,
    rgba(8, 114, 201, 0.637),
    rgba(105, 200, 255, 0.493),
    rgba(105, 200, 255, 0.493)
  ); /* For Firefox 3.6 to 15 */
  background: linear-gradient(
    -90deg,
    rgba(8, 114, 201, 0.637),
    rgba(105, 200, 255, 0.493),
    rgba(105, 200, 255, 0.493)
  ); /* Standard syntax */
}

.vertical-bottom {
  position: absolute;
  bottom: 0px;
  left: 0px;
  width: 100%;
  padding-right: 10px;
  padding-left: 10px;
  padding-bottom: 10px;
}
.underline:after {
  margin: 5px 0 0px;
  height: 2px;
}
.text_center {
  text-align: center;
}
/* p {
  font-size: 20px;
  line-height: 1.363rem;
  font-weight: 400;
  color: rgb(184, 184, 184);
} */

.activity {
  background: rgba(255, 0, 0, 0);
  max-width: 120rem;
  width: 100%;
  height: 7rem;
  border-radius: 20px;
  padding: 0px 15px 0px 15px;
}
.col10 {
  padding-right: 5px;
  padding-left: 5px;
  padding-top: 5px;
  padding-bottom: 5px;
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
  border-radius: 20px;
}
.inner_position_bottom_bottom {
  position: absolute;
  display: block;
  text-align: center;
  height: 50px;
  width: 100%;
  bottom: 30px;
  z-index: 999;
}
.inner_position_bottom_center_b {
  position: absolute;
  display: block;
  text-align: center;
  height: 50px;
  width: 100%;
  bottom: 10px;
  left: 0px;
  z-index: 999;
}

h2 {
  font-size: 1.8rem;
  line-height: 2.363rem;
  font-weight: 500;
  text-transform: capitalize;
  letter-spacing: 1px;
  color: white;
}
h3 {
  /* position: relative; */
  font-size: 19px;
  line-height: 1.563rem;
  font-weight: 500;
  text-transform: capitalize;
  letter-spacing: 1px;
  color: white;
}
h4 {
  line-height: 1.563rem;
  font-weight: 500;
  text-transform: capitalize;
  letter-spacing: 1px;
  color: white;
}
#img {
  width: 100%;
  height: 300px;
  margin-bottom: 10px;
}
#imgs {
  width: 100%;
  height: 250px;
  padding: 5px;
}
.layout-top {
  position: relative;
  /* top: -300px; */
}
.text-left {
  text-align: left;
  padding-top: 25px;
}
.text-right {
  text-align: right;
  padding-top: 25px;
}
.second-title {
  position: relative;
  text-align: center;
  padding-top: 20px;
  padding-bottom: 20px;
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
  color: #ffffff;
  letter-spacing: 0;
  /* text-shadow: 1px 2px 3px #000000; */
}
.text-spac {
  letter-spacing: 0;
  text-shadow: 2px 2px 3px #000000;
}
.textshadow {
  text-shadow: 2px 2px 3px #000000;
  letter-spacing: 0;
}
@media screen and (max-width: 600px) {
  .text-left {
    text-align: center;
    padding-top: 10px;
  }

  .text-right {
    text-align: right;
    padding-top: 10px;
  }
}

.carousel__item {
  min-height: 200px;
  width: 100%;
  background-color: var(--vc-clr-primary);
  color: var(--vc-clr-white);
  font-size: 20px;
  border-radius: 8px;
  display: flex;
  justify-content: center;
  align-items: center;
}

.carousel__slide {
  padding: 10px;
}

.carousel__prev,
.carousel__next {
  box-sizing: content-box;
  border: 5px solid white;
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

/* card */
.card {
  background-color: #fff;
  border: 1px solid transparent;
  border-radius: 6px;
}
.card > .card-link {
  color: #333;
}
.card > .card-link:hover {
  text-decoration: none;
}
.card > .card-link .card-img img {
  border-radius: 6px 6px 0 0;
}
.card .card-img {
  position: relative;
  padding: 0;
  display: table;
}
.card .card-img .card-caption {
  position: absolute;
  right: 0;
  bottom: 16px;
  left: 0;
}
.card .card-body {
  display: table;
  width: 100%;
  padding: 12px;
}
.card .card-header {
  border-radius: 6px 6px 0 0;
  padding: 8px;
}
.card .card-footer {
  border-radius: 0 0 6px 6px;
  padding: 8px;
}
.card .card-left {
  position: relative;
  float: left;
  padding: 0 0 8px 0;
}
.card .card-right {
  position: relative;
  float: left;
  padding: 8px 0 0 0;
}
.card .card-body h1:first-child,
.card .card-body h2:first-child,
.card .card-body h3:first-child,
.card .card-body h4:first-child,
.card .card-body .h1,
.card .card-body .h2,
.card .card-body .h3,
.card .card-body .h4 {
  margin-top: 0;
}
.card .card-body .heading {
  display: block;
}
.card .card-body .heading:last-child {
  margin-bottom: 0;
}

.card .card-body .lead {
  text-align: center;
}

@media (min-width: 768px) {
  .card .card-left {
    float: left;
    padding: 0 8px 0 0;
  }
  .card .card-right {
    float: left;
    padding: 0 0 0 8px;
  }

  .card .card-4-8 .card-left {
    width: 33.33333333%;
  }
  .card .card-4-8 .card-right {
    width: 66.66666667%;
  }

  .card .card-5-7 .card-left {
    width: 41.66666667%;
  }
  .card .card-5-7 .card-right {
    width: 58.33333333%;
  }

  .card .card-6-6 .card-left {
    width: 50%;
  }
  .card .card-6-6 .card-right {
    width: 50%;
  }

  .card .card-7-5 .card-left {
    width: 58.33333333%;
  }
  .card .card-7-5 .card-right {
    width: 41.66666667%;
  }

  .card .card-8-4 .card-left {
    width: 66.66666667%;
  }
  .card .card-8-4 .card-right {
    width: 33.33333333%;
  }
}

/* -- default theme ------ */
.card-default {
  border-color: #ddd;
  background-color: #fff;
  margin-bottom: 24px;
}
.card-default > .card-header,
.card-default > .card-footer {
  color: #333;
  background-color: #ddd;
}
.card-default > .card-header {
  border-bottom: 1px solid #ddd;
  padding: 8px;
}
.card-default > .card-footer {
  border-top: 1px solid #ddd;
  padding: 8px;
}
.card-default > .card-img:first-child img {
  border-radius: 6px 6px 0 0;
}
.card-default > .card-left {
  padding-right: 4px;
}
.card-default > .card-right {
  padding-left: 4px;
}
.card-default p:last-child {
  margin-bottom: 0;
}
.card-default .card-caption {
  color: #fff;
  text-align: center;
  text-transform: uppercase;
}

/* -- price theme ------ */
.card-price {
  border-color: #999;
  background-color: #ededed;
  margin-bottom: 24px;
}
.card-price > .card-heading,
.card-price > .card-footer {
  color: #333;
  background-color: #fdfdfd;
}
.card-price > .card-heading {
  border-bottom: 1px solid #ddd;
  padding: 8px;
}
.card-price > .card-footer {
  border-top: 1px solid #ddd;
  padding: 8px;
}
.card-price > .card-img:first-child img {
  border-radius: 6px 6px 0 0;
}
.card-price > .card-left {
  padding-right: 4px;
}
.card-price > .card-right {
  padding-left: 4px;
}
.card-price .card-caption {
  color: #fff;
  text-align: center;
  text-transform: uppercase;
}
.card-price p:last-child {
  margin-bottom: 0;
}

.card-price .price {
  text-align: center;
  color: #337ab7;
  font-size: 3em;
  text-transform: uppercase;
  line-height: 0.7em;
  margin: 24px 0 16px;
}
.card-price .price small {
  font-size: 0.4em;
  color: #66a5da;
}
.card-price .details {
  list-style: none;
  margin-bottom: 24px;
  padding: 0 18px;
}
.card-price .details li {
  text-align: center;
  margin-bottom: 8px;
}
.card-price .buy-now {
  text-transform: uppercase;
}
.card-price table .price {
  font-size: 1.2em;
  font-weight: 700;
  text-align: left;
}
.card-price table .note {
  color: #666;
  font-size: 0.8em;
}
</style>
