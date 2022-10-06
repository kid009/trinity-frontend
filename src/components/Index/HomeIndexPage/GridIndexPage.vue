<template>
  <main>
    <div class="container-fluid">
      <div class="row">
        <iframe
          src="https://spatial.io/s/LAB-KILs-3D-Area-6336651f63996a0001aedbe5"
          height="500px;"
          width="100%;"
          title="Iframe Example"
        ></iframe>
      </div>
    </div>

    <div class="top-baner">
      <div class="clip">
        <div
          class="bg bg-bg-chrome act"
          v-lazy="'images/homepage/backgroud.jpg'"
        ></div>
      </div>

      <div class="container">
        <div class="position">
          <br />
          <div class="row">
            <div class="col-12">
              <div class="col-md-2"></div>
              <div class="col-md-8">
                <div class="col-md-4">
                  <div class="row">
                    <router-link to="community">
                      <div class="community">
                        <div class="hotel-item style-4">
                          <div class="radius-top-community">
                            <img
                              v-lazy="'images/homepage/ท่องเที่ยวชุมชน.png'"
                              alt=""
                            />
                            <!-- <div class="inner_position_bottom_left">
                              <h3 class="shadow">ท่องเที่ยวโดยชุมชน</h3>

                              <hr />
                              <h4>community-based tourism</h4>
                            </div> -->
                            <div class="vertical-bottom">
                              <div class="text_left">
                                <h3 class="shadow">ท่องเที่ยวโดยชุมชน</h3>

                                <hr />
                                <h4>community-based tourism</h4>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </router-link>
                  </div>
                </div>
                <div class="col-md-4">
                  <div class="row">
                    <router-link to="ActivityIndex?page=1&group=0&id=0">
                      <div class="activity">
                        <div class="hotel-item style-4">
                          <div class="radius-top-activity">
                            <img
                              v-lazy="'images/homepage/กิจกรรม.png'"
                              alt=""
                            />
                            <!-- <div class="inner_position_bottom_center">
                              <h4>Tourism Activity</h4>
                              <h2>กิจกรรมท่องเที่ยว</h2>
                            </div> -->
                            <div class="vertical-bottomcenter">
                              <div class="text_right">
                                <h4>Tourism Activity</h4>
                                <h2>กิจกรรมท่องเที่ยว</h2>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </router-link>
                    <br />
                    <a @click="getLinkPlanTrip()">
                      <div class="activity">
                        <div class="hotel-item style-4">
                          <div class="radius-top-activity">
                            <img v-lazy="'images/homepage/วางแผน.png'" alt="" />
                            <!-- <div class="inner_position_bottom_center_b">
                              <h4>Travel palnning</h4>
                              <h2>วางแผนการท่องเที่ยว</h2>
                            </div> -->
                            <div class="vertical-bottomcenter">
                              <div class="text_right">
                                <h4>Travel palnning</h4>
                                <h2>วางแผนการท่องเที่ยว</h2>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </a>
                  </div>
                </div>
                <div class="col-md-4">
                  <div class="row">
                    <router-link to="ProductIndex">
                      <div class="community">
                        <div class="hotel-item style-4">
                          <div class="radius-top-community">
                            <img v-lazy="'images/homepage/นวัต.png'" alt="" />
                            <!-- <div class="inner_position_bottom_right">
                              <h3 class="shadow">นวัตกรรมท่องเที่ยว</h3>
                              <hr />
                              <h4>Tourism innovation</h4>
                            </div> -->
                            <div class="vertical-bottom">
                              <div class="text_right">
                                <h3 class="shadow">นวัตกรรมท่องเที่ยว</h3>
                                <hr />
                                <h4>Tourism innovation</h4>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </router-link>
                  </div>
                </div>
              </div>
              <div class="col-md-2"></div>
            </div>
          </div>
          <br />
          <div class="row">
            <div class="col-12">
              <div class="col-md-2"></div>
              <div class="col-md-8">
                <div>
                  <Carousel
                    v-show="grid == true"
                    :items-to-show="4"
                    :autoplay="5000"
                    :wrap-around="true"
                  >
                    <Slide
                      v-for="items in mainRoutData"
                      :key="items.tourism_main_route_id"
                    >
                      <!-- <div class="carousel__item">{{ slide }}</div> -->

                      <div class="radius-mask tour-block">
                        <div class="clip tourist-1">
                          <a
                            :href="
                              'TouristRouteSubRoute?page=1&group=0&id=' +
                              items.tourism_main_route_id
                            "
                          >
                            <div
                              class="bg bg-bg-chrome act tourist-1"
                              v-lazy="items.tourism_main_route_image"
                            >
                              <div
                                class="
                                  bg bg-bg-chrome
                                  act
                                  tourist-1
                                  color-bg-img
                                "
                              ></div>
                            </div>

                            <!-- <div class="inner_position_bottom_bottom">
                              <h1>{{ items.tourism_main_route_name }}</h1>
                            </div> -->
                            <div class="vertical-bottom">
                              <div class="text_center">
                                <h1>{{ items.tourism_main_route_name }}</h1>
                              </div>
                            </div>
                          </a>
                        </div>
                      </div>
                    </Slide>

                    <template #addons>
                      <Navigation />
                      <!-- <Pagination /> -->
                    </template>
                  </Carousel>
                </div>

                <!--- ----------------------->
              </div>
              <div class="col-md-2"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </main>
