<template>
  <CommunityProduct />
  <div v-for="items in community" v-bind:key="items.community_name">
    <div class="container">
      <div class="grid-container-datacom">
        <div class="text-top">
          <img
            class="team-img img-responsive"
            flower
            :src="items.community_image_cover_link"
            alt=""
          />
        </div>
        <div class="text-top-contect">
          <h2>ติดต่อ</h2>
          <hr />

          <div class="col-xs-12">
            <div class="col-md-6">
              <ul>
                <li class="text-size">ชื่อ : {{ items.community_contact }}</li>
                <li class="text-size">
                  ติดต่อ : {{ items.community_telephone }}
                </li>
                <li class="text-size">ตำแหน่ง :</li>
              </ul>
            </div>
            <div class="col-md-6">
              <ul>
                <li class="text-size">โรงพยาบาล</li>
                <li class="text-size">ติดต่อ :</li>
                <li class="text-size">สถานีตำรวจภูธร</li>
                <li class="text-size">ติดต่อ :</li>
              </ul>
            </div>
            <div class="icon-contaxt">
              <a :href="items.community_facebook">
                <img src="images/icon/facebook.png" alt=""
              /></a>
              <a :href="items.community_instagram">
                <img src="images/icon/instagram.png" alt=""
              /></a>
              <a :href="'HTTP://LINE.ME/TI/P/' + items.community_line">
                <img src="images/icon/line.png" alt=""
              /></a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>

  <div
    class="Detail"
    v-for="items in community"
    v-bind:key="items.community_name"
  >
    <div class="main-wraper padd-90">
      <div class="container">
        <div class="row">
          <div class="col-md-12">
            <div class="simple-tab color-1 tab-wrapper">
              <div class="tab-nav-wrapper">
                <div class="nav-tab clearfix">
                  <div class="">
                    <div class="button_st">
                      <a @click="changeTab(1)"
                        ><h5 class="text-letter">นว้ตกรรมชุมชน</h5></a
                      >
                    </div>

                    <div class="button_st">
                      <a @click="changeTab(2)"
                        ><h5 class="text-letter">กิจกรรมท่องเที่ยว</h5></a
                      >
                    </div>

                    <div class="button_st">
                      <a @click="changeTab(3)"
                        ><h5 class="text-letter">ปฎิทินท่องเที่ยว</h5></a
                      >
                    </div>

                    <div class="button_st">
                      <a @click="changeTab(4)"
                        ><h5 class="text-letter">อาหารและที่พัก</h5></a
                      >
                    </div>

                    <div class="button_st">
                      <a @click="changeTab(5)"
                        ><h5 class="text-letter">รูปภาพ</h5></a
                      >
                    </div>

                    <div class="button_st">
                      <a @click="changeTab(6)"
                        ><h5 class="text-letter">คณะกรรมการ</h5></a
                      >
                    </div>

                    <div class="button_st">
                      <a @click="changeTab(7)"
                        ><h5 class="text-letter">ระบบนำทาง</h5></a
                      >
                    </div>

                    <div class="button_st">
                      <a @click="changeTab(8)"
                        ><h5 class="text-letter">ความรู้ชุมชน</h5></a
                      >
                    </div>
                  </div>
                </div>
              </div>
              <div class="tabs-content clearfix">
                <!--  ข้อมูลชุมชน  -->
                <div v-show="Tab == 1">
                  <div class="col-md-12"><Tab1 /></div>
                </div>

                <!--  ข้อมูลชุมชน  -->

                <!--  กิจกรรมชุมชน  -->
                <div v-show="Tab == 2">
                  <div class="col-md-12"><Tradition /></div>
                </div>

                <!--  กิจกรรมชุมชน  -->

                <!--  ประเพณี  -->
                <div v-show="Tab == 3">
                  <div class="col-md-12"><Tab2 /></div>
                </div>

                <!--  ประเพณี  -->

                <!--  อาหารและที่พัก  -->
                <div v-show="Tab == 4">
                  <div class="col-md-12"><Tab4 /></div>
                </div>

                <!--  อาหารและที่พัก  -->

                <!--  รูปภาพ  -->
                <div v-show="Tab == 5">
                  <div class="col-md-12"><CommunityImages /></div>
                </div>

                <!--  รูปภาพ  -->

                <!--  ผลิตภัณฑ์ชุมชน  -->
                <!-- <Tab3 /> -->
                <!--  ผลิตภัณฑ์ชุมชน  -->

                <!------- คณะกรรมการ ------------>
                <div v-show="Tab == 6">
                  <div class="col-md-12"><Board /></div>
                </div>

                <!------- คณะกรรมการ ------------>

                <!--  แผนที่  -->
                <div v-show="Tab == 7">
                  <div class="col-md-12"><Tab5 /></div>
                </div>

                <!--  แผนที่  -->
                <div v-show="Tab == 8">
                  <div class="col-md-12"><Knowhow /></div>
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

import Tab1 from "./Tab1.vue";
import Tradition from "./Tradition.vue";
import Tab2 from "./Tab2.vue";
// import Tab3 from "./Tab3.vue";
import Tab4 from "./Tab4.vue";
import CommunityImages from "./CommunityImages.vue";
import Tab5 from "./Tab5.vue";

import CommunityProduct from "./CommunityProduct.vue";
import Board from "./Board.vue";
import Knowhow from "./Knowhow.vue";

export default {
  name: "Detail",
  components: {
    Tab1,
    Tradition,
    Tab2,
    // Tab3,
    Tab4,
    CommunityImages,
    Tab5,
    CommunityProduct,
    Board,
    Knowhow,
  },
  setup() {
    // const Tab = ref("1");
    // Tab.value = sessionStorage.getItem("Tab");

    // if (Tab.value == null) {
    //   Tab.value = 1;
    // }

    // const changeTab = (Tab) => {
    //   sessionStorage.setItem("Tab", Tab);
    //   location.reload();
    // };

    const Tab = ref("7");
    setTimeout(() => {
      Tab.value = 1;
    }, 1000);

    const changeTab = (Tabs) => {
      Tab.value = Tabs;
    };

    let id = window.location.search;
    id = id.split("=");
    id = id[1];

    const community = ref([]);

    const getData = async () => {
      const response = await axios.get(
        `${BASE_API_URL}/community-tourism/communityDetail/` + id
      );

      community.value = response.data.data;
    };

    onMounted(() => {
      getData();
    });

    return { community, changeTab, Tab };
  },
};
</script>

<style scoped>
.button_st:hover {
  transform: scale(1.1);
}
.button_st {
  display: inline-block;
  height: 50px;
  font-size: 12px;
  line-height: 50px;
  font-weight: 700;
  letter-spacing: 0.5px;
  text-transform: uppercase;
  padding: 0px 30px;
  border: 1px solid #eaeaea;
  /* border-left: none; */
  cursor: pointer;
  border-radius: 3px;
}

.text-letter {
  letter-spacing: 0;
}
.text-size {
  font-size: larger;
  color: #000;
  /* text-align: center; */
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
  margin-top: 20px;
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
</style>
