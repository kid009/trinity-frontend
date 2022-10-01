<template>
  <div class="col-xs-12 col-sm-8 col-md-9">
    <div class="grid-content clearfix">
      <!----------------------- hotel ------------------------------------------------------------->
      <div class="container box">
        <div class="row scrollbar" id="style-1">
          <div v-if="group == 0"><h3 class="letter-layout">โรงแรม</h3></div>
          <div>
            <div
              class="list-item-entry"
              v-for="items in hotel"
              v-bind:key="items.hotel_id"
            >
              <div class="hotel-item style-10 bg-white">
                <div class="table-view">
                  <a @click="on_click('hotel', items.hotel_id)">
                    <div class="radius-top">
                      <img
                        id="img-travel"
                        :src="items.hotel_image_cover"
                        alt=""
                      />
                    </div>
                    <div class="title">
                      <h4>{{ items.hotel_name }}</h4>
                    </div>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!--------------------------------- hotel -------------------------------------------------->

      <!----------------------- business ------------------------------------------------------------->
      <div class="container box">
        <div class="row scrollbar" id="style-1">
          <div v-if="group == 0">
            <h3 class="letter-layout">โรงแรมธุรกิจ</h3>
          </div>
          <div>
            <div
              class="list-item-entry"
              v-for="items in business"
              v-bind:key="items.bussiness_id"
            >
              <div class="hotel-item style-10 bg-white">
                <div class="table-view">
                  <a @click="on_click('bussiness', items.bussiness_id)">
                    <div class="radius-top">
                      <img
                        id="img-travel"
                        :src="items.bussiness_image_cover"
                        alt=""
                      />
                    </div>
                    <div class="title">
                      <h4>{{ items.bussiness_name }}</h4>
                    </div>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!--------------------------------- business -------------------------------------------------->

      <!----------------------- homestay ------------------------------------------------------------->
      <div class="container box">
        <div class="row scrollbar" id="style-1">
          <div v-if="group == 0"><h3 class="letter-layout">รีสอร์ท</h3></div>
          <div>
            <div
              class="list-item-entry"
              v-for="items in homestay"
              v-bind:key="items.homestay_id"
            >
              <div class="hotel-item style-10 bg-white">
                <div class="table-view">
                  <a @click="on_click('homestay', items.homestay_id)">
                    <div class="radius-top">
                      <img
                        id="img-travel"
                        :src="items.homestay_image_cover"
                        alt=""
                      />
                    </div>
                    <div class="title">
                      <h4>{{ items.homestay_name }}</h4>
                    </div>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!--------------------------------- homestay -------------------------------------------------->
    </div>
  </div>
</template>

<script>
import { onMounted, ref } from "vue";
import axios from "axios";
import { BASE_API_URL } from "../../../constants";

export default {
  name: "RoomsGrid",
  setup() {
    let page = window.location.search.substr(6, 1);

    let group = window.location.search;
    group = group.split("=");
    group = group[2];
    group = group.substring(0, group.length - 3);

    let id = window.location.search;
    id = id.split("=");
    id = id[3];

    const hotel = ref([]);
    const business = ref([]);
    const homestay = ref([]);

    const getData = async () => {
      if (id == 0 && group == 0) {
        const responsehotel = await axios.get(
          `${BASE_API_URL}/accommodation/hotel?page=` + page + "&group=0&id=0"
        );
        hotel.value = responsehotel.data.data;

        const responsebusiness = await axios.get(
          `${BASE_API_URL}/accommodation/business?page=` +
            page +
            "&group=0&id=0"
        );
        business.value = responsebusiness.data.data;

        const responsehomestay = await axios.get(
          `${BASE_API_URL}/accommodation/homestay?page=` +
            page +
            "&group=0&id=0"
        );
        homestay.value = responsehomestay.data.data;
      } else if (group != 0 && id == 0) {
        const responsehotel = await axios.get(
          `${BASE_API_URL}/accommodation/hotel?page= ` +
            page +
            "&group=" +
            group +
            "&id=0"
        );
        hotel.value = responsehotel.data.data;

        const responsebusiness = await axios.get(
          `${BASE_API_URL}/accommodation/business?page=` +
            page +
            "&group=" +
            group +
            "&id=0"
        );
        business.value = responsebusiness.data.data;

        const responsehomestay = await axios.get(
          `${BASE_API_URL}/accommodation/homestay?page=` +
            page +
            "&group=" +
            group +
            "&id=0"
        );
        homestay.value = responsehomestay.data.data;
      } else {
        const responsehotel = await axios.get(
          `${BASE_API_URL}/accommodation/hotel?page=` +
            page +
            "&group=0&id=" +
            id
        );
        hotel.value = responsehotel.data.data;

        const responsebusiness = await axios.get(
          `${BASE_API_URL}/accommodation/business?page=` +
            page +
            "&group=0&id=" +
            id
        );
        business.value = responsebusiness.data.data;

        const responsehomestay = await axios.get(
          `${BASE_API_URL}/accommodation/homestay?page=` +
            page +
            "&group=0&id=" +
            id
        );
        homestay.value = responsehomestay.data.data;
      }
    };

    function on_click(page, id) {
      window.location =
        "facilitationdetailindexpage?page=" + page + "&group=0&id=" + id;

      //   window.location = "AccommodationDetail?page=" + 2 + "&group=" + group + "&id=" + id;

      //  window.location = "AccommodationDetail?page=" + 4 + "&group=" + group + "&id=" + id;
    }

    onMounted(() => {
      getData();
    });

    return { hotel, business, homestay, on_click, page, group, id };
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

/*------------SCROLL--BAR--------*/
.scrollbar {
  margin-left: 5px;
  float: left;
  height: 320px;
  width: inherit;

  background: #f8f8f8;
  overflow-y: scroll;
  margin-bottom: 25px;
}

.force-overflow {
  min-height: 450px;
}

#wrapper {
  text-align: center;
  width: 500px;
  margin: auto;
}

/* STYLE 1 */

#style-1::-webkit-scrollbar-track {
  border-radius: 10px;
  background-color: #f5f5f5;
}

#style-1::-webkit-scrollbar {
  width: 12px;
  background-color: #f5f5f5;
}

#style-1::-webkit-scrollbar-thumb {
  border-radius: 10px;

  background-color: #555;
}
</style>
