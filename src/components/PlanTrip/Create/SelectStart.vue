<template>
  <div class="select-strart">
    <div class="col-md-12">
      <form @submit.prevent="onSubmit">
        <div class="col-md-11">
          <div class="">
            <div class="col-md-5">
              <div class="col-md-6">
                <div class="clearfix">
                  <div class="form-label color-white">
                    <!-- <h3>จุดเริ่มต้น</h3> -->
                  </div>
                  <div class="drop-wrap drop-wrap-s-3">
                    <select v-model="newStartpoint" class="drop fontstyle">
                      <option
                        v-for="provinces in province"
                        :key="provinces.province_id"
                        :value="provinces.province_id"
                      >
                        {{ provinces.province_name }}
                      </option>
                    </select>
                  </div>
                </div>
              </div>
              <div class="col-md-6">
                <div class="clearfix">
                  <div class="form-label color-white">
                    <!-- <h3 id="text-tab-travel-ex">จุดสิ้นสุด</h3> -->
                  </div>
                  <div class="drop-wrap drop-wrap-s-3">
                    <select v-model="newEndpoint" class="drop fontstyle">
                      <option
                        v-for="provinces in province"
                        :key="provinces.province_id"
                        :value="provinces.province_id"
                      >
                        {{ provinces.province_name }}
                      </option>
                    </select>
                  </div>
                </div>
              </div>
            </div>

            <div class="col-md-5">
              <div class="col-md-6">
                <div class="clearfix">
                  <div class="form-label color-white">
                    <!-- <h3>เวลา</h3> -->
                  </div>
                  <div class="drop-wrap drop-wrap-s-3">
                    <!-- <input placeholder="ระยะเวลา/Spend Time" /> -->
                    <Datepicker
                      v-model="startdate"
                      @update:modelValue="cheangeData"
                      placeholder="วันเริ่มต้น"
                      textInput
                    />
                  </div>
                </div>
              </div>

              <div class="col-md-6">
                <div class="clearfix">
                  <div class="form-label color-white">
                    <!-- <h3>เวลา</h3> -->
                  </div>
                  <div class="drop-wrap drop-wrap-s-3">
                    <!-- <input placeholder="ระยะเวลา/Spend Time" /> -->

                    <Datepicker
                      v-model="enddate"
                      @update:modelValue="cheangeData"
                      placeholder="วันสิ้นสุด"
                      textInput
                    />
                  </div>
                </div>
              </div>
            </div>
            <div class="col-md-2">
              <div class="clearfix">
                <div class="form-label color-white">
                  <!-- <h3>ค่าใช้จ่าย</h3> -->
                </div>
                <div class="drop-wrap drop-wrap-s-3">
                  <input
                    @change="cheangeData"
                    v-model="budget"
                    placeholder="ค่าใช้จ่าย/Cost"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="col-md-1">
          <div>
            <!-- <div class="clearfix">
              <p class="color-white">
                "ช่วยคำนวณค่าใช้จ่าย และวางแผนการเดินทางได้อย่างคอบคลุม"
              </p>
            </div> -->
            <div class="clearfix center button-m">
              <!-- <button @click="getBackLink()" class="c-button">
                <span class="">กลับ/back</span>
              </button>
              &nbsp; -->
              <button type="submit" class="c-button">
                <span class="">ตกลง</span>
              </button>
            </div>
          </div>
        </div>
      </form>
    </div>

    <div class="hotel-item bg-white">
      <div class="table-view">
        <div class="title bgcolor">
          <h3 class="center text_color">
            "ช่วยคำนวณค่าใช้จ่าย และวางแผนการเดินทาง"
          </h3>
          <div class="row">
            <div class="col-xs-12 col-sm-12 col-md-12">
              <div class="detail-content">
                <div class="">
                  <div class="simple-tab color-1">
                    <div class="tabs-content clearfix">
                      <div>
                        <div id="mapContainer">
                          <div id="container"></div>
                        </div>
                        <br />
                        <Marker />
                        <br />
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
</template>

<script>
import Marker from "../CreateTrip/Marker.vue";
import "leaflet/dist/leaflet.css";
import L from "leaflet";
import "leaflet.control.layers.tree";

import { onMounted, ref } from "vue";
import axios from "axios";
import { BASE_API_URL } from "../../../constants";

import Datepicker from "@vuepic/vue-datepicker";
import "@vuepic/vue-datepicker/dist/main.css";

