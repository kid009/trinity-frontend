<template>
  <div>
    <header class="color-1 hovered menu-3 NavBars">
      <div class="container box">
        <div class="row bar-blur">
          <div class="col-md-12">
            <a href="/">
              <a href="/" class="logo">
                <img
                  class="logo-icon"
                  src="../assets/TRINITYTRIPLOGO2.png"
                  alt="lets travel"
                />
              </a>
            </a>
            <div class="nav">
              <div class="nav-menu-icon">
                <a href="#"><i></i></a>
              </div>
              <nav class="menu">
                <ul>
                  <li class="type-1">
                    <router-link to="/" class="color-dark-2 link-blue">
                      หน้าแรก<span></span>
                    </router-link>
                  </li>

                  <li class="type-1">
                    <a class="color-dark-2 link-blue"
                      >การบริการและผลิตภัณฑ์<span
                        class="fa fa-angle-down"
                      ></span
                    ></a>
                    <ul class="dropmenu">
                      <li>
                        <router-link
                          to="businessserviceindexpage?page=1&group=0&id=0"
                          class="color-dark-2 link-blue"
                        >
                          การบริการ<span></span>
                        </router-link>
                      </li>
                      <li class="type-1">
                        <a class="color-dark-2 link-blue"
                          >ผลิตภัณฑ์<span class="fa fa-angle-down"></span
                        ></a>
                        <ul class="dropmenu">
                          <li class="type-1">
                            <router-link
                              to="businessproductbusinessindexpage?page=1&group=0&id=0"
                              class="color-dark-2 link-blue"
                            >
                              ผลิตภัณฑ์ธุรกิจ<span></span>
                            </router-link>
                          </li>
                          <li class="type-1">
                            <router-link
                              to="businessproducttouristindexpage?page=1&group=0&id=0"
                              class="color-dark-2 link-blue"
                            >
                              ผลิตภัณฑ์ท่องเที่ยว<span></span>
                            </router-link>
                          </li>
                          <li class="type-1">
                            <router-link
                              to="businessproductcommunityindexpage?page=1&group=0&id=0"
                              class="color-dark-2 link-blue"
                            >
                              ผลิตภัณฑ์ชุมชน<span></span>
                            </router-link>
                          </li>
                        </ul>
                      </li>
                    </ul>
                  </li>

                  <li class="type-1">
                    <a class="color-dark-2 link-blue"
                      >ความรู้<span class="fa fa-angle-down"></span
                    ></a>
                    <ul class="dropmenu">
                      <li>
                        <router-link
                          to="businesslearnningknowhowindexpage?page=1&group=0&id=0"
                          class="color-dark-2 link-blue"
                        >
                          ความรู้ธุรกิจ<span></span>
                        </router-link>
                      </li>
                      <li>
                        <router-link
                          to="communitylearnning"
                          class="color-dark-2 link-blue"
                        >
                          ความรู้เกี่ยวกับCBT<span></span>
                        </router-link>
                      </li>
                      <li>
                        <router-link
                          to="communitycasestudy"
                          class="color-dark-2 link-blue"
                        >
                          กรณีศึกษา case study<span></span>
                        </router-link>
                      </li>
                    </ul>
                  </li>

                  <li class="type-1">
                    <router-link to="community" class="color-dark-2 link-blue">
                      ท่องเที่ยวโดยชุมชน<span></span>
                    </router-link>
                  </li>

                  <li class="type-1">
                    <a
                      >เส้นทางและกิจกรรมท่องเที่ยว<span
                        class="fa fa-angle-down"
                      ></span
                    ></a>
                    <ul class="dropmenu">
                      <li>
                        <router-link
                          to="touristroute?page=1&group=0&id=0"
                          class="color-dark-2 link-blue"
                        >
                          เส้นทางท่องเที่ยว<span></span>
                        </router-link>
                      </li>
                      <li>
                        <router-link
                          to="ActivityIndex?page=1&group=0&id=0"
                          class="color-dark-2 link-blue"
                        >
                          กิจกรรมท่องเที่ยว<span></span>
                        </router-link>
                      </li>
                    </ul>
                  </li>

                  <!-- <li class="type-1">
                    <a href="#">อื่นๆ<span class="fa fa-angle-down"></span></a>
                    <ul class="dropmenu">
                     <li>
                        <router-link :to="getLinkPlanTrip()">
                          วางแผนการเดินทาง<span></span>
                        </router-link>
                      </li>
                      <li><a href="convenience">อำนวยความสะดวก</a></li>
                      <li>
                        <router-link to="hotelMain?page=1&group=0&id=0">
                          ที่พัก<span></span>
                        </router-link>
                      </li>
                      <li><a href="restaurant">ร้านอาหาร</a></li>
                      <li>
                        <router-link to="mapconvenience">
                          แผนที่การเดินทาง<span></span>
                        </router-link>
                      </li>

                      <li class="type-1">
                        <a href="bloggroup"
                          >Blog<span class="fa fa-angle-down"></span
                        ></a>
                        <ul class="dropmenu">
                          <li>
                            <a @click="on_click(1, 0, 1, 'blog')"
                              >ประสบการณ์การท่องเที่ยว</a
                            >
                          </li>
                          <li>
                            <a @click="on_click(2, 0, 1, 'blog')"
                              >ความรู้การท่องเที่ยว</a
                            >
                          </li>
                          <li>
                            <a @click="on_click(3, 0, 1, 'blog')"
                              >ความประทับใจการท่องเที่ยว</a
                            >
                          </li>
                          <li>
                            <a @click="on_click(4, 0, 1, 'blog')"
                              >เรื่องราวการท่องเที่ยว</a
                            >
                          </li>
                        </ul>
                      </li>
                    </ul>
                  </li> -->

                  <li>
                    <div class="top-header-block fr search">
                      <img
                        class="search-img"
                        src="img/search_icon_small_blue.png"
                        alt=""
                      />
                      <div class="search-popup">
                        <div class="s_close"></div>
                        <div class="container">
                          <div class="row">
                            <div class="col-xs-12 col-sm-10 col-sm-offset-1">
                              <form class="s_form">
                                <input
                                  class="s_input"
                                  required=""
                                  type="text"
                                  placeholder="SEARCH"
                                />
                                <input
                                  class="s_submit"
                                  type="submit"
                                  value=""
                                />
                              </form>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </li>
                  <!--- -------------------------------------------------------->
                  <!-- <li>
                    <div class="top-header-block fr card">
                      <img
                        v-if="Img_userprofile.user_image_cover != null"
                        class="
                          card-link
                          color-dark-2
                          link-blue
                          community-profile
                        "
                        :src="
                          'https://trinitytrip.com/image/account/' +
                          Img_userprofile.user_image_cover
                        "
                        alt=""
                      />
                      <img
                        v-else
                        class="
                          card-link
                          color-dark-2
                          link-blue
                          community-profile
                        "
                        src="
                          images/img-non/user.png
                        "
                        alt=""
                      />
                      <a class="card-link color-dark-2 link-blue" href="#">
                        <h5 class="username">{{ id }}</h5>
                      </a>

                      <div class="cart-popup">
                        <div class="cart_close"></div>

                        <div class="hotel-small style-2 clearfix">
                          <a class="hotel-img black-hover" @click="getLink()">
                            <img
                              v-if="Img_userprofile.user_image_cover != null"
                              class="img-responsiv img-profile"
                              :src="
                                'https://trinitytrip.com/image/account/' +
                                Img_userprofile.user_image_cover
                              "
                              alt=""
                            />
                            <img
                              v-else
                              class="img-responsiv img-profile"
                              src="
                                 images/img-non/user.png
                              "
                              alt=""
                            />
                            <div class="tour-layer delay-1"></div>
                          </a>
                          <div class="hotel-desc">
                            <h4 style="color: black" class="color-dark-2">
                              {{ id }}
                            </h4>
                            <a
                              class="color-dark-2 link-blue"
                              @click="getLink()"
                            >
                              <h5 style="color: black" class="color-dark-2">
                                ดูโปรไฟล์ของคุณ
                              </h5>
                            </a>
                          </div>
                        </div>
                        <a
                          href="#"
                          class="
                            c-button
                            b-40
                            full
                            color-dark-green
                            brd-grey
                            hv-blue
                          "
                          ><span>ติดต่อเรา</span></a
                        >
                        <a
                          href="#!"
                          @click.prevent="logout"
                          class="c-button b-40 full bg-blue hv-blue-o"
                          ><span>ออกจากระบบ</span></a
                        >
                      </div>
                    </div>
                  </li> -->
                  <li class="">
                    <router-link to="">
                      <!-- <img style="width: 30px" src="images/user.png" /> -->
                      <img
                        v-if="Img_userprofile.user_image_cover != null"
                        class="img-profile"
                        :src="
                          'https://trinitytrip.com/image/account/' +
                          Img_userprofile.user_image_cover
                        "
                        alt=""
                      />
                      <img
                        v-else
                        class="img-profile"
                        src="
                                 images/img-non/user.png
                              "
                        alt=""
                      />

                      <span class="fa fa-angle-down"></span>
                    </router-link>
                    <ul class="dropmenu">
                      <li>
                        <a @click="getLink()">โปรไฟล์ของคุณ</a>
                      </li>
                      <li>
                        <a href="">ติดต่อเรา</a>
                      </li>
                      <li v-show="!status">
                        <a href="login">เข้าสู่ระบบ</a>
                      </li>
                      <li v-show="status">
                        <a href="#!" @click.prevent="logout">ออกจากระบบ</a>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <h4 class="ff_title letter-spacing username">
                      {{ id }}
                    </h4>
                  </li>
                  <!--- -------------------------------------------------------->
                </ul>
              </nav>
            </div>
          </div>
        </div>
      </div>
    </header>
  </div>
