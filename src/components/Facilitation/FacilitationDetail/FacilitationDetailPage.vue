<template>
  <div>
    <!------------------------------------------------ poiDetail ---------------------------------------->

    <article>
      <div class="detail-header center">
        <h3 v-html="name"></h3>
        <h3 v-html="nameen"></h3>
        <!-- <p v-html="items.activity_duration_text"></p> -->

        <div v-show="detail != ''">
          <h4>รายละเอียด</h4>
          <p v-html="detail"></p>
        </div>
        <div v-show="detailen != ''">
          <h4>detail</h4>
          <p v-html="detailen"></p>
        </div>
        <div v-show="history != ''">
          <h4>ประวัติ</h4>
          <p v-html="history"></p>
        </div>
        <div v-show="historyen != ''">
          <h4>history</h4>
          <p v-html="historyen"></p>
        </div>
        <div v-show="room_detail != ''">
          <h4>รายละเอียดห้องพัก</h4>
          <p v-html="room_detail"></p>
        </div>

        <div v-show="rate != ''">
          <h4>ราคา</h4>
          <p>{{ rate }}บาท</p>
        </div>
        <div v-show="room_price_min != ''">
          <h4>เริ่มต้นราคา</h4>
          <p>{{ room_price_min }}-{{ room_price_max }}บาท</p>
        </div>

        <div v-show="address != ''">
          <h4>ตำแหน่ง</h4>
          <p v-html="address"></p>
        </div>

        <div v-show="website != ''">
          <h4>เว็บไซต์</h4>
          <a :href="website">{{ website }}</a>
        </div>
        <div style="text-align: center" v-show="vdo != ''">
          <hr />
          <h3 style="text-align: center" id="page-detail">วิดีโอแนะนำ</h3>

          <iframe
            :src="'https://www.youtube.com/embed/' + vdo"
            width="100%"
            height="315"
            controls
            autoplay
          ></iframe>
        </div>

        <!-- <div v-show="items.activity_participant_age != ''">
            <h4>อายุ</h4>
            <p v-html="items.activity_participant_age"></p>
          </div>

          <div v-show="items.activity_period != ''">
            <h4>เวลา</h4>
            <p v-html="items.activity_period"></p>
          </div> -->
      </div>
    </article>

    <!------------------------------------------------ poiDetail ---------------------------------------->

    <!-- <hr />

    <ShareSocial /> -->
  </div>
</template>

<script>
// import ShareSocial from "../../ShareSocial.vue";

export default {
  name: "FacilitationDetailPage",
  // components: {
  //   ShareSocial,
  // },

  props: {
    name: String,
    nameen: String,
    detail: String,
    detailen: String,
    history: String,
    historyen: String,
    room_detail: String,
    rate: String,
    room_price_min: String,
    room_price_max: String,
    address: String,
    website: String,
    vdo: String,
  },
};
</script>

<style scoped>
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

@media screen and (max-width: 600px) {
  .center {
    text-align: center;
  }
}
</style>