export default {
  name: "SelectStart",
  components: {
    Marker,
    Datepicker,
  },
  props: ["mainRoute"],
  data() {
    return {
      startlatlong: null,
      endlatlong: null,

      center: [15.364799204818858, 100.9497871378479],
      text: [],
      dataMainRoute: null,
      endMainRoute: null,
    };
  },
  watch: {
    mainRoute: function (newVal, oldVal) {
      this.changeMainRoute(newVal, oldVal);
      this.setupLeafletMap(newVal, oldVal);
    },
  },
  setup() {
    let count = 1;

    const tourismMainRoute = ref([]);
    const province = ref([]);
    const newStartpoint = ref([]);
    const newEndpoint = ref([]);
    newStartpoint.value = sessionStorage.getItem("startpoint");
    newEndpoint.value = sessionStorage.getItem("endpoint");

    const budget = ref([]);
    budget.value = sessionStorage.getItem("budget");

    const activitys = ref([]);
    const hotels = ref([]);
    const homestays = ref([]);
    const restaurants = ref([]);

    const plantrip_name = ref("");
    plantrip_name.value = sessionStorage.getItem("plantrip_name");

    const startdate = ref([]);
    startdate.value = sessionStorage.getItem("startdate");
    const enddate = ref([]);
    enddate.value = sessionStorage.getItem("enddate");

    //const token = localStorage.getItem("token");

    //กดปุ่มบันทึกเพื่อ อัพเดตค่าใน sessionStorage
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
          window.location = "formCreate";
        });
      });

      sessionStorage.setItem("startpoint", newStartpoint.value);
      sessionStorage.setItem("endpoint", newEndpoint.value);
      sessionStorage.setItem("budget", budget.value);
      sessionStorage.setItem("startdate", startdate.value);
      sessionStorage.setItem("enddate", enddate.value);

      // sessionStorage.removeItem("activitys");
      // sessionStorage.removeItem("hotels");
      // sessionStorage.removeItem("homestays");
      // sessionStorage.removeItem("restaurants");
      // sessionStorage.removeItem("timeline");
      sessionStorage.removeItem("createtrip");
      sessionStorage.removeItem("plantrip_name");
    };
    //กดปุ่มบันทึกเพื่อ อัพเดตค่าใน sessionStorage

    //เรียกจังหวัดกับเส้นทางต่างๆมาโชว์ในค่าเริ่มต้น
    const getData = async () => {
      const response = await axios.get(
        `${BASE_API_URL}/plan/tourismMainRoute?startpoint=${newStartpoint.value}&endpoint=${newEndpoint.value}`
      );
      tourismMainRoute.value = response.data.data;

      const responseprovince = await axios.get(`${BASE_API_URL}/plan/province`);
      province.value = responseprovince.data.data;
    };
    //เรียกจังหวัดกับเส้นทางต่างๆมาโชว์ในค่าเริ่มต้น

    //กดปุ่มกลับไปที่หน้าเลือกเส้นทางหน้าแรก
    function getBackLink() {
      sessionStorage.removeItem("formCreatetrip");

      sessionStorage.removeItem("activitys");
      sessionStorage.removeItem("hotels");
      sessionStorage.removeItem("homestays");
      sessionStorage.removeItem("restaurants");
      sessionStorage.removeItem("timeline");

      sessionStorage.removeItem("startpoint");
      sessionStorage.removeItem("endpoint");
      sessionStorage.removeItem("startpointlatlong");
      sessionStorage.removeItem("endpointlatlong");
      sessionStorage.removeItem("plantrip_name");
      sessionStorage.removeItem("budget");

      window.location = "FormIndex";
    }
    //กดปุ่มกลับไปที่หน้าเลือกเส้นทางหน้าแรก

    function cheangeData() {
      sessionStorage.setItem("budget", budget.value);
      sessionStorage.setItem("startdate", startdate.value);
      sessionStorage.setItem("enddate", enddate.value);
    }

    onMounted(() => {
      getData();
    });

    return {
      cheangeData,
      activitys,
      getBackLink,
      hotels,
      homestays,
      restaurants,
      count,
      plantrip_name,

      budget,
      tourismMainRoute,
      getData,
      newStartpoint,
      newEndpoint,
      onSubmit,
      province,

      enddate,
      startdate,
    };
  },
  methods: {
    changeMainRoute: function (newVal) {
      sessionStorage.setItem("MainRoute", newVal);

      if (newVal == 87) {
        this.endMainRoute = [14.94418909, 103.80016462];
      } else if (newVal == 88) {
        this.endMainRoute = [14.51130579, 103.67484664];
      }
    },

    setupLeafletMap: function (newVal) {
      this.dataMainRoute = newVal;

      const mapDiv = L.map("mapContainer").setView(this.center, 10);
      L.tileLayer(
        "https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token=pk.eyJ1IjoicG9uZ3Bvb20iLCJhIjoiY2txdGk4OHkwMWpzcDJzbmJxeXFnMHVtZyJ9.mJ9FrZH8wybzE3tS31CZlQ",
        {
          attribution:
            'Map data (c) <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery (c) <a href="https://www.mapbox.com/">Mapbox</a>',
          maxZoom: 18,
          id: "mapbox/streets-v11",
          accessToken:
            "pk.eyJ1IjoicG9uZ3Bvb20iLCJhIjoiY2txdGk4OHkwMWpzcDJzbmJxeXFnMHVtZyJ9.mJ9FrZH8wybzE3tS31CZlQ",
        }
      ).addTo(mapDiv);

      /// หมุดบนแผนที่ //////////////////////////////
      var myIcon = L.icon({
        iconUrl: "images/marker/mark2.0.png",
        iconSize: [30, 35],
        iconAnchor: [18, 38],
        popupAnchor: [-1, -40],
      });

      var myIconAvtivity = L.icon({
        iconUrl: "images/mapicon/กิจกรรม.png",
        iconSize: [30, 33],
        iconAnchor: [18, 50],
        popupAnchor: [-1, -40],
      });

      var IconRooms = L.icon({
        iconUrl: "images/mapicon/ที่พัก.png",
        iconSize: [33, 33],
        iconAnchor: [18, 50],
        popupAnchor: [-1, -40],
      });
      var IconHomestay = L.icon({
        iconUrl: "images/mapicon/โฮมเต.png",
        iconSize: [33, 33],
        iconAnchor: [18, 50],
        popupAnchor: [-1, -40],
      });

      var IconCommunity = L.icon({
        iconUrl: "images/mapicon/ชุมชน_2.png",
        iconSize: [30, 33],
        iconAnchor: [32, 32],
        popupAnchor: [-15, -35],
      });

      // var IconReview = L.icon({
      //   iconUrl: "images/mapicon/บล้อค.png",
      //   iconSize: [28, 32],
      //   iconAnchor: [18, 50],
      //   popupAnchor: [-1, -40],
      // });

      var IconRestaurant = L.icon({
        iconUrl: "images/mapicon/อาหาร.png",
        iconSize: [30, 30],
        iconAnchor: [18, 50],
        popupAnchor: [-1, -40],
      });

      var IconBusiness = L.icon({
        iconUrl: "images/mapicon/ธุรกิจ.png",
        iconSize: [28, 30],
        iconAnchor: [18, 50],
        popupAnchor: [-1, -40],
      });

      // var IconRelevant = L.icon({
      //   iconUrl: "images/mapicon/สถานที่ที่เกี่ยวข้อง.png",
      //   iconSize: [28, 30],
      //   iconAnchor: [18, 50],
      //   popupAnchor: [-1, -40],
      // });

      var IconNature = L.icon({
        iconUrl: "images/mapicon/ธรรมชาติ.png",
        iconSize: [28, 30],
        iconAnchor: [18, 50],
        popupAnchor: [-1, -40],
      });
      var IconPlace = L.icon({
        iconUrl: "images/mapicon/สถานที่ประวัติศาสตร์.png",
        iconSize: [28, 30],
        iconAnchor: [18, 50],
        popupAnchor: [-1, -40],
      });

      var IconPlan = L.icon({
        iconUrl: "images/mapicon/เดินทาง.png",
        iconSize: [28, 30],
        iconAnchor: [18, 50],
        popupAnchor: [-1, -40],
      });

      var IconCar = L.icon({
        iconUrl: "images/mapicon/รถ.png",
        iconSize: [28, 30],
        iconAnchor: [18, 50],
        popupAnchor: [-1, -40],
      });

      var IconTrain = L.icon({
        iconUrl: "images/mapicon/รถไฟ.png",
        iconSize: [28, 30],
        iconAnchor: [18, 50],
        popupAnchor: [-1, -40],
      });

      var IconSouvenir = L.icon({
        iconUrl: "images/mapicon/ของฝาก.png",
        iconSize: [28, 30],
        iconAnchor: [18, 50],
        popupAnchor: [-1, -40],
      });

      const startpoint = sessionStorage.getItem("startpoint");
      const endpoint = sessionStorage.getItem("endpoint");

      Promise.all([
        fetch(
          "https://api.trinitytrip.com/api/plan/activity?startpoint=" +
            startpoint +
            "&endpoint=" +
            endpoint
        ),
      ]).then(async ([response1]) => {
        const responseData1 = await response1.json();

        const data1 = responseData1.data;

        const layerGroup = L.featureGroup().addTo(mapDiv);

        data1.forEach(
          ({
            activity_latitude,
            activity_longitude,
            community_name,
            activity_name,
            activity_image_cover_link,
            province_id,
            community_id,
            activity_id,
          }) => {
            layerGroup.addLayer(
              L.marker([activity_latitude, activity_longitude], {
                icon: myIconAvtivity,
              }).bindPopup(
                `            <div style="width: 200px; height: 365px;">
                            <b>ชุมชน</b>: ${community_name}
                                    <br/>
                                    <a href="communitydetail?id=${community_id}">
                                    <br/>
                                     <img style="width: 170px; height: 150px; display: block;margin: auto; border-radius: 15px;" src='${activity_image_cover_link}' >
                                     </a>
                                     <br/>
                                    <b>กิจกรรม</b>: ${activity_name}
                                    <br/>
                                    <br/>
                                    <a class='c-button bg-green ' style="text-align: center; display: inline-block; width:100%; "   href="activitydetailall?page=1&group=2&id=${activity_id} ")' >เพิ่มเติม</a>
                                    <br/> <br/>
                                    
                                     <button  class='c-button bg-green ' style="text-align: center; display: inline-block; width:100%;"   onclick='addActivity(${province_id},${community_id},${activity_id},"${community_name}","${activity_name}","${activity_image_cover_link}")' >เลือก</button>
                                    <br/>
                                     <br/>
                                     <br/>
                                     </div>
                                    `
              )
            );
          }
        );

        mapDiv.fitBounds(layerGroup.getBounds());
      });

      //////////////////////////////////

      const objStartlatlong = sessionStorage.getItem("startpointlatlong");
      const startlatlong = JSON.parse(objStartlatlong);
      this.startlatlong = startlatlong;

      const objEndlatlong = sessionStorage.getItem("endpointlatlong");
      const endlatlong = JSON.parse(objEndlatlong);
      this.endlatlong = endlatlong;

      var line = L.Routing.control({
        waypoints: [L.latLng(this.startlatlong), L.latLng(this.endlatlong)],
        routeWhileDragging: false,
        show: false,
        addWaypoints: false,
        draggableWaypoints: false,
        fitSelectedRoutes: true,

        lineOptions: {
          styles: [
            { color: "black", opacity: 0.15, weight: 9 },
            { color: "white", opacity: 0.8, weight: 6 },
            { color: "red", opacity: 1, weight: 3 },
          ],
        },

        createMarker: function (i, wp, nWps) {
          if (i === 0 || i === nWps - 1) {
            // here change the starting and ending icons
            return L.marker(wp.latLng, {
              icon: myIcon, // here pass the custom marker icon instance
            });
          } else {
            // here change all the others
            return L.marker(wp.latLng, {
              icon: myIcon,
            });
          }
        },
      }).addTo(mapDiv);
      // console.log(line);

      // var myIconline = L.icon({
      //   iconUrl: "images/marker/1.png",
      //   iconSize: [50, 50],
      //   iconAnchor: [0, 0],
      // });

      line.on("routesfound", function (e) {
        var routes = e.routes;
        var summary = routes[0].summary;
        var coordinates = routes[0].coordinates;
        var point = coordinates.length / 2;

        // var timemin = summary.totalTime / 60;
        // var rhours = Math.floor(timemin);
        // var minutes = (timemin - rhours) * 60;
        // var rminutes = Math.round(minutes);

        // console.log(time);

        L.marker(coordinates[Math.floor(point)], {
          icon: L.divIcon({
            className: "location-pin",
            html: `<div style="width: 150px; height: 50px; display: block;margin: auto;border-radius: 1.25rem; background: rgb(255, 255, 255); color: black; text-align: center;padding-bottom: 10px;padding-top: 10px; font-family: "Prompt", sans-serif;"><span>ระยะทาง ${(
              summary.totalDistance / 1000
            ).toFixed(2)} km.</span><br/><span>เวลาที่ใช้ ${Math.floor(
              summary.totalTime / 3600
            )} ชั่วโมง${Math.round(
              (summary.totalTime % 3600) / 60
            )}นาที</span></div>`,
            iconSize: [30, 33],
            //iconAnchor: [32, 32],
            iconAnchor: [10, 33],
          }),
        }).addTo(mapDiv);
        // console.log(minutes, rminutes, summary.totalTime / 3600);
        // .bindPopup(
        //   "Total distance is " +
        //     (summary.totalDistance / 1000).toFixed(2) +
        //     " km and total time is " +
        //     Math.round((summary.totalTime % 3600) / 60) +
        //     " minutes"
        // )
        // .openPopup()
        // .on("mouseover", function () {
        //   this.openPopup();
        // })
        // .on("mouseout", function () {
        //   this.openPopup();
        // });
      });

      //////////////////////////////////////////////

      //////////////////////////////////////////////

      let geoJson = {};

      var myIconAv = L.icon({
        iconUrl: "images/marker/1.png",
        iconSize: [1, 1],
        iconAnchor: [18, 50],
        popupAnchor: [-1, -40],
      });

      axios
        .get(
          "https://api.trinitytrip.com/api/plan/activity?startpoint=" +
            startpoint +
            "&endpoint=" +
            endpoint
        )
        .then((response) => {
          geoJson = { ...response.data.data };
          // console.log(geoJson);
          //setInterval(() => {
          for (let key in geoJson) {
            let activity = geoJson[key];

            const lat = activity.community_latitude;
            const lng = activity.community_longitude;
            const line112 = activity.tourism_main_route_id;

            var waypoints;
            waypoints = [L.latLng(this.endlatlong), L.latLng(lat, lng)];

            let MainRoute = sessionStorage.getItem("MainRoute");

            if (line112 == MainRoute) {
              L.Routing.control({
                waypoints: waypoints,
                plan: L.Routing.plan(waypoints, {
                  createMarker: function (i, wp, nWps) {
                    if (i === 0 || i === nWps - 1) {
                      // here change the starting and ending icons
                      return L.marker(wp.latLng, {
                        icon: myIconAv, // here pass the custom marker icon instance
                      });
                    } else {
                      // here change all the others
                      return L.marker(wp.latLng, {
                        icon: myIconAv,
                      });
                    }
                  },
                }),
                routeWhileDragging: false,
                show: false,
                addWaypoints: false,
                draggableWaypoints: false,
                fitSelectedRoutes: false,

                lineOptions: {
                  styles: [
                    { color: "black", opacity: 0.15, weight: 9 },
                    { color: "white", opacity: 0.8, weight: 6 },
                    { color: "DodgerBlue", opacity: 1, weight: 3 },
                  ],
                },
              }).addTo(mapDiv);
            }
          }
          //}, 1000);
        });

      //////////////////////////////////////////////

      //////////////////////////////////////////////

      Promise.all([
        fetch(
          "https://api.trinitytrip.com/api/plan/hotel?startpoint=" +
            startpoint +
            "&endpoint=" +
            endpoint
        ),
      ]).then(async ([response1]) => {
        const responseData1 = await response1.json();

        const data1 = responseData1.data;

        const layerGroup = L.featureGroup().addTo(mapDiv);

        data1.forEach(
          ({
            hotel_latitude,
            hotel_longitude,
            hotel_id,
            hotel_name,
            province_name,
            community_id,

            hotel_image_cover_link,
          }) => {
            layerGroup.addLayer(
              L.marker([hotel_latitude, hotel_longitude], {
                icon: IconRooms,
              }).bindPopup(
                `<div style="width: 200px; height: 365px;">
                        <b>ชื่อที่พัก</b> ${hotel_name}
                                    <br/>
                                    <b>ที่อยู่</b>: ${province_name}
                                    <br/>
                                     <a href="communitydetail?id=${community_id}">
                                     <br/>
                                    <img style="width: 170px; height: 150px; display: block;margin: auto; border-radius: 15px;" src="${hotel_image_cover_link}" alt="">
                                    </a>

                                    <br/>
                                    <a class='c-button bg-green ' style="text-align: center; display: inline-block; width:100%; "   href="facilitationdetailindexpage?page=hotel&group=0&id=${hotel_id} ")' >เพิ่มเติม</a>
                                     <br/><br/>
                                     <button  class='c-button bg-green ' style="text-align: center; display: inline-block; width:100%; "  onclick='addHotel("${province_name}",${community_id},${hotel_id},"${hotel_name}","${hotel_image_cover_link}")' >เลือก</button>
                                    <br/>
                                     <br/>
                                     <br/>
                               </div>
                                    `
              )
            );
          }
        );

        mapDiv.fitBounds(layerGroup.getBounds());
      });

      //////////////////////////////////////
      //////////////////////////////////////////////

      Promise.all([
        fetch(
          "https://api.trinitytrip.com/api/plan/homestay?startpoint=" +
            startpoint +
            "&endpoint=" +
            endpoint
        ),
      ]).then(async ([response1]) => {
        const responseData1 = await response1.json();

        const data1 = responseData1.data;

        const layerGroup = L.featureGroup().addTo(mapDiv);

        data1.forEach(
          ({
            homestay_latitude,
            homestay_longitude,
            homestay_id,
            homestay_name,
            province_name,
            community_id,

            homestay_image_cover_link,
          }) => {
            layerGroup.addLayer(
              L.marker([homestay_latitude, homestay_longitude], {
                icon: IconHomestay,
              }).bindPopup(
                `<div style="width: 200px; height: 365px;">
                            <b>ชื่อที่พัก</b> ${homestay_name}
                                    <br/>
                                    <b>ที่อยู่</b>: ${province_name}
                                    <br/>
                                     <a href="communitydetail?id=${community_id}">
                                     <br/>
                                    <img style="width: 170px; height: 150px; display: block;margin: auto; border-radius: 15px;" src="${homestay_image_cover_link}" alt="">
                                     </a>

                                    <br/>
                                    <a class='c-button bg-green ' style="text-align: center; display: inline-block; width:100%; "  href="facilitationdetailindexpage?page=homestay&group=0&id=${homestay_id} ")' >เพิ่มเติม</a>
                                      <br/><br/>
                                     <button  class='c-button bg-green ' style="text-align: center; display: inline-block; width:100%; "  onclick='addHomestay("${province_name}",${community_id},${homestay_id},"${homestay_name}","${homestay_image_cover_link}")' >เลือก</button>
                                    <br/>
                                     <br/>
                                     <br/>
                               </div>
                                    `
              )
            );
          }
        );

        mapDiv.fitBounds(layerGroup.getBounds());
      });

      //////////////////////////////////////

      ///////////////////////////////////////////

      Promise.all([
        fetch(
          "https://api.trinitytrip.com/api/plan/restaurant?startpoint=" +
            startpoint +
            "&endpoint=" +
            endpoint
        ),
      ]).then(async ([response1]) => {
        const responseData1 = await response1.json();

        const data1 = responseData1.data;

        const layerGroup = L.featureGroup().addTo(mapDiv);

        data1.forEach(
          ({
            restaurant_latitude,
            restaurant_longitude,
            restaurant_id,
            restaurant_name,
            province_name,
            province_id,
            community_id,
            restaurant_image_cover_link,
          }) => {
            layerGroup.addLayer(
              L.marker([restaurant_latitude, restaurant_longitude], {
                icon: IconRestaurant,
              }).bindPopup(
                `<div style="width: 200px; height: 365px;">
                          <b>ชื่อร้านอาหาร</b> ${restaurant_name}
                                    <br/>
                                    <b>ที่อยู่</b>: ${province_name}
                                    <br/>
                                     <a href="communitydetail?id=${community_id}">
                                     <br/>
                                    <img style="width: 170px; height: 150px; display: block;margin: auto; border-radius: 15px;" src="${restaurant_image_cover_link}" alt="">
                                    </a>
                                    <br/>
                                    <a class='c-button bg-green ' style="text-align: center; display: inline-block; width:100%; "  href="facilitationdetailindexpage?page=restaurant&group=0&id=${restaurant_id} ")' >เพิ่มเติม</a>
                                     <br/><br/>
                                     <button  class='c-button bg-green ' style="text-align: center; display: inline-block; width:100%; "  onclick='addRestaurant(${province_id},${community_id},${restaurant_id},"${restaurant_name}","${restaurant_image_cover_link}")' >เลือก</button>
                                    <br/>
                                     <br/>
                                     <br/>
                               </div>
                                    `
              )
            );
          }
        );

        mapDiv.fitBounds(layerGroup.getBounds());
      });

      ///////////////////////////////////////////////

      ///////////////////////////////////////////

      Promise.all([
        fetch(
          "https://api.trinitytrip.com/api/plan/communityMap?startpoint=" +
            startpoint +
            "&endpoint=" +
            endpoint
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
            layerGroup.addLayer(
              L.marker([community_latitude, community_longitude], {
                icon: IconCommunity,
              }).bindPopup(
                `<div style="width: 200px; height: 310px;">
                            <b>ชื่อชุมชน</b> ${community_name}
                                    <br/>
                                    
                                    
                                    <br/>
                                     <a href="communitydetail?id=${community_id}">
                                    <img style="width: 170px; height: 150px; display: block;margin: auto; border-radius: 15px;" src="${community_image_cover_link}" alt="">
                                    </a>
                                    <br/>
                                    <b>ที่อยู่</b>: ${province_name}
                                     <br/><br/>
                                    <a class='c-button bg-green ' style="text-align: center; display: inline-block; width:100%; "  href="communitydetail?id=${community_id}" >เพิ่มเติม</a>

                                    <br/>

                                     <br/>
                                     <br/>
                               </div>
                                    `
              )
            );
          }
        );

        mapDiv.fitBounds(layerGroup.getBounds());
      });

      ///////////////////////////////////////////////
      ///////////////////////////////////////////

      // Promise.all([
      //   fetch(
      //     "https://api.trinitytrip.com/api/plan/review?startpoint=" +
      //       startpoint +
      //       "&endpoint=" +
      //       endpoint
      //     //https://api.trinitytrip.com/api/plan/communityMap?startpoint=49&endpoint=21
      //   ),
      // ]).then(async ([response1]) => {
      //   const responseData1 = await response1.json();

      //   const data1 = responseData1.data;

      //   const layerGroup = L.featureGroup().addTo(mapDiv);

      //   data1.forEach(
      //     ({
      //       tourism_experience_latitude,
      //       tourism_experience_longitude,
      //       tourism_experience_id,
      //       tourism_experience_name,
      //       province_name,
      //       amphur_name,
      //       tambon_name,
      //       community_id,
      //       tourism_experience_image_cover,
      //     }) => {
      //       layerGroup.addLayer(
      //         L.marker(
      //           [tourism_experience_latitude, tourism_experience_longitude],
      //           {
      //             icon: IconReview,
      //           }
      //         ).bindPopup(
      //           `<div style="width: 200px; height: 365px;">
      //                     <b>ชื่อชุมชน</b> ${tourism_experience_name}
      //                               <br/>
      //                               <b>ที่อยู่</b>: ${province_name}-${amphur_name}-${tambon_name}
      //                               <br/>
      //                                <a href="communitydetail?id=${community_id}">
      //                               <img style="width: 170px; height: 150px; display: block;margin: auto;" src="${tourism_experience_image_cover}" alt="">
      //                               </a>

      //                               <br/>
      //                               <a class='c-button bg-green hv-transparent fr'   href="blogdetail?page=1&group=2&id=${tourism_experience_id} ")' >เพิ่มเติม</a>
      //                                <br/>

      //                                <br/>
      //                                <br/>
      //                          </div>
      //                               `
      //         )
      //       );
      //     }
      //   );

      //   mapDiv.fitBounds(layerGroup.getBounds());
      // });

      ///////////////////////////////////////////////

      Promise.all([
        fetch(
          "https://api.trinitytrip.com/api/plan/bussiness?startpoint=" +
            startpoint +
            "&endpoint=" +
            endpoint
          //https://api.trinitytrip.com/api/plan/bussiness?startpoint=21&endpoint=69
        ),
      ]).then(async ([response1]) => {
        const responseData1 = await response1.json();

        const data1 = responseData1.data;

        const layerGroup = L.featureGroup().addTo(mapDiv);

        data1.forEach(
          ({
            bussiness_latitude,
            bussiness_longitude,
            bussiness_id,
            bussiness_name,
            bussiness_image_cover_link,
          }) => {
            layerGroup.addLayer(
              L.marker([bussiness_latitude, bussiness_longitude], {
                icon: IconBusiness,
              }).bindPopup(
                `<div style="width: 200px; height: 290px;">
                          <b>ชื่อธุรกิจ</b> ${bussiness_name}
                                    <br/>

                                    <br/>

                                    <img style="width: 170px; height: 150px; display: block;margin: auto; border-radius: 15px;" src="${bussiness_image_cover_link}" alt="">
                                    </a>
                                    

                                    <br/>
                                    <a class='c-button bg-green hv-transparent fr' style="text-align: center; display: inline-block; width:100%; "  href="facilitationdetailindexpage?page=bussiness&group=0&id=${bussiness_id} ")' >เพิ่มเติม</a>
                                     <br/>

                                     <br/>
                                     <br/>
                               </div>
                                    `
              )
            );
          }
        );

        mapDiv.fitBounds(layerGroup.getBounds());
      });

      // Promise.all([
      //   fetch(
      //     "https://api.trinitytrip.com/api/plan/PoiMap?startpoint=" +
      //       startpoint +
      //       "&endpoint=" +
      //       endpoint
      //     //https://api.trinitytrip.com/api/plan/PoiMap?startpoint=21&endpoint=20
      //   ),
      // ]).then(async ([response1]) => {
      //   const responseData1 = await response1.json();

      //   const data1 = responseData1.data;

      //   const layerGroup = L.featureGroup().addTo(mapDiv);

      //   data1.forEach(
      //     ({
      //       poi_latitude,
      //       poi_longitude,
      //       poi_id,
      //       poi_name,
      //       province_name,

      //       poi_image_cover_link,
      //     }) => {
      //       layerGroup.addLayer(
      //         L.marker([poi_latitude, poi_longitude], {
      //           icon: IconRelevant,
      //         }).bindPopup(
      //           `<div style="width: 200px; height: 365px;">
      //                       <b>ชื่อสถานที่ที่เกี่ยวข้อง</b> ${poi_name}
      //                               <br/>
      //                               <b>ที่อยู่</b>: ${province_name}
      //                               <br/>
      //                                <a href="facilitationdetailindexpage?page=poi&group=0&id=${poi_id}">
      //                               <img style="width: 170px; height: 150px; display: block;margin: auto;" src="${poi_image_cover_link}" alt="">
      //                               </a>
      //                                <br/>
      //                               <a class='c-button bg-green hv-transparent fr'   href="facilitationdetailindexpage?page=poi&group=0&id=${poi_id}" >เพิ่มเติม</a>

      //                               <br/>

      //                                <br/>
      //                                <br/>
      //                          </div>
      //                               `
      //         )
      //       );
      //     }
      //   );

      //   mapDiv.fitBounds(layerGroup.getBounds());
      // });

      Promise.all([
        fetch(
          "https://api.trinitytrip.com/api/plan/TravelAirplaneMap?startpoint=" +
            startpoint +
            "&endpoint=" +
            endpoint
          //https://api.trinitytrip.com/api/plan/TravelMap?startpoint=40&endpoint=21
        ),
      ]).then(async ([response1]) => {
        const responseData1 = await response1.json();

        const data1 = responseData1.data;
        const layerGroup = L.featureGroup().addTo(mapDiv);
        data1.forEach(
          ({
            travel_latitude,
            travel_longitude,
            travel_id,
            travel_contact,
            travel_telephone,

            travel_image_map_link,
          }) => {
            layerGroup.addLayer(
              L.marker([travel_latitude, travel_longitude], {
                icon: IconPlan,
              }).bindPopup(
                `<div style="width: 200px; height: 310px;">
                            <b>ชื่อบริการขนส่ง</b> ${travel_contact}
                                    <br/>
                                    <b>เบอร์ติดต่อ</b>: ${travel_telephone}
                                    <br/><br/>
                                     <a href="facilitationdetailindexpage?page=travel&group=0&id=${travel_id}">
                                    <img style="width: 170px; height: 150px; display: block;margin: auto; border-radius: 15px;" src="${travel_image_map_link}" alt="">
                                    </a>
                                     <br/>
                                    <a class='c-button bg-green hv-transparent fr' style="text-align: center; display: inline-block; width:100%; "  href="facilitationdetailindexpage?page=travel&group=0&id=${travel_id}" >เพิ่มเติม</a>

                                    <br/>

                                     <br/>
                                     <br/>
                               </div>
                                    `
              )
            );
          }
        );

        mapDiv.fitBounds(layerGroup.getBounds());
      });

      Promise.all([
        fetch(
          "https://api.trinitytrip.com/api/plan/TravelBusMap?startpoint=" +
            startpoint +
            "&endpoint=" +
            endpoint
          //https://api.trinitytrip.com/api/plan/TravelMap?startpoint=40&endpoint=21
        ),
      ]).then(async ([response1]) => {
        const responseData1 = await response1.json();

        const data1 = responseData1.data;
        const layerGroup = L.featureGroup().addTo(mapDiv);
        data1.forEach(
          ({
            travel_latitude,
            travel_longitude,
            travel_id,
            travel_contact,
            travel_telephone,

            travel_image_map_link,
          }) => {
            layerGroup.addLayer(
              L.marker([travel_latitude, travel_longitude], {
                icon: IconCar,
              }).bindPopup(
                `<div style="width: 200px; height: 310px;">
                            <b>ชื่อบริการขนส่ง</b> ${travel_contact}
                                    <br/>
                                    <b>เบอร์ติดต่อ</b>: ${travel_telephone}
                                    <br/><br/>
                                     <a href="facilitationdetailindexpage?page=travel&group=0&id=${travel_id}">
                                    <img style="width: 170px; height: 150px; display: block;margin: auto; border-radius: 15px;" src="${travel_image_map_link}" alt="">
                                    </a>
                                     <br/>
                                    <a class='c-button bg-green hv-transparent fr' style="text-align: center; display: inline-block; width:100%; "  href="facilitationdetailindexpage?page=travel&group=0&id=${travel_id}" >เพิ่มเติม</a>

                                    <br/>

                                     <br/>
                                     <br/>
                               </div>
                                    `
              )
            );
          }
        );

        mapDiv.fitBounds(layerGroup.getBounds());
      });

      Promise.all([
        fetch(
          "https://api.trinitytrip.com/api/plan/TravelTrainMap?startpoint=" +
            startpoint +
            "&endpoint=" +
            endpoint
          //https://api.trinitytrip.com/api/plan/TravelMap?startpoint=40&endpoint=21
        ),
      ]).then(async ([response1]) => {
        const responseData1 = await response1.json();

        const data1 = responseData1.data;
        const layerGroup = L.featureGroup().addTo(mapDiv);
        data1.forEach(
          ({
            travel_latitude,
            travel_longitude,
            travel_id,
            travel_contact,
            travel_telephone,

            travel_image_map_link,
          }) => {
            layerGroup.addLayer(
              L.marker([travel_latitude, travel_longitude], {
                icon: IconTrain,
              }).bindPopup(
                `<div style="width: 200px; height: 310px;">
                            <b>ชื่อบริการขนส่ง</b> ${travel_contact}
                                    <br/>
                                    <b>เบอร์ติดต่อ</b>: ${travel_telephone}
                                    <br/><br/>
                                     <a href="facilitationdetailindexpage?page=travel&group=0&id=${travel_id}">
                                    <img style="width: 170px; height: 150px; display: block;margin: auto; border-radius: 15px;" src="${travel_image_map_link}" alt="">
                                    </a>
                                     <br/>
                                    <a class='c-button bg-green hv-transparent fr' style="text-align: center; display: inline-block; width:100%; "  href="facilitationdetailindexpage?page=travel&group=0&id=${travel_id}" >เพิ่มเติม</a>

                                    <br/>

                                     <br/>
                                     <br/>
                               </div>
                                    `
              )
            );
          }
        );

        mapDiv.fitBounds(layerGroup.getBounds());
      });

      Promise.all([
        fetch(
          "https://api.trinitytrip.com/api/plan/NatureMap?startpoint=" +
            startpoint +
            "&endpoint=" +
            endpoint
          //https://api.trinitytrip.com/api/plan/NatureMap?startpoint=40&endpoint=21
        ),
      ]).then(async ([response1]) => {
        const responseData1 = await response1.json();

        const data1 = responseData1.data;
        const layerGroup = L.featureGroup().addTo(mapDiv);
        data1.forEach(
          ({
            nature_latitude,
            nature_longitude,
            nature_id,
            nature_name,
            nature_caretaker,

            nature_image_cover_link,
          }) => {
            layerGroup.addLayer(
              L.marker([nature_latitude, nature_longitude], {
                icon: IconNature,
              }).bindPopup(
                `<div style="width: 200px; height: 310px;">
                            <b>ชื่อ</b> ${nature_name}
                                    <br/>
                                    <b>ติดต่อ</b>: ${nature_caretaker}
                                    <br/><br/>
                                     <a href="facilitationdetailindexpage?page=nature&group=0&id=${nature_id}">
                                    <img style="width: 170px; height: 150px; display: block;margin: auto; border-radius: 15px;" src="${nature_image_cover_link}" alt="">
                                    </a>
                                     <br/>
                                    <a class='c-button bg-green hv-transparent fr' style="text-align: center; display: inline-block; width:100%; " href="facilitationdetailindexpage?page=nature&group=0&id=${nature_id}" >เพิ่มเติม</a>

                                    <br/>

                                     <br/>
                                     <br/>
                               </div>
                                    `
              )
            );
          }
        );

        mapDiv.fitBounds(layerGroup.getBounds());
      });

      Promise.all([
        fetch(
          "https://api.trinitytrip.com/api/plan/PlaceMap?startpoint=" +
            startpoint +
            "&endpoint=" +
            endpoint
          //https://api.trinitytrip.com/api/plan/PlaceMap?startpoint=40&endpoint=21
        ),
      ]).then(async ([response1]) => {
        const responseData1 = await response1.json();

        const data1 = responseData1.data;
        const layerGroup = L.featureGroup().addTo(mapDiv);
        data1.forEach(
          ({
            place_latitude,
            place_longitude,
            place_id,
            place_name,
            place_contact_person,

            place_image_cover_link,
          }) => {
            layerGroup.addLayer(
              L.marker([place_latitude, place_longitude], {
                icon: IconPlace,
              }).bindPopup(
                `<div style="width: 200px; height: 310px;">
                            <b>ชื่อ</b> ${place_name}
                                    <br/>
                                    <b>ติดต่อ</b>: ${place_contact_person}
                                    <br/><br/>
                                     <a href="facilitationdetailindexpage?page=place&group=0&id=${place_id}">
                                    <img style="width: 170px; height: 150px; display: block;margin: auto; border-radius: 15px;" src="${place_image_cover_link}" alt="">
                                    </a>
                                     <br/>
                                    <a class='c-button bg-green hv-transparent fr' style="text-align: center; display: inline-block; width:100%; "  href="facilitationdetailindexpage?page=place&group=0&id=${place_id}" >เพิ่มเติม</a>

                                    <br/>

                                     <br/>
                                     <br/>
                               </div>
                                    `
              )
            );
          }
        );

        mapDiv.fitBounds(layerGroup.getBounds());
      });

      ///////////////////////////////////////////

      Promise.all([
        fetch(
          "https://api.trinitytrip.com/api/plan/SouvenirMap?startpoint=" +
            startpoint +
            "&endpoint=" +
            endpoint
          //https://api.trinitytrip.com/api/plan/PoiMap?startpoint=21&endpoint=20
        ),
      ]).then(async ([response1]) => {
        const responseData1 = await response1.json();

        const data1 = responseData1.data;

        const layerGroup = L.featureGroup().addTo(mapDiv);

        data1.forEach(
          ({
            poi_latitude,
            poi_longitude,
            poi_id,
            poi_name,

            poi_image_cover_link,
          }) => {
            layerGroup.addLayer(
              L.marker([poi_latitude, poi_longitude], {
                icon: IconSouvenir,
              }).bindPopup(
                `<div style="width: 200px; height: 310px;">
                            <b>ชื่อร้านของฝาก</b> ${poi_name}
                                    <br/>

                                    <br/>
                                     <a href="facilitationdetailindexpage?page=poi&group=0&id=${poi_id}">
                                    <img style="width: 170px; height: 150px; display: block;margin: auto; border-radius: 15px;" src="${poi_image_cover_link}" alt="">
                                    </a>
                                     <br/>
                                    <a class='c-button bg-green hv-transparent fr' style="text-align: center; display: inline-block; width:100%; "  href="facilitationdetailindexpage?page=poi&group=0&id=${poi_id}" >เพิ่มเติม</a>

                                    <br/>

                                     <br/>
                                     <br/>
                               </div>
                                    `
              )
            );
          }
        );

        mapDiv.fitBounds(layerGroup.getBounds());
      });

      ///////////////////////////////////////////////

      // var basemaps = {
      // Topography: L.tileLayer.wms(
      //    "http://ows.mundialis.de/services/service?",
      //    {
      //       layers: "TOPO-WMS",
      //     }
      //  ),
      // };

      ////////////////////////////////////////////////////
    },
  },
  mounted() {
    this.setupLeafletMap();
    this.changeMainRoute();

    let recaptchaScript = document.createElement("script");
    recaptchaScript.setAttribute("src", "js/cart.js");
    document.head.appendChild(recaptchaScript);
  },
};
</script>

