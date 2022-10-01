<template>
  <div class="col-xs-12 col-sm-4 col-md-3">
    <div class="sidebar bg-white clearfix">
      <SideSearch
        msgplace="พิมพ์ที่พักที่ต้องการค้นหา"
        namepage="roomsindexpage"
        page="1"
      />
      <div class="sidebar-block">
        <h4
          id="letter-product"
          class="sidebar-title color-dark-2 letter-spacing"
        >
          หมวดหมู่ที่พัก
        </h4>
        <ul class="sidebar-category color-4">
          <li class="active">
            <a
              class="cat-drop"
              @click="on_click(1, 0, 0, 'roomsindexpage')"
              id="letter-travel"
            >
              ทั้งหมด
            </a>
          </li>

          <li>
            <a
              @click="on_click('hotel', 0, 0, 'roomsindexpage')"
              class="cat-drop"
              id="letter-travel"
              >โรงแรม
            </a>
            <ul></ul>
          </li>

          <li>
            <a
              @click="on_click('business', 0, 0, 'roomsindexpage')"
              class="cat-drop"
              id="letter-travel"
              >โรงแรมธุรกิจ
            </a>
            <ul></ul>
          </li>

          <li>
            <a
              @click="on_click('homestay', 0, 0, 'roomsindexpage')"
              class="cat-drop"
              id="letter-travel"
              >รีสอร์ท
            </a>
            <ul></ul>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import { onMounted } from "vue";
import SideSearch from "../../SideSearch.vue";
export default {
  name: "RoomsSideBar",
  components: {
    SideSearch,
  },
  setup() {
    function on_click(page, group, id, name) {
      window.location =
        name + "?page=" + page + "&group=" + group + "&id=" + id;
    }

    onMounted(() => {});

    return {
      on_click,
    };
  },
};
</script>

<style></style>
