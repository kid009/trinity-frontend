<template>
  <div>
    <header class="color-1 hovered menu-3 NavBars">
      <div class="container box">
        <div class="row bar-blur">
          <div class="col-xs-12">
            <div class="col-md-11">
              <div class="nav">
                <a href="home" class="logo">
                  <img
                    class="logo-icon"
                    v-lazy="'img/TRINITYTRIPLOGO2.fb1dc127.png'"
                    alt=""
                  />
                </a>

                <div class="nav-menu-icon">
                  <a href="#"><i></i></a>
                </div>
                <nav class="menu">
                  <ul>
                    <li class="type-1"></li>
                  </ul>
                </nav>
              </div>
              <div class="col-md-1"></div>
            </div>
          </div>
        </div>
      </div>
    </header>
    <div class="top-baner map-baner">
      <div class="">
        <div
          id="map-canvas"
          class="bg-bg-chrome"
          v-lazy="'images/bg/Artboard.png'"
        >
          <div id="map-canvas" class="bg-bg-chrome color-bg-img"></div>
        </div>
        <div class="inner_position_top_bottom">
          <h1 class="shadow">การท่องเที่ยวโดยชุมชน</h1>
          <h3 class="shadow">(COMMUNITY BASED TOURISM CBT)</h3>
          <h4>
            คือ การท่องเที่ยวที่คำนึงถึงความยั่งยืนของสิ่งแวดล้อม สังคม
            และวัฒนธรรมของชุมชนกำหนด ทิศทางโดยชุมชน จัดการโดยชุมชน
          </h4>
          <h4>
            เพื่อชุมชน และชุมชนมีบทบาทเป็นเจ้าของในการจัดการ ดูแล
            เพื่อให้เกิดการเรียนรู้แก่ผู้มาเยือน
          </h4>
        </div>
      </div>
    </div>
    <div class="container box padd-120">
      <div class="">
        <!-- <div class="baner-bar"> -->
        <div class="baner-bar">
          <div class="row">
            <div class="col-xs-12">
              <div class="col-md-1"></div>
              <div class="col-md-2">
                <div class="row">
                  <a href="">
                    <div class="block_grid">
                      <div class="hotel-item">
                        <div class="">
                          <!-- <img
                            class="img-center"
                            src="images/homepage/ท่องเที่ยวชุมชน.png"
                            alt=""
                          /> -->
                          <div
                            class="img-center bg-bg-chrome"
                            v-lazy="'images/learnmore/1.png'"
                          >
                            <div class="img-center color-bg-img"></div>
                          </div>
                          <div class="inner_position_bottom_bottom">
                            <h3 class="shadow">นักวิจัย</h3>
                          </div>
                        </div>
                      </div>
                    </div>
                  </a>
                </div>
              </div>
              <div class="col-md-2">
                <div class="row">
                  <a href="">
                    <div class="block_grid">
                      <div class="hotel-item">
                        <div class="">
                          <div
                            class="img-center bg-bg-chrome"
                            v-lazy="'  images/learnmore/2.png'"
                          >
                            <div class="img-center color-bg-img"></div>
                          </div>
                          <div class="inner_position_bottom_bottom">
                            <h3 class="shadow">ชุมชน</h3>
                          </div>
                        </div>
                      </div>
                    </div>
                  </a>
                </div>
              </div>
              <div class="col-md-2">
                <div class="row">
                  <a href="">
                    <div class="block_grid">
                      <div class="hotel-item">
                        <div class="">
                          <div
                            class="img-center bg-bg-chrome"
                            v-lazy="'images/learnmore/3.png'"
                          >
                            <div class="img-center color-bg-img"></div>
                          </div>
                          <div class="inner_position_bottom_bottom">
                            <h3 class="shadow">นักท่องเที่ยว</h3>
                          </div>
                        </div>
                      </div>
                    </div>
                  </a>
                </div>
              </div>
              <div class="col-md-2">
                <div class="row">
                  <a href="">
                    <div class="block_grid">
                      <div class="hotel-item">
                        <div class="">
                          <div
                            class="img-center bg-bg-chrome"
                            v-lazy="'images/learnmore/4.png'"
                          >
                            <div class="img-center color-bg-img"></div>
                          </div>
                          <div class="inner_position_bottom_bottom">
                            <h3 class="shadow">ภาคธุรกิจ</h3>
                          </div>
                        </div>
                      </div>
                    </div>
                  </a>
                </div>
              </div>
              <div class="col-md-2">
                <div class="row">
                  <a href="">
                    <div class="block_grid">
                      <div class="hotel-item">
                        <div class="">
                          <div
                            class="img-center bg-bg-chrome"
                            v-lazy="'images/learnmore/5.png'"
                          >
                            <div class="img-center color-bg-img"></div>
                          </div>
                          <div class="inner_position_bottom_bottom">
                            <h3 class="shadow">หน่วยงานรัฐ</h3>
                          </div>
                        </div>
                      </div>
                    </div>
                  </a>
                </div>
              </div>
              <div class="col-md-1"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "LearnmorePage",
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
.bar-blur {
  padding-top: 10px;
}
.hotel-item {
  box-shadow: 4px 3px 5px 0px rgba(255, 255, 255, 0);
  padding-top: 20px;
}
.color-bg-img {
  background: rgba(255, 0, 0, 0);
  background: -webkit-linear-gradient(
    rgba(255, 0, 0, 0),
    rgba(255, 0, 0, 0),
    #000000
  );
  background: -o-linear-gradient(
    rgba(255, 0, 0, 0),
    rgba(255, 0, 0, 0),
    #000000
  );
  background: -moz-linear-gradient(
    rgba(255, 0, 0, 0),
    rgba(255, 0, 0, 0),
    #000000
  );
  background: linear-gradient(rgba(255, 0, 0, 0), rgba(255, 0, 0, 0), #000000);
}
.padd-120 {
  padding-bottom: 30px;
}
.map-baner {
  padding-top: 60px;
}
.map-baner #map-canvas {
  height: 500px;
}
.bg-learn {
  width: 100%;
  height: 100%;
}
.baner-bar {
  position: relative;
  left: 0;
  bottom: 100px;
  background: rgba(255, 255, 255, 0);
  z-index: 50;
  width: 100%;
  /* padding: 30px; */
  box-shadow: 4px 3px 5px 0px rgba(255, 255, 255, 0);
}
.inner_position_top_bottom {
  position: absolute;
  display: block;
  text-align: center;
  height: 50px;
  width: 100%;
  bottom: 220px;
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
.block_grid {
  background: rgba(255, 0, 0, 0);
  max-width: 120rem;
  width: 100%;
  height: 20rem;
  border-radius: 0px;
  padding: 0px 15px 0px 15px;
}
.img-center {
  width: 100%;
  height: 20rem;
  object-fit: cover;
  display: block;
  border-radius: 0px;
  box-shadow: 1px 2px 10px #222222;
}
h1 {
  font-size: 74px;
  line-height: 60px;
  font-weight: 500;
  text-transform: none;
  letter-spacing: 1px;
  color: white;
  text-shadow: 2px 2px 3px #000000;
}
h3 {
  font-size: 1.4rem;
  line-height: 2.363rem;
  font-weight: 500;
  text-transform: none;
  letter-spacing: 1px;
  color: white;
  text-shadow: 2px 2px 3px #000000;
}
h4 {
  font-size: 22px;
  line-height: 2.363rem;
  font-weight: 500;
  text-transform: none;
  letter-spacing: 1px;
  color: white;
  text-shadow: 2px 2px 3px #000000;
}
@media screen and (max-width: 600px) {
  .baner-bar {
    position: relative;
    left: 0;
    top: 100%;
    bottom: 0px;
    background: rgba(255, 255, 255, 0);
    z-index: 50;
    width: 100%;
  }
  .padd-120 {
    padding-bottom: 120px;
  }
  h1 {
    font-size: 38px;
    line-height: 60px;
    font-weight: 500;
    text-transform: none;
    letter-spacing: 1px;
    color: white;
    text-shadow: 2px 2px 3px #000000;
  }
  h3 {
    font-size: 22px;
    line-height: 2.363rem;
    font-weight: 500;
    text-transform: none;
    letter-spacing: 1px;
    color: white;
    text-shadow: 2px 2px 3px #000000;
  }
  h4 {
    font-size: 16px;
    line-height: 2.363rem;
    font-weight: 500;
    text-transform: none;
    letter-spacing: 1px;
    color: white;
    text-shadow: 2px 2px 3px #000000;
  }
  .inner_position_top_bottom {
    position: absolute;
    display: block;
    text-align: center;
    height: 50px;
    width: 100%;
    bottom: 300px;
    z-index: 999;
  }
}
</style>
