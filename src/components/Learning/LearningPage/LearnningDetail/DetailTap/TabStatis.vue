<template>
  <div class="hotel-itemss">
    <div class="padd-10-01">
      <div class="hotel_itembg">
        <div class="col-xs-12 col-md-12">
          <div class="detail-content color-1">
            <h3 style="text-align: left" class="fontstyle">
              การเข้ามาใช้บริการระบบ
            </h3>
            <div class="">
              <div class="hotel_itembg_buttons">
                <div class="">
                  <div class="col-md-6">
                    <div class="c-button bg-3">
                      <span class="fontstyle"
                        >เยี่ยมชมหน้าบ้าน {{ analytics }} ครั้ง</span
                      >
                    </div>
                    <div class="c-button bg-4">
                      <span class="fontstyle"
                        >ใช้งานหลังบ้าน {{ user_log }} ครั้ง</span
                      >
                    </div>
                  </div>
                  <div class="col-md-4">
                    <PieChart />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="col-xs-12 col-md-12">
          <div class="detail-content color-1">
            <h3 style="text-align: left" class="fontstyle">
              ภาคส่วนที่เข้ามาใช้ระบบทั้งหมด
            </h3>
            <div class="bg_white">
              <div class="padd_10_001">
                <div class="row padd_90_2">
                  <div class="col-md-3">
                    <div class="">
                      <div class="vl">
                        <h4 style="text-align: center" class="fontstyle">
                          ชุมชน
                        </h4>
                        <h2 style="text-align: center" class="fontstyle">
                          {{ community }}
                        </h2>
                      </div>
                    </div>
                  </div>
                  <div class="col-md-3">
                    <div class="">
                      <div class="vl">
                        <h4 style="text-align: center" class="fontstyle">
                          ภาคธุรกิจ
                        </h4>
                        <h2 style="text-align: center" class="fontstyle">
                          {{ bussiness }}
                        </h2>
                      </div>
                    </div>
                  </div>
                  <div class="col-md-3">
                    <div class="">
                      <div class="vl">
                        <h4 style="text-align: center" class="fontstyle">
                          นักท่องเที่ยว
                        </h4>
                        <h2 style="text-align: center" class="fontstyle">
                          {{ tourism }}
                        </h2>
                      </div>
                    </div>
                  </div>
                  <div class="col-md-3">
                    <div class="">
                      <h4 style="text-align: center" class="fontstyle">
                        นักวิจัย
                      </h4>
                      <h2 style="text-align: center" class="fontstyle">
                        {{ researcher }}
                      </h2>
                    </div>
                  </div>
                </div>
                <hr />
                <div class="col-md-12"><BarChart /></div>
                <hr />
              </div>
            </div>
            <br />
          </div>
        </div>
        <div class="col-xs-12 col-md-12">
          <div class="detail-content color-1">
            <h3 style="text-align: left" class="fontstyle">
              สถิติข้อมูลในระบบ
            </h3>
            <div class="bg_white">
              <div class="padd_10_001">
                <div class="col-md-5">
                  <div class="detail-content color-1 center">
                    <h3 style="text-align: left" class="fontstyle"></h3>
                    <div class="bg_white">
                      <div class="padd_10_0012">
                        <div class="row">
                          <div class="col-md-4">
                            <h4 class="fontstyle">ชื่อหัวข้อ</h4>
                          </div>
                          <div class="col-md-4">
                            <h4 class="fontstyle">จำนวนหมวดหมู่</h4>
                          </div>
                          <div class="col-md-4">
                            <h4 class="fontstyle">จำนวนรายการ</h4>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="bg_data1">
                      <div class="padd_10_0012">
                        <div class="row">
                          <div class="col-md-4">
                            <h4 class="fontstyle">เส้นทางท่องเที่ยว</h4>
                          </div>
                          <div class="col-md-4">
                            <h4 class="fontstyle">{{ tourism_route_group }}</h4>
                          </div>
                          <div class="col-md-4">
                            <h4 class="fontstyle">{{ tourism_main_route }}</h4>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="bg_data2">
                      <div class="padd_10_0012">
                        <div class="row">
                          <div class="col-md-4">
                            <h4 class="fontstyle">กิจกรรมท่องเที่ยว</h4>
                          </div>
                          <div class="col-md-4">
                            <h4 class="fontstyle">{{ activity_group }}</h4>
                          </div>
                          <div class="col-md-4">
                            <h4 class="fontstyle">{{ activity }}</h4>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="bg_data3">
                      <div class="padd_10_0012">
                        <div class="row">
                          <div class="col-md-4">
                            <h4 class="fontstyle">วางแผนเส้นทางแนะนำ</h4>
                          </div>
                          <div class="col-md-4">
                            <h4 class="fontstyle">0</h4>
                          </div>
                          <div class="col-md-4">
                            <h4 class="fontstyle">{{ plantrip }}</h4>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="bg_data4">
                      <div class="padd_10_0012">
                        <div class="row">
                          <div class="col-md-4">
                            <h4 class="fontstyle">สถานที่อำนวยความสะดวก</h4>
                          </div>
                          <div class="col-md-4">
                            <h4 class="fontstyle">{{ poi_group }}</h4>
                          </div>
                          <div class="col-md-4">
                            <h4 class="fontstyle">{{ poi }}</h4>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="bg_data5">
                      <div class="padd_10_0012">
                        <div class="row">
                          <div class="col-md-4">
                            <h4 class="fontstyle">ผลิตภัณฑ์</h4>
                          </div>
                          <div class="col-md-4">
                            <h4 class="fontstyle">{{ product_group }}</h4>
                          </div>
                          <div class="col-md-4">
                            <h4 class="fontstyle">{{ product }}</h4>
                          </div>
                        </div>
                      </div>
                    </div>
                    <br />
                  </div>
                </div>
                <div class="col-md-7"><RadarChart /></div>
                <hr />
              </div>
            </div>
            <br />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { onMounted, ref } from "vue";