</template>

<script>
//import { useRouter } from "vue-router";
import { onMounted, ref } from "vue";
import axios from "axios";
import { BASE_API_URL } from "../constants";

export default {
  name: "NavBarBussiness",
  setup() {
    const Img_userprofile = ref([]);

    //const router = useRouter();
    const status = localStorage.getItem("status");
    //const token = localStorage.getItem("token");
    const id = localStorage.getItem("id");
    const password = atob(localStorage.getItem("cGFzc3dvcmQ="));
    const formCreatetrip = sessionStorage.getItem("formCreatetrip");

    let link = "";

    const getData = async () => {
      const response = await axios.get(
        `${BASE_API_URL}/auth/Img_userprofile/` + id
      );
      Img_userprofile.value = response.data.data[0];
    };

    onMounted(() => {
      getData();
    });

    function getLinkPlanTrip() {
      if (formCreatetrip) {
        link = "Create";
      } else {
        link = "PlanTrip";
      }
      return link;
    }

    function getLink() {
      if (status == "success") {
        window.location =
          "https://admin.trinitytrip.com/index.php?r=account%2Floginhome&user=" +
          id +
          "&password=" +
          password;
      } else if (status == "in process") {
        window.location = "setaccount";
      } else {
        window.location = "login";
      }
      return link;
    }

    const logout = () => {
      localStorage.removeItem("token");
      localStorage.removeItem("id");
      localStorage.removeItem("cGFzc3dvcmQ=");
      localStorage.removeItem("status");
      localStorage.removeItem("role_id");
      sessionStorage.clear();
      localStorage.clear();

      window.location = "login";
      //router.replace("login")
    };

    const on_click = (page, group, id, name) => {
      window.location =
        name + "?page=" + page + "&group=" + group + "&id=" + id;
    };

    return {
      logout,
      on_click,
      status,
      link,
      getLink,
      id,
      password,
      formCreatetrip,
      getLinkPlanTrip,
      Img_userprofile,
    };
  },
};
</script>

