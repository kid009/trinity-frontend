<template>
  <div class="padd-10-10-0">
    <h1 class="">เส้นทางกิจกรรมที่เลือก</h1>
  </div>
  <div class="sidebar clearfix">
    <div class="sidebar-block">
      <div class="search-inputs">
        <div>
          <div class="row">
            <div class="plannig">
              <img src="images/plan_trip/topic.jpg" alt="" />
              <div class="tour-caption">
                <div class="vertical-align">
                  <!-- <h3 class="color-white h2-topic text_siez">
                    ทริป : {{ plantrip_name }}
                  </h3> -->
                </div>
              </div>
            </div>

            <div class="main-timeline">
              <div v-for="item in activitys" v-bind:key="item" class="timeline">
                <div class="icon">
                  <img
                    v-show="!countError.includes(item.activity_id)"
                    class="img_activity"
                    :src="item.activity_image_cover_link"
                    @error="checkImg(item.activity_id)"
                    alt=""
                  />
                  <img
                    v-show="countError.includes(item.activity_id)"
                    class="img_activity"
                    src="images/mapicon/กิจกรรม.png"
                    alt=""
                  />
                </div>
                <div class="date-content"></div>
                <div class="timeline-content">
                  <h5 id="h2-topic ">
                    <b id="h2-topic ">{{ item.community_name }}</b>
                  </h5>

                  <div style="text-align: center">
                    <span class="month color-white h2-topic"
                      >กิจกรรมที่:{{ count++ }}</span
                    ><br />
                    <b style="text-align: center" class="color-white b-topic">{{
                      item.activity_name
                    }}</b>
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
import { onMounted, ref } from "vue";
export default {
  name: "ShowTimeLine",
  setup() {
    // const activity = ref([]);

    let count = 1;
    const activitys = ref([]);
    const hotels = ref([]);
    const restaurants = ref([]);
    const plantrip_name = ref([]);

    setTimeout(() => {
      plantrip_name.value = sessionStorage.getItem("plantrip_name");

      const obj = sessionStorage.getItem("activitys");
      const activity = JSON.parse(obj);
      activitys.value = activity;

      const obj2 = sessionStorage.getItem("hotels");
      const hotel = JSON.parse(obj2);
      hotels.value = hotel;

      const obj3 = sessionStorage.getItem("restaurants");
      const restaurant = JSON.parse(obj3);
      restaurants.value = restaurant;
    }, 3000);

    /* const getData = async () => {
      const response = await axios.get(
        `${BASE_API_URL}/plan/activity?startpoint=49&endpoint=21`
      );
      activity.value = response.data.data.data;
    }; */
    const countError = ref([]);
    function checkImg(id) {
      countError.value.push(id);
    }

    onMounted(() => {
      // getData();
    });

    return {
      activitys,
      hotels,
      restaurants,
      count,
      plantrip_name,
      checkImg,
      countError,
    };
  },
};
</script>
<style scoped>
.bg-blue-bg2 {
  background: #009933; /* For browsers that do not support gradients */
  background: -webkit-linear-gradient(
    -90deg,
    #009933,
    rgb(18, 226, 88),
    rgb(145, 253, 203)
  );
  background: -o-linear-gradient(
    -90deg,
    #009933,
    rgb(18, 226, 88),
    rgb(145, 253, 203)
  );
  background: -moz-linear-gradient(
    -90deg,
    #009933,
    rgb(18, 226, 88),
    rgb(145, 253, 203)
  );
  background: linear-gradient(
    -90deg,
    #009933,
    rgb(18, 226, 88),
    rgb(145, 253, 203)
  );
}
.btn-success {
  background-color: rgb(21, 51, 133);
  border-radius: 15px;
  border: 1px solid rgb(21, 51, 133);
}
.btn {
  padding-top: 10px;
  padding-bottom: 10px;
  padding-right: 15px;
  padding-left: 15px;
}
.padd-10-10-0 {
  padding-top: 15px;
  padding-bottom: 5px;
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
.container.box {
  width: 100%;
  padding-right: 60px;
  padding-left: 60px;
}
.plannig img {
  width: 100%;
  height: 180px;
  border-radius: 20px;
  object-fit: cover;
}
.tour-caption .vertical-align {
  margin-top: -130px;
}
.hotel-item {
  border-radius: 40px;
  background: #ffffffc5;
  box-shadow: 2px 1px 5px #222222;
}
.h2-topic {
  letter-spacing: 0;
  text-align: center;
  font-weight: 500;
  font-style: italic;
  text-shadow: black 0.1em 0.1em 0.2em;
}
.text_siez {
  font-size: 34px;
}
.b-topic {
  letter-spacing: 0;
  text-align: center;
  font-weight: 500;
  font-style: italic;
  text-shadow: black 0.1em 0.1em 0.2em;
  /* text-shadow: White 0.1em 0.1em 0.2em; */
}
.topic-img {
  width: 100%;
  height: 8rem;
  border-radius: 20px;
  box-shadow: 2px 1px 5px #222222;
}
.img_activity {
  width: 100%;
  height: 60px;
  border-radius: 100%;
}
#map {
  height: 100%;
}
#pano {
  float: left;
  width: 460px;
  height: 100%;
}
#menu {
  margin-top: 160px;
}
#topic-menu {
  margin-top: -180px;
}
#h2-topic {
  letter-spacing: 0;
  text-align: center;
}
#btn-trip {
  width: 100%;
}
#btn-trip-color {
  color: black;
}
#iconcovid {
  width: 100px;
}
#text-spac-page-covid {
  letter-spacing: 0;
  text-align: center;
}
#text-topic-menu-covid {
  letter-spacing: 0;
  font-weight: bolder;
  margin-bottom: 10px;
}
#text-tab-travel-ex {
  letter-spacing: 0;
  text-shadow: black 0.1em 0.1em 0.2em;
}
@media screen and (max-width: 600px) {
  .container.box {
    width: 100%;
    padding-right: 10px;
    padding-left: 10px;
  }
  .tour-caption .vertical-align {
    margin-top: -80px;
  }
  h1 {
    font-size: 30px;
    line-height: 2.363rem;
    font-weight: 500;
    text-transform: capitalize;
    letter-spacing: 0;
    color: white;
    text-align: center;
    text-shadow: black 0.1em 0.1em 0.2em;
  }
}

