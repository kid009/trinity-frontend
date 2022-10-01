<template>
  <div>
    <div class="top-baner map-baner padd-90-0">
      <div class="">
        <div
          id="map-canvas"
          class="bg-bg-chrome"
          v-lazy="'images/bg/bg_leans.jpg'"
        >
          <div id="map-canvas" class="bg-bg-chrome color-bg-img"></div>
        </div>
        <div class="inner_position_top_bottom">
          <h1 class="shadow">การท่องเที่ยวโดยชุมชน</h1>
          <h3 class="shadow">(COMMUNITY BASED TOURISM CBT)</h3>
          <h4>
            คือ การท่องเที่ยวที่คำนึงถึงความยั่งยืนของสิ่งแวดล้อม สังคม
            และวัฒนธรรมของชุมชนกำหนด ทิศทางโดยชุมชน จัดการโดยชุมชน
          </h4>
          <h4>
            เพื่อชุมชน และชุมชนมีบทบาทเป็นเจ้าของในการจัดการ ดูแล
            เพื่อให้เกิดการเรียนรู้แก่ผู้มาเยือน
          </h4>
        </div>
      </div>
    </div>
    <div class="container box padd-120">
      <div class="">
        <!-- <div class="baner-bar"> -->
        <div class="baner-bar">
          <div class="row">
            <div class="col-xs-12">
              <div class="col-md-1"></div>
              <div class="col-md-2">
                <div class="row">
                  <a href="LearningResearcher">
                    <div class="block_grids">
                      <div class="hotel-item">
                        <div class="">
                          <!-- <img
                            class="img-center"
                            src="images/homepage/ท่องเที่ยวชุมชน.png"
                            alt=""
                          /> -->
                          <div
                            class="img-center bg-bg-chrome"
                            v-lazy="'images/learnmore/1.png'"
                          >
                            <div class="img-center color-bg-img"></div>
                          </div>
                          <div class="inner_position_bottom_bottom">
                            <h3 class="shadow">นักวิจัย</h3>
                          </div>
                        </div>
                      </div>
                    </div>
                  </a>
                </div>
              </div>
              <div class="col-md-2">
                <div class="row">
                  <a href="LearningCommunity">
                    <div class="block_grids">
                      <div class="hotel-item">
                        <div class="">
                          <div
                            class="img-center bg-bg-chrome"
                            v-lazy="'  images/learnmore/2.png'"
                          >
                            <div class="img-center color-bg-img"></div>
                          </div>
                          <div class="inner_position_bottom_bottom">
                            <h3 class="shadow">ชุมชน</h3>
                          </div>
                        </div>
                      </div>
                    </div>
                  </a>
                </div>
              </div>
              <div class="col-md-2">
                <div class="row">
                  <a href="LearningTour">
                    <div class="block_grids">
                      <div class="hotel-item">
                        <div class="">
                          <div
                            class="img-center bg-bg-chrome"
                            v-lazy="'images/learnmore/3.png'"
                          >
                            <div class="img-center color-bg-img"></div>
                          </div>
                          <div class="inner_position_bottom_bottom">
                            <h3 class="shadow">นักท่องเที่ยว</h3>
                          </div>
                        </div>
                      </div>
                    </div>
                  </a>
                </div>
              </div>
              <div class="col-md-2">
                <div class="row">
                  <a href="LearningBussiness">
                    <div class="block_grids">
                      <div class="hotel-item">
                        <div class="">
                          <div
                            class="img-center bg-bg-chrome"
                            v-lazy="'images/learnmore/4.png'"
                          >
                            <div class="img-center color-bg-img"></div>
                          </div>
                          <div class="inner_position_bottom_bottom">
                            <h3 class="shadow">ภาคธุรกิจ</h3>
                          </div>
                        </div>
                      </div>
                    </div>
                  </a>
                </div>
              </div>
              <div class="col-md-2">
                <div class="row">
                  <a href="LearningAagency">
                    <div class="block_grids">
                      <div class="hotel-item">
                        <div class="">
                          <div
                            class="img-center bg-bg-chrome"
                            v-lazy="'images/learnmore/5.png'"
                          >
                            <div class="img-center color-bg-img"></div>
                          </div>
                          <div class="inner_position_bottom_bottom">
                            <h3 class="shadow">หน่วยงานรัฐ</h3>
                          </div>
                        </div>
                      </div>
                    </div>
                  </a>
                </div>
              </div>
              <div class="col-md-1"></div>
            </div>
          </div>
        </div>
        <div class="baner-bar">
          <div class="row">
            <div class="col-xs-12">
              <div class="col-md-1"></div>
              <div class="col-md-10">
                <div
                  v-for="item in knowledgemanagement"
                  :key="item"
                  class="col-md-4"
                >
                  <div class="row">
                    <div class="block_grid">
                      <div class="hotel-item">
                        <div class="">
                          <div
                            class="img-center bg-bg-chrome"
                            v-lazy="item.knowledge_management_image_cover_link"
                          >
                            <div class="img-center color-bg-img"></div>
                          </div>
                          <div class="row padd-50-0">
                            <div class="col-md-12 center_col">
                              <div class="vertical-bottom">
                                <div class="text-detail">
                                  <h5
                                    v-html="
                                      item.knowledge_management_detail.substring(
                                        0,
                                        100
                                      )
                                    "
                                    class="shadow"
                                  ></h5>
                                  <h5 class="line">
                                    <span
                                      ><a
                                        :href="
                                          'LearningDetail?id=' +
                                          item.knowledge_management_id
                                        "
                                        >อ่านเพิ่มเติม</a
                                      ></span
                                    >
                                  </h5>
                                </div>
                              </div>
                              <!-- <div class="">
                                <div class="text-detail">
                                  <h5
                                    v-if="
                                      readMore != item.knowledge_management_id
                                    "
                                    v-html="
                                      item.knowledge_management_detail.substring(
                                        0,
                                        150
                                      )
                                    "
                                    class="shadow"
                                  ></h5>

                                  <h5
                                    v-else-if="
                                      readMore == item.knowledge_management_id
                                    "
                                    v-html="item.knowledge_management_detail"
                                    class="shadow"
                                  ></h5>
                                </div>
                                <h5
                                  class="line"
                                  @click="
                                    readMores(item.knowledge_management_id)
                                  "
                                >
                                  <span
                                    v-if="
                                      readMore != item.knowledge_management_id
                                    "
                                    ><a href="">อ่านเพิ่มเติม</a></span
                                  >
                                </h5>
                                <h5 class="line" @click="readMores(0)">
                                  <span
                                    v-if="
                                      readMore == item.knowledge_management_id
                                    "
                                    >ย่อเล็กลง</span
                                  >
                                </h5>
                              </div> -->
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="col-md-1"></div>
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
  name: "LearningPage",
  setup() {
    const knowledgemanagement = ref([]);
    const readMore = ref(0);

    const getData = async () => {
      const response = await axios.get(
        `${BASE_API_URL}/home/knowledgemanagement`
      );
      knowledgemanagement.value = response.data.data;
    };

    const readMores = (id) => {
      readMore.value = id;
    };

    onMounted(() => {
      getData();
    });

    return { knowledgemanagement, readMores, readMore };
  },
};
</script>

