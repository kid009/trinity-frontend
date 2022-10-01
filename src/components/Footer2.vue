<template>
  <footer class="">
    <div class="container box">
      <div class="row">
        <div class="col-lg-7 col-md-7 col-sm-8 col-xs-12">
          <div class="">
            <div class="footer-block-top">
              <div class="rmuti-logo">
                <img v-lazy="'images/rmut/rmuti.png'" alt="" />
                <img v-lazy="'images/rmut/rmutk.png'" alt="" />
                <img v-lazy="'images/rmut/rmutl.png'" alt="" />
                <img v-lazy="'images/rmut/rmutp.png'" alt="" />
                <img v-lazy="'images/rmut/rmutr.png'" alt="" /><img
                  v-lazy="'images/rmut/rmutsb.jpg'"
                  alt=""
                />
                <img v-lazy="'images/rmut/rmutsv.gif'" alt="" />
                <img v-lazy="'images/rmut/rmutt.png'" alt="" /><img
                  v-lazy="'images/rmut/rmutto.png'"
                  alt=""
                />
              </div>
              <div class="web-logo">
                <img
                  src="../assets/TRINITYTRIPLOGO2.png"
                  alt=""
                  class="next1"
                />
                <img
                  style="height: 40px; margin-bottom: 20px"
                  v-lazy="'images/logofooter/อพท.png'"
                  alt=""
                  class="next"
                />
                <img
                  v-lazy="'images/logofooter/cbt.webp'"
                  alt=""
                  class="next"
                />
                <img v-lazy="'images/logofooter/ททท.jpg'" alt="" class="next" />
                <img
                  v-lazy="'images/logofooter/NRCT.jpg'"
                  alt=""
                  class="next"
                />
              </div>
              <div class="link-to center">
                <a href="/"> หน้าแรก</a> |
                <a href="community"> ท่องเที่ยวโดยชุมชน</a> |
                <a href="facilitationindexpage?page=1&group=0&id=0">
                  อำนวยความสะดวก</a
                >
                |
                <a href="producttouristindexpage?page=1&group=0&id=0">
                  นวัตกรรม</a
                >
                | <a href="PlanTrip"> วางแผนท่องเที่ยว</a> |
                <a href="blog?page=tourismExperience&group=0&id=0"> Blog</a>
              </div>
              <div class="footer-share center">
                <p>&copy; Copyright 2021 trinitytrip. All Rights Reserved</p>
              </div>
            </div>
          </div>
        </div>

        <div class="col-lg-5 col-md-5 col-sm-4 col-xs-12">
          <div class="footer-block">
            <div class="address center">
              <h3>ติดต่อ :</h3>
              <p>
                Rajamangala University of Technology Isan<br />
                744 Suranarai Road, Muang, Nakhon Ratchasima 30000 Thailand
              </p>
              <div class="context">
                <a href="tel:08 3965 0226"> <p>08 3965 0226</p></a>

                <a href="mailto:trinitytrip2022@gmail.com">
                  <p>trinitytrip2022@gmail.com</p></a
                >
              </div>
              <div class="icon-footer">
                <h3>ติดตาม :</h3>
                <a href="https://www.facebook.com/TrinityTrip-107979595127192 "
                  ><img v-lazy="'images/icon/facebook.png'" alt=""
                /></a>
                <a
                  href="https://instagram.com/trinitytrip2022?utm_medium=copy_link"
                >
                  <img v-lazy="'images/icon/instagram.png'" alt="" />
                </a>

                <img v-lazy="'images/icon/line.png'" alt="" />
              </div>
              <p class="about-1">จำนวนผู้เข้าชมเว็บไซต์ : {{ member }} คน</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </footer>
</template>

<script>
import { onMounted, ref } from "vue";
import axios from "axios";
import { BASE_API_URL } from "../constants";
export default {
  name: "Footer2",

  setup() {
    const member = ref([]);

    const getData = async () => {
      const response = await axios.get(`${BASE_API_URL}/home/Show_Analytics`);
      member.value = response.data.data[0].analytics_number;
    };

    onMounted(() => {
      getData();
    });

    return { member };
  },
};
</script>