<style scoped>
.ma-1 {
  margin-top: 100px;
}
.img-profile {
  width: auto;
  max-width: 40px;
  height: 40px;
  border-radius: 20px;
  margin-top: -5px;
  border: 2px solid rgb(0, 0, 0);
}

.NavBars {
  position: fixed;
  z-index: 10000;
}
.logo-icon {
  margin-left: 10px;
  width: auto;
  height: 80px;
  margin-top: -10px;
}
.username {
  color: black;
  margin-top: 3px;
  font-weight: bold;
  padding-left: 0px;
}
header.st-100.scrol {
  background: #ffffff75;
  padding: 0px;
  backdrop-filter: blur(30px);
}
.community-profile {
  width: 40px;
  height: 40px;
  border-radius: 50%;
  border: 2px solid rgb(88, 85, 85);
  margin: -3px 0 0 -15px;
  margin-top: -10px;
}
header.type-2 .top-header-block {
  letter-spacing: 0.4px;
  padding: 0px 25px 0px 0px;
  margin-top: 10px;
  height: 18px px;
  border-left: 1px solid #ededed;
}
@media only screen and (max-width: 992px) {
  header.menu-3.hovered nav .dropmenu a > span {
    display: inline-block;
    font-size: 20px;
    color: black;
    float: none;
    padding-left: 5px;
  }
  nav .dropmenu li:hover .dropmenu {
    background-color: white;
  }
  nav {
    height: 100vh;
  }
}

header.menu-3.hovered nav .dropmenu a > span {
  display: inline-block;
}
nav li.type-1:nth-last-child(1) .dropmenu,
nav li.type-1:nth-last-child(2) .dropmenu,
nav li.type-1:nth-last-child(3) .dropmenu {
  left: 0;
  right: 0px;
  background-color: white;
  top: auto;
}
.search-img {
  padding: 10px;
}
.bar-blur {
  padding-top: 0px;
}
.top-header-block:last-child {
  float: inherit;
}
@media only screen and (max-width: 767px) {
  .search {
    position: initial;
  }
  .card {
    position: revert;
  }
  .search-popup .s_close {
    z-index: 100;
  }
  .search-popup {
    top: 25%;
    height: fit-content;
  }
}
.bar-blur[data-v-aed0c10e] {
  padding-top: 10px;
  background-color: #ffffff52;
  backdrop-filter: blur(30px);
}
header.menu-3.scrol {
  background: rgb(255 255 255 / 33%);
  padding: 0px;
  backdrop-filter: blur(23px);
}
</style>
