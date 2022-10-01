<template>
  <div class="tab-info active">
    <div
      v-for="items in BusinessKnowhowDetail"
      v-bind:key="items.bussiness_knowhow_id"
    >
      <div class="row" v-show="items.create_by == user_name">
        <div>
          <h3 class="text-letter fontstyle" id="page-detail">ความรู้</h3>
          <!---------------------------------- innovation ------------------------------------>
          <div>
            <hr />

            <h3 class="text-letter fontstyle" id="page-detail">
              <span class="text-letter fontstyle">ชื่อ : </span
              >{{ items.bussiness_knowhow_name }}
            </h3>

            <img
              class="img-know"
              :src="items.bussiness_knowhow_image_cover_link"
              alt=""
            />

            <h3 class="text-letter fontstyle" id="page-detail">รายละเอียด</h3>
            <div class="text-route">
              <p
                class="f-14 grid-hidden"
                v-html="items.bussiness_knowhow_detail"
              ></p>
            </div>
            <!-- <h3
              class="text-letter fontstyle text_detail"
              id="page-detail"
              v-html="items.bussiness_knowhow_detail"
            ></h3> -->

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
          <!---------------------------------- innovation ------------------------------------>
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
  name: "TabBusinessKnowhow",
  props: {
    user_name: String,
  },

  setup() {
    const BusinessKnowhowDetail = ref([]);

    let id = window.location.search;
    id = id.split("=");
    id = id[1];

    const vdo = ref([]);

    let linkvdo = "";
    const changLinkvdo = (linkvdo) => {
      if (linkvdo != null) {
        if (linkvdo.includes("https://www.youtube.com/watch?v=")) {
          vdo.value = linkvdo.slice(32);
        } else if (linkvdo.includes("https://youtu.be/")) {
          vdo.value = linkvdo.slice(17);
        } else if (linkvdo.includes("https://www.youtube.com/embed/")) {
          vdo.value = linkvdo.slice(30);
        }
      }
    };

    const getData = async () => {
      const responseBusinessKnowhowDetail = await axios.get(
        `${BASE_API_URL}/businesstourism/knowhow`
      );
      BusinessKnowhowDetail.value = responseBusinessKnowhowDetail.data.data;
      linkvdo =
        responseBusinessKnowhowDetail.data.data[0].bussiness_knowhow_vdo;
      changLinkvdo(linkvdo);
    };

    onMounted(() => {
      getData();
    });

    return { BusinessKnowhowDetail, id, linkvdo, vdo };
  },
};
</script>

<style scoped>
.text-route p {
  color: rgb(0, 0, 0);
  font-size: 14px;
  letter-spacing: 0px;
}
.text_detail {
  font-size: 14px;
  line-height: 1.363rem;
  font-weight: 500;
  text-transform: capitalize;
  letter-spacing: 0px;
  color: rgb(0, 0, 0);
}
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
