<template>
  <div class="col-xs-12 col-sm-8 col-md-9">
    <div class="route-travel">
      <div class="big-header-route">
        <div v-for="item in mainName" v-bind:key="item.tourism_main_route_id">
          <h1 v-if="item.tourism_main_route_id == id">
            {{ item.tourism_main_route_name }}
          </h1>
        </div>
      </div>
      <div
        class="box-route"
        v-for="items in subRoute"
        v-bind:key="items.tourism_sub_route_id"
      >
        <div class="header-route">
          <h3>{{ items.tourism_sub_route_name }}</h3>
          <button
            type="button "
            @click="
              on_click(items.tourism_main_route_id, items.tourism_sub_route_id)
            "
          >
            กิจกรรมเพิ่มเติม
          </button>
        </div>
        <div class="grid-route">
          <div class="img-route">
            <img :src="items.tourism_sub_route_image_cover" alt="" />
          </div>
          <div class="text-route">
            <h4>รายละเอียด</h4>
            <p
              class="f-14 grid-hidden"
              v-html="items.tourism_sub_route_detail"
            ></p>
            <div class="contact">
              <h4>ผู้ดูแลเส้นทาง</h4>

              <h5>
                ชื่อผู้ติดต่อประสานงาน :
                <span v-html="items.tourism_sub_route_contact_name"></span>
              </h5>

              <h5>
                เบอร์โทร :
                <span v-html="items.tourism_sub_route_telephone"></span>
              </h5>
              <div class="icon-contact">
                <a target="_" :href="items.activity_line">
                  <img src="images/icon/line.png" alt=""
                /></a>

                <a target="_" :href="items.tourism_sub_route_facebook">
                  <img src="images/icon/facebook.png" alt=""
                /></a>

                <!-- <a target="_" :href="items.activity_instragram">
              <img src="images/product/instagrams.png" alt=""
            /></a> -->

                <a target="_" :href="items.tourism_sub_route_line">
                  <img src="images/product/link.png" alt=""
                /></a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <br />
    <Pagination />
  </div>
  <!-- <div class="col-xs-12 col-sm-8 col-md-9">
    <div class="list-content clearfix">
      <div
        class="list-item-entry"
        v-for="items in subRoute"
        v-bind:key="items.tourism_sub_route_id"
      >
        <div class="hotel-item style-3 bg-white">
          <div class="table-view">
            <div class="radius-top cell-view">
              <img :src="items.tourism_sub_route_image_cover" alt="" />
            </div>
            <div class="title hotel-middle clearfix cell-view">
              <h4>
                <b class="letter-text">{{ items.tourism_sub_route_name }}</b>
              </h4>

              <p
                class="f-14 grid-hidden"
                v-html="items.tourism_sub_route_detail"
              ></p>
            </div>
            <div class="title hotel-right clearfix cell-view">
              <button
                class="c-button b-40 bg-red-3 hv-red-3-o"
                type="button"
                @click="
                  on_click(
                    items.tourism_main_route_id,
                    items.tourism_sub_route_id
                  )
                "
              >
                เพิ่มเติม
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
    <Pagination />
  </div> -->
</template>

<script>
import Pagination from "../Pagination.vue";
import { onMounted, ref } from "vue";
import axios from "axios";
import { BASE_API_URL } from "../../../constants";

export default {
  name: "ListView",
  components: {
    Pagination,
  },
  setup() {
    const subRoute = ref([]);
    const mainName = ref([]);
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
        `${BASE_API_URL}/tourism-route/subRoute/` + id
      );
      subRoute.value = response.data.data;
      const responseMain = await axios.get(
        `${BASE_API_URL}/tourism-route/mainRoute`
      );
      mainName.value = responseMain.data.data.data;
    };

    function on_click(group, id) {
      window.location =
        "TouristRouteDetail?page=" + 1 + "&group=" + group + "&id=" + id;
    }

    onMounted(() => {
      getData();
    });

    return { subRoute, on_click, page, group, id, mainName };
  },
};
</script>

<style scoped>
.route-travel {
  margin-left: 0px;
}
.big-header-route {
  background: #2068b0;
  box-shadow: 0px 0px 10px #2d3e505c;
  border-radius: 10px;
}
.big-header-route h1 {
  padding: 20px;
  color: rgb(255, 255, 255);
  font-size: 30px;
  font-weight: 500;
  line-height: normal;
  letter-spacing: 0px;
}
.box-route {
  border: 1px solid #ddd;
  margin-top: 10px;
  box-shadow: 0px 0px 10px #2d3e505c;
  background: white;
  border-radius: 10px;
}
.header-route {
  background: #2068b012;
  border-radius: 10px 10px 0px 0px;
  display: grid;
  grid-template-columns: 80% 20%;
}
.header-route button {
  margin: 20px;
  background: #1f69b0;
  height: 40px;
  width: auto;
  border-radius: 10px;
  color: white;
  font-size: 12px;
}
.header-route h3 {
  letter-spacing: 0px;
  padding: 10px;
  font-weight: 500;
  font-size: 18px;
}
.grid-route {
  display: grid;
  grid-template-columns: 40% 60%;
}
.img-route {
  text-align: center;
  padding: 20px;
}
.img-route img {
  height: auto;
  width: 100%;
  border-radius: 20px;
}
.text-route {
  padding: 20px;
}
.text-route h4 {
  font-weight: 400;
}
.text-route p {
  color: rgb(81, 81, 81);
}

.activity-route {
  padding: 0px 20px 20px 20px;
}
.activity-route h4 {
  font-weight: 600;
}
.img-activity img {
  width: 60px;
  height: auto;
}
.contact {
  padding: 0px;
}
.contact h5 {
  line-height: 25px;
  color: #000000;
}
.contact h4 {
  margin: 10px 0px;
}
.contact span {
  font-weight: 100;
  color: black;
}
.icon-contact {
  text-align: start;
  margin-top: 10px;
}
.icon-contact img {
  margin-right: 10px;
  width: 30px;
  box-shadow: 1px 1px 0px #f8f8f8;
}
@media only screen and (max-width: 480px) {
  .grid-route {
    grid-template-columns: 100%;
  }
  .header-route {
    grid-template-columns: 100%;
  }
}
@media only screen and (max-width: 375px) {
}
@media only screen and (max-width: 320px) {
}
</style>