import axios from "axios";
import { BASE_API_URL } from "../../../../../constants";

import PieChart from "./PieChart.vue";
import BarChart from "./BarChart.vue";
import RadarChart from "./RadarChart.vue";

export default {
  name: "TabStatis",
  components: { PieChart, BarChart, RadarChart },
  setup() {
    const analytics = ref([]);
    const user_log = ref([]);
    const community = ref([]);
    const bussiness = ref([]);
    const tourism = ref([]);
    const researcher = ref([]);

    const tourism_route_group = ref([]);
    const tourism_main_route = ref([]);
    const activity_group = ref([]);
    const activity = ref([]);
    const plantrip = ref([]);
    const poi_group = ref([]);
    const poi = ref([]);
    const product = ref([]);
    const product_group = ref([]);

    const getData = async () => {
      const response = await axios.get(`${BASE_API_URL}/home/statistics`);
      analytics.value = response.data.analytics;
      user_log.value = response.data.user_log;
      community.value = response.data.community;
      bussiness.value = response.data.bussiness;
      tourism.value = response.data.tourism;
      researcher.value = response.data.researcher;

      tourism_route_group.value = response.data.tourism_route_group;
      tourism_main_route.value = response.data.tourism_main_route;
      activity_group.value = response.data.activity_group;
      activity.value = response.data.activity;
      plantrip.value = response.data.plantrip;
      poi_group.value = response.data.poi_group;
      poi.value = response.data.poi;
      product.value = response.data.product;
      product_group.value = response.data.product_group;
    };

    onMounted(() => {
      getData();
    });

    return {
      analytics,
      user_log,
      community,
      bussiness,
      tourism,
      researcher,

      tourism_route_group,
      tourism_main_route,
      activity_group,
      activity,
      plantrip,
      poi_group,
      poi,
      product,
      product_group,
    };
  },
};
</script>

<style scoped>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
.fontstyle {
  font-family: "Prompt", sans-serif;
}
.padd-10-01 {
  padding-top: 20px;
}
.padd_10_001 {
  padding-top: 15px;
  padding-right: 15px;
  padding-left: 15px;
  padding-bottom: 5px;
}
.padd_10_0013 {
  padding-top: 15px;
  padding-right: 15px;
  padding-left: 15px;
  padding-bottom: 15px;
}
.padd_10_0012 {
  padding-top: 5px;
  padding-right: 15px;
  padding-left: 15px;
  padding-bottom: 5px;
}
.padd_90_2 {
  padding-top: 30px;
}
.alert {
  /* color: #fff;
    font-size: 14px;
    position: relative;
    width: 100%; */
  position: relative;
  margin-bottom: 5px;
}
hr {
  color: rgb(136, 136, 136);
  width: 100%;
  height: 0.55rem;
  display: block;
  margin: auto;
}
/* .vl {
  border-right: 2px solid rgb(136, 136, 136);
  height: 100%;
  margin-top: -25px;
} */

