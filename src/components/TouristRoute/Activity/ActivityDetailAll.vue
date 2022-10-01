<template>
  <!-- <Banner msg="กิจกรรม" img="images/community/commu6.jpg" /> -->
  <Banner />
  <div class="container">
    <!-- TouristRoute/Activity/ActivityDetailAll.vue -->

    <div
      class="box-activity"
      v-for="items in activity"
      v-bind:key="items.activity_id"
    >
      <div class="header-detail">
        <h3 v-html="items.activity_name"></h3>
      </div>
      <div class="grid-box">
        <div>
          <Slide />
        </div>
        <div class="detail-box">
          <div class="detail-title">
            <div class="m-box">
              <div>
                <h3>รายละเอียดกิจกรรม</h3>
                <p v-html="items.activity_duration_text"></p>
                <p v-html="items.activity_detail"></p>
              </div>

              <div v-show="items.activity_participant_age != ''">
                <h3>อายุ</h3>
                <p v-html="items.activity_participant_age"></p>
              </div>
              <div v-show="items.activity_price != ''">
                <h3>ราคา</h3>
                <p><strong v-html="items.activity_price"></strong> บาท</p>
              </div>
              <div v-show="items.activity_period != ''">
                <h3>ช่วงเวลาที่ใช้</h3>
                <p><strong v-html="items.activity_period"></strong> น.</p>
              </div>
            </div>
          </div>

          <div class="contact">
            <div class="">
              <h3>ผู้ดูแลสถานที่</h3>
              <h3>
                ชื่อผู้ติดต่อประสานงาน :
                <span v-html="items.activity_contact_name"></span>
              </h3>

              <h3>
                เบอร์โทร :
                <span v-html="items.activity_telephone"></span>
              </h3>
              <div class="icon-contact">
                <a target="_" :href="items.activity_line">
                  <img src="images/icon/line.png" alt=""
                /></a>

                <a target="_" :href="items.activity_facebook">
                  <img src="images/icon/facebook.png" alt=""
                /></a>

                <a target="_" :href="items.activity_instragram">
                  <img src="images/product/instagrams.png" alt=""
                /></a>

                <a target="_" :href="items.activity_link">
                  <img src="images/product/link.png" alt=""
                /></a>
              </div>
            </div>
            <div class="contact-img">
              <img
                v-if="
                  items.activity_contact_image_link ==
                  'https://trinitytrip.com/image/community/' +
                    items.community_id +
                    '/activity/'
                "
                src="images/img-non/user.png"
                alt=""
              />
              <img
                v-else-if="
                  items.activity_contact_image_link ==
                  'https://trinitytrip.com/image/account/'
                "
                src="images/img-non/user.png"
                alt=""
              />
              <img v-else :src="items.activity_contact_image_link" alt="" />
            </div>
          </div>
        </div>
      </div>
      <!-- <ActivityImgDetail /> -->
    </div>
    <div
      class="box-activity"
      v-for="items in activity"
      v-bind:key="items.activity_id"
      v-show="items.activity_link_vdo != ''"
    >
      <div class="header-detail">
        <h3>วีดีโอกิจกรรม</h3>
      </div>

      <iframe
        :src="'https://www.youtube.com/embed/' + vdo"
        controls
        autoplay
      ></iframe>
      <!-- <ActivityImgDetail /> -->
    </div>
    <div class="box-activity">
      <div class="header-detail">
        <h3>แผนที่กิจกรรม</h3>
        <div id="container">
          <div id="mapContainer"></div>
        </div>
      </div>
    </div>
  </div>
  <!--------------------- ActivityDeailAll----------------- -->
</template>

<script>
import Banner from "./Banner.vue";
import Slide from "./slide.vue";
import { onMounted, ref } from "vue";
import axios from "axios";
import { BASE_API_URL } from "../../../constants";

import "leaflet/dist/leaflet.css";
import L from "leaflet";

import "leaflet.control.layers.tree";

