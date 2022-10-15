<template>
  <!-- <div> -->
    <header class="color-1 hovered menu-3 NavBars">
      <div class="container box">
        <div class="row bar-blur">
          <div class="col-md-12">
            <div class="col-md-11">
              <div class="nav">
                <div class="row">
                  <div class="">
                    <a href="/" class="logo">
                      <img
                        class="logo-icon"
                        src="../assets/TRINITYTRIPLOGO2.png"
                        alt=""
                      />
                    </a>
                  </div>
                </div>

                <div class="nav-menu-icon">
                  <a href="#"><i></i></a>
                </div>
                <div class="row">
                  <div class="">
                    <nav class="menu">
                      <ul>
                        <li class="type-1"><a></a></li>

                        <li class="type-1">
                          <!-- <div class="sidebar-block"> -->
                          <form @submit.prevent="onSubmit">
                            <div class="input-style-1 b-50 color-3">
                              <a :href="'community?id=' + message"
                                ><img src="img/search_icon.png" alt=""
                              /></a>

                              <input
                                v-model="message"
                                type="text"
                                placeholder="ค้นหาชุมชน"
                              />
                            </div>
                          </form>
                          <!-- </div> -->
                        </li>
                        <li class="type-1">
                          <a
                            ><h3 class="text-color shadow">เมนู</h3>
                            <span class="fa fa-angle-down"></span
                          ></a>
                          <ul class="dropmenu center">
                            <div class="row">
                              <li>
                                <div class="col-md-3">
                                  <a href="community"
                                    ><h5 class="fontstyle text-navbar-menu">
                                      ท่องเที่ยวโดยชุมชน
                                    </h5></a
                                  >
                                </div>
                              </li>
                              <li>
                                <div class="col-md-3">
                                  <a href="ActivityIndex?page=1&group=0&id=0"
                                    ><h5 class="fontstyle text-navbar-menu">
                                      กิจกรรมการท่องเที่ยว
                                    </h5></a
                                  >
                                </div>
                              </li>
                              <li>
                                <div class="col-md-3">
                                  <a @click="getLinkPlanTrip()"
                                    ><h5 class="fontstyle text-navbar-menu">
                                      วางแผนการท่องเที่ยว
                                    </h5></a
                                  >
                                </div>
                              </li>
                              <li>
                                <div class="col-md-3">
                                  <a href="ProductIndex"
                                    ><h5 class="fontstyle text-navbar-menu">
                                      นวัตกรรมท่องเที่ยว
                                    </h5></a
                                  >
                                </div>
                              </li>
                            </div>
                            <div class="row">
                              <li>
                                <div class="col-md-3">
                                  <a class="center" @click="api()">
                                    <img
                                      class="icon-size"
                                      src="images/homepage/explor.png"
                                      alt=""
                                    />
                                    <h6 class="text-navbar-menu">Explore</h6></a
                                  >
                                </div>
                              </li>
                              <li>
                                <div class="col-md-3">
                                  <a class="center" href="Learning">
                                    <img
                                      class="icon-size"
                                      src="images/homepage/learn.png"
                                      alt=""
                                    />
                                    <h6 class="text-navbar-menu">Learn</h6></a
                                  >
                                </div>
                              </li>
                              <li>
                                <div class="col-md-3">
                                  <a class="center" href="PartnerPage">
                                    <img
                                      class="icon-size"
                                      src="images/homepage/partner.png"
                                      alt=""
                                    />
                                    <h6 class="text-navbar-menu">
                                      Partners
                                    </h6></a
                                  >
                                </div>
                              </li>
                              <li>
                                <div class="col-md-3">
                                  <a class="center" href="SupportPage">
                                    <img
                                      class="icon-size"
                                      src="images/homepage/subport.png"
                                      alt=""
                                    />
                                    <h6 class="text-navbar-menu">Support</h6></a
                                  >
                                </div>
                              </li>
                            </div>
                          </ul>
                        </li>

                        <li class="type-1">
                          <a @click="on_click"
                            ><h3 class="text-color shadow">เข้าสู่ระบบ</h3></a
                          >
                        </li>

                        <li class="type-1">
                          <a href="register"
                            ><h3 class="text-color shadow">สมัครสมาชิก</h3></a
                          >
                        </li>
                        <li class="type-1">
                          <a href="MobileIndex"
                            ><h3 class="text-color shadow">Mobile App</h3></a
                          >
                        </li>
                      </ul>
                    </nav>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-md-1"></div>
          </div>
        </div>
      </div>
    </header>
  <!-- </div> -->
</template>

<script>
//import { useRouter } from "vue-router";
import { ref } from "vue";
import { useRouter } from "vue-router";