</template>

<script>
import axios from "axios";
import { useRouter } from "vue-router";
import { onMounted, ref } from "vue";
import { defineComponent } from "vue";
import { Carousel, Navigation, Slide } from "vue3-carousel";
import "vue3-carousel/dist/carousel.css";

export default defineComponent({
  name: "GridIndexPage",
  components: {
    Carousel,
    Slide,
    Navigation,
    // Pagination,
  },

  setup() {
    const mainRoutData = ref([]);
    const router = useRouter();
    const formCreatetrip = sessionStorage.getItem("formCreatetrip");
    const grid = ref(false);

    axios
      .get("https://api.trinitytrip.com/api/tourism-route/mainRoute")
      .then(function (response) {
        mainRoutData.value = response.data.data.data;
      });

    onMounted(() => {
      setTimeout(() => {
        grid.value = true;
      }, 1000);
    });

    function getLinkPlanTrip() {
      if (formCreatetrip) {
        router.replace("formcreate");
      } else {
        window.location = "FormIndex";
      }
    }

    function on_click() {
      window.location = "login";
    }
    return { on_click, mainRoutData, formCreatetrip, getLinkPlanTrip, grid };
  },
});
</script>

<style scoped>
.hotel-item:hover {
  transform: scale(1.1);
}
.radius-mask:hover {
  transform: scale(1.1);
}
/* .community:hover {
  transform: scale(1.1);
} */
.vertical-bottom {
  position: absolute;
  bottom: 0px;
  left: 0px;
  width: 100%;
  padding-right: 5px;
  padding-left: 5px;
  padding-bottom: 10px;
}
.vertical-bottomcenter {
  position: absolute;
  bottom: 0px;
  left: 0px;
  width: 100%;
  padding-right: 5px;
  padding-left: 5px;
  padding-bottom: 0px;
}
.text_right {
  text-align: right;
}
.text_left {
  text-align: left;
}
.text_center {
  text-align: center;
}
.tour-block {
  position: relative;
  float: left;
  width: 100%;
  min-height: 125px;
  margin-bottom: 0px;
}
.carousel__icon {
  width: var(--vc-icn-width);
  height: 40px;
  fill: currentColor;
  background-color: white;
}
.carousel__prev,
.carousel__next {
  background-color: white;
  border-radius: 1px;
  width: 100%;
  height: 40px;
  text-align: center;
  font-size: 28px;
  padding: 0;
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  border: 0;
  cursor: pointer;
}
.carousel__item {
  min-height: 200px;
  width: 100%;
  height: 100%;
  background-color: var(--vc-clr-primary);
  color: var(--vc-clr-white);
  font-size: 20px;
  border-radius: 8px;
  display: flex;
  justify-content: center;
  align-items: center;
}

.carousel__slide {
  padding: 10px;
}

