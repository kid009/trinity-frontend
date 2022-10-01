<template>
  <div class="sidebar-block">
    <!-- <h4 class="sidebar-title color-dark-2 letter-spacing">ค้นหา</h4> -->
    <div class="search-inputs">
      <!-- <div class="col-xs-12 col-sm-6 col-sm-offset-2"> -->
      <!-- <div class="form-block clearfix"> -->
      <div class="subscribe-form">
        <div class="input-style-1 b-50 color-3">
          <img src="img/search_icon_small_grey.png" alt="" />
          <input v-model="message" type="text" :placeholder="msgplace" />
        </div>
      </div>
      <!-- </div> -->
    </div>
    <div class="">
      <button
        type="submit"
        class="c-button b-40 bg-red-3 hv-red-3-o"
        @click="on_click(page, 0, message, namepage)"
      >
        <span>ค้นหา</span>
      </button>
    </div>
  </div>
</template>

<script>
import { ref } from "vue";
export default {
  name: "SideSearch",
  props: {
    msg: String,
    msgplace: String,
    img: String,
    page: String,
    namepage: String,
  },
  setup() {
    const message = ref();

    function on_click(page, group, id, namepage) {
      window.location =
        namepage + "?page=" + page + "&group=" + group + "&id=" + id;
    }

    return { on_click, message };
  },
};
</script>

<style scoped>
.c-button.b-40 {
  /* height: 40px;
    font-size: 10px;
    line-height: 36px;
    padding: 0 18px; */
  margin-top: 10px;
}
.input-style-1.b-50 input {
  font-size: 14px;
  height: 42px;
  /* padding: 0px 12px 0px 21px; */
  color: #000000;
  border: 1px solid #a6a6a6;
}
.sidebar-block {
  padding-bottom: 10px;
  border-bottom: 1px solid #ededed;
  margin-bottom: 10px;
}
@media screen and (max-width: 600px) {
  .c-button.b-40 {
    margin-top: 0px;
  }
  .search-inputs {
    margin-bottom: 0px;
  }
}
</style>
