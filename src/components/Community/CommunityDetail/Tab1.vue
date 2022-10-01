<template>
  <div class="">
    <!--<div class="acc-body">
       <div class="acc-body-block">
        <div class="row" v-for="items in knowhow" v-bind:key="items.knowhow_id">
          <div v-show="items.knowhow_innovation_name != ''">
            <hr />
            <h3 class="text-letter fontstyle">
              นวัตกรรม: {{ items.knowhow_innovation_name }}
            </h3>
            
            <div>
              <hr />

              <h5 class="text-letter fontstyle">วัตถุดิบ:</h5>
              <span
                class="text-letter fontstyle"
                v-html="items.knowhow_innovation_resource"
              ></span>

              <img
                v-if="
                  knowhow_innovation_image_link ==
                  'https://trinitytrip.com/image/community/1/knowhow/'
                "
                id="img-more-product"
                src="images/img-non/no_picture.jpg"
                alt=""
              />

              <img
                v-else
                class="img-know"
                :src="items.knowhow_innovation_image_link"
                alt=""
              />

              <div v-show="items.knowhow_innovation_process != ''">
                <h5 class="text-letter fontstyle">กระบวนการ:</h5>
                <p
                  class="text-size"
                  v-html="items.knowhow_innovation_process"
                ></p>
              </div>

              <div v-show="items.knowhow_innovation_apply != ''">
                <h5 class="text-letter fontstyle">การนำไปใช้ประโยชน์:</h5>
                <p
                  class="text-size fontstyle"
                  v-html="items.knowhow_innovation_apply"
                ></p>
              </div>
            </div>
          
          </div>

          <div v-show="items.knowhow_technology_name != ''">
            <hr />
            <h3 class="text-letter fontstyle">เทคโนโลยี</h3>
           
            <div>
              <hr />
              <h3 class="text-letter fontstyle">
                {{ items.knowhow_technology_name }}
              </h3>
              <h5 class="text-letter fontstyle">วัตถุดิบ:</h5>
              <span
                class="text-letter fontstyle"
                v-html="items.knowhow_technology_resource"
              ></span>

              <img
                v-if="
                  knowhow_technology_image_link ==
                  'https://trinitytrip.com/image/community/1/knowhow/'
                "
                id="img-more-product"
                src="images/img-non/no_picture.jpg"
                alt=""
              />

              <img
                v-else
                class="img-know"
                :src="items.knowhow_technology_image_link"
                alt=""
              />
              <div v-show="items.knowhow_technology_process != ''">
                <h5 class="text-letter fontstyle">กระบวนการ:</h5>
                <p
                  class="text-size fontstyle"
                  v-html="items.knowhow_technology_process"
                ></p>
              </div>
              <div v-show="items.knowhow_technology_apply != ''">
                <h5 class="text-letter fontstyle">การนำไปใช้ประโยชน์:</h5>
                <p
                  class="text-size fontstyle"
                  v-html="items.knowhow_technology_apply"
                ></p>
              </div>
            </div>
           
          </div>
        </div>
      </div>
    </div> -->

    <div class="container bg_tab">
      <div v-for="items in knowhow" v-bind:key="items.knowhow_id">
        <!---------------------------------- innovation ------------------------------------>
        <div class="padd-70-70" v-show="items.knowhow_innovation_name != ''">
          <div class="">
            <div class="row">
              <div class="col-xs-12 col-sm-8 col-sm-offset-2">
                <div class="second-title">
                  <h3 class="text-letter fontstyle">
                    <b>นวัตกรรม:</b> {{ items.knowhow_innovation_name }}
                  </h3>
                </div>
              </div>
            </div>
            <div class="row">
              <div class="col-xs-12 col-sm-6 col-md-6 col-lg-2">
                <div class="simple-text">
                  <h5 class="text-letter fontstyle"><b>วัตถุดิบ:</b></h5>
                  <ul class="color-grey dot-blue-2">
                    <li>
                      <span
                        class="text-letter fontstyle"
                        v-html="items.knowhow_innovation_resource"
                      ></span>
                    </li>
                    <!-- <li>5 Star Accommodations</li>
                <li>Inclusive Packages</li>
                <li>Latest Model Vehicles</li>
                <li>Best Price Guarantee</li> -->
                  </ul>
                </div>
              </div>
              <div class="col-mob-12 col-xs-12 col-sm-6 col-lg-4">
                <div class="hotel-item">
                  <img
                    v-if="
                      knowhow_innovation_image_link ==
                      'https://trinitytrip.com/image/community/1/knowhow/'
                    "
                    id="img-more-product"
                    src="images/img-non/no_picture.jpg"
                    alt=""
                  />

                  <img
                    v-else
                    class="img-know"
                    :src="items.knowhow_innovation_image_link"
                    alt=""
                  />
                </div>
              </div>
              <div class="col-xs-12 col-sm-12 col-md-12 col-lg-6">
                <div class="simple-text">
                  <div v-show="items.knowhow_innovation_process != ''">
                    <h5 class="text-letter fontstyle"><b>กระบวนการ:</b></h5>
                    <p
                      class="text-size"
                      v-html="items.knowhow_innovation_process"
                    ></p>
                  </div>

                  <div v-show="items.knowhow_innovation_apply != ''">
                    <h5 class="text-letter fontstyle">
                      <b>การนำไปใช้ประโยชน์:</b>
                    </h5>
                    <p
                      class="text-size fontstyle"
                      v-html="items.knowhow_innovation_apply"
                    ></p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <!---------------------------------- innovation ------------------------------------>
        <!---------------------------------- technology ------------------------------------>
        <div v-show="items.knowhow_technology_name != ''">
          <div class="row">
            <div class="col-xs-12 col-sm-8 col-sm-offset-2">
              <div class="second-title">
                <h3 class="text-letter fontstyle">
                  เทคโนโลยี: {{ items.knowhow_technology_name }}
                </h3>
              </div>
            </div>
          </div>
          <div class="row">
            <div class="col-xs-12 col-sm-6 col-md-6 col-lg-2">
              <div class="simple-text">
                <h5 class="text-letter fontstyle">วัตถุดิบ:</h5>
                <ul class="color-grey dot-blue-2">
                  <li>
                    <span
                      class="text-letter fontstyle"
                      v-html="items.knowhow_technology_resource"
                    ></span>
                  </li>
                  <!-- <li>5 Star Accommodations</li>
                <li>Inclusive Packages</li>
                <li>Latest Model Vehicles</li>
                <li>Best Price Guarantee</li> -->
                </ul>
              </div>
            </div>
            <div class="col-mob-12 col-xs-12 col-sm-6 col-lg-4">
              <div class="hotel-item">
                <img
                  v-if="
                    knowhow_technology_image_link ==
                    'https://trinitytrip.com/image/community/1/knowhow/'
                  "
                  id="img-more-product"
                  src="images/img-non/no_picture.jpg"
                  alt=""
                />

                <img
                  v-else
                  class="img-know"
                  :src="items.knowhow_technology_image_link"
                  alt=""
                />
              </div>
            </div>
            <div class="col-xs-12 col-sm-12 col-md-12 col-lg-6">
              <div class="simple-text">
                <div v-show="items.knowhow_technology_process != ''">
                  <h5 class="text-letter fontstyle">กระบวนการ:</h5>
                  <p
                    class="text-size fontstyle"
                    v-html="items.knowhow_technology_process"
                  ></p>
                </div>
                <div v-show="items.knowhow_technology_apply != ''">
                  <h5 class="text-letter fontstyle">การนำไปใช้ประโยชน์:</h5>
                  <p
                    class="text-size fontstyle"
                    v-html="items.knowhow_technology_apply"
                  ></p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <!---------------------------------- technology ------------------------------------>
      </div>
    </div>
  </div>
</template>

<script>
import { onMounted, ref } from "vue";
import axios from "axios";
import { BASE_API_URL } from "../../../constants";

export default {
  name: "Tab1",
  computed: {
    videoElement() {
      return this.$refs.video;
    },
  },
  setup() {
    let id = window.location.search;
    id = id.split("=");
    id = id[1];

    const knowhow = ref([]);

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
      const response = await axios.get(
        `${BASE_API_URL}/community-tourism/knowhow/` + id
      );
      knowhow.value = response.data.data;
      linkvdo = response.data.data[0].knowhow_innovation_vdo;
      changLinkvdo(linkvdo);
    };

    onMounted(() => {
      getData();
    });

    return { knowhow, linkvdo, vdo };
  },
};
</script>

<style scoped>
.bg_tab {
  background: rgb(250, 250, 250);
}
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
.video {
  width: 100%;
  height: 430;
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
}
/* .text-letters {
  letter-spacing: 0;
  color: black;
} */
.text-size {
  color: #6e6e6e;
  font-size: 7rem;
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
  height: 230px;
  overflow: hidden;
  display: block;
  margin: auto;
}
</style>
