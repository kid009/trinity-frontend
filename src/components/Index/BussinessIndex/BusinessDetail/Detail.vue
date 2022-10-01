<template>
  <!-- <Banner msg="กิจกรรม" img="images/community/commu6.jpg" /> -->

  <!-- This demo uses flex grid but you can use float grid too -->
  <div class="container box">
    <!-- <main > -->
    <!-- <article> -->

    <!-- <div
          class="detail-header"
          v-for="items in business"
          v-bind:key="items.bussiness_id"
        >
          <div >
            <h4>ชื่อ</h4>
            <p>{{ items.bussiness_name }}</p>
            <h4>รายละเอียด</h4>
            <p v-html="items.bussiness_detail"></p>
            <h4>ประวัติ</h4>
            <p v-html="items.bussiness_history"></p>


          </div>
        </div> -->

    <!---------------------------------- --------------------------------------------->

    <div v-for="items in business" v-bind:key="items.bussiness_id">
      <div class="container">
        <div class="grid-container-datacom">
          <div class="text-top">
            <img
              class="team-img img-responsive"
              flower
              :src="items.bussiness_image_cover_link"
              alt=""
            />
          </div>
          <div class="text-top-contect center">
            <h2>ติดต่อ</h2>
            <hr />

            <div class="">
              <ul>
                <li class="text-size">ชื่อ : {{ items.user_name }}</li>
                <li class="text-size">ติดต่อ : {{ items.user_telephone }}</li>
              </ul>
              <!-- <ul>
                <li class="text-size"></li>
                <li class="text-size"></li>
                <li class="text-size"></li>
                <li class="text-size"></li>
              </ul> -->

              <div class="icon-contaxt">
                <a :href="items.user_facebook">
                  <img src="images/icon/facebook.png" alt=""
                /></a>
                <a :href="items.user_instragram">
                  <img src="images/icon/instagram.png" alt=""
                /></a>
                <a :href="'HTTP://LINE.ME/TI/P/' + items.user_line">
                  <img src="images/icon/line.png" alt=""
                /></a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!---------------------------------- --------------------------------------------->
    <!-- </article> -->
    <!-- 
        <Contact2
            :user_name="contact.user_name"
            :user_telephone="contact.user_telephone"
            :user_line="contact.user_line"
            :user_facebook="contact.user_facebook"
            :user_instragram="contact.user_instragram"
            :bussiness_link="contact.bussiness_link"
            :user_image_cover="contact.user_image_cover"
          /> -->

    <!-- </main> -->

    <!-------------------------------------- ---------------------------------------------------->
    <!-- <main > -->
    <div class="main-wraper padd-90">
      <div class="container">
        <div class="grid-content block-content type-2 clearfix">
          <div class="list-item-entry">
            <div class="hotel-item style-10 bg-white">
              <div class="table-view">
                <div class="title hotel-middle cell-view">
                  <div class="row padd-90">
                    <div class="col-xs-12 col-sm-4 col-md-12">
                      <div class="detail-content">
                        <div class="detail-content-block">
                          <div class="simple-tab color-1 tab-wrapper">
                            <div class="tab-nav-wrapper">
                              <div class="nav-tab clearfix">
                                <div class="nav-tab-item active fontstyle">
                                  ความรู้
                                </div>
                                <div class="nav-tab-item fontstyle">
                                  ผลิตภัณฑ์ธุรกิจ
                                </div>
                                <div class="nav-tab-item fontstyle">
                                  การบริการ
                                </div>
                                <div class="nav-tab-item fontstyle">
                                  ผลิตภัณฑ์ท่องเที่ยว
                                </div>
                                <div class="nav-tab-item fontstyle">
                                  ผลิตภัณฑ์ชุมชน
                                </div>
                              </div>
                            </div>
                            <div class="tabs-content clearfix">
                              <!--------------------------------------- tab1 ------------------------------------------>
                              <div>
                                <TabBusinessKnowhow
                                  :user_name="contact.create_by"
                                />
                              </div>
                              <!--------------------------------------- tab1 ------------------------------------------>

                              <!--------------------------------------- tab2 ------------------------------------------>
                              <div>
                                <TabBusinessProduct
                                  :user_name="contact.create_by"
                                />
                              </div>

                              <!--------------------------------------- tab2 ------------------------------------------>

                              <!--------------------------------------- tab3 ------------------------------------------>
                              <div>
                                <TabBusinessService
                                  :user_name="contact.create_by"
                                />
                              </div>

                              <!--------------------------------------- tab3 ------------------------------------------>

                              <!--------------------------------------- tab4 ------------------------------------------>
                              <div>
                                <TabBusinessProductTourism
                                  :user_name="contact.create_by"
                                />
                              </div>

                              <!--------------------------------------- tab4 ------------------------------------------>

                              <!--------------------------------------- tab5 ------------------------------------------>
                              <div>
                                <TabBusinessProductCommunity
                                  :user_name="contact.create_by"
                                />
                              </div>

                              <!--------------------------------------- tab5 ------------------------------------------>
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
        </div>
      </div>
    </div>
    <!-- </main> -->
    <!-------------------------------------- ---------------------------------------------------->
  </div>
</template>

<script>
import { onMounted, ref } from "vue";
import axios from "axios";
import { BASE_API_URL } from "../../../../constants";

import TabBusinessService from "./TabBusinessService.vue";
import TabBusinessKnowhow from "./TabBusinessKnowhow.vue";
import TabBusinessProduct from "./TabBusinessProduct.vue";
import TabBusinessProductCommunity from "./TabBusinessProductCommunity.vue";
import TabBusinessProductTourism from "./TabBusinessProductTourism.vue";

export default {
  name: "Detail",
  components: {
    TabBusinessService,
    TabBusinessKnowhow,
    TabBusinessProduct,
    TabBusinessProductCommunity,
    TabBusinessProductTourism,
  },

  setup() {
    const business = ref([]);
    const contact = ref([]);

    let id = window.location.search;
    id = id.split("=");
    id = id[1];

    const getData = async () => {
      const responsebusiness = await axios.get(
        `${BASE_API_URL}/businesstourism/BusinessDetail/` + id
      );
      business.value = responsebusiness.data.data;

      const response = await axios.get(
        `${BASE_API_URL}/businesstourism/BusinessDetail/` + id
      );
      contact.value = response.data.data[0];
    };

    onMounted(() => {
      getData();
    });

    return { business, contact, id };
  },
};
</script>

<style scoped>
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
}
.icon-contaxt {
  padding: 10px;
  align-self: center;
  text-align: center;
  margin-top: 10px;
}
.icon-contaxt img {
  padding: 1px;
  text-align: center;
  width: 41px;
  margin: 5px;
  box-shadow: 1px 1px 0px #f8f8f8;
}
@media only screen and (min-width: 768px) {
  .icon-contaxt img {
    width: 30px;
  }
}
@media screen and (max-width: 600px) {
  .icon-contaxt img {
    width: 30px;
  }
  .center {
    text-align: center;
  }
}
</style>
