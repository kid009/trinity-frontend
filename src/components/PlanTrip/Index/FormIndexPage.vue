<template>
  <!-- TOP-BANER -->
  <div class="container box">
    <div class="row">
      <div class="">
        <div class="">
          <div
            class="swiper-container main-slider-3 img_hight"
            data-autoplay="5000"
            data-loop="1"
            data-speed="900"
            data-center="0"
            data-slides-per-view="1"
          >
            <div class="swiper-wrapper">
              <div class="swiper-slide active" data-val="0">
                <div class="clip">
                  <div
                    class="bg bg-bg-chrome act img_hight"
                    style="background-image: url(images/baner/1.jpg)"
                  >
                    <h4 class="color-white">บ้านช่องฟืน ตำบลเกาะหมาก</h4>
                    <h4 class="color-white">อ.ปากพะยูน จ.พัทลุง</h4>
                  </div>
                </div>
              </div>
              <div class="swiper-slide" data-val="1">
                <div class="clip">
                  <div
                    class="bg bg-bg-chrome act img_hight"
                    style="background-image: url(images/baner/2.jpg)"
                  >
                    <h4 class="color-white">บ้านปราสาท ตำบลระแงง</h4>
                    <h4 class="color-white">อ.ศีขรภูมิ จ.สุรินทร์</h4>
                  </div>
                </div>
              </div>
              <div class="swiper-slide" data-val="2">
                <div class="clip">
                  <div
                    class="bg bg-bg-chrome act img_hight"
                    style="background-image: url(images/baner/จันทบุรี.jpg)"
                  >
                    <h4 class="color-white">วัดโรมัน ตำบลจันทนิมิต</h4>
                    <h4 class="color-white">อ.เมืองจันทบุรี จ.จันทบุรี</h4>
                  </div>
                </div>
              </div>
              <div class="swiper-slide" data-val="3">
                <div class="clip">
                  <div
                    class="bg bg-bg-chrome act img_hight"
                    style="background-image: url(images/baner/ชุมพร.jpg)"
                  >
                    <h4 class="color-white">บ้านถ้ำสิงห์ ตำบลถ้ำสิงห์</h4>
                    <h4 class="color-white">อ.เมืองถ้ำสิงห์ จ.ชุมพร</h4>
                  </div>
                </div>
              </div>
              <div class="swiper-slide" data-val="4">
                <div class="clip">
                  <div
                    class="bg bg-bg-chrome act img_hight"
                    style="background-image: url(images/baner/นครนายก.jpg)"
                  >
                    <h4 class="color-white">
                      ชมรมล่องแก่งและผจญภัย ตำบลนาหินลาด
                    </h4>
                    <h4 class="color-white">อ.ปากพลี จ.นครนายก</h4>
                  </div>
                </div>
              </div>
              <div class="swiper-slide" data-val="5">
                <div class="clip">
                  <div
                    class="bg bg-bg-chrome act img_hight"
                    style="background-image: url(images/baner/ลำพูน.jpg)"
                  >
                    <h4 class="color-white">บ้านป่าป๋วย ตำบลบ้านโฮ่ง</h4>
                    <h4 class="color-white">อ.บ้านโฮ่ง จ.ลําพูน</h4>
                  </div>
                </div>
              </div>
            </div>

            <div class="vertical-align">
              <div class="container-box">
                <div class="row">
                  <div class="col-md-6">
                    <div class="col-md-1"></div>
                    <div class="col-md-10">
                      <div>
                        <div class="col-md-1"></div>
                        <div class="col-md-10 bg-color">
                          <!-- <div class="col-md-1"></div> -->
                          <div class="col-md-12">
                            <form @submit.prevent="onSubmit">
                              <div>
                                <div class="form-block clearfix"></div>
                                <div class="col-xs-12 col-sm-12">
                                  <div class="">
                                    <h1
                                      class="
                                        ff_title
                                        letter-spacing
                                        underline
                                        text-spac1
                                        text1
                                      "
                                    >
                                      วางแผน
                                    </h1>
                                    <h1
                                      class="
                                        ff_title
                                        letter-spacing
                                        h1-center
                                        text-spac2
                                      "
                                    >
                                      การเดินทาง
                                    </h1>
                                    <h2
                                      class="
                                        ff_title
                                        letter-spacing
                                        center
                                        text-spac-under
                                      "
                                    >
                                      Travel Planning
                                    </h2>
                                  </div>
                                </div>
                                <div class="form-blocks clearfix"></div>

                                <div>
                                  <div class="col-md-1"></div>
                                  <div class="col-md-10">
                                    <div class="row">
                                      <div class="col-xs-12 col-sm-12">
                                        <div class="clearfix">
                                          <div
                                            class="
                                              form-label
                                              color-white
                                              letter-spacing
                                            "
                                          >
                                            <h3 class="letter-spacing">
                                              จุดเริ่มต้น
                                            </h3>
                                          </div>
                                          <div
                                            class="
                                              drop-wrap drop-wrap-s-3
                                              input
                                            "
                                          >
                                            <select
                                              class="drop fontstyle"
                                              v-model="startpoint"
                                              required
                                            >
                                              <option
                                                class="color-tx fontstyle"
                                                v-for="provinces in province"
                                                :key="provinces.province_id"
                                                :value="provinces.province_id"
                                              >
                                                {{ provinces.province_name }}
                                              </option>
                                            </select>
                                          </div>
                                        </div>
                                      </div>
                                      <div class="form-blocks clearfix"></div>
                                      <div class="col-xs-12 col-sm-12">
                                        <div class="clearfix">
                                          <div
                                            class="
                                              form-label
                                              color-white
                                              letter-spacing
                                            "
                                          >
                                            <h3 class="letter-spacing">
                                              จุดสิ้นสุด
                                            </h3>
                                          </div>
                                          <div
                                            class="
                                              drop-wrap drop-wrap-s-3
                                              input
                                            "
                                          >
                                            <select
                                              class="drop fontstyle"
                                              v-model="endpoint"
                                              required
                                            >
                                              <option
                                                class="color-tx fontstyle"
                                                v-for="provinces in province"
                                                :key="provinces.province_id"
                                                :value="provinces.province_id"
                                              >
                                                {{ provinces.province_name }}
                                              </option>
                                            </select>
                                          </div>
                                        </div>
                                      </div>
                                      <div class="form-blocks clearfix"></div>
                                      <div class="col-xs-12 col-sm-12">
                                        <div
                                          class="form-blocks clearfix center"
                                        >
                                          <button
                                            type="submit"
                                            class="c-button hv-transparent"
                                          >
                                            <spen>ตกลง</spen>
                                          </button>
                                        </div>
                                      </div>
                                      <div class="col-xs-12 col-sm-12">
                                        <div class="form-block clearfix">
                                          <p class="center">
                                            "ช่วยคำนวณค่าใช้จ่าย
                                            และวางแผนการเดินทาง"
                                          </p>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                  <div class="col-md-1"></div>
                                </div>
                              </div>
                            </form>
                          </div>
                          <!-- <div class="col-md-1"></div> -->
                        </div>
                      </div>
                      <div class="col-md-1"></div>
                    </div>
                    <div class="col-md-1"></div>
                  </div>
                  <div class="col-md-6"></div>
                </div>
              </div>
            </div>

            <div class="pagination pagination-right-2 poin-style-1"></div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { onMounted, ref } from "vue";
