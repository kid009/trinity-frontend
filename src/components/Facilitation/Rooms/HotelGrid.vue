<template>
  <div class="container box" v-show="hotel[0] != null">
    <div class="row" id="style-1">
      <div v-if="group == 0">
        <h3 class="letter-layout">โรงแรม</h3>
      </div>
      <div class="scrollbar">
        <div
          class="list-item-entry"
          v-for="items in hotel"
          v-bind:key="items.hotel_id"
        >
          <div class="hotel-item style-10 bg-white">
            <div class="table-view">
           <a @click="on_click('hotel', items.hotel_id)">
                <div class="radius-top">
                  <img id="img-travel" :src="items.hotel_image_cover" alt="" />
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
</template>

<script>
import { onMounted, ref } from "vue";
import axios from "axios";
import { BASE_API_URL } from "../../../constants";

export default {
  name: "HotelGrid",
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

    const hotel = ref([]);

    const getData = async () => {
      const responsehotel = await axios.get(
        `${BASE_API_URL}/accommodation/hotel?page=1&group=0&id=` + id
      );
      hotel.value = responsehotel.data.data;
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

    return { hotel, on_click, page, group, id };
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
  width: 280px;
  transition: 0.6s;
}
.hotel-item:hover {
  transform: scale(1.1);
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
  display: flex;
  gap: 5px;
  border: 20px solid #f8f8f8;
  height: fit-content;
  overflow-x: auto;
  -ms-scroll-snap-type: x mandatory;
  scroll-snap-type: x mandatory;
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
#img-travel {
  width: auto;
  max-width: 250px;
  height: 200px;
  overflow: hidden;
  display: block;
  margin: auto;
}
.grid-content .list-item-entry {
  float: left;
  width: fit-content;
  padding-right: 15px;
  padding-left: 15px;
}
.letter-layout {
  letter-spacing: 0;
  padding: 20px;
}
.test {
  width: 500px;
  position: absolute;
  background: #555;
}
</style>
