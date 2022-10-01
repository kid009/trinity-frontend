<template>
  <div class="travel-plannig">
    <div class="text-plan">
      <h1 class="text_color">วางแผนการเดินทาง</h1>
      <!-- <h2>Travel Planning</h2> -->
    </div>
    <div class="padd-20-0">
      <div class="plannig">
        <!-- <img src="images/plan_trip/topic.jpg" alt="" /> -->
        <div class="">
          <!-- <div class="">
            <h3
              v-for="provinces in province"
              :key="provinces.province_id"
              class="underline hover-it"
            >
              <div v-if="provinces.province_id == newStartpoint">
                {{ provinces.province_name }}
                -&nbsp;
              </div>
            </h3>

            <h3
              v-for="provinces in province"
              :key="provinces.province_id"
              class="underline hover-it"
            >
              <div v-if="provinces.province_id == newEndpoint">
                {{ provinces.province_name }}
              </div>
            </h3>
          </div> -->
          <div class="photo-block hover-aqua">
            <div class="tour-layer delay-1"></div>
            <img src="images/plan_trip/topic.jpg" alt="" />
            <div class="vertical-align">
              <div class="photo-title">
                <!-- <a class="underline hover-it" href="#"
                  ><h3>promotional trip</h3></a
                > -->
                <h3
                  v-for="provinces in province"
                  :key="provinces.province_id"
                  class="underline hover-it"
                >
                  <div v-if="provinces.province_id == newStartpoint">
                    {{ provinces.province_name }}
                    -&nbsp;
                  </div>
                </h3>

                <h3
                  v-for="provinces in province"
                  :key="provinces.province_id"
                  class="underline hover-it"
                >
                  <div v-if="provinces.province_id == newEndpoint">
                    {{ provinces.province_name }}
                  </div>
                </h3>
              </div>
            </div>
          </div>
        </div>
      </div>
      <!-- <div class="tourist">
        <h3>"เส้นทางท่องเที่ยวแนะนำ"</h3>
        <h3>Recommended tourist route</h3>
      </div> -->
      <div class="form-block clearfix"></div>
      <div class="slide-tourist">
        <div class="testimonials">
          <div class="row">
            <div class="col-md-12">
              <!-- <div
              class="bg bg-bg-chrome"
              style="background-image: url(img/home_2/item_img_12.jpg)"
            ></div> -->

              <div
                class="swiper-container swiper-swiper-unique-id-2 initialized"
                data-autoplay="5000"
                data-loop="1"
                data-speed="1000"
                data-center="0"
                data-slides-per-view="1"
              >
                <div class="swiper-wrapper">
                  <div
                    class="swiper-slide active"
                    v-for="item in tourismMainRoute"
                    :key="item.tourism_main_route_id"
                  >
                    <div class="hero">
                      <img :src="item.tourism_main_route_image_link" alt="" />
                      <a
                        :href="
                          'TouristRouteSubRoute?page=1&group=0&id=' +
                          item.tourism_main_route_id
                        "
                        ><h4>
                          <b> "{{ item.tourism_main_route_name }}"</b>
                        </h4></a
                      >
                    </div>
                  </div>
                </div>
                <div
                  class="pagination poin-style-1 pagination-swiper-unique-id-2"
                >
                  <span
                    class="
                      swiper-pagination-switch
                      swiper-visible-switch
                      swiper-active-switch
                    "
                  ></span
                  ><span class="swiper-pagination-switch"></span
                  ><span class="swiper-pagination-switch"></span>
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

