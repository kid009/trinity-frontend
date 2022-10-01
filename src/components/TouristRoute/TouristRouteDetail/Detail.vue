<template>
  <div class="route-activity">
    <div class="sidebar-route">
      <h3>เส้นทางท่องเที่ยว</h3>
      <div
        class="select-route"
        v-for="items in subRoute"
        v-bind:key="items.tourism_sub_route_id"
      >
        <button
          @click="
            changActivity(
              items.tourism_main_route_id,
              items.tourism_sub_route_id
            )
          "
        >
          {{ items.tourism_sub_route_name }}
        </button>
        <br />
      </div>
    </div>
    <div class="">
      <div class="btn-route">
        <button @click="changeTab(1)">กิจกรรมบนเส้นทาง</button>
        <button @click="changeTab(2)">แผนที่กิจกรรม</button>
      </div>
      <div v-show="Tab == 1">
        <Tab1 />
      </div>
      <div v-show="Tab == 2"><Map /></div>
    </div>
  </div>
  <!-- <div class="col-xs-12 col-md-6">
    <div class="detail-header style-2">
      <div class="detail-content-block">
        <div class="simple-tab color-1 tab-wrapper">
          <div class="tab-nav-wrapper">
            <div class="nav-tab clearfix"> -->
  <!-- <div class="nav-tab-item active">หน้า1</div>
                    <div class="nav-tab-item">หน้า2</div>
                    <div class="nav-tab-item">หน้า3</div>
                    <div class="nav-tab-item">หน้า4</div>
                    <div class="nav-tab-item">หน้า5</div> -->
  <!-- </div>
          </div>
          <div class="tabs-content clearfix">
            <div class="tab-info active">
              <Tab1 /> -->

  <!-- <h5 class="line">.</h5> -->
  <!-- </div> -->
  <!-- <div class="tab-info">
                    <h5 style="color: #f5f5f5"></h5>
                  </div>
                  <div class="tab-info">
                    <h5 style="color: #f5f5f5">.</h5>
                  </div>
                  <div class="tab-info">
                    <h5 style="color: #f5f5f5">.</h5>
                  </div>
                  <div class="tab-info">
                    <h5 style="color: #f5f5f5">.</h5>
                  </div> -->
  <!-- </div>
        </div>
      </div>
    </div> -->
  <!-- </div> -->
</template>

<script>
import Tab1 from "./Tab1.vue";
import Map from "./Map.vue";
import { onMounted, ref } from "vue";
import axios from "axios";
import { BASE_API_URL } from "../../../constants";
export default {
  name: "Detail",
  components: {
    Tab1,
    Map,
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

    const Tab = ref("1");
    Tab.value = sessionStorage.getItem("Tab");

    if (Tab.value == null) {
      Tab.value = 1;
    }

    const getData = async () => {
      const response = await axios.get(
        `${BASE_API_URL}/tourism-route/subRoute/` + group
      );
      subRoute.value = response.data.data;
      const responseMain = await axios.get(
        `${BASE_API_URL}/tourism-route/mainRoute`
      );
      mainName.value = responseMain.data.data.data;
    };
    const changeTab = (Tab) => {
      sessionStorage.setItem("Tab", Tab);
      location.reload();
    };
    function changActivity(group, id) {
      window.location =
        "TouristRouteDetail?page=" + 1 + "&group=" + group + "&id=" + id;
    }

    onMounted(() => {
      getData();
    });

    return {
      subRoute,
      changActivity,
      page,
      group,
      id,
      mainName,
      changeTab,
      Tab,
    };
  },
};
</script>

<style scoped>
.route-activity {
  display: grid;
  grid-template-columns: 25% 75%;
  column-gap: 20px;
  margin: 20px;
}
.sidebar-route {
  text-align: start;
  border-right: 1px solid #b9b9b9;
}
.sidebar-route h3 {
  letter-spacing: 0px;
  color: #585858;
}
.select-route {
  margin: 22px 10px 10px 0px;
}
.select-route button {
  margin: 5px 0px;
  background: #337ab7;
  width: 100%;
  text-align: start;
  border-radius: 5px;
  color: white;
  padding: 10px 8px;
  font-size: smaller;
}
.btn-route {
  color: rgb(144, 144, 144);
}
.btn-route button {
  background: #337ab7;
  border-radius: 5px;
  padding: 5px 10px;
  font-size: 18px;
  color: white;
  margin-right: 5px;
}
@media only screen and (max-width: 480px) {
  .route-activity {
    grid-template-columns: 100%;
  }
}
</style>
