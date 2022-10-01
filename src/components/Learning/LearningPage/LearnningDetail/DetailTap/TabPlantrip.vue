<template>
  <!-- <div class="hotel-items"> -->
  <div class="col-lg-12">
    <div class="hotel-items">
      <div class="">
        <div class="bg bg-bg-chrome act" v-lazy="'images/bg/bg_plan.jpg'"></div>
        <!-- <img class="radius_img" v-lazy="'images/bg/bg_plan.jpg'" alt="" /> -->
        <div class="padd-10-01">
          <div class="col-xs-12 col-md-12">
            <div class="detail-content color-1 padd-90-90">
              <div class="row">
                <div class="col-md-3"></div>
                <div class="col-md-6">
                  <a @click="getLinkPlanTrip()" class="c-button bg-3">
                    <span class="fontstyle"
                      >เริ่มต้นการวางแผนการเดินทาง</span
                    ></a
                  >
                </div>

                <div class="col-md-3"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <!-- </div> -->
</template>

<script>
import { useRouter } from "vue-router";
export default {
  name: "TabPlantrip",
  setup() {
    const router = useRouter();
    const formCreatetrip = sessionStorage.getItem("formCreatetrip");
    function getLinkPlanTrip() {
      if (formCreatetrip) {
        router.replace("formcreate");
      } else {
        window.location = "FormIndex";
      }
    }
    return { getLinkPlanTrip, formCreatetrip };
  },
};
</script>

<style scoped>
.fontstyle {
  font-family: "Prompt", sans-serif;
}
.c-button.bg-3 {
  background: white;
  width: 100%;
  border-radius: 20px;
  border: 1px solid rgb(242, 243, 247);
  text-align: center;
  padding: 0px 0px;
  padding-top: 10px;
  padding-bottom: 10px;
}
.community {
  /* background: #ebe5ca; */
  background: rgba(255, 0, 0, 0);
  max-width: 120rem;
  width: 100%;
  height: 30rem;
  border-radius: 20px;
  /* box-shadow: 2px 1px 5px #222222; */
  padding: 0px 15px 0px 15px;
}
.radius_img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
  border-radius: 30px;
  /* box-shadow: 2px 1px 5px #222222; */
}
.bg {
  width: 100%;
  height: 100%;
  overflow: hidden;
  object-fit: cover;
  display: block;
  border-radius: 30px;
}
.bg-bg-chrome.act {
  position: absolute;
}
.padd-10-01 {
  padding-top: 20px;
}
.padd-90-90 {
  padding-top: 250px;
  padding-bottom: 350px;
}
.vl {
  position: relative;
  border-left: 3px solid rgba(8, 114, 201);
  height: 100%;

  padding-right: 15px;
  padding-left: 5px;
  padding-top: 15px;
}
.img-qr {
  width: 100%;
  max-width: 200px;
  height: 200px;
  display: block;
  margin: auto;
}
.bg_com {
  background-color: rgba(8, 114, 201, 0);
  border-radius: 15px;
  padding-right: 5px;
  padding-left: 5px;
  padding-top: 5px;
  padding-bottom: 5px;
  width: 100%;
  max-width: 230px;
  display: block;
  margin: auto;
}
.bg_qr {
  background-color: rgba(8, 114, 201);
  border-radius: 15px;
  padding-right: 5px;
  padding-left: 5px;
  padding-top: 5px;
  padding-bottom: 5px;
  width: 100%;
  max-width: 230px;
  display: block;
  margin: auto;
}
.tags-title {
  color: white;
  width: -webkit-fit-content;
  width: -moz-fit-content;
  width: fit-content;
  background-color: rgba(8, 114, 201);
  padding: 10px;
  border-radius: 10px;
  padding-top: 10px;
  display: block;
  margin: auto;
}
.hotel-items {
  border-radius: 30px;
  padding-right: 20px;
  padding-left: 20px;
  padding-top: 15px;
  padding-bottom: 20px;

  /* box-shadow: 2px 1px 5px #222222; */
  background: rgba(255, 255, 255, 0);
}
.hotel-items {
  position: relative;
  width: 100%;
  float: left;
  display: inline-block;
  box-shadow: 4px 3px 5px 0px rgb(0 0 0 / 3%);
}
.text_color {
  color: rgba(8, 114, 201);
}
h3 {
  /* position: relative; */
  font-size: 28px;
  line-height: 1.863rem;
  font-weight: 550;
  text-transform: capitalize;
  letter-spacing: 0;
  color: rgba(8, 114, 201);
}
span {
  font-size: 24px;
  line-height: 40px;
  font-weight: 400;
  text-transform: none;
  letter-spacing: 1px;
  color: rgba(8, 114, 201);
  /* text-shadow: 2px 2px 3px #000000; */
}
@media screen and (max-width: 600px) {
  .padd-90-90 {
    padding-top: 150px;
    padding-bottom: 150px;
  }
  span {
    font-size: 20px;
    line-height: 40px;
    font-weight: 400;
    text-transform: none;
    letter-spacing: 1px;
    color: rgba(8, 114, 201);
    /* text-shadow: 2px 2px 3px #000000; */
  }
}
</style>
