<template>
  <div class="col-xs-12 col-sm-8 col-md-9">
    <div class="list-header clearfix">
      <div class="grid-content clearfix">
        <div
          class="list-item-entry"
          v-for="items in mainRoute"
          v-bind:key="items.tourism_main_route_id"
        >
          <div v-if="group == 0">
            <div class="">
              <div class="">
                <div class="hotel-item style-10 bg-white">
                  <div class="table-view">
                    <!--------------------------------------------------- ---------------------------------------------->

                    <a
                      @click="
                        on_click(page, group, items.tourism_main_route_id)
                      "
                    >
                      <div class="radius-top">
                        <img :src="items.tourism_main_route_image" alt="" />
                      </div>
                      <div class="title">
                        <h4>
                          <b>{{
                            items.tourism_main_route_name.substring(0, 50)
                          }}</b>
                        </h4>
                      </div>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div v-else-if="items.tourism_route_group_id == group">
            <div class="">
              <div class="">
                <div class="hotel-item style-10 bg-white">
                  <div class="table-view">
                    <!--------------------------------------------------- ---------------------------------------------->

                    <a
                      @click="
                        on_click(page, group, items.tourism_main_route_id)
                      "
                    >
                      <div class="radius-top">
                        <img :src="items.tourism_main_route_image" alt="" />
                      </div>
                      <div class="title">
                        <h4>
                          <b>{{
                            items.tourism_main_route_name.substring(0, 50)
                          }}</b>
                        </h4>
                      </div>
                    </a>

                    <!--------------------------------------------------- ---------------------------------------------->
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div v-if="group.length > 1">
            <div class="">
              <div class="">
                <div class="hotel-item style-10 bg-white">
                  <div class="table-view">
                    <!--------------------------------------------------- ---------------------------------------------->

                    <a
                      @click="
                        on_click(page, group, items.tourism_main_route_id)
                      "
                    >
                      <div class="radius-top">
                        <img :src="items.tourism_main_route_image" alt="" />
                      </div>
                      <div class="title">
                        <h4>
                          <b>{{
                            items.tourism_main_route_name.substring(0, 50)
                          }}</b>
                        </h4>
                      </div>
                    </a>

                    <!--------------------------------------------------- ---------------------------------------------->
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- <Pagination /> -->
  </div>
</template>

<script>
// import Pagination from "./Pagination.vue";
import { onMounted, ref } from "vue";
import axios from "axios";
import { BASE_API_URL } from "../../constants";

export default {
  name: "GridMenu",
  components: {
    // Pagination,
  },
  setup() {
    const mainRoute = ref([]);

    let page = window.location.search.substr(6, 1);

    let group = window.location.search;
    group = group.split("=");
    group = group[2];
    group = group.substring(0, group.length - 3);

    let id = window.location.search;
    id = id.split("=");
    id = id[3];

    const getData = async () => {
      if (page == 1 && id == 0 && group == 0) {
        const response = await axios.get(
          `${BASE_API_URL}/tourism-route/mainRoute`
        );
        mainRoute.value = response.data.data.data;
      } else if (id != 0 && group == 0) {
        const response = await axios.get(
          `${BASE_API_URL}/tourism-route/mainRoute?name=` + id
        );
        mainRoute.value = response.data.data.data;
      } else if (page != 1 && id == 0) {
        const response = await axios.get(
          `${BASE_API_URL}/tourism-route/mainRoute?page=` + page
        );
        mainRoute.value = response.data.data.data;
      } else {
        const response = await axios.get(
          `${BASE_API_URL}/tourism-route/mainRoute?group=` + group
        );
        mainRoute.value = response.data.data.data;
      }
    };

    function on_click(page, group, id) {
      window.location =
        "TouristRouteSubRoute?page=" + page + "&group=" + group + "&id=" + id;
    }

    onMounted(() => {
      getData();
    });

    return { mainRoute, on_click, id, page, group };
  },
};
</script>

<style scoped>
.container-pad {
  margin-right: 80px;
  margin-left: 80px;
}
@media only screen and (max-width: 1024px) {
  .container-pad {
    margin-right: 5px;
    margin-left: 5px;
  }
}
.hotel-items {
  padding: 20px 0px 40px;
}
.padd-120 {
  padding-bottom: 20px;
}
.border {
  border: 1px solid #ffffff;

  width: 100%;

  background-color: #ffffff;
}

.hotel-item {
  background-color: white;
  box-shadow: 2px 0px 8px #22222275;
}
.hotel-item.style-7 h4 {
  height: 50px;
  letter-spacing: 0px;
  margin-bottom: 3px;
  color: #206ab0;
}
.hotel-item .title {
  position: relative;
  width: 100%;
  height: 130px;
  padding: 15px 15px 15px 15px;
  border: 1px solid #f7f7f7;
}
.hotel-item .title p {
  color: #bebebe;
  padding: 0px;
  font-size: 12px;
  line-height: 0px;
}
main {
  width: 100%;
  display: grid;
  /* Define Auto Row size */
  height: 50px;
  margin-top: 20px;
  /*Define our columns */
  grid-template-columns: 4fr 6fr;
  grid-gap: 0em;
}

article {
  color: black;
}
article img {
  padding-right: 2px;
}
article a {
  font-size: 13px;
  letter-spacing: 0px;
  font-weight: 400px;
}
article:nth-child(odd) {
  background-color: #55bae900;
}

article:nth-child(even) {
  background-color: #afbe2900;
  text-align: end;
}
.radius-top img {
  width: 100%;

  object-fit: cover;
  display: block;
  height: 200px;
}
@media only screen and(min-width: 1100px) {
  .radius-top img {
    height: 300px;
  }
}
</style>
