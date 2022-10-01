<template>
  <div>
    <!-- TouristRoute/TouristRouteDetail/Tab1.vue -->
    <div
      class="grid-route-tab"
      v-for="items in activity"
      v-bind:key="items.activity_id"
    >
      <div class="img-details">
        <img :src="items.activity_image_cover" alt="" />
      </div>
      <div class="text-detail">
        <h3>{{ items.activity_name }}</h3>
        <p v-html="items.activity_duration_text"></p>
        <h4>
          สถานที่ :
          <strong>{{ items.activity_ }}</strong>
        </h4>
        <h4>
          ชุมชน :
          <strong>{{ items.community_name }}</strong>
        </h4>
        <h4>
          เวลาที่ใช้
          <strong>{{ items.activity_duration }}</strong
          >นาที
        </h4>
        <h4>
          ราคา
          <strong>{{ items.activity_period }}</strong>
          บาท
        </h4>
        <div class="btn-margin">
          <a class="btn-detail" @click="on_click(items.activity_id)"
            >เพิ่มเติม</a
          >
        </div>
      </div>
    </div>
    <!-- <div class="grid-content block-content type-2 clearfix">
   
      <div
        class="list-item-entry"
        v-for="items in activity"
        v-bind:key="items.activity_id"
      >
        <div class="hotel-item style-10 bg-white">
          <div class="table-view">
            <div class="radius-top cell-view">
              <img
                class="img-details"
                :src="items.activity_image_cover"
                alt=""
              />
            </div>
            <div class="title hotel-middle cell-view">
              <h4>
                <b>{{ items.activity_name }}</b>
              </h4>
              <p
                class="color-grey-3 list-hidden"
                v-html="items.activity_duration_text"
              ></p>
              <h5>
                สถานที่
                <strong class="color-red-3">{{ items.activity_ }}</strong>
              </h5>
              <h5>
                ชุมชน
                <strong class="color-red-3">{{ items.community_name }}</strong>
              </h5>
              <h5>
                เวลาที่ใช้
                <strong class="color-red-3">{{
                  items.activity_duration
                }}</strong
                >นาที
              </h5>
              <h5>
                ราคา
                <strong class="color-red-3">{{ items.activity_period }}</strong>
                บาท
              </h5>

              <a
                class="c-button bg-green hv-transparent fr"
                @click="on_click(items.activity_id)"
                >เพิ่มเติม</a
              > -->

    <!--  <p class="list-hidden">Book now and <span class="color-red-3">save 30%</span></p>
						          	  -->
    <!-- <div class="fi_block grid-hidden row row10">
                <div class="flight-icon col-xs-6 col10">
                  <img
                    class="fi_icon"
                    src="img/tour_list/flight_icon_2.png"
                    alt=""
                  />
                  <div class="fi_content">
                    <div class="fi_title color-dark-2">take off</div>
                    <div class="fi_text color-grey">
                      wed nov 13, 2013 7:50 am
                    </div>
                  </div>
                </div>
                <div class="flight-icon col-xs-6 col10">
                  <img
                    class="fi_icon"
                    src="img/tour_list/flight_icon_1.png"
                    alt=""
                  />
                  <div class="fi_content">
                    <div class="fi_title color-dark-2">take off</div>
                    <div class="fi_text color-grey">
                      wed nov 13, 2013 7:50 am
                    </div>
                  </div>
                </div>
              </div> -->
    <!--   <a href="#" class="c-button b-40 bg-red-3 hv-red-3-o">book now</a>
							            <a href="#" class="c-button b-40 color-grey-3 hv-o fr"><img src="img/flag_icon_grey.png" alt="">view more</a>
						           	-->
    <!-- </div>
            <div class="title hotel-right clearfix cell-view grid-hidden">
              <div class="hotel-right-text color-dark-2">one way flights</div>
              <div class="hotel-right-text color-dark-2">1 stop</div>
            </div>
          </div>
        </div>
      </div>
    </div> -->
  </div>
</template>

<script>
import { onMounted, ref } from "vue";
import axios from "axios";
import { BASE_API_URL } from "../../../constants";

export default {
  name: "Tab1",
  setup() {
    const activity = ref([]);

    let page = window.location.search.substr(6, 1);

    let group = window.location.search;
    group = group.split("=");
    group = group[2];
    group = group.substring(0, group.length - 3);

    let id = window.location.search;
    id = id.split("=");
    id = id[3];

    const getData = async () => {
      const response = await axios.get(
        `${BASE_API_URL}/tourism-route/activity/` + id
      );
      activity.value = response.data.data;
    };

    function on_click(id) {
      window.location =
        "ActivityDetailAll?page=" + 1 + "&group=" + 2 + "&id=" + id;
    }

    onMounted(() => {
      getData();
    });

    return { activity, on_click, page, group, id };
  },
};
</script>

<style scoped>
.grid-route-tab {
  display: grid;
  grid-template-columns: 40% 60%;
  -moz-column-gap: 20px;
  margin: 20px 0px;
  margin-right: 20px;
  background: white;
  padding: 20px 20px;
  column-gap: 20px;
  border: 1px solid #c6c6c67a;
  border-radius: 10px;
  box-shadow: 0px 0px 3px #ddd;
}
.img-details img {
  width: 100%;
  height: auto;
  border-radius: 10px;
}
.text-detail {
  padding-right: 10px;
}
.text-detail h3 {
  letter-spacing: 0px;
  font-weight: 500;
}
.text-detail p {
  color: #6a6a6a;
}
.text-detail h4 {
  color: #6a6a6a;
}
.text-detail strong {
  color: #000;
  font-weight: 500;
}
.btn-margin {
  margin: 10px 0px;
}
.btn-detail {
  color: white;
  background: #337ab7;
  padding: 0px 20px;

  border-radius: 10px;
}
@media only screen and (max-width: 480px) {
  .grid-route-tab {
    grid-template-columns: 100%;
  }
}
</style>
