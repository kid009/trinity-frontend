<template>
  <div>
    <Banner msg="ที่พัก" img="images/travel.jpg" />
    <div class="list-wrapper bg-grey-2">
      <div class="container box">
        <div class="row">
          <RoomsSideBar />
          <div class="col-xs-12 col-sm-8 col-md-9">
            <div class="grid-content clearfix">
              <!-- <RoomsGrid /> -->
              <div v-if="page == 'hotel'">
                <HotelGrid />
              </div>
              <div v-else-if="page == 'business'">
                <BusinessHotelGrid />
              </div>
              <div v-else-if="page == 'homestay'">
                <HomeStayGrid />
              </div>
              <div v-else>
                <HotelGrid />
                <BusinessHotelGrid />
                <HomeStayGrid />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Banner from "../../components/Banner.vue";
import RoomsSideBar from "../../components/Facilitation/Rooms/RoomsSideBar.vue";
// import RoomsGrid from "../../components/Facilitation/Rooms/RoomsGrid.vue";
import HotelGrid from "../../components/Facilitation/Rooms/HotelGrid.vue";
import HomeStayGrid from "../../components/Facilitation/Rooms/HomeStayGrid.vue";
import BusinessHotelGrid from "../../components/Facilitation/Rooms/BusinessHotelGrid.vue";

export default {
  name: "RoomsIndexPage",
  components: {
    Banner,
    RoomsSideBar,
    HotelGrid,
    HomeStayGrid,
    BusinessHotelGrid,
    // RoomsGrid,
  },
  setup() {
    let page = window.location.search;
    page = page.split("=");
    page = page[1];
    page = page.substring(0, page.length - 6);

    let group = window.location.search;
    group = group.split("=");
    group = group[2];
    group = group.substring(0, group.length - 3);

    let id = window.location.search;
    id = id.split("=");
    id = id[3];

    return { page, group, id };
  },
};
</script>

<style></style>