export default {
  name: "ActivityDetailAll",
  components: {
    Banner,
    Slide,
  },
  setup() {
    const activity = ref([]);
    const contact = ref([]);
    const imgall = ref([]);
    let page = window.location.search.substr(6, 1);

    let group = window.location.search;
    group = group.split("=");
    group = group[2];
    group = group.substring(0, group.length - 3);

    let id = window.location.search;
    id = id.split("=");
    id = id[3];

    const vdo = ref([]);

    let linkvdo = "";
    const changLinkvdo = (linkvdo) => {
      if (linkvdo.includes("https://www.youtube.com/watch?v=")) {
        vdo.value = linkvdo.slice(32);
      } else if (linkvdo.includes("https://youtu.be/")) {
        vdo.value = linkvdo.slice(17);
      } else if (linkvdo.includes("https://www.youtube.com/embed/")) {
        vdo.value = linkvdo.slice(30);
      }
    };

    const getData = async () => {
      const response = await axios.get(
        `${BASE_API_URL}/tourism-route/activitDetail/` + id
      );
      const responseImg = await axios.get(
        `${BASE_API_URL}/tourism-route/activitDetailImage/` + id
      );
      activity.value = response.data.data;
      contact.value = response.data.data[0];
      imgall.value = responseImg.data.data;
      linkvdo = response.data.data[0].activity_link_vdo;
      changLinkvdo(linkvdo);
    };

    onMounted(() => {
      getData();
    });

    return { activity, page, group, id, contact, linkvdo, vdo, imgall };
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

      ///////////////////////////////////////////
      let id = window.location.search;
      id = id.split("=");
      id = id[3];

      Promise.all([
        fetch(
          "https://api.trinitytrip.com/api/tourism-route/activitDetail/" + id
        ),
      ]).then(async ([response1]) => {
        const responseData1 = await response1.json();

        const data1 = responseData1.data;

        const layerGroup = L.featureGroup().addTo(mapDiv);

        data1.forEach(
          ({
            activity_latitude,
            activity_longitude,
            activity_name,

            activity_image_cover,
          }) => {
            layerGroup.addLayer(
              L.marker([activity_latitude, activity_longitude], {
                icon: L.divIcon({
                  className: "location-pin",
                  html: `<img style=" width: 33px; height: 33px;   position: absolute; border-radius: 50%; background: #32383e; width: 23px; height: 23px;  background: #32383e; position: absolute;  border: 1px solid #000000;  left: 50%; top: 50%; margin: -3px 0 0 -15px;" src="${activity_image_cover}" >`,
                  iconSize: [30, 33],

                  iconAnchor: [10, 33],
                }),
              }).bindPopup(
                `<div style="width: 200px; height: 300px;">
                            <b>ชื่อชุมชน</b> ${activity_name}
                                    <br/>
                                    
                                    <br/>
                                     <a href="communitydetail?id="> 
                                    <img style="width: 170px; height: 150px; display: block;margin: auto;" src="${activity_image_cover}" alt="">
                                    </a>
                                     <br/>
                                    
                                     
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
    },
  },
  mounted() {
    this.setupLeafletMap();
  },
};
</script>

<style scoped>
.slide {
  display: flex;
  align-items: center;
  flex-direction: row;
  flex-shrink: unset;
  flex-wrap: nowrap;
  justify-content: flex-start;
}
.slide-img {
  display: block;
}
.slide-img img {
  width: 100%;
  height: 100%;
  object-position: center;
}
#mapContainer {
  width: 100%;
  height: 400px;
}
button {
  border-radius: 10px;
  background: #0c90f2;
  color: white;
  padding: 0px 10px;
}
.box-activity {
  border: 1px solid rgba(0, 0, 0, 0.471);
  border-radius: 5px 5px 0px 0px;
  margin: 20px 0px;
}
.header-detail {
  margin: 0px;
}
.header-detail h3 {
  background: #01588d;
  color: white;
  padding: 20px;
  font-weight: 500;
  border-radius: 5px 5px 0px 0px;
  letter-spacing: 0px;
  font-size: 24px;
}
iframe {
  border: none;
  outline: none;
  width: 100%;
  height: 515px;
  padding: 20px;
}
.grid-box {
  display: grid;
  grid-template-columns: 50% 50%;
  margin: 20px;
  grid-column-gap: 20px;
}
.img-detail {
  margin: 10px;
}
.img-detail img {
  width: 100%;
  height: auto;

  border-radius: 10px;
}

.detail-title {
  margin: 10px 0px;
  border: 1px solid #6f6f6f0a;
  border-radius: 5px;
  box-shadow: 0px 0px 2px #6f6f6f91;
}
.m-box {
  margin: 20px;
}
.detail-box {
  margin: 0px 20px 0px 0px;
}
.detail-title h3 {
  font-size: 18px;
  letter-spacing: 0px;
  font-weight: 500;
  color: #01588d;
}
.detail-title p {
  letter-spacing: 0px;
}
.contact {
  border: 1px solid #6f6f6f0a;
  border-radius: 5px;
  box-shadow: 0px 0px 2px #6f6f6f91;
  display: grid;
  grid-template-columns: 80% 20%;
  padding: 20px;
  column-gap: 10px;
}
.contact h3 {
  font-size: 18px;
  font-weight: 500;
  letter-spacing: 0px;
  margin-bottom: 10px;
  color: #01588d;
}
.contact span {
  font-weight: 100;
  color: black;
}
.icon-contact {
  text-align: start;
  margin-top: 10px;
}
.icon-contact img {
  margin-right: 10px;
  width: 41px;
  box-shadow: 1px 1px 0px #f8f8f8;
}
.contact-img {
  vertical-align: middle;
  margin-top: 20px;
}
.contact-img img {
  width: 100%;
  height: auto;
  border-radius: 10%;
}
@media only screen and (max-width: 480px) {
  .grid-box {
    grid-template-columns: 100%;
  }
}
.grid-container {
  min-height: 100%;
  width: 100%;
  background-color: inherit;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-template-rows: repeat(5, max-content);
  row-gap: 0.5rem;
}

.main2 {
  grid-column: 1/-1;
  grid-row: 3/4;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-gap: 0.5rem;
}

.item {
  padding: 0rem;
  color: white;
  font-size: 2.5rem;

  border-radius: 0.2rem;
  /* display: flex; */
  justify-content: center;
  /* align-items: center; */
  box-shadow: 0 1rem 4rem rgba(0, 0, 0, 0.25);
  transition: all 0.2s;
  height: fit-content;
}
.item h3 {
  text-align: center;
  padding-top: 10px;
  margin-top: 20px;
  font-weight: 500;
  letter-spacing: 0px;
}
.item img {
  width: 100%;
  border-radius: 0.2rem;
  height: 100%;
  object-fit: cover;
}
.item--main2 {
  grid-column: 1/4;
  height: 61vh;
  background-color: #847996;
}
@media only screen and (max-width: 41.875em) {
  .item--main2 {
    grid-column: 1/-1;
  }
}
.item--aside {
  grid-column: 4/5;
  background-color: #01588d;
}
@media only screen and (max-width: 41.875em) {
  .item--aside {
    grid-column: 1/-1;
  }
}
.contact-detail {
  padding-right: 15px;
  padding-left: 15px;
  padding-bottom: 10px;
}
hr {
  color: white;
  width: 50%;
}
.details-btn {
  text-align: center;
}
.details-btn .c-button:first-child {
  margin-bottom: 15px;
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
.detail-header {
  text-align: start;

  margin-bottom: 20px;
}
.detail-header h3 {
  font-weight: 400;
  letter-spacing: 0px;
  color: #206ab0;
  padding-bottom: 15px;
}
.detail-header h4 {
  padding-top: 20px;
  padding-bottom: 20px;
  color: #206ab0;
}
.icon-contaxt {
  padding: 0px;
  align-self: stretch;
  text-align: center;
  margin-top: 20px;
}
.icon-contaxt img {
  padding: 1px;
  text-align: start;
  width: 41px;
  margin: 0px;
  box-shadow: 1px 1px 0px #f8f8f8;
}
@media only screen and (min-width: 768px) {
  .icon-contaxt img {
    width: 30px;
  }
}

main {
  max-width: 1200px;
  margin: 30px auto;
  padding: 0 100px;
  width: 100%;
  display: grid;
  /* Define Auto Row size */
  grid-auto-rows: auto;
  /*Define our columns */
  grid-template-columns: repeat(2, Auto);
  grid-gap: 1em;
}

article {
  border-radius: 5px;
  padding: 20px;
}
article .imgcontact img {
  width: 100px;
  height: 100px;
  object-fit: cover;
  margin-top: 10px;
  margin-bottom: 20px;
}
article .imgcontact {
  text-align: center;
}
article h4 {
  padding-bottom: 20px;
  font-weight: 600;
  color: #1f69b0;
  margin-top: 10px;
}
.h4 {
  padding-bottom: 0px;
  font-weight: 600;
  color: #1f69b0;
  margin-top: 10px;
  text-align: center;
}
article p {
  padding-bottom: 10px;
}
article:nth-child(odd) {
  background-color: #ffffff;
}

article:nth-child(even) {
  color: white;
  height: fit-content;
  background-color: #022c5447;
}
@media only screen and (max-width: 768px) {
  main {
    grid-template-columns: repeat(2, Auto);
    padding: 0 30px;
  }
}
@media only screen and (max-width: 766px) {
  main {
    grid-template-columns: repeat(1, Auto);
    padding: 0 30px;
  }
}
</style>
