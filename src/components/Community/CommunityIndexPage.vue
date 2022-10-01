<template>
  <!--------------------------------------------------------------------- ------------------------------------------------->
  <!-- BLOG -->
  <div class="top-baner">
    <div class="clip">
      <div class="bg bg-bg-chrome act" v-lazy="'images/bg/bg-index.jpg'"></div>
    </div>
    <div class="container box">
      <!-- <div style="margin-top: 50px" class="row padd-90"> -->
      <div class="row padd-90-90">
        <!-- <div class="col-md-1"></div> -->
        <div class="col-lg-12">
          <div class="col-xs-12 col-md-8 col-md-push-4">
            <div class="detail-content mapFixed">
              <div class="detail-content-block">
                <div class="isotope-container row row10">
                  <div class="grid-sizer col-mob-12 col-xs-6 col-sm-4"></div>

                  <!-------------------------------- ---------------------------------->

                  <div class="col-xs-12 col-sm-12 col-md-12">
                    <div class="grid-content block-content type-2 clearfix">
                      <div class="list-item-entry">
                        <div class="hotel-item style-10">
                          <div class="table-view">
                            <div class="title hotel-middle cell-view">
                              <div class="row padd-90">
                                <!-- <div class="col-xs-12 col-sm-12 col-md-12"> -->
                                <div class="detail-content">
                                  <div class="detail-content-block">
                                    <div class="simple-tab color-1 tab-wrapper">
                                      <div class="tab-nav-wrapper">
                                        <div class="nav-tab clearfix"></div>
                                      </div>
                                      <div class="tabs-content clearfix">
                                        <div
                                          style="border-radius: 40px"
                                          class="tab-info active"
                                        >
                                          <div id="container">
                                            <div
                                              id="mapContainer"
                                              :center="center"
                                            ></div>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                                <!-- </div> -->
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <!-------------------------------- ---------------------------------------->
                </div>
              </div>
            </div>
          </div>

          <div class="col-xs-12 col-md-4 col-md-pull-8 scrollbar" id="style-1">
            <div class="right-sidebar">
              <h3>ท่องเที่ยวโดยชุมชน</h3>
              <div class="sidebar-block">
                <div class="col-xs-12 col-sm-6 col-sm-offset-2">
                  <div class="subscribe-form">
                    <div class="input-style-1 b-50 color-3">
                      <input
                        v-model="message"
                        type="text"
                        required=""
                        placeholder="พิมพ์ชุมชนที่ต้องการค้นหา"
                      />
                    </div>
                  </div>
                </div>

                <input
                  type="submit"
                  @click="on_click(message)"
                  class="c-button b-40 bg-blue-2 hv-blue-2-o"
                  value="ค้นหา"
                />
              </div>

              <div class="sidebar-block type-2">
                <div
                  class="col-md-6 col-sm-4 col-xs-12"
                  v-for="item in community"
                  :key="item.community_id"
                >
                  <router-link :to="'communitydetail?id=' + item.community_id">
                    <div
                      @mouseover="onmousemap(item.community_id)"
                      @mouseleave="onmousemap(0)"
                      class="radius-mask popular-img"
                    >
                      <div class="">
                        <a :href="'communitydetail?id=' + item.community_id"
                          ><div
                            class="bg bg-bg-chrome act"
                            :src="item.community_image_cover_link"
                          >
                            <div class="">
                              <img :src="item.community_image_cover_link" />
                            </div>
                          </div>
                        </a>
                      </div>

                      <!------------------- ----------->
                      <div v-show="item.community_id == idMap" class="clip">
                        <a :href="'communitydetail?id=' + item.community_id">
                          <div
                            class="bg bg-bg-chrome act imageSizss"
                            :src="item.community_image_cover_link"
                          >
                            <div class="imageSizss">
                              <img :src="item.community_image_cover_link" />
                            </div>
                          </div>
                        </a>
                      </div>
                      <!------------------- ----------->

                      <div class="tour-layer delay-1"></div>

                      <div class="vertical-bottom">
                        <a
                          class="black-hover"
                          :href="'communitydetail?id=' + item.community_id"
                        >
                          <h4>{{ item.community_name.substring(0, 28) }}</h4>

                          <!-- <a v-show="item.community_id == idMap" class="c-button bg-green hv-green-o delay-2 small"
                      ><span>ทดสอบ</span></a>-->
                        </a>
                      </div>
                    </div>
                  </router-link>
                </div>
              </div>
            </div>
          </div>
        </div>
        <!-- <div class="col-md-1"></div> -->
      </div>
    </div>
  </div>
</template>

<script>
import "leaflet/dist/leaflet.css";
import L from "leaflet";
import "leaflet.control.layers.tree";

