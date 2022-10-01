<template>
  <div class="col-xs-12 col-sm-4 col-md-12">
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
                          <div class="nav-tab clearfix"></div>
                        </div>
                        <div class="tabs-content clearfix">
                          <div class="tab-info active">
                            <div id="container">
                              <div id="mapContainer"></div>
                            </div>

                            <TravalMarker />
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
</template>

<script>
import "leaflet/dist/leaflet.css";
import L from "leaflet";
import "leaflet.control.layers.tree";

import TravalMarker from "./TravalMarker.vue";

export default {
  name: "TravalMapPage",

  components: {
    TravalMarker,
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

      var IconRooms = L.icon({
        iconUrl: "images/marker/2.2.png",
        iconSize: [30, 33],
        iconAnchor: [18, 50],
        popupAnchor: [-1, -40],
      });

      var IconRestaurant = L.icon({
        iconUrl: "images/marker/3.1.png",
        iconSize: [28, 30],
        iconAnchor: [18, 50],
        popupAnchor: [-1, -40],
      });

      var IconCommunity = L.icon({
        iconUrl: "images/marker/humanitarian.png",
        iconSize: [28, 30],
        iconAnchor: [32, 32],
        popupAnchor: [-15, -35],
      });

      var IconBusiness = L.icon({
        iconUrl: "images/marker/business.png",
        iconSize: [28, 30],
        iconAnchor: [18, 50],
        popupAnchor: [-1, -40],
      });

      var myIconservice = L.icon({
        iconUrl: "images/marker/service.png",
        iconSize: [33, 33],
        iconAnchor: [18, 50],
        popupAnchor: [-1, -40],
      });

      //////////////////////////////////////////////////////////
      Promise.all([
        fetch(
          "https://api.trinitytrip.com/api/accommodation/hotel?page=1&group=0&id=0"
        ),
      ]).then(async ([responsehotels]) => {
        const responsehotel = await responsehotels.json();

        const hotel = responsehotel.data;

        const layerGroup = L.featureGroup().addTo(mapDiv).addTo(hotelss);

        hotel.forEach(
          ({
            hotel_id,
            hotel_latitude,
            hotel_longitude,
            hotel_name,
            community_id,
            hotel_image_cover,
          }) => {
            layerGroup.addLayer(
              L.marker([hotel_latitude, hotel_longitude], {
                icon: IconRooms,
              }).bindPopup(
                `<div style="width: 200px; height: 300px;">
                              <b>ชื่อที่พัก</b> ${hotel_name}
                                    <br/>
                                    
                                    <a href="communitydetail?id=${community_id}">
                                    <img style="width: 170px; height: 150px; display: block;margin: auto;" src="${hotel_image_cover}" alt="">
                                     </a>
                                     
                                    <br/>
                                    <a class='c-button bg-green '   href="facilitationdetailindexpage?page=hotel&group=0&id=${hotel_id} ")' >เพิ่มเติม</a>

                                     
                                     <br/>
                               </div>
                                    `
              )
            );
          }
        );

        // mapDiv.fitBounds(layerGroup.getBounds());
      });

      //////////////////////////////////////////////////

      //////////////////////////////////////////////////////////
      Promise.all([
        fetch(
          "https://api.trinitytrip.com/api/accommodation/homestay?page=1&group=0&id=0"
        ),
      ]).then(async ([responsehomestay1]) => {
        const responsehomestay = await responsehomestay1.json();

        const homestay = responsehomestay.data;

        const layerGroup = L.featureGroup().addTo(mapDiv).addTo(homestayss);

        homestay.forEach(
          ({
            homestay_id,
            homestay_latitude,
            homestay_longitude,
            homestay_name,
            community_id,
            homestay_image_cover,
          }) => {
            layerGroup.addLayer(
              L.marker([homestay_latitude, homestay_longitude], {
                icon: IconRooms,
              }).bindPopup(
                `<div style="width: 200px; height: 300px;">
                              <b>ชื่อที่พัก</b> ${homestay_name}
                                    <br/>
                                    
                                    <a href="communitydetail?id=${community_id}">
                                    <img style="width: 170px; height: 150px; display: block;margin: auto;" src="${homestay_image_cover}" alt="">
                                     </a>
                                     
                                    <br/>
                                    <a class='c-button bg-green '   href="facilitationdetailindexpage?page=homestay&group=0&id=${homestay_id} ")' >เพิ่มเติม</a>

                                     
                                     <br/>
                               </div>
                                    `
              )
            );
          }
        );

        // mapDiv.fitBounds(layerGroup.getBounds());
      });

      //////////////////////////////////////////////////

      //////////////////////////////////////////////////////////
      Promise.all([
        fetch(
          "https://api.trinitytrip.com/api/accommodation/convenienceAll?page=restaurant&group=0&id=0"
        ),
      ]).then(async ([responserestaurant1]) => {
        const responserestaurant = await responserestaurant1.json();

        const restaurant = responserestaurant.data_restaurant;

        const layerGroup = L.featureGroup().addTo(mapDiv).addTo(restaurants);

        restaurant.forEach(
          ({
            restaurant_latitude,
            restaurant_longitude,
            restaurant_name,
            community_id,
            restaurant_image_cover,
            restaurant_id,
          }) => {
            layerGroup.addLayer(
              L.marker([restaurant_latitude, restaurant_longitude], {
                icon: IconRestaurant,
              }).bindPopup(
                `<div style="width: 200px; height: 300px;">
                              <b>ชื่อร้านอาหาร</b> ${restaurant_name}
                                    <br/>
                                    
                                    <a href="communitydetail?id=${community_id}">
                                    <img style="width: 170px; height: 150px; display: block;margin: auto;" src="${restaurant_image_cover}" alt="">
                                     </a>
                                     
                                    <br/>
                                    <a class='c-button bg-green '   href="facilitationdetailindexpage?page=restaurant&group=0&id=${restaurant_id} ")' >เพิ่มเติม</a>

                                     
                                     <br/>
                               </div>
                                    `
              )
            );
          }
        );

        // mapDiv.fitBounds(layerGroup.getBounds());
      });

      //////////////////////////////////////////////////

      //////////////////////////////////////////////////////////
      Promise.all([
        fetch(
          "https://api.trinitytrip.com/api/community-tourism/CommunityAll/0"
        ),
      ]).then(async ([response1]) => {
        const responseData1 = await response1.json();

        const data1 = responseData1.data;

        const layerGroup = L.featureGroup().addTo(mapDiv).addTo(communityss);

        data1.forEach(
          ({
            community_id,
            community_latitude,
            community_longitude,
            community_name,
            community_image_cover_link,
          }) => {
            layerGroup.addLayer(
              L.marker([community_latitude, community_longitude], {
                icon: IconCommunity,
              }).bindPopup(
                `<div style="width: 200px; height: 300px;">
                              <b>ชื่อชุมชน</b> ${community_name}
                                    <br/>
                                    
                                    <a href="communitydetail?id=${community_id}">
                                    <img style="width: 170px; height: 150px; display: block;margin: auto;" src="${community_image_cover_link}" alt="">
                                     </a>
                                     
                                    <br/>
                                    <a class='c-button bg-green '   href="communitydetail?id=${community_id}")' >เพิ่มเติม</a>

                                     
                                     <br/>
                               </div>
                                    `
              )
            );
          }
        );

        mapDiv.fitBounds(layerGroup.getBounds());
      });

      //////////////////////////////////////////////////

      //////////////////////////////////////////////////////////
      Promise.all([
        fetch("https://api.trinitytrip.com/api/businesstourism/business"),
      ]).then(async ([response1]) => {
        const responseData1 = await response1.json();

        const data1 = responseData1.data;

        const layerGroup = L.featureGroup().addTo(mapDiv).addTo(businesss);

        data1.forEach(
          ({
            bussiness_latitude,
            bussiness_longitude,
            bussiness_name,

            bussiness_image_cover_link,
            bussiness_id,
          }) => {
            layerGroup.addLayer(
              L.marker([bussiness_latitude, bussiness_longitude], {
                icon: IconBusiness,
              }).bindPopup(
                `<div style="width: 200px; height: 300px;">
                              <b>ชื่อธุรกิจ</b> ${bussiness_name}
                                    <br/>
                                    
                                    
                                    <img style="width: 170px; height: 150px; display: block;margin: auto;" src="${bussiness_image_cover_link}" alt="">
                                     </a>
                                     
                                    <br/>
                                    <a class='c-button bg-green '   href="facilitationdetailindexpage?page=bussiness&group=0&id=${bussiness_id} ")' >เพิ่มเติม</a>

                                     
                                     <br/>
                               </div>
                                    `
              )
            );
          }
        );

        // mapDiv.fitBounds(layerGroup.getBounds());
      });

      //////////////////////////////////////////////////

      //////////////////////////////////////////////////////////
      Promise.all([
        fetch(
          "https://api.trinitytrip.com/api/accommodation/convenienceAll?page=poi&group=0&id=0"
        ),
      ]).then(async ([responsepoi1]) => {
        const responsepoi = await responsepoi1.json();

        const poi = responsepoi.data_poi;

        const layerGroup = L.featureGroup().addTo(mapDiv).addTo(poiss);

        poi.forEach(
          ({
            poi_latitude,
            poi_longitude,
            poi_name,

            poi_image_cover,
            poi_id,
          }) => {
            layerGroup.addLayer(
              L.marker([poi_latitude, poi_longitude], {
                icon: myIconservice,
              }).bindPopup(
                `<div style="width: 200px; height: 300px;">
                              <b>ชื่อสถานที่บริการ</b> ${poi_name}
                                    <br/>
                                    
                                    
                                    <img style="width: 170px; height: 150px; display: block;margin: auto;" src="${poi_image_cover}" alt="">
                                     </a>
                                     
                                    <br/>
                                    <a class='c-button bg-green '   href="facilitationdetailindexpage?page=poi&group=0&id=${poi_id} ")' >เพิ่มเติม</a>

                                     
                                     <br/>
                               </div>
                                    `
              )
            );
          }
        );

        // mapDiv.fitBounds(layerGroup.getBounds());
      });

      //////////////////////////////////////////////////

      var restaurants = L.layerGroup();
      // var activityss = L.layerGroup();
      var communityss = L.layerGroup();
      var hotelss = L.layerGroup();
      var homestayss = L.layerGroup();

      var businesss = L.layerGroup();

      var poiss = L.layerGroup();

      var airports = {
        label: "ตำแหน่ง",
        children: [
          // {
          //   label: '<span id="lyon">กิจกรรม</span>',
          //   layer: activityss,
          // },
          {
            label: '<span id="lyon">ชุมชน</span>',
            layer: communityss,
          },
          {
            label: '<span id="lyon">โรงแรม</span>',
            layer: hotelss,
          },
          {
            label: '<span id="lyon">รีสอร์ท</span>',
            layer: homestayss,
          },
          {
            label: '<span id="lyon">ร้านอาหาร</span>',
            layer: restaurants,
          },
          {
            label: '<span id="lyon">ธุรกิจ</span>',
            layer: businesss,
          },
          {
            label: '<span id="lyon">สถานที่บริการ</span>',
            layer: poiss,
          },
        ],
      };

      var ctl = L.control.layers.tree(null, airports, { collapsed: false });
      ctl.addTo(mapDiv);

      ////////////////////////////////////////////////////
    },
  },
  mounted() {
    this.setupLeafletMap();
  },
};
</script>

<style scoped>
#mapContainer {
  width: 100%;
  height: 600px;
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
</style>
