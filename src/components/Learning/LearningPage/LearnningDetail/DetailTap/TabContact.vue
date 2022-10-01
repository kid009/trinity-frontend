<template>
  <div class="hotel-items">
    <div class="padd-10-01">
      <div class="col-xs-12 col-md-12">
        <div class="right-sidebar">
          <div class="sidebar bg-white clearfix">
            <div class="sidebar-block type-2">
              <br />
              <div class="team-entry style-2">
                <h4 id="page-detail" class="color-black">ข้อมูลติดต่อ</h4>
                <div class="image">
                  <img
                    class="img-profie"
                    id="borderporfile"
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
  name: "TabContact",
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
};
</script>

<style scoped>
.padd-10-01 {
  padding-top: 20px;
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
  border-radius: 15px;
  padding-right: 5px;
  padding-left: 5px;
  padding-top: 15px;
  padding-bottom: 10px;
  /* box-shadow: 2px 1px 5px #222222; */
  background: rgb(255, 255, 255);
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
</style>
