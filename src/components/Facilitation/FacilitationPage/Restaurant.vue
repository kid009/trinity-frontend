<template>
  <div>
    <div class="grid-content clearfix">
      <div class="container box">
        <div class="row scrollbar" id="style-1">
          <div><h3 class="letter-layout">ร้านอาหาร</h3></div>
          <div>
            <!----------------------- restaurants ------------------------------------------------------------->
            <div
              class="list-item-entry"
              v-for="items in restaurantGrid"
              v-bind:key="items.restaurant_id"
            >
              <div class="hotel-item style-10 bg-white">
                <div class="table-view">
                  <a @click="on_click('restaurant', items.restaurant_id)">
                    <div class="radius-top">
                      <img
                        id="img-travel"
                        :src="items.restaurant_image_cover"
                        alt=""
                      />
                    </div>
                    <div class="title">
                      <h4>{{ items.restaurant_name }}</h4>
                    </div>
                  </a>
                </div>
              </div>
            </div>
            <!--------------------------------- restaurants -------------------------------------------------->
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { onMounted, ref } from "vue";
import axios from "axios";
import { BASE_API_URL } from "../../../constants";

export default {
  name: "Restaurant",

  setup() {
    const restaurantGrid = ref([]);

    const getData = async () => {
      const response = await axios.get(
        `${BASE_API_URL}/accommodation/restaurant`
      );
      restaurantGrid.value = response.data.data;
      //console.log(response.data.data);
    };

    function on_click(page, id) {
      window.location =
        "facilitationdetailindexpage?page=" + page + "&group=0&id=" + id;
    }

    onMounted(() => {
      getData();
    });

    return { restaurantGrid, on_click };
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

#img-travel {
  width: auto;
  max-width: 250px;
  height: 200px;
  overflow: hidden;
  display: block;
  margin: auto;
}
</style>
