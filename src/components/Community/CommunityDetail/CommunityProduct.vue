<template>
  <!-- <div v-show="community != ''"> -->
  <!-- <div class="main-wraper padd-120">
      <div class="container">
        <div class="row">
          <div class="col-md-12">
            <div class="second-title">
              <h2 class="text_letter">ผลิตภัณฑ์ชุมชน</h2>
            </div>
          </div>
        </div>
        <div class="row">
          <div class="arrows">
            <div
              class="swiper-container pad-15"
              data-autoplay="0"
              data-loop="0"
              data-speed="1000"
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
                  class="
                    swiper-slide
                    item
                    gal-item
                    grid-sizer
                    col10
                    col-mob-12 col-xs-6 col-sm-4
                  "
                  v-show="grid == true"
                  v-for="items in community"
                  v-bind:key="items.product_id"
                >
                  <div class="">
                    
                    <div class="">
                      <div class="hotel-item style-2">
                        <div class="radius-top">
                          <img :src="items.product_image_cover_link" alt="" />
                        </div>
                        <div class="title">
                          <h4>
                            <b class="text_letter">{{ items.product_name }}</b>
                          </h4>

                          <a
                            @click="
                              on_click(
                                'product',
                                items.product_group_id,
                                items.product_id
                              )
                            "
                            class="c-button bg-dr-blue hv-dr-blue-o b-50"
                            >เพิ่มเติม</a
                          >
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="pagination poin-style-2"></div>
            </div>
          </div>
        </div>
      </div>
    </div> -->

  <div class="container" v-show="community != ''">
    <div class="row" id="style-1">
      <h3 class="letter-layout">ผลิตภัณฑ์ชุมชน</h3>

      <div class="scrollbar">
        <div
          class="list-item-entry"
          v-for="items in community"
          v-bind:key="items.product_id"
        >
          <div class="hotel-item style-10 bg-white">
            <div class="table-view">
              <a
                @click="
                  on_click('product', items.product_group_id, items.product_id)
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
  <!-- <div class="container">
      <div class="row">
        <div class="col-md-12">
          <h2 class="text-h2">ผลิตภัณฑ์ชุมชน</h2>
        </div>
      </div> -->

  <!-- <div class="row">
        <div class="top-baner arrows">
          <div
            class="swiper-container offers-slider"
            data-autoplay="0"
            data-loop="1"
            data-speed="500"
            data-slides-per-view="responsive"
            data-mob-slides="1"
            data-xs-slides="2"
            data-sm-slides="2"
            data-md-slides="3"
            data-lg-slides="3"
            data-add-slides="2"
          >
            <div class="swiper-wrapper">
              <div
                class="swiper-slide"
                data-val="0"
                v-for="items in community"
                v-bind:key="items.product_id"
              >
                <div class="offers-block radius-mask">
                  <div class="clip">
                    <div class="bg bg-bg-chrome act">
                      <img
                        class=""
                        :src="items.product_image_cover_link"
                        alt=""
                      />
                    </div>
                  </div>
                  <div class="tour-layer delay-1"></div>

                  <div class="vertical-bottom">
                    <h3 class="text-letter">{{ items.product_name }}</h3>
                    <hr />
                    <p></p>
                    <a
                      @click="
                        on_click(
                          'product',
                          items.product_group_id,
                          items.product_id
                        )
                      "
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
      </div> -->
  <!-- </div> -->
  <!-- </div> -->
</template>

<script>
import { onMounted, ref } from "vue";
import axios from "axios";
// import { BASE_API_URL } from "../../../constants";

export default {
  name: "CommunityProduct",
  components: {},
  setup() {
    let id = window.location.search;
    id = id.split("=");
    id = id[1];

    const community = ref([]);
    const grid = ref(false);

    // const getData = async () => {
    //   const response = await axios.get(
    //     `${BASE_API_URL}/community-tourism/product/` + id
    //   );
    //   community.value = response.data.data;
    // };

    axios
      .get("https://api.trinitytrip.com/api/community-tourism/product/" + id)
      .then(function (response) {
        community.value = response.data.data;
      });

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
      setTimeout(() => {
        grid.value = true;
      }, 2000);
    });

    return { community, on_click, grid };
  },
};
</script>

<style scoped>
.second-title {
  position: relative;
  text-align: left;
  padding-top: 10px;
  padding-bottom: 15px;
}
.padd-120 {
  padding-bottom: 20px;
}
.text_letter {
  letter-spacing: 0;
}
.hotel-item {
  box-shadow: 2px 1px 5px #222222;
}

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
  width: 280px;

  transition: 0.6s;
}
.hotel-item:hover {
  transform: scale(1.1);
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
  height: 100px;
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
.grid-content .list-item-entry {
  float: left;
  width: fit-content;
  padding-right: 15px;
  padding-left: 15px;
}
.letter-layout {
  letter-spacing: 0;
  padding: 20px;
}
.test {
  width: 500px;
  position: absolute;
  background: #555;
}
/* 

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
  color: #206ab0;
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
} --> */
</style>
