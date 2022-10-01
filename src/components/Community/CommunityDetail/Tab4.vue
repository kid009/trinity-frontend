<template>
  <div class="container bg_tab">
    <!--------------------------------- hotel -------------------------------------------->
    <!-- <div v-show="community[0] != null" class="main-wraper">
      <div class="container bg_tab">
        <div class="row">
          <div class="col-md-12">
            <h2 class="text-h2 text-letter">โรงแรม</h2>
          </div>
        </div>

        <div class="row">
          <div class="top-baner arrows">
            <div
              class="swiper-container offers-slider"
              data-autoplay="0"
              data-loop="0"
              data-speed="500"
              data-slides-per-view="responsive"
              data-mob-slides="1"
              data-xs-slides="2"
              data-sm-slides="2"
              data-md-slides="3"
              data-lg-slides="3"
              data-add-slides="3"
            >
              <div class="swiper-wrapper">
                <div
                  class="swiper-slide"
                  data-val="0"
                  v-for="items in community"
                  v-bind:key="items.hotel_id"
                >
                  <div class="offers-block radius-mask">
                    <div class="clip">
                      <div class="bg bg-bg-chrome act">
                        <img
                          style="height: 375px"
                          class="img-full img-responsive"
                          :src="items.hotel_image_cover_link"
                          alt=""
                        />
                      </div>
                    </div>
                    <div class="tour-layer delay-1"></div>

                    <div class="vertical-bottom">
                      <h3 class="text-letter">{{ items.hotel_name }}</h3>
                      <hr />
                      <p></p>
                      <a
                        @click="on_click('hotel', items.hotel_id)"
                        class="c-button bg-aqua hv-aqua-o b-40"
                        ><span>เพิ่มเติม</span></a
                      >
                    </div>
                  </div>
                </div>
              </div>
              <div class="pagination poin-style-1 pagination-hidden"></div>
            </div>
            <div class="swiper-arrow-left offers-arrow">
              <span class="fa fa-angle-left"></span>
            </div>
            <div class="swiper-arrow-right offers-arrow">
              <span class="fa fa-angle-right"></span>
            </div>
          </div>
        </div>
      </div>
    </div> -->
    <!--------------------------------- hotel -------------------------------------------->

    <!--------------------------- hotel -------------------------------------------------------->
    <div class="grid-content clearfix" v-show="community[0] != null">
      <div>
        <div class="container box">
          <div class="row" id="style-1">
            <h3 class="text-h2 text-letter">โรงแรม</h3>
            <div class="scrollbar">
              <div
                class="list-item-entry"
                v-for="items in community"
                v-bind:key="items.hotel_id"
              >
                <div class="hotel-item style-10 bg-white">
                  <div class="table-view">
                    <a @click="on_click('hotel', items.hotel_id)">
                      <div class="radius-top">
                        <img
                          id="img-travel"
                          :src="items.hotel_image_cover_link"
                          alt=""
                        />

                        <!-- <img
                        v-show="!countErrorproduct.includes(items.product_id)"
                        id="img-travel"
                        :src="items.product_image_cover_link"
                        @error="checkImg(items.product_id, 'product')"
                        alt=""
                      />
                      <img
                        v-show="countErrorproduct.includes(items.product_id)"
                        id="img-travel"
                        src="
                            images/nopicture.jpg
                          "
                        alt=""
                      /> -->
                      </div>
                      <div class="title">
                        <h3 class="text-letter">{{ items.hotel_name }}</h3>
                      </div>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!--------------------------- hotel -------------------------------------------------------->

    <!--------------------------------- homestay -------------------------------------------->

    <!-- <div v-show="homestay[0] != null" class="main-wraper">
      <div class="container">
        <div class="row">
          <div class="col-md-12">
            <h2 class="text-h2 text-letter">รีสอร์ท</h2>
          </div>
        </div>

        <div class="row">
          <div class="top-baner arrows">
            <div
              class="swiper-container offers-slider"
              data-autoplay="0"
              data-loop="0"
              data-speed="500"
              data-slides-per-view="responsive"
              data-mob-slides="1"
              data-xs-slides="2"
              data-sm-slides="2"
              data-md-slides="3"
              data-lg-slides="3"
              data-add-slides="3"
            >
              <div class="swiper-wrapper">
                <div
                  class="swiper-slide"
                  data-val="0"
                  v-for="items in homestay"
                  v-bind:key="items.homestay_id"
                >
                  <div class="offers-block radius-mask">
                    <div class="clip">
                      <div class="bg bg-bg-chrome act">
                        <img
                          style="height: 375px"
                          class="img-full img-responsive"
                          :src="items.homestay_image_cover_link"
                          alt=""
                        />
                      </div>
                    </div>
                    <div class="tour-layer delay-1"></div>

                    <div class="vertical-bottom">
                      <h3 class="text-letter">{{ items.homestay_name }}</h3>
                      <hr />
                      <p></p>
                      <a
                        @click="on_click('homestay', items.homestay_id)"
                        class="c-button bg-aqua hv-aqua-o b-40"
                        ><span>เพิ่มเติม</span></a
                      >
                    </div>
                  </div>
                </div>
              </div>
              <div class="pagination poin-style-1 pagination-hidden"></div>
            </div>
            <div class="swiper-arrow-left offers-arrow">
              <span class="fa fa-angle-left"></span>
            </div>
            <div class="swiper-arrow-right offers-arrow">
              <span class="fa fa-angle-right"></span>
            </div>
          </div>
        </div>
      </div>
    </div> -->

    <!--------------------------------- homestay -------------------------------------------->

    <!--------------------------- hotel -------------------------------------------------------->
    <div class="grid-content clearfix" v-show="homestay[0] != null">
      <div>
        <div class="container box">
          <div class="row" id="style-1">
            <h3 class="text-h2 text-letter">รีสอร์ท</h3>
            <div class="scrollbar">
              <div
                class="list-item-entry"
                v-for="items in homestay"
                v-bind:key="items.homestay_id"
              >
                <div class="hotel-item style-10 bg-white">
                  <div class="table-view">
                    <a @click="on_click('homestay', items.homestay_id)">
                      <div class="radius-top">
                        <img
                          id="img-travel"
                          :src="items.homestay_image_cover_link"
                          alt=""
                        />

                        <!-- <img
                        v-show="!countErrorproduct.includes(items.product_id)"
                        id="img-travel"
                        :src="items.product_image_cover_link"
                        @error="checkImg(items.product_id, 'product')"
                        alt=""
                      />
                      <img
                        v-show="countErrorproduct.includes(items.product_id)"
                        id="img-travel"
                        src="
                            images/nopicture.jpg
                          "
                        alt=""
                      /> -->
                      </div>
                      <div class="title">
                        <h3 class="text-letter">{{ items.homestay_name }}</h3>
                      </div>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!--------------------------- hotel -------------------------------------------------------->

    <!--------------------------------- restaurant -------------------------------------------->

    <!-- <div v-show="restaurant[0] != null" class="main-wraper">
      <div class="container">
        <div class="row">
          <div class="col-md-12">
            <h2 class="text-h2 text-letter">ร้านอาหาร</h2>
          </div>
        </div>

        <div class="row">
          <div class="top-baner arrows">
            <div
              class="swiper-container offers-slider"
              data-autoplay="0"
              data-loop="0"
              data-speed="500"
              data-slides-per-view="responsive"
              data-mob-slides="1"
              data-xs-slides="2"
              data-sm-slides="2"
              data-md-slides="3"
              data-lg-slides="3"
              data-add-slides="3"
            >
              <div class="swiper-wrapper">
                <div
                  class="swiper-slide"
                  data-val="0"
                  v-for="items in restaurant"
                  v-bind:key="items.restaurant_id"
                >
                  <div class="offers-block radius-mask">
                    <div class="clip">
                      <div class="bg bg-bg-chrome act">
                        <img
                          style="height: 375px"
                          class="img-full img-responsive"
                          :src="items.restaurant_image_cover_link"
                          alt=""
                        />
                      </div>
                    </div>
                    <div class="tour-layer delay-1"></div>

                    <div class="vertical-bottom">
                      <h3 class="text-letter">{{ items.restaurant_name }}</h3>
                      <hr />
                      <p></p>
                      <a
                        @click="on_click('restaurant', items.restaurant_id)"
                        class="c-button bg-aqua hv-aqua-o b-40"
                        ><span>เพิ่มเติม</span></a
                      >
                    </div>
                  </div>
                </div>
              </div>
              <div class="pagination poin-style-1 pagination-hidden"></div>
            </div>
            <div class="swiper-arrow-left offers-arrow">
              <span class="fa fa-angle-left"></span>
            </div>
            <div class="swiper-arrow-right offers-arrow">
              <span class="fa fa-angle-right"></span>
            </div>
          </div>
        </div>
      </div>
    </div> -->

    <!--------------------------------- restaurant -------------------------------------------->

    <!--------------------------- hotel -------------------------------------------------------->
    <div class="grid-content clearfix" v-show="restaurant[0] != null">
      <div>
        <div class="container box">
          <div class="row" id="style-1">
            <h3 class="text-h2 text-letter">ร้านอาหาร</h3>
            <div class="scrollbar">
              <div
                class="list-item-entry"
                v-for="items in restaurant"
                v-bind:key="items.restaurant_id"
              >
                <div class="hotel-item style-10 bg-white">
                  <div class="table-view">
                    <a @click="on_click('restaurant', items.restaurant_id)">
                      <div class="radius-top">
                        <img
                          id="img-travel"
                          :src="items.restaurant_image_cover_link"
                          alt=""
                        />

                        <!-- <img
                        v-show="!countErrorproduct.includes(items.product_id)"
                        id="img-travel"
                        :src="items.product_image_cover_link"
                        @error="checkImg(items.product_id, 'product')"
                        alt=""
                      />
                      <img
                        v-show="countErrorproduct.includes(items.product_id)"
                        id="img-travel"
                        src="
                            images/nopicture.jpg
                          "
                        alt=""
                      /> -->
                      </div>
                      <div class="title">
                        <h3 class="text-letter">{{ items.restaurant_name }}</h3>
                      </div>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!--------------------------- hotel -------------------------------------------------------->
  </div>
