<template>
  <div class="">
    <!-- <div class="acc-body">
      <div class="acc-body-block bg_tab">
        <div class="row" v-for="items in knowhow" v-bind:key="items.knowhow_id">
          <div v-show="items.knowhow_name != ''">
            <h2 class="text-letter fontstyle">
              ความรู้: {{ items.knowhow_name }}
            </h2>
            
            <div>
              <hr />
             
              <img
                v-if="
                  items.knowhow_image_cover_link ==
                  'https://trinitytrip.com/image/community/1/knowhow/'
                "
                id="img-more-product"
                src="images/img-non/no_picture.jpg"
                alt=""
              />
              <img
                v-else
                class="img-know"
                :src="items.knowhow_image_cover_link"
                alt=""
              />
              <p class="text-size fontstyle" v-html="items.knowhow_detail"></p>
            </div>
          </div>
        </div>
      </div>
    </div> -->

    <div class="container bg_tab">
      <div v-for="items in knowhow" v-bind:key="items.knowhow_id">
        <!---------------------------------- innovation ------------------------------------>
        <div class="padd-70-70" v-show="items.knowhow_name != ''">
          <div class="">
            <div class="row">
              <div class="col-xs-12 col-sm-8 col-sm-offset-2">
                <div class="second-title">
                  <h3 class="text-letter fontstyle">
                    <b>ความรู้:</b> {{ items.knowhow_name }}
                  </h3>
                </div>
              </div>
            </div>
            <div class="row">
              <div class="">
                <div class="simple-text">
                  <!-- <h5 class="text-letter fontstyle"><b>วัตถุดิบ:</b></h5>
                  <ul class="color-grey dot-blue-2">
                    <li>
                      <span
                        class="text-letter fontstyle"
                        v-html="items.knowhow_innovation_resource"
                      ></span>
                    </li>
                    
                  </ul> -->
                </div>
              </div>
              <div class="col-mob-12 col-xs-12 col-sm-6 col-lg-6">
                <div class="hotel-item">
                  <img
                    v-if="
                      items.knowhow_image_cover_link ==
                      'https://trinitytrip.com/image/community/1/knowhow/'
                    "
                    id="img-more-product"
                    src="images/img-non/no_picture.jpg"
                    alt=""
                  />
                  <img
                    v-else
                    class="img-know"
                    :src="items.knowhow_image_cover_link"
                    alt=""
                  />
                </div>
              </div>
              <div class="col-xs-12 col-sm-12 col-md-12 col-lg-6">
                <div class="simple-text">
                  <p
                    class="text-size fontstyle"
                    v-html="items.knowhow_detail"
                  ></p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <!---------------------------------- innovation ------------------------------------>
      </div>
    </div>
  </div>
</template>

<script>
import { onMounted, ref } from "vue";
import axios from "axios";
import { BASE_API_URL } from "../../../constants";

export default {
  name: "Knowhow",
  setup() {
    let id = window.location.search;
    id = id.split("=");
    id = id[1];

    const knowhow = ref([]);

    const getData = async () => {
      const response = await axios.get(
        `${BASE_API_URL}/community-tourism/knowhow/` + id
      );
      knowhow.value = response.data.data;
    };

    onMounted(() => {
      getData();
    });

    return { knowhow };
  },
};
</script>

<style scoped>
.padd-70-70 {
  padding-top: 50px;
  padding-bottom: 50px;
}
.second-title {
  position: relative;
  text-align: center;
  padding-top: 10px;
  padding-bottom: 25px;
}
.bg_tab {
  background: rgb(250, 250, 250);
}
.img-know {
  width: auto;
  max-width: 300px;
  height: 200px;
  display: block;
  margin: auto;
}
.text-letter {
  letter-spacing: 0;
  color: black;
  text-align: center;
}
.text-size {
  color: #6e6e6e;
  font-size: larger;
  text-align: center;
}
.acc-body {
  font-family: "Open Sans", sans-serif;
  font-size: 14px;
  line-height: 22px;
  font-weight: 400;
  color: #b9b9b9;
  padding: 20px;
}
.fontstyle {
  font-family: "Prompt", sans-serif;
}
#img-more-product {
  width: auto;
  max-width: 300px;
  height: 200px;
  overflow: hidden;
  display: block;
  margin: auto;
}
</style>
