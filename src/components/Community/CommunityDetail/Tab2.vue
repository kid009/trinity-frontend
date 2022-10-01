<template>
  <div class="">
    <!--------------------------------- hotel -------------------------------------------->
    <!-- <div class="main-wraper">
      <div class="container bg_tab">
        <div class="row">
          <div class="col-md-12">
            <h2 class="text-h2 text-letter">
              กิจกรรมวัฒนธรรมพื้นบ้าน ของแต่ละชุมชน
            </h2>
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
                  v-bind:key="items.community_name"
                >
                  <div class="offers-block radius-mask">
                    <div class="clip">
                      <div class="bg bg-bg-chrome act">
                        <img
                          style="height: 375px"
                          class="img-full img-responsive"
                          :src="items.culture_image_cover_link"
                          alt=""
                        />
                      </div>
                    </div>
                    <div class="tour-layer delay-1"></div>

                    <div class="vertical-bottom">
                      <h3 class="text-letter">{{ items.culture_name }}</h3>
                      <hr />
                      <p></p>

                      <a
                        :href="
                          'CommunityPageDetail?page=culture&cultureid=' +
                          items.culture_id +
                          '&id=' +
                          items.community_id
                        "
                        class="c-button bg-dr-blue hv-dr-blue-o b-50"
                        >เพิ่มเติม</a
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

    <!--------------------------- product -------------------------------------------------------->
    <div class="grid-content clearfix bg_tab">
      <div>
        <div class="container box">
          <div class="row" id="style-1">
            <h3 class="text-h2 text-letter">
              กิจกรรมวัฒนธรรมพื้นบ้าน ของแต่ละชุมชน
            </h3>
            <div class="scrollbar">
              <div
                class="list-item-entry"
                v-for="items in community"
                v-bind:key="items.community_name"
              >
                <div class="hotel-item style-10 bg-white">
                  <div class="table-view">
                    <a
                      :href="
                        'CommunityPageDetail?page=culture&cultureid=' +
                        items.culture_id +
                        '&id=' +
                        items.community_id
                      "
                    >
                      <div class="radius-top">
                        <img
                          id="img-travel"
                          :src="items.culture_image_cover_link"
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
                        <h3 class="text-letter">{{ items.culture_name }}</h3>
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
    <!--------------------------- product -------------------------------------------------------->
  </div>
</template>

<script>
import { onMounted, ref } from "vue";
import axios from "axios";
import { BASE_API_URL } from "../../../constants";

export default {
  name: "Tab2",
  setup() {
    let id = window.location.search;
    id = id.split("=");
    id = id[1];

    const community = ref([]);

    const getData = async () => {
      const response = await axios.get(
        `${BASE_API_URL}/community-tourism/culture/` + id
      );
      community.value = response.data.data;
    };

    onMounted(() => {
      getData();
    });

    return { community };
  },
};
</script>

<style scoped>
.fontstyle {
  font-family: "Prompt", sans-serif;
}
.bg_tab {
  background: rgb(250, 250, 250);
}
.hotel-item:hover {
  transform: scale(1.1);
}
.text-letter {
  letter-spacing: 0;
}
.img-size {
  height: 350px;
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
  text-align: center;
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
