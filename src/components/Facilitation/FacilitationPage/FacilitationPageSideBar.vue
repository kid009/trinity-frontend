<template>
  <div class="col-xs-12 col-sm-4 col-md-3">
    <div class="sidebar bg-white clearfix">
      <SideSearch
        msgplace="พิมพ์สิ่งอำนวยความสะดวกที่ต้องการค้นหา"
        namepage="facilitationindexpage"
        page="1"
      />
      <div class="sidebar-block">
        <h4
          id="letter-product"
          class="sidebar-title color-dark-2 letter-spacing"
        >
          หมวดหมู่อำนวยความสะดวก
        </h4>
        <ul class="sidebar-category color-4">
          <li class="active">
            <a
              class="cat-drop"
              @click="on_click(1, 0, 0, 'facilitationindexpage')"
              id="letter-travel"
            >
              ทั้งหมด
            </a>
          </li>

          <li>
            <a
              @click="on_click('hotel', 0, 0)"
              class="cat-drop"
              id="letter-travel"
              >โรงแรม
            </a>
            <ul></ul>
          </li>

          <li>
            <a
              @click="on_click('homestay', 0, 0)"
              class="cat-drop"
              id="letter-travel"
              >รีสอร์ท
            </a>
            <ul></ul>
          </li>

          <li>
            <a
              @click="on_click('restaurant', 0, 0)"
              class="cat-drop"
              id="letter-travel"
              >ร้านอาหาร
            </a>
            <ul></ul>
          </li>

          <li>
            <a
              @click="on_click('poi', 0, 0)"
              class="cat-drop"
              id="letter-travel"
              >สถานที่บริการ
            </a>
            <ul></ul>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import SideSearch from "../../SideSearch.vue";

export default {
  name: "FacilitationPageSideBar",
  components: {
    SideSearch,
  },
  setup() {
    const on_click = (page, id) => {
      window.location =
        "facilitationindexpage?page=" + page + "&group=0&id=" + id;
    };

    return {
      on_click,
    };
  },
};
</script>
<style scoped>
.img-size {
  height: 250px;
}
</style>
<style>
.letter-layout {
  letter-spacing: 0;
}

.border-grid {
  border-radius: 3px;
  padding: 10px;
  width: 100%;
  height: 500px;
}
</style>