<style scoped>
.vertical-bottom {
  position: relative;
  bottom: 0px;
  left: 0px;
  width: 100%;
  padding-right: 10px;
  padding-left: 10px;
  padding-bottom: 10px;
}
.block_grids:hover {
  transform: scale(1.1);
}
.line {
  font-weight: 700;
}
.center_col {
  text-align: center;
}
.btn-success {
  background-color: #fcfcfc;
  border-radius: 15px;
  border: 1px solid rgb(21, 51, 133);
}
.btn {
  padding-top: 20px;
  padding-bottom: 20px;
}
/* .menu-3 nav > ul > li {
  padding: 5px 10px;
} */

.c-button.bg-3 {
  background: white;
  width: 100%;
  border-radius: 10px;
  border: 1px solid rgb(21, 51, 133);
  text-align: center;
  padding: 0px 0px;
}
.NavBars {
  position: fixed;
  z-index: 10000;
}
.logo-icon {
  margin-left: 10px;
  width: auto;
  height: 80px;
}
.bar-blur {
  padding-top: 10px;
}
.hotel-item {
  box-shadow: 4px 3px 5px 0px rgba(255, 255, 255, 0);
  padding-top: 20px;
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
.padd-120 {
  padding-bottom: 30px;
}
.padd-90-0 {
  margin-top: 20px;
}
.padd-50-0 {
  padding-top: 30px;
}
.map-baner {
  padding-top: 0px;
}
.map-baner #map-canvas {
  height: 500px;
}
.bg-learn {
  width: 100%;
  height: 100%;
}
.baner-bar {
  position: relative;
  left: 0;
  bottom: 100px;
  background: rgba(255, 255, 255, 0);
  z-index: 50;
  width: 100%;
  /* padding: 30px; */
  box-shadow: 4px 3px 5px 0px rgba(255, 255, 255, 0);
}
.inner_position_top_bottom {
  position: absolute;
  display: block;
  text-align: center;
  height: 50px;
  width: 100%;
  bottom: 220px;
  z-index: 999;
}
.inner_position_bottom_bottom {
  position: absolute;
  display: block;
  text-align: center;
  height: 50px;
  width: 100%;
  bottom: 0px;
  z-index: 999;
}
.block_grid {
  background: rgba(255, 0, 0, 0);
  max-width: 120rem;
  width: 100%;
  height: 34rem;
  border-radius: 0px;
  padding: 0px 15px 0px 15px;
}
.block_grids {
  background: rgba(255, 0, 0, 0);
  max-width: 120rem;
  width: 100%;
  height: 20rem;
  border-radius: 0px;
  padding: 0px 15px 0px 15px;
}
.img-center {
  width: 100%;
  height: 20rem;
  object-fit: cover;
  display: block;
  border-radius: 0px;
  box-shadow: 1px 2px 10px #222222;
}
h1 {
  font-size: 74px;
  line-height: 60px;
  font-weight: 500;
  text-transform: none;
  letter-spacing: 1px;
  color: white;
  text-shadow: 2px 2px 3px #000000;
}
h2 {
  font-size: 28px;
  line-height: 0.563rem;
  font-weight: 500;
  text-transform: none;
  letter-spacing: 0;
  color: rgb(21, 51, 133);
  /* text-shadow: 2px 2px 3px #000000; */
}
h3 {
  font-size: 1.4rem;
  line-height: 2.363rem;
  font-weight: 500;
  text-transform: none;
  letter-spacing: 1px;
  color: white;
  text-shadow: 2px 2px 3px #000000;
}
h4 {
  font-size: 22px;
  line-height: 2.363rem;
  font-weight: 500;
  text-transform: none;
  letter-spacing: 1px;
  color: white;
  text-shadow: 2px 2px 3px #000000;
}
h5 {
  font-size: 20px;
  line-height: 1.563rem;
  font-weight: 500;
  text-transform: none;
  letter-spacing: 0;
  color: rgb(21, 51, 133);
  /* text-shadow: 2px 2px 3px #000000; */
}
.text-detail {
  font-size: 20px;
  line-height: 1.563rem;
  font-weight: 500;
  text-transform: none;
  letter-spacing: 0;
  color: rgb(21, 51, 133);
  /* text-shadow: 2px 2px 3px #000000; */
}
@media screen and (max-width: 600px) {
  .center_col {
    text-align: center;
  }
  .baner-bar {
    position: relative;
    left: 0;
    top: 100%;
    bottom: 0px;
    background: rgba(255, 255, 255, 0);
    z-index: 50;
    width: 100%;
  }
  .padd-120 {
    padding-bottom: 120px;
  }
  h1 {
    font-size: 38px;
    line-height: 60px;
    font-weight: 500;
    text-transform: none;
    letter-spacing: 1px;
    color: white;
    text-shadow: 2px 2px 3px #000000;
  }
  h3 {
    font-size: 22px;
    line-height: 2.363rem;
    font-weight: 500;
    text-transform: none;
    letter-spacing: 1px;
    color: white;
    text-shadow: 2px 2px 3px #000000;
  }
  h4 {
    font-size: 16px;
    line-height: 2.363rem;
    font-weight: 500;
    text-transform: none;
    letter-spacing: 1px;
    color: white;
    text-shadow: 2px 2px 3px #000000;
  }
  .inner_position_top_bottom {
    position: absolute;
    display: block;
    text-align: center;
    height: 50px;
    width: 100%;
    bottom: 300px;
    z-index: 999;
  }
}
</style>
