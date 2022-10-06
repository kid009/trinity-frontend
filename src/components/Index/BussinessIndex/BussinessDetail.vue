<template>
  <div class="container">
    <div class="header-text">
      <h2 class="letter-layout">การบริการของธุรกิจ</h2>
    </div>
  </div>
  <div class="container">
    <div
      class="row isotope-container"
      style="position: relative; height: 546px"
    >
      <div class="grid-sizer col-mob-12 col-xs-6 col-sm-3"></div>

      <div
        class="item col-xs-12 col-md-6"
        style="position: absolute; left: 585px; top: 0px"
      >
        <div v-for="items in service" v-bind:key="items.bussiness_service_id">
          <div v-show="items.bussiness_service_id == 9">
            <div
              class="
                tour-block tour-block-s-2
                radius-5
                hover-blue
                background-block
              "
              :src="items.bussiness_service_image_cover_link"
            >
              <img
                class="
                  img-serknows
                  tour-block tour-block-s-2
                  radius-5
                  hover-blue
                  background-block
                "
                :src="items.bussiness_service_image_cover_link"
                alt=""
              />

              <div class="tour-layer delay-1"></div>
              <img
                class="center-image"
                :src="items.bussiness_service_image_cover_link"
                alt=""
                style="display: none"
              />
              <div class="tour-caption">
                <div class="vertical-align">
                  <h3 class="letter-layout">การบริการ</h3>
                  <h3 class="letter-layout">
                    {{ items.bussiness_service_name }}
                  </h3>

                  <p
                    class="color-white-light"
                    v-html="items.bussiness_service_detail"
                  ></p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div
        class="item col-xs-12 col-md-6"
        style="position: absolute; left: 585px; top: 0px"
      >
        <div v-for="items in knowhow" v-bind:key="items.bussiness_knowhow_id">
          <div v-show="items.bussiness_knowhow_id == 8">
            <div
              class="
                tour-block tour-block-s-2
                radius-5
                hover-blue
                background-block
              "
              :src="items.bussiness_knowhow_image_cover_link"
            >
              <img
                class="
                  img-serknows
                  tour-block tour-block-s-2
                  radius-5
                  hover-blue
                  background-block
                "
                :src="items.bussiness_knowhow_image_cover_link"
                alt=""
              />

              <div class="tour-layer delay-1"></div>
              <img
                class="center-image"
                :src="items.bussiness_knowhow_image_cover_link"
                alt=""
                style="display: none"
              />
              <div class="tour-caption">
                <div class="vertical-align">
                  <h3 class="letter-layout">องค์ความรู้</h3>
                  <h3 class="letter-layout">
                    {{ items.bussiness_knowhow_name }}
                  </h3>

                  <p
                    class="color-white-light"
                    v-html="items.bussiness_knowhow_detail"
                  ></p>
                </div>
              </div>
            </div>
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
  name: "BussinessDetail",

  setup() {
    const knowhow = ref([]);
    const service = ref([]);

    const getData = async () => {
      const response = await axios.get(
        `${BASE_API_URL}/businesstourism/knowhow`
      );

      const responses = await axios.get(
        `${BASE_API_URL}/businesstourism/service`
      );

      knowhow.value = response.data.data;

      service.value = responses.data.data;

      //console.log(response.data.data);
    };

    onMounted(() => {
      getData();
    });

    return { knowhow, service };
  },
};
</script>

<style scoped>
.letter-layout {
  letter-spacing: 0;
}
.header-text {
  padding-top: 110px;
  padding-bottom: 65px;
  text-align: center;
}
.content-box {
  padding-top: 20px;
}
.img-serknows {
  height: 350px;
  width: 560px;
  display: block;
  margin: auto;
}
</style>