.carousel__prev,
.carousel__next {
  box-sizing: content-box;
  border: 5px solid white;
}
.NavBars {
  position: fixed;
  z-index: 10000;
}
.color-bg-img {
  background: rgba(255, 0, 0, 0);
  background: -webkit-linear-gradient(
    rgba(255, 0, 0, 0),
    rgba(255, 0, 0, 0),
    #0059a9
  );
  background: -o-linear-gradient(
    rgba(255, 0, 0, 0),
    rgba(255, 0, 0, 0),
    #0059a9
  );
  background: -moz-linear-gradient(
    rgba(255, 0, 0, 0),
    rgba(255, 0, 0, 0),
    #0059a9
  );
  background: linear-gradient(rgba(255, 0, 0, 0), rgba(255, 0, 0, 0), #0059a9);
}
/* .dropmenu {
  width: 40rem;
  border-radius: 1.25rem;
  display: block;
  margin: auto;
  background: rgba(0, 83, 190, 0.856);
  background: -webkit-linear-gradient(
    rgba(0, 83, 190, 0.856),
    rgba(0, 83, 190, 0.856),
    rgba(255, 0, 0, 0)
  );
  background: -o-linear-gradient(
    rgba(0, 83, 190, 0.856),
    rgba(0, 83, 190, 0.856),
    rgba(255, 0, 0, 0)
  );
  background: -moz-linear-gradient(
    rgba(0, 83, 190, 0.856),
    rgba(0, 83, 190, 0.856),
    rgba(255, 0, 0, 0)
  );
  background: linear-gradient(
    rgba(0, 83, 190, 0.856),
    rgba(0, 83, 190, 0.856),
    rgba(255, 0, 0, 0)
  );
  z-index: 1;
} */

.nav {
  padding: 0px 0px 0px;
}

.fontstyle {
  font-family: "Prompt", sans-serif;
}
.logo-index {
  width: auto;
  height: 60px;
}
.text-color {
  color: #206ab0;
  text-align: center;
}
/* .top-baner {
  position: relative;
  width: 100%;
  height: 50em;
} */
.center {
  text-align: center;
}
main {
  max-width: 240rem;
  margin: 0 auto;
}
.img-siez-lo {
  width: 100%;
  max-width: 70px;
  height: 50px;
  margin-top: 5px;
}
.icon-size {
  padding: 1px;
  text-align: center;
  width: 35px;
  margin: 5px;
  border-radius: 1.25rem;
  box-shadow: 1px 1px 0px #f8f8f8;
}
.login {
  background: rgb(255, 255, 255);
  border-radius: 120px;
  width: -webkit-fit-content;
  width: -moz-fit-content;
  width: fit-content;
  height: fit-content;
  text-align: center;
  box-shadow: 4px 3px 5px #01588d;
  margin-top: 10px;
}
.login:hover {
  transform: scale(1.05);
}
.login-position {
  text-align: center;
}
.position {
  margin-top: 18%;
  margin-bottom: 20%;
}

.community {
  /* position: absolute; */
  /* background: #ebe5ca; */
  background: rgba(255, 0, 0, 0);
  max-width: 120rem;
  width: 100%;
  height: 16rem;
  border-radius: 20px;
  /* box-shadow: 2px 1px 5px #222222; */
  padding: 0px 15px 0px 15px;
}

.radius-top-community img {
  width: 100%;
  height: 16rem;
  object-fit: cover;
  display: block;
  border-radius: 1.25rem;
  box-shadow: 2px 1px 5px #222222;
}
.activity {
  /* position: absolute; */
  /* background: #ebe5ca; */
  background: rgba(255, 0, 0, 0);
  max-width: 120rem;
  width: 100%;
  height: 7rem;
  border-radius: 20px;
  /* border-radius: 1.25rem;
  box-shadow: 2px 1px 5px #222222; */
  padding: 0px 15px 0px 15px;
}
.radius-top-activity img {
  width: 100%;
  height: 8rem;
  object-fit: cover;
  display: block;
  border-radius: 1.25rem;
  box-shadow: 2px 1px 5px #222222;
}

.c-button.bg-3 {
  background: white;
  width: 100%;
  border-radius: 1.25rem;
  box-shadow: 2px 1px 5px #222222;
  text-align: center;
  padding: 0px 0px;
}

.tourist-1 {
  /* position: absolute; */
  max-width: 120rem;
  width: 100%;
  height: 117px;
  border-radius: 1.25rem;
  box-shadow: 2px 1px 5px #222222;
}
.radius-top img {
  width: 100%;
  height: 5.5rem;
  object-fit: cover;
  display: block;
  border-radius: 1.25rem;
  box-shadow: 2px 1px 5px #222222;
}
h1 {
  /* position: relative; */
  font-size: 14px;
  line-height: 1.063rem;
  font-weight: 400;
  text-transform: capitalize;
  letter-spacing: 1px;
  color: white;
  text-shadow: 2px 2px 3px #000000;
}

h2 {
  /* position: relative; */
  font-size: 1.3rem;
  line-height: 2.363rem;
  font-weight: 500;
  text-transform: capitalize;
  letter-spacing: 1px;
  color: white;
  text-shadow: 2px 2px 3px #000000;
}
.shadow {
  text-shadow: 2px 2px 3px #000000;
}
h3 {
  /* position: relative; */
  font-size: 1.4rem;
  line-height: 2.363rem;
  font-weight: 500;
  text-transform: capitalize;
  letter-spacing: 1px;
  color: white;
}
h4 {
  /* position: relative; */
  font-size: 0.885rem;
  line-height: 0.363rem;
  font-weight: 500;
  font-style: italic;
  text-transform: capitalize;
  letter-spacing: 1px;
  color: white;
  text-shadow: 2px 2px 3px #000000;
}
h5 {
  font-size: 18px;
  line-height: 1.363rem;
  font-weight: 500;
  text-transform: capitalize;
  text-align: center;
  letter-spacing: 0px;
  color: white;
  text-shadow: 2px 2px 3px #000000;
}
h6 {
  font-size: 14px;
  line-height: 0.413rem;
  font-weight: 600;
  text-transform: capitalize;
  letter-spacing: 1px;
  /* color: #01588d; */
  color: #fff;
  text-shadow: 1px 1px 6px #000000;
}

span {
  font-size: 20px;
  line-height: 1.813rem;
  font-weight: 600;
  text-transform: capitalize;
  letter-spacing: 1px;
  color: #fff;
  text-shadow: 1px 1px 6px #000000;
}

hr {
  color: yellow;
  width: 12rem;
  height: 0.55rem;
  display: block;
  margin: auto;
}
.inner_position_bottom_left {
  position: absolute;
  display: block;
  text-align: left;
  height: 50px;
  width: 100%;
  bottom: 10px;
  left: 0px;
  right: 10px;
  z-index: 999;
}

.inner_position_bottom_center {
  position: absolute;
  display: block;
  text-align: right;
  height: 50px;
  width: 200px;
  bottom: -10px;
  right: 10px;
  z-index: 999;
}
.inner_position_bottom_center_b {
  position: absolute;
  display: block;
  text-align: right;
  height: 50px;
  width: 240px;
  bottom: -10px;
  right: 10px;
  z-index: 999;
}

.inner_position_bottom_right {
  position: absolute;
  display: block;
  text-align: right;
  height: 50px;
  width: 100%;
  bottom: 10px;
  right: 10px;
  z-index: 999;
}
.inner_position_bottom_bottom {
  position: absolute;
  display: block;
  text-align: center;
  height: 50px;
  width: 100%;
  bottom: 0px;
  z-index: 999;
}
.fa-angle-right:before {
  font-size: 50px;
}
.fa-angle-left:before {
  font-size: 50px;
}
@media screen and (max-width: 600px) {
  .position {
    margin-top: 40%;
    margin-bottom: 20%;
  }
  nav.slide-menu {
    z-index: 1000;
  }
  .nav-menu-icon {
    z-index: 1001;
  }
  /* .dropmenu {
    width: 20rem;
    border-radius: 1.25rem;
    display: block;
    margin: auto;
    background: rgba(0, 83, 190, 0.856);
    background: -webkit-linear-gradient(
      rgba(0, 83, 190, 0.856),
      rgba(0, 83, 190, 0.856),
      rgba(255, 0, 0, 0)
    );
    background: -o-linear-gradient(
      rgba(0, 83, 190, 0.856),
      rgba(0, 83, 190, 0.856),
      rgba(255, 0, 0, 0)
    );
    background: -moz-linear-gradient(
      rgba(0, 83, 190, 0.856),
      rgba(0, 83, 190, 0.856),
      rgba(255, 0, 0, 0)
    );
    background: linear-gradient(
      rgba(0, 83, 190, 0.856),
      rgba(0, 83, 190, 0.856),
      rgba(255, 0, 0, 0)
    );
    z-index: 10000;
  } */
}
.navbar-bottom {
  margin-top: 40px;
  margin-bottom: -40px;
}
.shadow {
  text-shadow: 1px 1px 6px #000000;
}
</style>