<style scoped>
footer {
  position: relative;
  width: 100%;
  padding-top: 10px;
  padding-bottom: 30px;
  overflow: hidden;
  box-shadow: 0px 0px 10px #0000001a;
}
.footer-block:before {
  content: "";
  position: absolute;
  width: 1px;
  height: 100%;
  right: 0px;
  top: 0px;
  background: #38383800;
}
.footer-block {
  position: relative;
  width: 100%;
  margin-bottom: 20px;
  float: left;
  padding-right: 15px;
  padding-left: 15px;
}

.footer-block-top:before {
  content: "";
  position: absolute;
  width: 1px;
  height: 100%;
  right: 0px;
  top: 0px;
  background: #38383800;
}
.footer-blocks-top {
  position: relative;
  width: 100%;
  margin-bottom: 20px;
  float: left;
  padding-right: 5px;
  padding-left: 5px;
}
.col-lg-5 {
  padding-right: 1px;
  padding-left: 1px;
}
.col-md-5 {
  padding-right: 1px;
  padding-left: 1px;
}
.col-lg-7 {
  padding-right: 1px;
  padding-left: 1px;
}
.col-md-7 {
  padding-right: 1px;
  padding-left: 1px;
}

.bg-dark {
  background-color: #fff;
}
.footer {
  padding: 20px 40px;
  display: grid;
  grid-template-columns: 60% 40%;
  column-gap: 2em;
  box-shadow: 0px 0px 10px #0000001a;
}

.rmuti-logo img {
  height: 95px;
  width: auto;
  margin: 18px;
}

.web-logo img {
  height: 90px;
  width: auto;
  /* border-bottom: 1px solid #bbb; */
  margin-top: 20px;
}
.opt {
  height: 40px;
  margin-bottom: 20px;
}
.next1 {
  margin-right: 10px;
}
.next {
  margin-right: 10px;
}
.footer-share {
  padding-left: 15px;
}

.link-to {
  color: black;
  margin: 20px 0px;
  padding-left: 15px;
}
.address {
  margin: 20px 20px 0px 0px;
}
.context {
  margin: 20px 0px;
}
.icon-footer img {
  width: auto;
  height: 30px;
  margin: 0px 5px;
}
p {
  font-size: 20px;
}
a {
  font-size: 20px;
}
h3 {
  font-size: 22px;
  font-weight: 500;
  letter-spacing: 0px;
  margin: 10px 0px;
}
@media screen and (max-width: 1440px) {
  .rmuti-logo img {
    height: 75px;
    width: auto;
    margin: 18px;
  }
  .web-logo img {
    height: 70px;
    width: auto;
    /* border-bottom: 1px solid #bbb; */
    margin-top: 20px;
  }
}
@media screen and (max-width: 1280px) {
  .rmuti-logo img {
    height: 75px;
    width: auto;
    margin: 18px;
  }
  .web-logo img {
    height: 70px;
    width: auto;
    /* border-bottom: 1px solid #bbb; */
    margin-top: 20px;
  }
}
@media screen and (max-width: 1024px) {
  .rmuti-logo img {
    height: 75px;
    width: auto;
    margin: 10px;
  }
  .web-logo img {
    height: 55px;
    width: auto;
    /* border-bottom: 1px solid #bbb; */
    margin-top: 20px;
  }
}
@media screen and (max-width: 600px) {
  .center {
    text-align: center;
  }
}

@media only screen and (max-width: 768px) {
  .footer {
    text-align: center;
    grid-template-columns: 100%;
  }
  .rmuti-logo img {
    margin: 10px;
  }
  .web-logo {
    text-align: center;
  }
  .rmuti-logo {
    text-align: center;
  }
}
</style>