import { onMounted, ref } from "vue";
import axios from "axios";
import { BASE_API_URL } from "../../constants";

export default {
  name: "CommunityIndexPage",
  components: {},

  setup() {
    let id = window.location.search;
    id = id.split("=");
    id = id[1];

    const community = ref([]);
    const message = ref();

    let idMap = ref([]);

    const getData = async () => {
      if (id == null || id == "undefined") {
        const response = await axios.get(
          `${BASE_API_URL}/community-tourism/CommunityAll/0`
        );
        community.value = response.data.data;
      } else {
        const response = await axios.get(
          `${BASE_API_URL}/community-tourism/CommunityAll/` + id
        );
        community.value = response.data.data;
      }
    };

    const role_id = localStorage.getItem("role_id");

    function on_click(id) {
      if (role_id == 26) {
        window.location = "community?id=" + id;
      } else {
        window.location = "community?id=" + id;
      }
    }

    onMounted(() => {
      getData();
    });

    setInterval(() => {
      const obj = sessionStorage.getItem("idMap");
      idMap.value = obj;
    }, 100);

    return { community, idMap, on_click, message };
  },

  data() {
    return {
      center: { lat: 15.364799204818858, lng: 100.9497871378479 },
      position: { lat: 15.364799204818858, lng: 100.9497871378479 },
    };
  },

  methods: {
    onmousemap: function (id) {
      sessionStorage.setItem("idMap", id);
    },

    setupLeafletMap: function () {
      const mapDiv = L.map("mapContainer").setView(this.center, 10);
      L.tileLayer(
        "https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token=pk.eyJ1IjoicG9uZ3Bvb20iLCJhIjoiY2txdGk4OHkwMWpzcDJzbmJxeXFnMHVtZyJ9.mJ9FrZH8wybzE3tS31CZlQ",
        {
          attribution:
            'Map data (c) <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery (c) <a href="https://www.mapbox.com/">Mapbox</a>',
          maxZoom: 18,
          minZoom: 6,
          id: "mapbox/streets-v11",
          accessToken:
            "pk.eyJ1IjoicG9uZ3Bvb20iLCJhIjoiY2txdGk4OHkwMWpzcDJzbmJxeXFnMHVtZyJ9.mJ9FrZH8wybzE3tS31CZlQ",
        }
      ).addTo(mapDiv);

      ///////////////////////////////////////////

      let id = window.location.search;
      id = id.split("=");
      id = decodeURIComponent(id[1]);

      let api = null;

      if (id == null || id == "undefined") {
        api =
          "https://api.trinitytrip.com/api/community-tourism/CommunityAll/0";
      } else {
        api =
          "https://api.trinitytrip.com/api/community-tourism/CommunityAll/" +
          id;
      }

      Promise.all([
        fetch(
          api
          //https://api.trinitytrip.com/api/plan/communityMap?startpoint=49&endpoint=21
        ),
      ]).then(async ([response1]) => {
        const responseData1 = await response1.json();

        const data1 = responseData1.data;

        const layerGroup = L.featureGroup().addTo(mapDiv);

        data1.forEach(
          ({
            community_latitude,
            community_longitude,
            community_id,
            community_name,
            province_name,

            community_image_cover_link,
          }) => {
            // setInterval(() => {
            let idmaps = sessionStorage.getItem("idMap");

            if (community_id == idmaps) {
              layerGroup.addLayer(
                L.marker(
                  [community_latitude, community_longitude],

                  {
                    icon: L.divIcon({
                      className: "location-pin",
                      html: `<img style=" width: 33px; height: 33px;   position: absolute; border-radius: 50%; background: #32383e; width: 26px; height: 26px;  background: #32383e; position: absolute;  border: 4px solid #66FF66;  left: 50%; top: 50%; margin: -3px 0 0 -15px;" src="${community_image_cover_link}">`,
                      iconSize: [30, 33],
                      //iconAnchor: [32, 32],
                      iconAnchor: [10, 33],
                    }),
                  }
                )
                  .bindPopup(
                    `<div style="width: 200px; height: 300px;">
                            <b>ชื่อชุมชน</b> ${community_name}
                                    <br/>
                                    <b>ที่อยู่</b>: ${province_name}
                                    <br/>
                                     <a href="communitydetail?id=${community_id}"> 
                                    <img style="width: 170px; height: 150px; display: block;margin: auto;" src="${community_image_cover_link}" alt="">
                                    </a>
                                     <br/>
                                    <a class='c-button bg-green hv-transparent fr'   href="communitydetail?id=${community_id}" >เพิ่มเติม</a>
                                     
                                    <br/>
                                    
                                     <br/>
                                     <br/>
                               </div>
                                    `
                  )
                  .on("mouseover", function () {
                    //this.openPopup();
                    sessionStorage.setItem("idMap", community_id);
                  })
                  .on("mouseout", function () {
                    sessionStorage.setItem("idMap", 0);
                  })
              );
            }
            if (community_id != idmaps) {
              layerGroup.addLayer(
                L.marker(
                  [community_latitude, community_longitude],

                  {
                    icon: L.divIcon({
                      className: "location-pin",
                      html: `<img style=" width: 33px; height: 33px;   position: absolute; border-radius: 50%; background: #32383e; width: 26px; height: 26px;  background: #32383e; position: absolute;  border: 2px solid red;  left: 50%; top: 50%; margin: -3px 0 0 -15px;" src="${community_image_cover_link}">`,
                      iconSize: [30, 33],
                      //iconAnchor: [32, 32],
                      iconAnchor: [10, 33],
                    }),
                  }
                )
                  .bindPopup(
                    `<div style="width: 200px; height: 300px;">
                            <b>ชื่อชุมชน</b> ${community_name}
                                    <br/>
                                    <b>ที่อยู่</b>: ${province_name}
                                    <br/>
                                     <a href="communitydetail?id=${community_id}"> 
                                    <img style="width: 170px; height: 150px; display: block;margin: auto;" src="${community_image_cover_link}" alt="">
                                    </a>
                                     <br/>
                                    <a class='c-button bg-green hv-transparent fr'   href="communitydetail?id=${community_id}" >เพิ่มเติม</a>
                                     
                                    <br/>
                                    
                                     <br/>
                                     <br/>
                               </div>
                                    `
                  )
                  .on("mouseover", function () {
                    //this.openPopup();
                    sessionStorage.setItem("idMap", community_id);
                  })
                  .on("mouseout", function () {
                    sessionStorage.setItem("idMap", 0);
                  })
              );
            }
            // }, 1000);

            layerGroup.addLayer(
              L.marker(
                [community_latitude, community_longitude],

                {
                  icon: L.divIcon({
                    className: "location-pin",
                    html: `<img style=" width: 33px; height: 33px;   position: absolute; border-radius: 50%; background: #32383e; width: 26px; height: 26px;  background: #32383e; position: absolute;  border: 2px solid red;  left: 50%; top: 50%; margin: -3px 0 0 -15px;" src="${community_image_cover_link}">`,
                    iconSize: [30, 33],
                    //iconAnchor: [32, 32],
                    iconAnchor: [10, 33],
                  }),
                }
              )
                .bindPopup(
                  `<div style="width: 200px; height: 300px;">
                            <b>ชื่อชุมชน</b> ${community_name}
                                    <br/>
                                    <b>ที่อยู่</b>: ${province_name}
                                    <br/>
                                     <a href="communitydetail?id=${community_id}"> 
                                    <img style="width: 170px; height: 150px; display: block;margin: auto;" src="${community_image_cover_link}" alt="">
                                    </a>
                                     <br/>
                                    <a class='c-button bg-green hv-transparent fr'   href="communitydetail?id=${community_id}" >เพิ่มเติม</a>
                                     
                                    <br/>
                                    
                                     <br/>
                                     <br/>
                               </div>
                                    `
                )
                .on("mouseover", function () {
                  //this.openPopup();
                  sessionStorage.setItem("idMap", community_id);
                })
                .on("mouseout", function () {
                  sessionStorage.setItem("idMap", 0);
                })
            );
          }
        );

        mapDiv.fitBounds(layerGroup.getBounds());
      });
    },
  },
  mounted() {
    this.setupLeafletMap();
  },
};
</script>