.bg_white {
  background: rgb(255, 255, 255);
  box-shadow: 0px 0px 1px #222222;
}
.bg_data1 {
  background: rgb(197, 197, 197);
  box-shadow: 0px 0px 1px #222222;
}
.bg_data2 {
  background: rgb(143, 255, 201);
  box-shadow: 0px 0px 1px #222222;
}
.bg_data3 {
  background: rgb(142, 246, 255);
  box-shadow: 0px 0px 1px #222222;
}
.bg_data4 {
  background: rgb(242, 255, 171);
  box-shadow: 0px 0px 1px #222222;
}
.bg_data5 {
  background: rgb(255, 255, 255);
  box-shadow: 0px 0px 1px #222222;
}
.buttons-wrap {
  background: rgb(255, 255, 255);
  color: rgb(255, 255, 255);
  margin-bottom: 10px;
}
.vl {
  position: relative;
  border-right: 2px solid rgb(220, 220, 220);
  max-height: 200px;
  height: 100px;
  margin-top: 0px;
}
.img-qr {
  width: 100%;
  max-width: 200px;
  height: 200px;
  display: block;
  margin: auto;
}
.bg_com {
  background-color: rgba(8, 114, 201, 0);
  border-radius: 15px;
  padding-right: 5px;
  padding-left: 5px;
  padding-top: 5px;
  padding-bottom: 5px;
  width: 100%;
  max-width: 230px;
  display: block;
  margin: auto;
}
.bg_qr {
  background-color: rgba(8, 114, 201);
  border-radius: 15px;
  padding-right: 5px;
  padding-left: 5px;
  padding-top: 5px;
  padding-bottom: 5px;
  width: 100%;
  max-width: 230px;
  display: block;
  margin: auto;
}
.tags-title {
  color: white;
  width: -webkit-fit-content;
  width: -moz-fit-content;
  width: fit-content;
  background-color: rgba(8, 114, 201);
  padding: 10px;
  border-radius: 10px;
  padding-top: 10px;
  display: block;
  margin: auto;
}

.hotel-itemss {
  position: relative;
  width: 100%;
  float: left;
  display: inline-block;
  background: rgb(237, 237, 237);
  box-shadow: 4px 3px 5px 0px rgb(0 0 0 / 3%);
  border-radius: 15px;
  padding-right: 5px;
  padding-left: 5px;
  padding-top: 15px;
  padding-bottom: 10px;
}

.hotel_itembg {
  position: relative;
  width: 100%;
  float: left;
  display: inline-block;
  background: rgb(221, 245, 255);
  box-shadow: 4px 3px 5px 0px rgb(0 0 0 / 3%);
  border-radius: 0px;
  padding-right: 5px;
  padding-left: 5px;
  padding-top: 15px;
  padding-bottom: 10px;
}
.hotel_itembg_buttons {
  width: 100%;
  float: left;
  display: inline-block;
  background: rgb(255, 255, 255);
  padding-right: 5px;
  padding-left: 5px;
  padding-top: 15px;
  padding-bottom: 15px;
  color: white;
  box-shadow: 0px 0px 1px #222222;
}
.text_color {
  color: rgba(8, 114, 201);
}
h3 {
  /* position: relative; */
  font-size: 22px;
  line-height: 1.863rem;
  font-weight: 500;
  text-transform: capitalize;
  letter-spacing: 0;
  color: rgb(0, 0, 0);
  /* margin-bottom: 1px; */
}
h4 {
  /* position: relative; */
  font-size: 14px;
  line-height: 1.863rem;
  font-weight: 500;
  text-transform: capitalize;
  letter-spacing: 0;
  color: rgb(0, 0, 0);
  margin-bottom: 1px;
}
.bg-3 {
  background: #8bd2ec;
}
.bg-4 {
  background: #80b7a2;
}

@media screen and (max-width: 600px) {
  .center {
    text-align: center;
  }
}
</style>
