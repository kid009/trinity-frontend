<template>
  <div class="tab-info">
    <div
      v-for="items in businessProductDetail"
      v-bind:key="items.bussiness_product_id"
    >
      <div class="row" v-show="items.create_by == user_name">
        <div>
          <h3 class="text-letter fontstyle" id="page-detail">
            ผลิตภัณฑ์ธุรกิจ
          </h3>
          <!---------------------------------- innovation ------------------------------------>
          <div>
            <hr />

            <h3 class="text-letter" id="page-detail">
              <span class="text-letter">ชื่อ : </span
              >{{ items.bussiness_product_name }}
            </h3>

            <img
              class="img-know"
              :src="items.bussiness_product_image_cover_link"
              alt=""
            />

            <h3 class="text-letter" id="page-detail">รายละเอียด</h3>
            <p
              class="text-size"
              id="page-detail"
              v-html="items.bussiness_product_detail"
            ></p>
          </div>
          <!---------------------------------- innovation ------------------------------------>
          <div style="text-align: center" v-show="vdo != ''">
            <hr />
            <h3 style="text-align: center" id="page-detail">วิดีโอแนะนำ</h3>

            <iframe
              :src="'https://www.youtube.com/embed/' + vdo"
              width="100%"
              height="315"
              controls
              autoplay
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { onMounted, ref } from "vue";
import axios from "axios";
import { BASE_API_URL } from "../../../../constants";

export default {
  name: "TabBusinessProduct",

  props: {
    user_name: String,
  },

  setup() {
    const businessProductDetail = ref([]);

    let id = window.location.search;
    id = id.split("=");
    id = id[1];

    const vdo = ref([]);

    let linkvdo = "";
    const changLinkvdo = (linkvdo) => {
      if (linkvdo.includes("https://www.youtube.com/watch?v=")) {
        vdo.value = linkvdo.slice(32);
      } else if (linkvdo.includes("https://youtu.be/")) {
        vdo.value = linkvdo.slice(17);
      } else if (linkvdo.includes("https://www.youtube.com/embed/")) {
        vdo.value = linkvdo.slice(30);
      }
    };

    const getData = async () => {
      const responsebusinessProductDetail = await axios.get(
        `${BASE_API_URL}/businesstourism/BusinessProduct?page=1&group=0&id=0`
      );
      businessProductDetail.value = responsebusinessProductDetail.data.data;
      linkvdo =
        responsebusinessProductDetail.data.data[0].bussiness_product_vdo;
      changLinkvdo(linkvdo);
    };

    onMounted(() => {
      getData();
    });

    return { businessProductDetail, id, linkvdo, vdo };
  },
};
</script>

<style scoped>
.img-know {
  width: 100%;
  max-width: 500px;
  height: 400px;
  display: block;
  margin: auto;
}
.text-letter {
  letter-spacing: 0;
  color: black;
}
.text-size {
  color: #6e6e6e;
  font-size: larger;
}
.acc-body {
  font-family: "Open Sans", sans-serif;
  font-size: 14px;
  line-height: 22px;
  font-weight: 400;
  color: #b9b9b9;
  padding: 20px;
}
</style>
