<template>
  <div class="col-xs-12 col-md-3">
    <div class="right-sidebar">
      <div class="sidebar bg-white clearfix">
        <div class="sidebar-block type-2">
          <div class="">
            <div class="">
              <br />
              <div class="team-entry style-2">
                <h4 id="page-detail" class="color-black">ข้อมูลติดต่อ</h4>
                <div class="image">
                  <img
                    class="img-profie"
                    id="img_travels"
                    :src="user_image_cover"
                    alt=""
                  />
                </div>
                <b>
                  ชื่อ : <span class="color-black"></span>

                  {{ user_name }}
                </b>
                <!-- <b><p class="color-black">ที่อยู่: <span class="color-black"> </span></p>{{user_name}}</b> -->
                <b id="page-detail"
                  ><p class="color-black" id="page-detail">
                    เบอร์โทรศัพท์: <span class="color-black"> </span
                    >{{ user_telephone }}
                  </p></b
                >
                <b id="page-detail"
                  ><h5
                    style="margin-top: -16px"
                    class="color-black"
                    id="page-detail"
                  >
                    email: <span class="color-black"> </span>{{ user_email }}
                  </h5></b
                >

                <a class="img-resize" target="_blank" :href="user_line"
                  ><img id="bordercl" src="images/product/line-icon.png" alt=""
                /></a>
                &nbsp;
                <a class="img-resize" target="_blank" :href="user_facebook"
                  ><img id="bordercl" src="images/product/facebook.png" alt=""
                /></a>
                &nbsp;
                <a class="img-resize" target="_blank" :href="user_instragram"
                  ><img
                    id="bordercl"
                    src="images/product/instagrams.png"
                    alt=""
                /></a>
                &nbsp;
                <a
                  class="img-resize"
                  target="_blank"
                  :href="researcher_innovation_link"
                  ><img id="bordercl" src="images/product/link.png" alt=""
                /></a>
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
  name: "Contact",
  props: {
    user_name: String,
    user_telephone: String,
    user_email: String,
    user_line: String,
    user_facebook: String,
    user_instragram: String,
    researcher_innovation_link: String,
    user_image_cover: String,
  },
  setup() {
    return {};
  },
};
</script>

<style scoped>
#img_travels {
  width: auto;
  max-width: 300px;
  height: 200px;
  overflow: hidden;
  display: block;
  margin: auto;
}
.img-profie img {
  width: 150px;
  height: auto;
}
.img-profie {
  width: 150px;
  height: 150px;
  overflow: hidden;
  text-align: center;
}
#borderporfile {
  border-style: solid;
  border-width: 3px;
  border-color: white;
  border-radius: 10px;
}
.borderdetail {
  position: relative;
  border-radius: 3px;
  padding: 10px;
  width: 100%;
  height: 500px;
  background-color: #ffffff;
}
#bordercl {
  border-style: solid;
  border-width: 3px;
  border-color: white;
  border-radius: 30px;
}
.img-resize {
  width: 61px;
  height: 61px;
  overflow: hidden;
  text-align: center;
}

.img-resize img {
  margin-top: 20px;
  width: 43px;
  height: auto;
}
.detail-block p {
  font-size: 13px;
  line-height: 28px;
  font-weight: 400;
  text-transform: uppercase;
  letter-spacing: 0.5px;
  margin-bottom: 20px;
}
.img-profie {
  width: 150px;
  height: auto;
  overflow: hidden;
  text-align: center;
  object-fit: cover;
}
@media screen and (max-width: 600px) {
}
</style>
