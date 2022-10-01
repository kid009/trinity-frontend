<template>
  <div class="padd-10-10-0">
    <!-- <h1 class="">
      ทริป {{ plantrip_name }}<a class="btn btn-success"><h2>แชร์</h2></a>
    </h1> -->
    <div class="center_tb">
      <div
        class="fb-share-button"
        :data-href="'https://trinitytrip.com/app/showTrip?id=' + id"
        data-layout="button_count"
        data-size="small"
      >
        <h1 class="">
          ทริป {{ plantrip_name }}
          <a
            target="_blank"
            :href="
              'https://www.facebook.com/sharer/sharer.php?u=https%3A%2F%2Ftrinitytrip.com%2Fapp%2FshowTrip%3Fid%3D' +
              id +
              '&amp;src=sdkpreparse'
            "
            class="btn btn-success"
            ><h2>แชร์</h2></a
          >
        </h1>
      </div>
    </div>
  </div>
  <div class="">
    <div class="hotel-item">
      <div class="table-view">
        <div class="title hotel-middle cell-view">
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
import { onMounted, ref } from "vue";
import axios from "axios";
import { BASE_API_URL } from "../../../constants";

import "leaflet/dist/leaflet.css";
import "leaflet-routing-machine";
import L from "leaflet";

export default {
  name: "FormShowTrip",
  components: {
    Marker,
  },

  setup() {
    const username = localStorage.getItem("id");
    const plantrip_name = ref([]);
    setTimeout(() => {
      plantrip_name.value = sessionStorage.getItem("plantrip_name");
    }, 3000);

    let id = window.location.search;
    id = id.split("=");
    id = id[1];
    id = id.slice(0, -7);

    function getEdit() {
      window.location = "Create";
    }

    let url = window.location.href;

    const getdelete = async () => {
      let text = "ต้องการลบเส้นทางท่องเที่ยวของคุณใช่หรือไม่!";
      if (confirm(text) == true) {
        const response = await axios.get(
          `${BASE_API_URL}/plan/plantripDelete?username=` +
            username +
            "&plantrip_id=" +
            id
        );
        alert(response.data.message);

        window.location = "PlanTrip";
      } else {
        text = "ต้องการลบเส้นทางท่องเที่ยวของคุณใช่หรือไม่!";
      }
    };

    const myTrip = ref([]);
    const idTrip = ref([]);
    const startpointtrip = ref([]);
    const endpointtrip = ref([]);
    const plantrip_nametrip = ref([]);
    const recommendUser = ref([]);
    const usernameTrip = ref([]);

    const getData = async () => {
      const response = await axios.get(`${BASE_API_URL}/plan/showTripAll`);
      recommendUser.value = response.data.data;
      recommendUser.value.forEach(function (ids) {
        if (ids.plantrip_id == id) {
          usernameTrip.value = ids.create_by;
          startpointtrip.value = ids.plantrip_point_start;
          endpointtrip.value = ids.plantrip_point_end;
          plantrip_nametrip.value = ids.plantrip_name;
        }
      });

      const responses = await axios.get(
        `${BASE_API_URL}/plan/showTrip?username=` + usernameTrip.value
      );
      myTrip.value = responses.data.data;
      idTrip.value = responses.data.data[0];

      getmyTrip(
        id,
        startpointtrip.value,
        endpointtrip.value,
        plantrip_nametrip.value
      );
    };

    const getmyTrip = async (ids, startpoint, endpoint, plantrip_name) => {
      Promise.all([
        fetch("https://api.trinitytrip.com/api/plan/province"),
      ]).then(async ([response1]) => {
        const responseData1 = await response1.json();

        const province = responseData1.data;

        // console.log(province);
        province.forEach(function (id) {
          if (id.province_id == startpoint) {
            const startpointlatlong = [];
            startpointlatlong.push(id.province_latitude);
            startpointlatlong.push(id.province_longitude);
            sessionStorage.setItem(
              "startpointlatlong",
              JSON.stringify(startpointlatlong)
            );
          }
          if (id.province_id == endpoint) {
            const endpointlatlong = [];
            endpointlatlong.push(id.province_latitude);
            endpointlatlong.push(id.province_longitude);
            sessionStorage.setItem(
              "endpointlatlong",
              JSON.stringify(endpointlatlong)
            );
          }
        });
      });

      const responseactivitys = await axios.get(
        `${BASE_API_URL}/plan/plantripActivity?username=` +
          usernameTrip.value +
          "&plantrip_id=" +
          ids
      );

      sessionStorage.setItem(
        "activitys",
        JSON.stringify(responseactivitys.data.data)
      );

      const responsehotels = await axios.get(
        `${BASE_API_URL}/plan/plantripHotel?username=` +
          usernameTrip.value +
          "&plantrip_id=" +
          ids
      );

      sessionStorage.setItem(
        "hotels",
        JSON.stringify(responsehotels.data.data)
      );

      const responsehomestays = await axios.get(
        `${BASE_API_URL}/plan/plantripHomestay?username=` +
          usernameTrip.value +
          "&plantrip_id=" +
          ids
      );

      sessionStorage.setItem(
        "homestays",
        JSON.stringify(responsehomestays.data.data)
      );

      const responserestaurants = await axios.get(
        `${BASE_API_URL}/plan/plantripRestaurant?username=` +
          usernameTrip.value +
          "&plantrip_id=" +
          ids
      );

      sessionStorage.setItem(
        "restaurants",
        JSON.stringify(responserestaurants.data.data)
      );

      sessionStorage.setItem("startpoint", startpoint);
      sessionStorage.setItem("endpoint", endpoint);
      sessionStorage.setItem("plantrip_name", plantrip_name);
    };

    onMounted(() => {
      getData();
    });

    return {
      getmyTrip,
      getEdit,
      getdelete,
      myTrip,
      id,
      plantrip_name,
      url,
      plantrip_nametrip,
      endpointtrip,
      startpointtrip,
      idTrip,
      recommendUser,
      usernameTrip,
    };
  },

  data() {
    return {
      center: [15.364799204818858, 100.9497871378479],
    };
  },
  methods: {
    setupLeafletMap: function () {
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

      // var IconTravel = L.icon({
      //   iconUrl: "images/mapicon/เดินทาง.png",
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
        iconUrl: "images/mapicon/ประวัติศาสตร์.png",
        iconSize: [28, 30],
        iconAnchor: [18, 50],
        popupAnchor: [-1, -40],
      });

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

      /////////////////////////////////////////////

      /////////////////////////////////////////////
      line.on("routesfound", function (e) {
        var routes = e.routes;
        var summary = routes[0].summary;
        var coordinates = routes[0].coordinates;
        var point = coordinates.length / 2;

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

            iconAnchor: [10, 33],
          }),
        }).addTo(mapDiv);
      });

      ////////////////////////////////////////////////

      //////////////////////////////////////////////////////

      const obj1 = sessionStorage.getItem("activitys");
      const objDecode1 = JSON.parse(obj1);
      const activitys = objDecode1;

      const obj2 = sessionStorage.getItem("hotels");
      const objDecode2 = JSON.parse(obj2);
      const objhotels = objDecode2;

      const obj3 = sessionStorage.getItem("restaurants");
      const objDecode3 = JSON.parse(obj3);
      const objrestaurants = objDecode3;
      //console.log(activitys[0].activity_id)

      const obj4 = sessionStorage.getItem("homestays");
      const objDecode4 = JSON.parse(obj4);
      const objhomestays = objDecode4;

      const startpoint = sessionStorage.getItem("startpoint");
      const endpoint = sessionStorage.getItem("endpoint");

      //////////////////////////////////////

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

        //console.log(data1);

        const layerGroup = L.featureGroup().addTo(mapDiv);

        data1.forEach(
          ({
            activity_latitude,
            activity_longitude,
            activity_name,
            activity_id,

            activity_image_cover_link,
          }) => {
            let countActivity = 0;

            while (countActivity < activitys.length) {
              if (activity_id == activitys[countActivity].activity_id) {
                layerGroup.addLayer(
                  L.marker([activity_latitude, activity_longitude], {
                    icon: myIconAvtivity,
                  }).bindPopup(
                    `<div style="width: 200px; height: 280px;">
                            <b>ชื่อกิจกรรม</b> ${activity_name}


                                        <br/>
                                        <img style="width: 170px; height: 150px; display: block;margin: auto;  border-radius: 15px;" src="${activity_image_cover_link}" alt="">
                                        <br/>
                                    <a class='c-button bg-green ' style="text-align: center; display: inline-block; width:100%; "   href="activitydetailall?page=1&group=2&id=${activity_id} ")' >เพิ่มเติม</a>
                                    <br/> <br/>
                                  </div>
                                        `
                  )
                );
              }
              countActivity++;
            }
          }
        );

        mapDiv.fitBounds(layerGroup.getBounds());
      });

      ////////////////////////////////////////////////////////////////

      ////////////////////////////////////////////////////////////////////////////////

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
        //console.log(data1);

        const layerGroup = L.featureGroup().addTo(mapDiv);

        data1.forEach(
          ({
            hotel_latitude,
            hotel_longitude,
            hotel_name,
            hotel_id,

            hotel_image_cover_link,
          }) => {
            let counthotel = 0;

            while (counthotel < objhotels.length) {
              if (hotel_id == objhotels[counthotel].hotel_id) {
                layerGroup.addLayer(
                  L.marker([hotel_latitude, hotel_longitude], {
                    icon: IconRooms,
                  }).bindPopup(
                    `<div style="width: 200px; height: 300px;">
                            <b>ชื่อที่พัก</b> ${hotel_name}
                                    <br/>

                                    <br/>
                                    <img style="width: 170px; height: 150px; display: block;margin: auto;  border-radius: 15px;" src="${hotel_image_cover_link}" alt="">
                                    <br/>
                                    <a class='c-button bg-green ' style="text-align: center; display: inline-block; width:100%; "   href="facilitationdetailindexpage?page=hotel&group=0&id=${hotel_id} ")' >เพิ่มเติม</a>
                                     <br/><br/>
                                </div>
                                  `
                  )
                );
              }
              counthotel++;
            }
          }
        );

        mapDiv.fitBounds(layerGroup.getBounds());
      });

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
        //console.log(data1);

        const layerGroup = L.featureGroup().addTo(mapDiv);

        data1.forEach(
          ({
            homestay_latitude,
            homestay_longitude,
            homestay_name,
            homestay_id,

            homestay_image_cover_link,
          }) => {
            let counthomestay = 0;

            while (counthomestay < objhomestays.length) {
              if (homestay_id == objhomestays[counthomestay].homestay_id) {
                layerGroup.addLayer(
                  L.marker([homestay_latitude, homestay_longitude], {
                    icon: IconHomestay,
                  }).bindPopup(
                    `<div style="width: 200px; height: 300px;">
                          <b>ชื่อที่พัก</b> ${homestay_name}
                                    <br/>

                                    <br/>
                                    <img style="width: 170px; height: 150px; display: block;margin: auto; border-radius: 15px;" src="${homestay_image_cover_link}" alt="">
                                     <br/>
                                    <a class='c-button bg-green ' style="text-align: center; display: inline-block; width:100%; "  href="facilitationdetailindexpage?page=homestay&group=0&id=${homestay_id} ")' >เพิ่มเติม</a>
                                      <br/><br/>
                                </div>
                                  `
                  )
                );
              }
              counthomestay++;
            }
          }
        );

        mapDiv.fitBounds(layerGroup.getBounds());
      });

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
        //console.log(data1);

        const layerGroup = L.featureGroup().addTo(mapDiv);

        data1.forEach(
          ({
            restaurant_latitude,
            restaurant_longitude,
            restaurant_id,
            restaurant_name,

            restaurant_image_cover_link,
          }) => {
            let countrestaurant = 0;

            while (countrestaurant < objrestaurants.length) {
              if (
                restaurant_id == objrestaurants[countrestaurant].restaurant_id
              ) {
                layerGroup.addLayer(
                  L.marker([restaurant_latitude, restaurant_longitude], {
                    icon: IconRestaurant,
                  }).bindPopup(
                    `<div style="width: 200px; height: 300px;">
                              <b>ชื่อร้านอาหาร</b> ${restaurant_name}
                                    <br/>

                                    <br/>
                                    <img style="width: 170px; height: 150px; display: block;margin: auto; border-radius: 15px;" src="${restaurant_image_cover_link}" alt="">
                                     <br/>
                                    <a class='c-button bg-green ' style="text-align: center; display: inline-block; width:100%; "  href="facilitationdetailindexpage?page=restaurant&group=0&id=${restaurant_id} ")' >เพิ่มเติม</a>
                                     <br/><br/>
                               </div>
                                    `
                  )
                );
              }
              countrestaurant++;
            }
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
      //           `<div style="width: 200px; height: 300px;">
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

      // Promise.all([
      //   fetch(
      //     "https://api.trinitytrip.com/api/plan/TravelMap?startpoint=" +
      //       startpoint +
      //       "&endpoint=" +
      //       endpoint
      //     //https://api.trinitytrip.com/api/plan/TravelMap?startpoint=40&endpoint=21
      //   ),
      // ]).then(async ([response1]) => {
      //   const responseData1 = await response1.json();

      //   const data1 = responseData1.data;
      //   const layerGroup = L.featureGroup().addTo(mapDiv);
      //   data1.forEach(
      //     ({
      //       travel_latitude,
      //       travel_longitude,
      //       travel_id,
      //       travel_contact,
      //       travel_telephone,

      //       travel_image_map_link,
      //     }) => {
      //       layerGroup.addLayer(
      //         L.marker([travel_latitude, travel_longitude], {
      //           icon: IconTravel,
      //         }).bindPopup(
      //           `<div style="width: 200px; height: 300px;">
      //                       <b>ชื่อบริการขนส่ง</b> ${travel_contact}
      //                               <br/>
      //                               <b>เบอร์ติดต่อ</b>: ${travel_telephone}
      //                               <br/>
      //                                <a href="facilitationdetailindexpage?page=travel&group=0&id=${travel_id}">
      //                               <img style="width: 170px; height: 150px; display: block;margin: auto;" src="${travel_image_map_link}" alt="">
      //                               </a>
      //                                <br/>
      //                               <a class='c-button bg-green hv-transparent fr'   href="facilitationdetailindexpage?page=travel&group=0&id=${travel_id}" >เพิ่มเติม</a>

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

      //////////////////////////
    },
  },
  mounted() {
    setTimeout(() => {
      this.setupLeafletMap();
    }, 3000);
  },
};
</script>