import axios from "axios";
import { BASE_API_URL } from "../../../constants";

export default {
  name: "FormIndexPage",
  setup() {
    const startpoint = ref("");

    const endpoint = ref("");

    const onSubmit = async () => {
      Promise.all([
        fetch("https://api.trinitytrip.com/api/plan/province"),
      ]).then(async ([response1]) => {
        const responseData1 = await response1.json();

        const province = responseData1.data;

        // console.log(province);
        province.forEach(function (id) {
          if (id.province_id == startpoint.value) {
            const startpointlatlong = [];
            startpointlatlong.push(id.province_latitude);
            startpointlatlong.push(id.province_longitude);
            sessionStorage.setItem(
              "startpointlatlong",
              JSON.stringify(startpointlatlong)
            );
          }
          if (id.province_id == endpoint.value) {
            const endpointlatlong = [];
            endpointlatlong.push(id.province_latitude);
            endpointlatlong.push(id.province_longitude);
            sessionStorage.setItem(
              "endpointlatlong",
              JSON.stringify(endpointlatlong)
            );
          }
          window.location = "formCreate";
        });
      });

      sessionStorage.setItem("startpoint", startpoint.value);
      sessionStorage.setItem("endpoint", endpoint.value);

      sessionStorage.removeItem("activitys");
      sessionStorage.removeItem("hotels");
      sessionStorage.removeItem("homestays");
      sessionStorage.removeItem("restaurants");
      sessionStorage.removeItem("timeline");
      sessionStorage.removeItem("createtrip");
      sessionStorage.removeItem("plantrip_name");
      sessionStorage.removeItem("startdate");
      sessionStorage.removeItem("enddate");
      sessionStorage.removeItem("budget");

      /*  try {
        const response = await axios.post(`${BASE_API_URL}`, {
         
          startpoint: startpoint.value,
          endpoint: endpoint.value,
          startdate: startdate.value,
          enddate: enddate.value,
          budget: budget.value,
          number: number.value,
         
        });

        localStorage.setItem("token", JSON.stringify(response.data));
        alert(response.data.message);
      } catch (error) {
        alert(JSON.stringify(error.response.data.errors.name));
      }  */
    };

    const community = ref([]);

    const province = ref([]);

    const getData = async () => {
      const responses = await axios.get(`${BASE_API_URL}/plan/community`);
      community.value = responses.data.data;

      const responseprovince = await axios.get(`${BASE_API_URL}/plan/province`);
      province.value = responseprovince.data.data;
    };

    onMounted(() => {
      getData();
    });

    return {
      onSubmit,
      startpoint,
      endpoint,
      community,
      province,
    };
  },
};
</script>