<style scoped>
.col-md-12 {
  padding-right: 5px;
  padding-left: 5px;
}
.col-md-6 {
  padding-right: 5px;
  padding-left: 5px;
}
.col-md-5 {
  padding-right: 5px;
  padding-left: 5px;
}
.col-md-2 {
  padding-right: 5px;
  padding-left: 5px;
}
.grid-box {
  display: grid;
  grid-template-columns: auto 260px;
  row-gap: 1em;
  column-gap: 2em;
  margin-top: 20px;
}
.wrapper {
  display: grid;
  grid-template-columns: 50% 50%;
  row-gap: 1em;
  column-gap: 1em;
}
.center {
  text-align: center;
}
.text_color {
  color: rgb(39, 110, 202);
}
h3 {
  font-size: 26px;
  font-weight: 400;
  letter-spacing: 0px;
  padding-bottom: 5px;
}
.fontstyle {
  font-style: italic;
  font-size: 18px;
  line-height: inherit;
  font-weight: 200 !important;
  color: rgb(39, 110, 202);
}
.drop-wrap-s-3 {
  height: 46px;
  border: 1px solid #fff;
  -moz-border-radius: 25px;
  border-radius: 20px;
  line-height: 20px;
  background: #ffffff54;
}
input {
  height: inherit;
  width: 100%;
  padding-left: 16px;
  font-style: italic;
  font-size: 18px;
  line-height: inherit;
  font-weight: 200 !important;
  color: rgb(39, 110, 202);
}
::placeholder {
  color: rgb(39, 110, 202);
}
.form-block {
  margin-top: 25px;
}
.button-m {
  /* margin-top: 38px; */
  text-align: center;
}
p {
  font-size: 18px;
  line-height: 26px;
  font-weight: 400;
  padding: 32px 15px 0px 15px;
  text-align: center;
}
span {
  font-size: 16px;
  color: white;
}
.c-button {
  padding: 0px 14px;
  font-size: 12px;
  text-transform: capitalize;
  line-height: 0px;
  height: 40px;
  font-weight: 700;
  font-style: italic;
  text-shadow: 0 0 2px white;
  background: rgb(39, 110, 202);
  border-radius: 15px;
}

/**-------------- map*/
.hotel-item {
  margin-top: 20px;
  border-radius: 20px;
}
.hotel-item .title {
  border-radius: 20px;
}
#mapContainer {
  width: 100%;
  height: 500px;
  border-radius: 20px;
}
option {
  color: black;
}
.bgcolor {
  background-color: #ffffff;
}
.col-md-3 {
  /* padding-top: 5px; */
  padding-right: 5px;
  padding-left: 5px;
  /* padding-bottom: 5px; */
}

.col-md-11 {
  padding-right: 5px;
  padding-left: 5px;
}
.col-md-1 {
  padding-right: 5px;
  padding-left: 5px;
}
@media screen and (max-width: 600px) {
  .col-md-3 {
    padding-top: 5px;
    padding-bottom: 5px;
  }
  .col-md-5 {
    padding-top: 5px;
    padding-bottom: 5px;
    padding-right: 0px;
    padding-left: 0px;
  }
  .col-md-6 {
    padding-top: 5px;
    padding-bottom: 5px;
  }
  .col-md-1 {
    padding-top: 5px;
    padding-bottom: 5px;
  }
}
</style>