<style scoped>
/* .baner-bar {
  position: relative;
  left: 0;
  bottom: 0px;
  background: rgb(255, 255, 255);
  /* z-index: 50; */
/* width: 100%; */
/* padding: 30px; */
/* box-shadow: 4px 3px 5px 0px rgba(255, 255, 255, 0); */
/* } */
h3 {
  font-size: 30px;
  line-height: 2.363rem;
  font-weight: 500;
  text-transform: none;
  letter-spacing: 0;
  text-align: center;
  color: rgb(47, 91, 210);
  text-shadow: 1px 1px 3px #000000;
  padding-bottom: 20px;
}
.center {
  text-align: center;
}
.sidebar-block {
  padding-bottom: 20px;
  border-bottom: 1px solid #ededed;
  margin-bottom: 20px;
}
.bg_block {
  background-color: #000000;
}
.padd-90-90 {
  padding-top: 70px;
  padding-bottom: 70px;
}
/* .col-md-4 {
  padding-right: 15px;
  background: #fff;
  border-radius: 40px;
} */

.col-lg-12 {
  padding-right: 25px;
  padding-left: 45px;
}
.popular-img h4 {
  font-weight: 500;
  letter-spacing: 0px;
  padding-bottom: 10px;
  text-shadow: 1px 1px 1px black;
}
.popular-img .vertical-bottom {
  padding: 0px 0px 6px 6px;
  /* text-align:center; */
  backdrop-filter: blur(1px);
}
.c-button.small {
  font-size: 12px;
  padding: 8px 14px;
  -moz-border-radius: 6px;
  border-radius: 6px;
}
.c-button.small span {
  font-weight: 500;
}
.imageSizss {
  width: 100%;
  height: 250px;
}
.img-Commu {
  float: left;
}
.borderCommunity {
  border: 10px solid red;
  padding: 5px;
  width: 100%;
  height: 250px;
  background-color: black;
}

