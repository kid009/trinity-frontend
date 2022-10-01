<template>
  <NavbarApi />
  <div class="full-height">
    <div class="clip">
      <div
        class="bg bg-bg-chrome img"
        style="background-image: url(images/bg/bg-api.jpg)"
      ></div>
    </div>
    <div class="vertical-align">
      <div class="container">
        <div class="row">
          <div class="col-md-12 col-xs-12">
            <!-- <h3 class="category color-white-light shadow">trinitytrip</h3> -->
            <div class="main-title">
              <h1 class="color-sea shadow">Open data api<br /></h1>
              <p class="shadow">
                รวบรวมข้อมูลไว้ในรูปแบบAPIเพื่อนักพัฒนาสามารถนำข้อมูลไปใช้งานได้อย่างรวดเร็ว
              </p>
              <div class="row">
                <div
                  class="
                    col-lg-10
                    col-lg-offset-1
                    col-md-12
                    col-sm-12
                    col-md-offset-0
                  "
                >
                  <div v-if="id_api == id_null" class="input-style-1">
                    <router-link
                      to="RegisterApi"
                      class="c-button b-60 bg-sea hv-sea-o delay-2 shadow"
                      ><span>สมัครเพื่อใช้งานAPI</span></router-link
                    >
                  </div>
                  <div v-else class="input-style-1">
                    <router-link
                      to="DataApi"
                      class="c-button b-60 bg-sea hv-sea-o delay-2 shadow"
                      ><span>ใช้งานAPI</span></router-link
                    >
                  </div>
                  <!-- <div class="submit">
                    <a
                      href="loginApi"
                      class="c-button b-60 bg-sea hv-sea-o delay-2 shadow"
                      ><span>เข้าสู่ระบบ</span></a
                    >
                  </div> -->
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- <div class="top-baner">
      <div class="arrows">
        <div
          class="swiper-container main-slider-6"
          data-autoplay="0"
          data-loop="0"
          data-speed="900"
          data-center="0"
          data-slides-per-view="1"
        >
          <div class="swiper-wrapper">
            <div class="swiper-slide active" data-val="0">
              <div class="clip">
                <div
                  class="bg bg-bg-chrome act img"
                  style="background-image: url(images/earth-g.jpg)"
                ></div>
              </div>
              <div class="vertical-align">
                <div class="container">
                  <div class="row">
                    <div class="col-xs-12 col-sm-10 col-sm-offset-1">
                      <div class="main-title style-3 left">
                        <h4 class="category color-white-light shadow">
                          trinitytrip
                        </h4>
                        <h1>
                          <span class="color-sea shadow">Open data api </span
                          ><br />
                        </h1>
                        <p class="color-white-light shadow">
                          รวบรวมข้อมูลไว้ในรูปแบบAPIเพื่อนักพัฒนาสามารถนำข้อมูลไปใช้งานได้อย่างรวดเร็ว
                        </p>
                        <div class="clearfix"></div>
                        <a
                          href="RegisterApi"
                          class="c-button b-60 bg-sea hv-sea-o delay-2 shadow"
                          ><span>สมัครเพื่อใช้งานAPI</span></a
                        >
                        <a
                          href="loginApi"
                          class="c-button b-60 bg-sea hv-sea-o delay-2 shadow"
                          ><span>เข้าสู่ระบบ</span></a
                        >
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="pagination pagination-hidden poin-style-1"></div>
        </div>
      </div>
    </div> -->
  </div>
</template>

<script>
import NavbarApi from "../../components/OpenData/NavbarApi.vue";

export default {
  name: "IndexApi",
  components: {
    NavbarApi,
  },
  setup() {
    const id_api = atob(localStorage.getItem("aWRfYXBp"));
    const id_null = atob("null");

    return { id_api, id_null };
  },
};
</script>

<style scoped>
.img {
  filter: blur(0.8px);
}
.shadow {
  text-shadow: black 0.1em 0.1em 0.2em;
}
span {
  font-size: 20px;
}
</style>
