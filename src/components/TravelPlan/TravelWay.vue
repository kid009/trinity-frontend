<template>
  <div class="travel-plannig">
    <div class="text-plan">
      <h1 class="underline">วางแผนการเดินทาง</h1>
      <h2>Travel Planning</h2>
    </div>

    <div class="plannig"><img src="images/plan_trip/topic.jpg" alt="" /></div>
    <div class="tourist">
      <h3>"เส้นทางท่องเที่ยวแนะนำ"</h3>
      <h3>Recommended tourist route</h3>
    </div>
    <div class="slide-tourist">
      <div class="testimonials">
        <div class="row">
          <div class="col-md-12">
            <!-- <div
              class="bg bg-bg-chrome"
              style="background-image: url(img/home_2/item_img_12.jpg)"
            ></div> -->

            <div
              class="swiper-container swiper-swiper-unique-id-2 initialized"
              data-autoplay="0"
              data-loop="1"
              data-speed="1000"
              data-center="0"
              data-slides-per-view="1"
              id="swiper-unique-id-2"
            >
              <div
                class="swiper-wrapper"
                style="
                  width: 5945px;
                  transform: translate3d(-1189px, 0px, 0px);
                  transition-duration: 0s;
                  height: 180px;
                "
              >
                <div class="swiper-slide swiper-slide-duplicate">
                  <div class="hero">
                    <img src="images/travel/travel10.webp" alt="" />
                    <h4>
                      <b>
                        "สุริณทร์ ดินแดน ประวัติศาสตร์ ปราสาทอารยธรรมขอม
                        วิถีชีวิตภูมิปัญญาไหมล้ำค้า 2 วัน 1คืน พักในตัวเมือง"</b
                      >
                    </h4>
                  </div>
                </div>
                <div
                  class="swiper-slide swiper-slide-visible swiper-slide-active"
                  style="width: 1189px; height: 180px"
                >
                  <div class="hero">
                    <img src="images/travel/travel10.webp" alt="" />
                    <h4>
                      <b>
                        "สุริณทร์ ดินแดน ประวัติศาสตร์ ปราสาทอารยธรรมขอม
                        วิถีชีวิตภูมิปัญญาไหมล้ำค้า 2 วัน 1คืน พักในตัวเมือง"</b
                      >
                    </h4>
                  </div>
                </div>
                <div class="swiper-slide" style="width: 1189px; height: 180px">
                  <div class="hero">
                    <img src="images/travel/travel10.webp" alt="" />
                    <h4>
                      <b>
                        "สุริณทร์ ดินแดน ประวัติศาสตร์ ปราสาทอารยธรรมขอม
                        วิถีชีวิตภูมิปัญญาไหมล้ำค้า 2 วัน 1คืน พักในตัวเมือง"</b
                      >
                    </h4>
                  </div>
                </div>
                <div class="swiper-slide" style="width: 1189px; height: 180px">
                  <div class="hero">
                    <img src="images/travel/travel10.webp" alt="" />
                    <h4>
                      <b>
                        "สุริณทร์ ดินแดน ประวัติศาสตร์ ปราสาทอารยธรรมขอม
                        วิถีชีวิตภูมิปัญญาไหมล้ำค้า 2 วัน 1คืน พักในตัวเมือง"</b
                      >
                    </h4>
                  </div>
                </div>
                <div
                  class="swiper-slide swiper-slide-duplicate"
                  style="width: 1189px; height: 180px"
                >
                  <div class="hero">
                    <img src="images/travel/travel10.webp" alt="" />
                    <h4>
                      <b>
                        "สุริณทร์ ดินแดน ประวัติศาสตร์ ปราสาทอารยธรรมขอม
                        วิถีชีวิตภูมิปัญญาไหมล้ำค้า 2 วัน 1คืน พักในตัวเมือง"</b
                      >
                    </h4>
                  </div>
                </div>
              </div>
              <div
                class="pagination poin-style-1 pagination-swiper-unique-id-2"
              >
                <span
                  class="
                    swiper-pagination-switch
                    swiper-visible-switch
                    swiper-active-switch
                  "
                ></span
                ><span class="swiper-pagination-switch"></span
                ><span class="swiper-pagination-switch"></span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "TravelWay",
};
</script>

<style scoped>
.text-plan {
  text-align: center;
  color: white;
  font-style: italic;
}
.text-plan h1 {
  letter-spacing: 0px;
  font-size: 38px;
  line-height: 50px;
  font-weight: 500;
}
.underline:after {
  height: 2px;
  margin: 0px;
}
.text-plan h2 {
  letter-spacing: 0px;
  padding-top: 4px;
  padding-bottom: 4px;
  font-weight: 100;
  text-transform: none;
  font-size: 26px;
}
.plannig {
  text-align: center;
}
.plannig img {
  width: 100%;
  height: 180px;
  border-radius: 20px;
  object-fit: cover;
}
.tourist {
  text-align: center;

  color: white;
  font-style: italic;
}
.tourist h3 {
  font-size: 18px;
  font-weight: 100;
  letter-spacing: 0px;
  text-transform: none;
  line-height: 24px;
}
/*------- Reccommended tourist rout slide-----------*/
.slide-tourist {
  text-align: center;
  background: rgba(255, 255, 255, 0);
  border-radius: 20px;
}
.swiper-slide {
  height: 100% !important;
}
.slide-tourist h4 {
  position: absolute;
  width: 100%;
  text-align: center;
  left: 0px;
  padding: 0px 20px 0px 20px;
  bottom: 34px;
  margin: 0px;
  color: white;
  letter-spacing: 0px;
}
.slide-tourist b {
  text-shadow: 1px 1px 2px black;
  font-size: 18px;
  font-style: italic;
  font-weight: 700;
  color: white;
}
.poin-style-1 {
  bottom: 1px;
}
.hero {
  padding: 0px;
  border-radius: 20px;
  width: 100%;
  height: 310px;
}
.hero img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 20px;
}
</style>