#mapContainer {
  width: 100%;
  height: 400px;
  border-radius: 10px;
}
.ppcont {
  width: 1000px;
  height: 600px;
}
#text-spac-page-covid {
  letter-spacing: 0;
}
.imgActivity {
  width: 150px;
  height: 100px;
  text-align: center;
}

.location-pin img {
  width: 46px;
  height: 46px;
  margin: -26px 0 0 -13px;
  z-index: 10;
  position: absolute;
  border-radius: 50%;
  background: #32383e;
}

.pin {
  width: 50px;
  height: 50px;
  border-radius: 50% 50% 50% 0;
  background: #32383e;
  position: absolute;
  transform: rotate(-45deg);
  left: 50%;
  top: 50%;
  margin: -43px 0 0 -30px;
}

.pin:after {
  content: "";
  width: 26px;
  height: 26px;
  margin: 2px 0 0 2px;
  position: absolute;
  border-radius: 50%;
}

.pulse {
  background: rgba(0, 0, 0, 0.2);
  border-radius: 50%;
  height: 14px;
  width: 14px;
  position: absolute;
  left: 50%;
  top: 50%;
  margin: 15px 0px 0px -12px;
  transform: rotateX(55deg);
  z-index: -2;
}

.pulse:after {
  content: "";
  border-radius: 50%;
  height: 40px;
  width: 40px;
  position: absolute;
  margin: -16px 0 0 -13px;
  animation: pulsate 2.5s ease-out;
  animation-iteration-count: infinite;
  opacity: 0;
  background: rgba(94, 190, 255, 0.5);
  box-shadow: 0 0 1px 2px #2d99d3;
  animation-delay: 1.1s;
}
.mapFixed {
  top: 140px;
  position: fixed;
  width: 65%;
}
.simple-tab .tab-info {
  border: 1px solid #eaeaea;
  margin-bottom: -30px;
  padding: 14px 14px;
}

.padd-90 {
  padding-bottom: 0px;
}
.grid-content.block-content .hotel-item.style-10 {
  padding-bottom: 0px;
}
.grid-content {
  margin-bottom: 0px;
}
.grid-content .hotel-item {
  margin-bottom: 0px;
}
.mapFixed {
  top: 140px;
  position: revert;
  width: 100%;
}
.detail-wrapper {
  padding: 0px;
  margin-top: -30px;
}
#mapContainer {
  width: 100%;
  height: 80vh;
}
.hotel-item .title {
  padding: 0px;
}
.right-sidebar {
  object-fit: cover;
}
/*-----------scrollll----------------- */
/*
 *  STYLE 1
 */

#style-1::-webkit-scrollbar-track {
  border-radius: 10px;
  background-color: #ffffff00;
}

#style-1::-webkit-scrollbar {
  width: 8px;
  background-color: #ffffff00;
}

#style-1::-webkit-scrollbar-thumb {
  border-radius: 10px;

  background-color: rgb(202, 202, 202);
}

.scrollbar {
  float: left;
  padding-top: 15px;
  height: 84vh;
  padding-bottom: 15px;

  background: rgba(255, 255, 255, 0.696);
  overflow-y: scroll;
  border-radius: 25px;
  /* padding: 40px 40px 40px 40px; */
  /* box-shadow: inset 1px 1px 12px #dddddd; */
}
.hotel-item {
  position: relative;
  width: 100%;

  display: inline-block;
  box-shadow: 0px 0px 0px white;
}
.input-style-1.b-50 input {
  font-size: 14px;
  height: 42px;
  padding: 0px 12px 0px 21px;
  color: #000000;
}

@media screen and (max-width: 600px) {
  .col-md-8 {
    padding-bottom: 40px;
  }
  .col-lg-12 {
    padding-right: 15px;
    padding-left: 15px;
  }
}
</style>