</template>

<script>
import { onMounted, ref } from "vue";
import axios from "axios";
import { BASE_API_URL } from "../../../constants";

export default {
  name: "Tab4",
  setup() {
    let id = window.location.search;
    id = id.split("=");
    id = id[1];

    const community = ref([]);
    const restaurant = ref([]);
    const homestay = ref([]);

    const getData = async () => {
      const response = await axios.get(
        `${BASE_API_URL}/community-tourism/hotel/` + id
      );
      community.value = response.data.data;

      const responsehomestay = await axios.get(
        `${BASE_API_URL}/community-tourism/homestay/` + id
      );
      homestay.value = responsehomestay.data.data;

      const responseRestaurant = await axios.get(
        `${BASE_API_URL}/community-tourism/restaurant/` + id
      );
      restaurant.value = responseRestaurant.data.data;
    };

    const on_click = (page, id) => {
      window.location =
        "facilitationdetailindexpage?page=" + page + "&group=0&id=" + id;
    };

    onMounted(() => {
      getData();
    });

    return { community, restaurant, homestay, on_click };
  },
};
</script>

<style scoped>
.fontstyle {
  font-family: "Prompt", sans-serif;
}
.hotel-item:hover {
  transform: scale(1.1);
}
.bg_tab {
  background: rgb(250, 250, 250);
}
.text-letter {
  letter-spacing: 0;
}
.text-size {
  font-size: larger;
  color: #000;
}
.padd-90 {
  padding-bottom: 0px;
}
.Detail {
  padding-top: 50px;
}
.tab-box {
  width: 72%;
}
.text-top h2 {
  padding-top: 20px;
  padding-bottom: 0;
}
h3 {
  padding-bottom: 20px;
}

