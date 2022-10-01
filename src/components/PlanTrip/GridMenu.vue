<template>
  <div class="main-wraper padd-90">
    <div class="container">
      <div class="row">
        <div class="col-md-12">
          <div class="second-title">
            <h2>เส้นทางของคุณ</h2>
            <hr />
          </div>
        </div>
      </div>
      <main class="grid">
        <article class="plus">
          <a href="FormIndex">
            <img src="images/marker/mark2.0.png" alt="" />
            <h3 class="tour-title color-dark-2 link-green text-spacess">
              วางแผนการเดินทาง
            </h3>
          </a>
        </article>
        <article v-for="item in myTrip.slice(0, 5)" :key="item.plantrip_id">
          <a :href="'showTrip?id=' + item.plantrip_id + '&fbclid'">
            <img
              v-if="item.activity_image_cover_link != null"
              :src="item.activity_image_cover_link"
              alt="Sample photo"
            />
            <img v-else src="images/waterfall.jpg" alt="Sample photo" />

            <div class="text">
              <h3>{{ item.plantrip_name }}</h3>
              <div class="row">
                <div class="col-lg-6">
                  <p>{{ item.plantrip_member }} คน</p>
                </div>
                <div class="col-lg-6">
                  <p>{{ item.plantrip_budget }} บาท</p>
                </div>
              </div>
              <p>
                จังหวัด {{ item.name_point_start }} - {{ item.name_point_end }}
                <!-- จังหวัด {{ item.name_point_start }} - {{ item.name_point_end }} -->
              </p>

              <button class="btn-block">เพิ่มเติม</button>
            </div></a
          >
        </article>
      </main>
      <div class="row">
        <div class="col-md-12">
          <div class="second-title">
            <h2>เส้นทางแนะนำ</h2>
            <hr />
          </div>
        </div>
      </div>
      <main class="grid">
        <article v-for="item in recommend.slice(0, 6)" :key="item.plantrip_id">
          <a :href="'showTrip?id=' + item.plantrip_id + '&fbclid'">
            <img :src="item.activity_image_cover_link" alt="Sample photo" />

            <div class="text">
              <h3>{{ item.plantrip_name }}</h3>
              <div class="row">
                <div class="col-lg-6">
                  <p>{{ item.plantrip_member }} คน</p>
                </div>
                <div class="col-lg-6">
                  <p>{{ item.plantrip_budget }} บาท</p>
                </div>
              </div>
              <p>
                จังหวัด {{ item.name_point_start }} - {{ item.name_point_end }}
              </p>

              <button class="btn-block">เพิ่มเติม</button>
            </div></a
          >
        </article>
      </main>
    </div>
  </div>
</template>

<script>
import { onMounted, ref } from "vue";
import axios from "axios";
import { BASE_API_URL } from "../../constants";

export default {
  name: "GridMenu",
  setup() {
    const recommend = ref([]);
    const myTrip = ref([]);
    const username = localStorage.getItem("id");

    const getData = async () => {
      const responsemyTrip = await axios.get(
        `${BASE_API_URL}/plan/showTrip?username=` + username
      );
      myTrip.value = responsemyTrip.data.data;

      const response = await axios.get(`${BASE_API_URL}/plan/showTripAll`);
      recommend.value = response.data.data;
    };

    onMounted(() => {
      getData();
    });
    const createtrip = sessionStorage.getItem("createtrip");

    return {
      createtrip,
      recommend,
      myTrip,

      // getmyTrip, getotherTrip
    };
  },
};
</script>

<style scoped>
h2 {
  text-align: start;
  letter-spacing: 0px;
  color: #364452cf;
}
.plus {
  text-align: center;
  padding-top: 40px;
  padding-bottom: 40px;
}
.clip {
  clip: rect(auto, auto, auto, auto);
  height: 100%;
  position: absolute;
  width: 100%;
  border-radius: 10px;
  background: #ededed;
}
.tour-block {
  position: relative;
  float: left;
  width: 100%;
  min-height: 350px;
  box-shadow: 2px 3px 7px 0px #022c5454;
  margin-bottom: 0px;
}
.hr {
  border: none;
  border-top: 3px double #333;
  color: #333;
  overflow: visible;
  text-align: center;
  height: 5px;
}
.hover-it {
  text-align: center;
  color: rgb(255, 255, 255);
  font: 2em;
}

h3 {
  text-shadow: 1px 1px rgb(8, 6, 6);
  color: #1d74a9 !important;
}
h3:hover {
  color: rgb(255, 255, 255) !important;
  text-shadow: 1px 1px 3px #1d2327;
}
.tour-block:hover .tour-layer {
  background-color: #80808038;
}
.grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
  grid-gap: 20px;
  align-items: stretch;
}

.grid > article {
  border: 1px solid #ccc;
  box-shadow: 2px 2px 6px 0px rgba(0, 0, 0, 0.3);
  border-radius: 10px;
}

.grid > article img {
  width: 100px;
  max-width: 100%;
  border-radius: 10px 10px 0px 0px;
}

.grid .text {
  padding: 7px 20px;
}
.btn-block {
  display: block;
  width: 100%;
  color: white;
  background-color: #23b0e8;
  border-radius: 10px;
  padding: 2px;
  margin-top: 14px;
  margin-bottom: 2px;
  transition: all 0.2s ease-in-out;
  box-shadow: 1px 1px 2px rgb(59, 59, 59);
}
.btn-block:hover {
  color: #005fb8;
  box-shadow: 1px 1px 5px rgb(60, 86, 116);
  background-color: rgb(255, 255, 255);
  transform: scale(1.1);
}
hr {
  border: 1px solid ffb20069;
}
</style>