@media screen and (max-width: 450px) {
  #map {
    width: 100%;
    height: 110%;
  }
  #pano {
    width: 100%;
    height: 100%;
  }
}

@media screen and (min-width: 500px) and (max-width: 1024px) {
  #map {
    max-width: 100%;
    height: 110%;
  }
  #pano {
    width: 100%;
    height: 100%;
  }
}
@media screen and (min-width: 1200px) {
  #all-search-bar-topic {
    margin-left: 7%;
  }
  #search-bar-topic {
    width: 200%;
  }
  #button-search-bar-topic {
    left: 400%;
  }
}

div.img-resize img {
  width: 80px;
  height: auto;
}

div.img-resize {
  width: 80px;
  height: 80px;
  overflow: hidden;
  text-align: center;
}
div.img-resizes img {
  width: 110px;
  height: auto;
}

div.img-resizes {
  width: 110px;
  height: 110px;
  overflow: hidden;
  text-align: center;
}
#arrows1 {
  text-align: center;
}

.textcommunity-Timeline {
  text-align: center;
}

.main-timeline {
  position: relative;
}

.main-timeline:before {
  content: "";
  display: block;
  width: 8px;
  height: 100%;
  background: #ffffff;
  margin: 0 auto;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
}

.main-timeline .timeline {
  margin-bottom: 0px;
  position: relative;
}

.main-timeline .timeline:after {
  content: "";
  display: block;
  clear: both;
}

.main-timeline .icon {
  width: 60px;
  height: 60px;
  line-height: 18px;
  margin: auto;
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
}

.main-timeline .icon:before,
.main-timeline .icon:after {
  content: "";
  width: 100%;
  height: 100%;
  border-radius: 50%;
  position: absolute;
  top: 0;
  left: 0;
  transition: all 0.33s ease-out 0s;
}