export default {
  name: "NavBarPublic",
  setup() {
    const router = useRouter();
    const formCreatetrip = sessionStorage.getItem("formCreatetrip");
    const message = ref();

    function getLinkPlanTrip() {
      if (formCreatetrip) {
        router.replace("formcreate");
      } else {
        window.location = "FormIndex";
      }
    }
    const onSubmit = () => {
      window.location = "community?id=" + message.value;
    };

    function on_click() {
      localStorage.clear();
      window.location = "login";
    }

    function api() {
      localStorage.setItem("module", "trinityapi");
      window.location = "Api";
    }
    return {
      on_click,
      formCreatetrip,
      getLinkPlanTrip,
      message,
      onSubmit,
      api,
    };
  },
};
</script>

<style scoped>
.input-style-1.color-3 input {
  border-color: #ffffff75;
  background: #f8f8f8;
  color: #9a9a9a;
  opacity: 1;
  max-width: 400px;
  width: 350px;
  font-family: "Prompt", sans-serif;
}

.input-style-1.color-3 input ::placeholder {
  color: #9a9a9a;
  font-family: "Prompt", sans-serif;
}

.NavBars {
  /* position: fixed; */
  z-index: 10000;
}
.logo-icon {
  position: relative;
  /* margin-left: 10px; */
  object-fit: cover;
  display: block;
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

.col-xs-12 {
  padding-right: 0px;
  padding-left: 0px;
}
.col-md-11 {
  padding-right: 0px;
  padding-left: 10px;
}
.col-md-1 {
  padding-right: 0px;
  padding-left: 0px;
}
nav {
  float: right;
  color: #fff;
}
.logo-index {
  width: auto;
  height: 80px;
}
.menu-menu {
  display: block;
  margin: auto;
}
.dropmenu {
  width: 38rem;
  border-radius: 1.25rem;
  /* background: rgba(0, 83, 190, 0.856);
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
  ); */
  z-index: 10000;
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
  width: 33px;
  margin: 5px;
  border-radius: 1.25rem;
  box-shadow: 1px 1px 0px #f8f8f8;
}
.text-color {
  color: #206ab0;
  text-align: center;
}
/* .shadow {
  text-shadow: 2px 2px 3px #000000;
} */
h3 {
  /* position: relative; */
  font-size: 1.4rem;
  line-height: 2.363rem;
  font-weight: 500;
  text-transform: capitalize;
  letter-spacing: 1px;
  color: white;
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
.center {
  text-align: center;
}
.text-navbar-menu {
  color: #312d2d;
  text-shadow: 1px 1px 6px #ffffff;
}
.fontstyle {
  font-weight: 500;
  text-shadow: 1px 1px 6px #ffffff;
}
/* .input-style-1.b-50 input {
  background-color: #ffffff;
} */

/* ::placeholder {
  color: #000;
} */
::placeholder {
  color: #000;
  opacity: 1;
}

:-ms-input-placeholder {
  color: #000;
}

::-ms-input-placeholder {
  color: #000;
}
/* .input-style-1.b-50 input placeholder {
  color: #000;
  text-shadow: 1px 1px 6px #000000;
} */
@media screen and (max-width: 1280px) {
  .input-style-1.color-3 input {
    border-color: #ffffff75;
    background: #f8f8f8;
    color: #9a9a9a;
    opacity: 1;
    max-width: 400px;
    width: 250px;
  }
}
@media screen and (max-width: 1024px) {
  .input-style-1.color-3 input {
    border-color: #ffffff75;
    background: #f8f8f8;
    color: #9a9a9a;
    opacity: 1;
    max-width: 400px;
    width: 150px;
  }
  .logo-icon {
    position: relative;
    /* margin-left: 10px; */
    object-fit: cover;
    display: block;
    width: auto;
    height: 50px;
  }
}
@media screen and (max-width: 600px) {
  .input-style-1.color-3 input {
    border-color: #ffffff75;
    background: #f8f8f8;
    color: #9a9a9a;
    opacity: 1;
    max-width: 400px;
    width: 300px;
  }

  .input-style-1.color-3 input ::placeholder {
    color: #9a9a9a;
  }
  .col-xs-12 {
    padding-right: 10px;
    padding-left: 0px;
  }
  nav.slide-menu {
    z-index: 1000;
  }
  .nav-menu-icon {
    z-index: 1001;
  }
  .dropmenu {
    width: 20rem;
    border-radius: 1.25rem;
    /* background: rgba(0, 83, 190, 0.856);
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
    ); */
    z-index: 10000;
  }
}
</style>