<style scoped>
.center_tb {
  text-align: center;
}
.tab-info {
  border-radius: 20px;
  color: #bde9ff;
}
.nav-tab-item {
  border-radius: 25px;
  text-align: center;
  background: white;
  box-shadow: 2px 1px 5px #222222;
}
#mapContainer {
  width: auto;
  height: 600px;
  border-radius: 5px;
}
.hotel-item {
  border-radius: 40px;
  background: #ffffffc5;
  box-shadow: 2px 1px 5px #222222;
}
.hotel-item .title {
  border: 1px solid #f7f7f700;
}
.padd-10-10-0 {
  padding-top: 5px;
  padding-bottom: 15px;
}
.btn-success {
  background-color: rgb(31, 67, 167);
  border-radius: 15px;
  border: 1px solid rgb(31, 67, 167);
}

.btn {
  padding-top: 10px;
  padding-bottom: 10px;
  padding-right: 25px;
  padding-left: 25px;
}
.ppcont {
  width: 1000px;
  height: 600px;
}
.path {
  stroke-dasharray: 1000;
  stroke-dashoffset: 1000;
  animation: dash 5s linear forwards;
}
h2 {
  font-size: 34px;
  line-height: 2.363rem;
  font-weight: 500;
  text-transform: none;
  letter-spacing: 0;
  color: white;
  text-align: center;
}
h1 {
  font-size: 34px;
  line-height: 2.363rem;
  font-weight: 500;
  text-transform: none;
  letter-spacing: 0;
  color: white;
  text-align: center;
  text-shadow: black 0.1em 0.1em 0.2em;
}

@keyframes dash {
  to {
    stroke-dashoffset: 0;
  }
}
</style>