.main-timeline .icon:before {
  /* background: #fff;
  border: 2px solid #232323; */
  left: -3px;
}

.main-timeline .icon:after {
  /* border: 2px solid #c6c6c6; */
  left: 3px;
}

.main-timeline .timeline:hover .icon:before {
  left: 3px;
}

.main-timeline .timeline:hover .icon:after {
  left: -3px;
}

.main-timeline .date-content {
  width: 50%;
  float: left;
  margin-top: 22px;
  position: relative;
}

.main-timeline .date-content:before {
  content: "";
  /* width: 36.5%;
  height: 2px; */
  /* background: #c6c6c6; */
  margin: auto 0;
  position: absolute;
  top: 0;
  right: 10px;
  bottom: 0;
}

.main-timeline .date-outer {
  width: 125px;
  height: 125px;
  font-size: 16px;
  text-align: center;
  margin: auto;
  z-index: 1;
}

.main-timeline .date-outer:before,
.main-timeline .date-outer:after {
  content: "";
  width: 125px;
  height: 125px;
  margin: 0 auto;
  border-radius: 50%;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  transition: all 0.33s ease-out 0s;
}

.main-timeline .date-outer:before {
  background: #fff;
  border: 2px solid #232323;
  left: -6px;
}

.main-timeline .date-outer:after {
  border: 2px solid #c6c6c6;
  left: 6px;
}

.main-timeline .timeline:hover .date-outer:before {
  left: 6px;
}

.main-timeline .timeline:hover .date-outer:after {
  left: -6px;
}

.main-timeline .date {
  width: 100%;
  margin: auto;
  position: absolute;
  top: 27%;
  left: 0;
}

.main-timeline .month {
  font-size: 18px;
  font-weight: 700;
}

.main-timeline .year {
  display: block;
  font-size: 30px;
  font-weight: 700;
  color: #232323;
  line-height: 36px;
}

.main-timeline .timeline-content {
  width: 50%;
  padding: 20px 0 20px 50px;
  float: right;
}

.main-timeline .title {
  font-size: 19px;
  font-weight: 700;
  line-height: 24px;
  margin: 0 0 15px 0;
}

.main-timeline .description {
  margin-bottom: 0;
}

.main-timeline .timeline:nth-child(2n) .date-content {
  float: right;
}

.main-timeline .timeline:nth-child(2n) .date-content:before {
  left: 10px;
}

.main-timeline .timeline:nth-child(2n) .timeline-content {
  padding: 20px 50px 20px 0;
  text-align: right;
}

@media only screen and (max-width: 991px) {
  .main-timeline .date-content {
    margin-top: 35px;
  }
  .main-timeline .date-content:before {
    width: 22.5%;
  }
  .main-timeline .timeline-content {
    padding: 10px 0 10px 30px;
  }
  .main-timeline .title {
    font-size: 17px;
  }
  .main-timeline .timeline:nth-child(2n) .timeline-content {
    padding: 10px 30px 10px 0;
  }
}

@media only screen and (max-width: 767px) {
  .main-timeline:before {
    margin: 0;
    left: 7px;
  }
  .main-timeline .timeline {
    margin-bottom: 20px;
  }
  .main-timeline .timeline:last-child {
    margin-bottom: 0;
  }
  .main-timeline .icon {
    margin: auto 0;
  }
  .main-timeline .date-content {
    width: 95%;
    float: right;
    margin-top: 0;
  }
  .main-timeline .date-content:before {
    display: none;
  }
  .main-timeline .date-outer {
    width: 110px;
    height: 110px;
  }
  .main-timeline .date-outer:before,
  .main-timeline .date-outer:after {
    width: 110px;
    height: 110px;
  }
  .main-timeline .date {
    top: 30%;
  }
  .main-timeline .year {
    font-size: 24px;
  }
  .main-timeline .timeline-content,
  .main-timeline .timeline:nth-child(2n) .timeline-content {
    width: 95%;
    text-align: center;
    padding: 10px 0;
  }
  .main-timeline .title {
    margin-bottom: 10px;
  }
}
</style>