<style scoped>
.img_hight {
  height: 800px;
}
.drop {
  font-size: 16px;
  color: black;
}
.form-block {
  margin-bottom: 46px;
}
.form-blocks {
  margin-bottom: 20px;
}
.center {
  text-align: center;
}
.text1 {
  line-height: 0.7;
}
.text-spac1 {
  text-indent: 40px;
}
.text-spac2 {
  text-indent: 60px;
}
.text-spac-under {
  text-indent: 120px;
}
.blocks {
  border-bottom: 20px;
}

.top-baner {
  height: 100vh;
}
.color-tx {
  color: black;
}
.input {
  background-color: rgba(255, 255, 255, 0.61);
}
.bg-color {
  background-color: rgba(255, 255, 255, 0.774);
  border-radius: 11%;

  width: 100%;
  height: 100%;
}
spen {
  font-size: 200%;
  font-weight: initial;
}
p {
  font-weight: initial;
  color: rgb(117, 38, 25);
  font-size: 130%;
}
h1 {
  font-style: oblique;
  color: rgb(47, 94, 76);
  letter-spacing: 0;
}
.h1-center {
  color: rgb(161, 113, 11);
  text-align: center;
}
h2 {
  font-style: oblique;
  font-family: "Dancing Script", cursive;
  color: rgb(56, 117, 94);
  letter-spacing: 0;
  text-align: right;
  text-transform: none;
  font-size: 240%;
}
h3 {
  font-weight: 500;
  color: rgb(117, 38, 25);
  letter-spacing: 0;
}
h4 {
  font-size: 30px;
  letter-spacing: 0;
  line-height: 2.063rem;
  text-align: right;
  font-style: italic;
  text-shadow: black 0.1em 0.1em 0.2em;
  margin-top: 20px;
  margin-right: 20px;
}
button {
  color: white;
  background-color: rgb(117, 38, 25);
}
.underline {
  width: 100%;
}
.underline:after {
  background-color: rgb(117, 38, 25);
}
.drop-wrap-s-3 {
  border-radius: 15px;
  border: 3px solid rgb(138, 58, 45);
}
.c-button {
  border-radius: 15px;
}
option {
  color: #000;
}
.fontstyle {
  font-family: "Prompt", sans-serif;
}
@media screen and (max-width: 600px) {
  .text-spac1 {
    text-indent: 0px;
  }
  .text-spac2 {
    text-indent: 0px;
  }
  .text-spac-under {
    text-indent: 0px;
  }
  .bg.bg-bg-chrome {
    width: 100%;
    height: 100%;
  }
  .swiper-container {
    width: 100%;
    height: 57rem;
  }
}
</style>