h5 {
  padding-top: 15px;
}
h2 {
  padding-bottom: 20px;
  padding-top: 20px;
}
.text-h2 {
  padding-bottom: 40px;
  padding-top: 40px;
  padding-left: 20px;
}

hr {
  border-top: 1px solid #ffba73;
}
.grid-container-contact {
  display: grid;
  grid-template-columns: repeat(2, minmax(150px, 1fr));
  grid-gap: 20px;
  padding-bottom: 20px;
  align-items: stretch;
}
.grid-container-contact .text-size {
  font-size: 1rem;
}
.grid-container-datacom {
  display: grid;
  grid-template-columns: repeat(2, minmax(150px, 1fr));
  grid-gap: 20px;
  padding-bottom: 20px;
  align-items: stretch;
  padding-top: 40px;
}
.grid-container-datacom img {
  box-shadow: 2px 2px 5px #777;
}
@media screen and (max-width: 600px) {
  .grid-container-datacom {
    grid-template-columns: auto;
  }
}
.vertical-bottom {
  padding: 10px;
  background: #206ab052;
  backdrop-filter: blur(10px);
}
.offers-block {
  border-radius: 10px;
  box-shadow: 1px 1px 7px #777;
}
.vertical-bottom h3 {
  color: #ffffff;
  padding: 0;
}
.vertical-bottom hr {
  margin-top: 0;
}
.grid-container-datacom img {
  border-radius: 10px;
}
.c-button {
  width: 100%;
  text-align: center;
  border-radius: 10px;
}

/* scrollbar  */
.scrollbar {
  display: flex;
  gap: 5px;
  border: 20px solid #f8f8f800;
  height: fit-content;
  overflow-x: auto;
  -ms-scroll-snap-type: x mandatory;
  scroll-snap-type: x mandatory;
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
#img-travel {
  width: auto;
  max-width: 250px;
  height: 200px;
  overflow: hidden;
  display: block;
  margin: auto;
}
</style>
