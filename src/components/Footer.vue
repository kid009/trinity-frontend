<template>
  <footer class="footer">
    <div class="logofooter col-md-4 col-sm-6">
      <img src="images/logofooter/logo_0.png" alt="" />
      <!-- <img src="images/logofooter/1.jpg" alt="" />
      <img src="images/logofooter/2.jpg" alt="" />
      <img src="images/logofooter/3.jpg" alt="" />
      <img src="images/logofooter/4.jpg" alt="" />
      <img src="images/logofooter/5.jpg" alt="" /> -->

      <p class="menu">
        <a href="/"> หน้าแรก</a> | <a href="community"> ท่องเที่ยวโดยชุมชน</a> |
        <a href="facilitationindexpage?page=1&group=0&id=0"> อำนวยความสะดวก</a>
        | <a href="producttouristindexpage?page=1&group=0&id=0"> นวัตกรรม</a> |
        <a href="PlanTrip"> วางแผนท่องเที่ยว</a> |
        <a href="bloggroup"> Blog</a>
      </p>
      <p class="name">&copy; Copyright 2021 trinitytrip. All Rights Reserved</p>
    </div>
    <div class="footer-center col-md-4 col-sm-6">
      <h4>ติดต่อ :</h4>
      <!-- <img class="logo-rmut" src="images/rmut/rmuti.png" alt="" />
      <img class="logo-rmut" src="images/rmut/rmutk.png" alt="" />
      <img class="logo-rmut" src="images/rmut/rmutl.png" alt="" />
      <img class="logo-rmut" src="images/rmut/rmutp.png" alt="" />
      <img class="logo-rmut" src="images/rmut/rmutr.png" alt="" />
      <img class="logo-rmut" src="images/rmut/rmutsb.gif" alt="" />
      <img class="logo-rmut" src="images/rmut/rmutsv.png" alt="" />
      <img class="logo-rmut" src="images/rmut/rmutt.png" alt="" />
      <img class="logo-rmut" src="images/rmut/rmutto.png" alt="" /> -->

      <div>
        <a href="https://goo.gl/maps/yFtTDBgxEkHyq7XD6">
          <i class="fa fa-map-marker"></i>
          <p>
            <span> Rajamangala University of Technology Isan</span> 744
            Suranarai Road, Muang, Nakhon Ratchasima 30000 Thailand
          </p>
        </a>
      </div>
      <div>
        <a href="tel:08 3965 0226">
          <i class="fa fa-phone"></i>
          <p>08 3965 0226</p></a
        >
      </div>
      <div>
        <a href="mailto:trinitytrip2022@gmail.com">
          <i class="fa fa-envelope"></i>
          <p>trinitytrip2022@gmail.com</p></a
        >
      </div>
    </div>
    <div class="footer-left col-md-4 col-sm-6">
      <p class="about">
        <span>ติดตาม :</span>
      </p>
      <div class="icons">
        <div class="icon-footer">
          <a href="https://www.facebook.com/TrinityTrip-107979595127192 "
            ><img src="images/icon/facebook.png" alt=""
          /></a>
          <a href="https://instagram.com/trinitytrip2022?utm_medium=copy_link">
            <img src="images/icon/instagram.png" alt="" />
          </a>

          <img src="images/icon/line.png" alt="" />
        </div>
      </div>
      <p class="about-1">จำนวนผู้เข้าชมเว็บไซต์ : {{ member }} คน</p>
    </div>
  </footer>
</template>

<script>
import { onMounted, ref } from "vue";
import axios from "axios";
import { BASE_API_URL } from "../constants";

export default {
  name: "Footer",
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
.about-1 {
  margin-bottom: 10px;
  color: #ffffff;
  font-weight: 600;
  font-size: 15px;
  margin-top: 10px;
}
.icon-footer img {
  width: auto;
  margin: 4px 14px 14px 0px;
  height: 30px;
}
h4 {
  padding-left: inherit;
  color: white;
  padding-bottom: 10px;
  font-size: 16px;
  line-height: 22px;
  font-weight: 400;
  text-transform: uppercase;
  letter-spacing: 1px;
}

.container .footer-copy {
  text-align: center;
  padding-bottom: 10px;
  padding-top: 10px;
}
.footer-color {
  width: 100%;
  color: rgb(255, 255, 255);
  background-color: #01588d;
}
.footer {
  background-color: rgb(54, 66, 92);
  width: 100%;
  text-align: left;
  font-family: sans-serif;
  font-weight: bold;
  font-size: 16px;
  padding: 30px 20px 30px 20px;
}

.footer .footer-left,
.footer .footer-center,
.footer .footer-right {
  display: inline-block;
  vertical-align: top;
}

/* footer left*/

.footer .footer-left {
  width: 33%;
  padding-right: 15px;
}

.footer .about {
  line-height: 20px;
  color: #ffffff;
  font-size: 13px;
  font-weight: normal;
  margin: 0;
}

.footer .about span {
  display: block;
  color: #ffffff;
  font-size: 14px;
  font-weight: bold;
  margin-bottom: 20px;
}

.footer .icons {
  margin-top: 0px;
}

.footer .icons a {
  display: inline-block;
  width: 35px;
  height: 35px;
  cursor: pointer;
  background-color: #33383b00;
  border-radius: 2px;
  font-size: 20px;
  color: #ffffff;
  text-align: center;
  line-height: 35px;
  margin-right: 3px;
  margin-bottom: 5px;
}

/* footer center*/

.footer .footer-center {
  width: 30%;
}

.footer .footer-center i {
  background-color: #33383b;
  color: #ffffff;
  font-size: 25px;
  width: 38px;
  height: 38px;
  border-radius: 50%;
  text-align: center;
  line-height: 42px;
  margin: 10px 15px;
  vertical-align: middle;
}

.footer .footer-center i.fa-envelope {
  font-size: 17px;
  line-height: 38px;
}

.footer .footer-center p {
  display: inline-block;
  color: #ffffff;
  vertical-align: middle;
  margin: 0;
}

.footer .footer-center p span {
  display: block;
  font-weight: normal;
  font-size: 14px;
  line-height: 2;
}

.footer .footer-center p a {
  color: #0099ff;
  text-decoration: none;
}

/* footer right*/

.footer .footer-right {
  width: 35%;
}

.footer h2 {
  color: #ffffff;
  font-size: 36px;
  font-weight: normal;
  margin: 0;
}

.footer h2 span {
  color: #0099ff;
}

.footer .menu {
  color: #ffffff;
  margin: 20px 0 12px;
  padding: 0;
}

.footer .menu a {
  display: inline-block;
  line-height: 1.8;
  text-decoration: none;
  color: inherit;
}

.footer .menu a:hover {
  color: #0099ff;
}

.footer .name {
  color: #0099ff;
  font-size: 14px;
  font-weight: normal;
  margin: 0;
}
.logofooter img {
  width: 100%;
}
.logo-rmut {
  width: 50px;
  height: 90px;
}
@media (max-width: 767px) {
  .footer {
    font-size: 14px;
  }
  .footer .footer-left,
  .footer .footer-center,
  .footer .footer-right {
    display: block;
    width: 100%;
    margin-bottom: 40px;
    text-align: center;
  }
  .footer .footer-center i {
    margin-left: 0;
  }
}
.footer-right img {
  width: 80px;
  height: 50px;
}
.footer .menu {
  color: #ffffff;
  margin: 0px 0 12px;
  padding: 0;
}
</style>