export default {
  name: "TravelWay",
  data() {
    return {
      mainRoute: null,
    };
  },
  methods: {
    MainRoute: function (item) {
      this.mainRoute = item;
    },
  },
  setup() {
    const tourismMainRoute = ref([]);
    const province = ref([]);
    const newStartpoint = ref([]);
    const newEndpoint = ref([]);

    newStartpoint.value = sessionStorage.getItem("startpoint");
    newEndpoint.value = sessionStorage.getItem("endpoint");
    const startdate = sessionStorage.getItem("startdate");
    const enddate = sessionStorage.getItem("enddate");
    const budget = sessionStorage.getItem("budget");
    const number = sessionStorage.getItem("number");

    const onSubmit = async () => {
      Promise.all([
        fetch("https://api.trinitytrip.com/api/plan/province"),
      ]).then(async ([response1]) => {
        const responseData1 = await response1.json();

        const province = responseData1.data;

        // console.log(province);
        province.forEach(function (id) {
          if (id.province_id == newStartpoint.value) {
            const startpointlatlong = [];
            startpointlatlong.push(id.province_latitude);
            startpointlatlong.push(id.province_longitude);
            sessionStorage.setItem(
              "startpointlatlong",
              JSON.stringify(startpointlatlong)
            );
          }
          if (id.province_id == newEndpoint.value) {
            const endpointlatlong = [];
            endpointlatlong.push(id.province_latitude);
            endpointlatlong.push(id.province_longitude);
            sessionStorage.setItem(
              "endpointlatlong",
              JSON.stringify(endpointlatlong)
            );
          }
          window.location = "Create";
        });
      });

      sessionStorage.setItem("startpoint", newStartpoint.value);
      sessionStorage.setItem("endpoint", newEndpoint.value);

      sessionStorage.removeItem("activitys");
      sessionStorage.removeItem("hotels");
      sessionStorage.removeItem("homestays");
      sessionStorage.removeItem("restaurants");
      sessionStorage.removeItem("timeline");
      sessionStorage.removeItem("createtrip");
      sessionStorage.removeItem("plantrip_name");
    };

    function getBackLink() {
      sessionStorage.removeItem("formCreatetrip");
      sessionStorage.removeItem("activitys");
      sessionStorage.removeItem("hotels");
      sessionStorage.removeItem("homestays");
      sessionStorage.removeItem("restaurants");
      sessionStorage.removeItem("timeline");
      sessionStorage.removeItem("plantrip_name");

      window.location = "FormIndex";
    }

    const getData = async () => {
      const response = await axios.get(
        `${BASE_API_URL}/plan/tourismMainRoute?startpoint=${newStartpoint.value}&endpoint=${newEndpoint.value}`
      );
      tourismMainRoute.value = response.data.data;

      const responseprovince = await axios.get(`${BASE_API_URL}/plan/province`);
      province.value = responseprovince.data.data;
    };

    onMounted(() => {
      getData();
    });

    return {
      getBackLink,
      onSubmit,
      newStartpoint,
      newEndpoint,

      tourismMainRoute,
      startdate,
      enddate,
      budget,
      number,
      province,
    };
  },
};
</script>

<style scoped>
h4:hover {
  transform: scale(1.1);
}
.tour-caption .vertical-align {
  margin-top: -150px;
}
.vertical-align {
  -webkit-transform: translateY(-50%);
  -moz-transform: translateY(-50%);
  -o-transform: translateY(-50%);
  -ms-transform: translateY(-50%);
  transform: translateY(-50%);
  top: 50%;
  position: absolute;
  width: 100%;
  left: 0px;
  text-shadow: 1px 1px 2px black;
}
.text_color {
  color: rgb(39, 110, 202);
}
.padd-20-0 {
  padding-top: 20px;
}
.text-plan {
  text-align: center;
  color: white;
  font-style: italic;
}
.text-plan h1 {
  letter-spacing: 0px;
  font-size: 36px;
  line-height: 50px;
  font-weight: 600;
}
.underline:after {
  height: 2px;
  margin: 0px;
}
.text-plan h2 {
  letter-spacing: 0px;
  padding-top: 4px;
  padding-bottom: 4px;
  font-weight: 100;
  text-transform: none;
  font-size: 26px;
}
.plannig {
  text-align: center;
}
.plannig img {
  width: 100%;
  height: 180px;
  border-radius: 20px;
  object-fit: cover;
}
.tourist {
  text-align: center;

  color: white;
  font-style: italic;
}
.tourist h3 {
  font-size: 18px;
  font-weight: 100;
  letter-spacing: 0px;
  text-transform: none;
  line-height: 24px;
}
/*------- Reccommended tourist rout slide-----------*/
.slide-tourist {
  text-align: center;
  background: rgba(255, 255, 255, 0);
  border-radius: 20px;
}
.swiper-slide {
  height: 100% !important;
}
.slide-tourist h4 {
  position: absolute;
  width: 100%;
  text-align: center;
  left: 0px;
  padding: 0px 20px 0px 20px;
  bottom: 34px;
  margin: 0px;
  color: white;
  letter-spacing: 0px;
}
.slide-tourist b {
  text-shadow: 1px 1px 2px black;
  font-size: 18px;
  font-style: italic;
  font-weight: 700;
  color: white;
}
.poin-style-1 {
  bottom: 1px;
}
.hero {
  padding: 0px;
  border-radius: 20px;
  width: 100%;
  height: 310px;
}
.hero img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 20px;
}
.weth-icon img {
  width: 30px;
  height: 30px;
  object-fit: cover;
}
</style>
