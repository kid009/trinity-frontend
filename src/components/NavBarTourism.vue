<template>
  <div>
    <header class="color-1 hovered menu-3 NavBars">
      <div class="container box">
        <div class="row bar-blur">
          <div class="col-md-12">
            <div class="nav">
              <a href="/" class="logo">
                <img
                  class="logo-icon"
                  src="../assets/TRINITYTRIPLOGO2.png"
                  alt="lets travel"
                />
              </a>

              <div class="nav-menu-icon">
                <a href="#"><i></i></a>
              </div>
              <nav class="menu">
                <ul>
                  <!-- <li class="type-1 active"> -->
                  <li class="type-1">
                    <a href="/"
                      >หน้าแรก</a>
                  </li>
                  <li class="type-1">
                    <router-link to="community">
                      ท่องเที่ยวชุมชน
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
                        <router-link to="touristroute?page=1&group=0&id=0">
                          เส้นทางท่องเที่ยว<span
                            class="fa fa-angle-down"
                          ></span>
                        </router-link>
                      </li>
                      <li>
                        <router-link to="ActivityIndex?page=1&group=0&id=0">
                          กิจกรรมท่องเที่ยว<span
                            class="fa fa-angle-down"
                          ></span>
                        </router-link>
                      </li>
                    </ul>
                  </li>
                  <!-- <li class="type-1">
                    <router-link to="product?page=1&group=0&id=0">
                      นวัตกรรมผลิตภัณฑ์<span class="fa fa-angle-down"></span>
                    </router-link>
                  </li> -->
                  <li class="type-1">
                    <a href="producttouristindexpage?page=1&group=0&id=0">
                      นวัตกรรมผลิตภัณฑ์
                    </a>
                  </li>
                  <li class="type-1">
                    <router-link :to="getLinkPlanTrip()">
                      วางแผนการเดินทาง
                    </router-link>
                  </li>
                  <li class="type-1">
                    <!-- <a href="convenience"
                      >อำนวยความสะดวก<span class="fa fa-angle-down"></span
                    ></a> -->
                    <a href="facilitationindexpage?page=1&group=0&id=0"
                      >อำนวยความสะดวก<span class="fa fa-angle-down"></span
                    ></a>
                    <ul class="dropmenu">
                      <li>
                        <router-link to="roomsindexpage?page=1&group=0&id=0">
                          ที่พัก<span class="fa fa-angle-down"></span>
                        </router-link>
                      </li>
                      <!-- <li>
                        <a href="restaurantindexpage"
                          >ร้านอาหาร<span class="fa fa-angle-down"></span
                        ></a>
                      </li> -->
                      <li>
                        <router-link to="travalmapindexpage">
                          แผนที่การเดินทาง<span class="fa fa-angle-down"></span>
                        </router-link>
                      </li>
                    </ul>
                  </li>
                  <li class="type-1">
                    <a> Blog<span class="fa fa-angle-down"></span> </a>
                    <ul class="dropmenu">
                      <li>
                        <a @click="on_click('tourismExperience', 0, 0, 'blog')"
                          >ประสบการณ์การท่องเที่ยว<span
                            class="fa fa-angle-down"
                          ></span
                        ></a>
                      </li>
                      <li>
                        <a @click="on_click('tourismKnowhow', 0, 0, 'blog')"
                          >ความรู้การท่องเที่ยว<span
                            class="fa fa-angle-down"
                          ></span
                        ></a>
                      </li>
                      <li>
                        <a @click="on_click('tourismImpressive', 0, 0, 'blog')"
                          >ความประทับใจการท่องเที่ยว<span
                            class="fa fa-angle-down"
                          ></span
                        ></a>
                      </li>
                      <li>
                        <a @click="on_click('tourismStory', 0, 0, 'blog')"
                          >เรื่องราวการท่องเที่ยว<span
                            class="fa fa-angle-down"
                          ></span
                        ></a>
                      </li>
                    </ul>
                  </li>
                  <li class="type-1">
                    <router-link to=""
                      ><img style="width: 30px" src="images/user.png" /><span
                        class="fa fa-angle-down"
                      ></span
                    ></router-link>
                    <ul class="dropmenu">
                      <li>
                        <a @click="getLink()"
                          >โปรไฟล์ของคุณ<span class="fa fa-angle-down"></span
                        ></a>
                      </li>
                      <li>
                        <a href="/"
                          >ติดต่อเรา<span class="fa fa-angle-down"></span
                        ></a>
                      </li>
                      <li v-show="!status">
                        <a href="login"
                          >เข้าสู่ระบบ<span class="fa fa-angle-down"></span
                        ></a>
                      </li>
                      <li v-show="status">
                        <a href="#!" @click.prevent="logout"
                          >ออกจากระบบ<span class="fa fa-angle-down"></span
                        ></a>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <h4 class="ff_title letter-spacing username">
                      {{ id }}
                    </h4>
                  </li>
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

export default {
  name: "NavBars",
  setup() {
    //const router = useRouter();
    const status = localStorage.getItem("status");
    //const token = localStorage.getItem("token");
    const id = localStorage.getItem("id");
    const password = atob(localStorage.getItem("cGFzc3dvcmQ="));
    const formCreatetrip = sessionStorage.getItem("formCreatetrip");

    let link = "";

    function getLinkPlanTrip() {
      if (formCreatetrip) {
        link = "formCreate";
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
    };
  },
};
</script>

<style scoped>
.NavBars {
  position: fixed;
  z-index: 10000;
}
.logo-icon {
  margin-left: 10px;
  width: auto;
  height: 80px;
}
.username {
  color: black;
  margin-top: 10px;
  font-weight: bold;
}
header.menu-3.scrol {
  background: #ffffff75;
  padding: 0px;
  backdrop-filter: blur(30px);
}
</style>
