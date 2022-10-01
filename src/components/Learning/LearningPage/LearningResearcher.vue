<template>
  <div class="container box padd-70-70">
    <div class="row">
      <div class="col-xs-12">
        <div class="col-md-4">
          <div class="row">
            <router-link to="">
              <div class="community">
                <div class="hotel-items">
                  <img
                    class="radius-top-community"
                    v-lazy="'images/learnmore/1.png'"
                    alt=""
                  />
                  <div class="inner_position_top_bottom">
                    <h2 class="shadow">นักวิจัย</h2>
                  </div>
                </div>
              </div>
            </router-link>
          </div>
        </div>
        <div class="col-md-8">
          <div class="hotel-item">
            <div class="link-to">
              <div class="container box">
                <div class="row">
                  <div class="col-md-12">
                    <div class="col-md-2">
                      <a @click="changeTab(1)"
                        ><h3 class="text_color_nav">นวัตกรรม</h3>
                      </a>

                      <div class="vl"></div>
                    </div>
                    <div class="col-md-2">
                      <a @click="changeTab(2)"
                        ><h3 class="text_color_nav">ชุมชน</h3>
                      </a>
                      <div class="vl"></div>
                    </div>
                    <div class="col-md-2">
                      <a @click="changeTab(3)"
                        ><h3 class="text_color_nav">ผลิตภัณฑ์</h3>
                      </a>
                      <div class="vl"></div>
                    </div>
                    <div class="col-md-2">
                      <a @click="changeTab(4)"
                        ><h3 class="text_color_nav">กิจกรรม</h3>
                      </a>
                      <div class="vl"></div>
                    </div>
                    <div class="col-md-2">
                      <a @click="changeTab(5)"
                        ><h3 class="text_color_nav">เส้นทางท่องเที่ยว</h3>
                      </a>
                      <div class="vl"></div>
                    </div>
                    <div class="col-md-2">
                      <a href="#" @click="changeTab(6)"
                        ><h3 class="text_color_nav">สถิติ</h3>
                      </a>
                      <!-- <div class="vl"></div> -->
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="row">
              <div class="col-xs-12">
                <div class="col-md-12">
                  <div v-show="Tab == 1">
                    <TabAll :innovationobject="innovationobject" />
                  </div>
                  <div v-show="Tab == 2">
                    <TabAll :community="community" />
                  </div>

                  <div v-show="Tab == 3">
                    <TabAll
                      :Product="Product"
                      :ProductBussiness="ProductBussiness"
                    />
                  </div>
                  <div v-show="Tab == 4"><TabAll :Activity="Activity" /></div>
                  <div v-show="Tab == 5"><TabAll :Route="Route" /></div>
                  <div v-show="Tab == 6"><TabStatis /></div>
                </div>
              </div>
            </div>
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

// import TabInnovation from "../LearningPage/LearnningDetail/DetailTap/TabInnovation.vue";
// import TabCommunity from "../LearningPage/LearnningDetail/DetailTap/TabCommunity.vue";
// import TabProduct from "../LearningPage/LearnningDetail/DetailTap/TabProduct.vue";
// import TabActivity from "../LearningPage/LearnningDetail/DetailTap/TabActivity.vue";
// import TabRoute from "../LearningPage/LearnningDetail/DetailTap/TabRoute.vue";
import TabStatis from "../LearningPage/LearnningDetail/DetailTap/TabStatis.vue";

import TabAll from "../LearningPage/LearnningDetail/DetailTap/TabAll.vue";
export default {
  name: "LearningResearcher",
  components: {
    // TabInnovation,
    // TabCommunity,
    // TabProduct,
    // TabActivity,
    // TabRoute,
    TabStatis,

    TabAll,
  },

  setup() {
    const Tab = ref("1");

    const changeTab = (Tabs) => {
      Tab.value = Tabs;
    };

    // const  link= ref([]);

    const community = ref([]);
    const innovationobject = ref([]);
    const Product = ref([]);
    const ProductBussiness = ref([]);
    const Activity = ref([]);
    const Route = ref([]);

    const getData = async () => {
      const response = await axios.get(
        `${BASE_API_URL}/community-tourism/CommunityAll/0`
      );
      community.value = response.data.data;

      const responseinnovationobject = await axios.get(
        `${BASE_API_URL}/innovation-product/researcherInnovationObject?page=1&group=0&id=0`
      );
      innovationobject.value = responseinnovationobject.data.data;

      const responseProduct = await axios.get(
        `${BASE_API_URL}/innovation-product/ProductAll?page=1&group=0&id=0`
      );
      Product.value = responseProduct.data.data_product;
      ProductBussiness.value =
        responseProduct.data.data_bussiness_product_community;

      const responseActivity = await axios.get(
        `${BASE_API_URL}/tourism-route/activitAll?page=1&group=0&id=0`
      );
      Activity.value = responseActivity.data.data;

      const responseRoute = await axios.get(
        `${BASE_API_URL}/tourism-route/mainRoute`
      );
      Route.value = responseRoute.data.data.data;
    };

    onMounted(() => {
      getData();
    });

    return {
      Tab,
      changeTab,

      // link,
      community,
      innovationobject,

      Product,
      ProductBussiness,
      Activity,
      Route,
    };
  },
};
</script>

<style scoped>
h3:hover {
  transform: scale(1.1);
}
.block_grids:hover {
  transform: scale(1.1);
}
.col-md-3 {
  padding-right: 5px;
  padding-left: 5px;
}
.col-md-12 {
  padding-right: 5px;
  padding-left: 5px;
}
.col-md-2 {
  padding-right: 5px;
  padding-left: 5px;
}
.vl {
  border-right: 2px solid rgb(255, 255, 255);
  height: 20px;
  margin-top: -25px;
}
nav {
  float: right;
}
.nav {
  text-align: center;
  padding: 5px 0px 5px;
}
.text_color {
  color: rgba(8, 114, 201, 0.999);
}
.dropmenu {
  border-radius: 10px;

  z-index: 10000;
}

.link-to {
  color: rgb(255, 255, 255);
  padding-right: 20px;
  padding-left: 20px;
  padding-top: 10px;
  padding-bottom: 5px;
  text-align: center;
}
.color-bg-img {
  background: rgba(255, 0, 0, 0);
  background: -webkit-linear-gradient(
    rgba(255, 0, 0, 0),
    rgba(255, 0, 0, 0),
    #000000
  );
  background: -o-linear-gradient(
    rgba(255, 0, 0, 0),
    rgba(255, 0, 0, 0),
    #000000
  );
  background: -moz-linear-gradient(
    rgba(255, 0, 0, 0),
    rgba(255, 0, 0, 0),
    #000000
  );
  background: linear-gradient(rgba(255, 0, 0, 0), rgba(255, 0, 0, 0), #000000);
}
.community {
  /* position: absolute; */
  /* background: #ebe5ca; */
  background: rgba(255, 0, 0, 0);
  max-width: 120rem;
  width: 100%;
  height: 30rem;
  border-radius: 20px;
  /* box-shadow: 2px 1px 5px #222222; */
  padding: 0px 15px 0px 15px;
}

.radius-top-community {
  width: 100%;
  height: 30rem;
  object-fit: cover;
  display: block;
  border-radius: 20px;
  /* box-shadow: 2px 1px 5px #222222; */
}
.img-all-fr {
  width: 100%;
  height: 23rem;
  object-fit: cover;
  display: block;
  border-radius: 20px;
}
.img-all {
  width: 100%;
  height: 11rem;
  object-fit: cover;
  display: block;
  border-radius: 0px;
}
.col10 {
  padding-right: 20px;
  padding-left: 20px;
  padding-top: 15px;
  padding-bottom: 5px;
}
.gal-item.col10 {
  margin-bottom: 5px;
}
h2 {
  font-size: 30px;
  line-height: 2.363rem;
  font-weight: 500;
  text-transform: none;
  letter-spacing: 1px;
  color: white;
  text-shadow: 2px 2px 3px #000000;
}
h3 {
  /* position: relative; */
  font-size: 1.1rem;
  line-height: 1.663rem;
  font-weight: 500;
  text-transform: capitalize;
  letter-spacing: 0;
  color: white;
}
h4 {
  /* position: relative; */
  font-size: 16px;
  line-height: 1.663rem;
  font-weight: 500;
  text-transform: capitalize;
  letter-spacing: 0;
  /* color: white; */
}
.inner_position_top_bottom {
  position: relative;
  display: block;
  text-align: center;
  height: 50px;
  width: 100%;
  bottom: 210px;
  z-index: 999;
}

.inner_position_bottom_bottom {
  position: absolute;
  display: block;
  text-align: center;
  height: 50px;
  max-width: 310px;
  width: 100%;
  /* left: 10px; */
  bottom: 10px;
  z-index: 999;
}
.hotel-items {
  border-radius: 20px;
  padding-right: 5px;
  padding-left: 5px;
  padding-top: 0px;
  padding-bottom: 5px;
  /* box-shadow: 2px 1px 5px #222222; */
  background: rgba(255, 255, 255, 0);
}
.hotel-item {
  border-radius: 20px;
  padding-right: 5px;
  padding-left: 5px;
  padding-top: 5px;
  padding-bottom: 5px;
  /* box-shadow: 2px 1px 5px #222222; */
  background: rgba(0, 88, 141, 255);
}
@media screen and (max-width: 600px) {
  nav {
    z-index: 1000;
    background: rgba(8, 114, 201);
  }
  /* .text_color_nav {
    color: rgba(8, 114, 201, 0.999);
  } */
  .nav-menu-icon {
    z-index: 1001;
  }
  nav.slide-menu {
    z-index: 1000;
  }
  /* .nav-menu-icon a i, */
  .nav-menu-icon a i:before,
  .nav-menu-icon a i:after {
    /* content: '';
    width: 24px;
    height: 3px; */
    background: rgb(255, 255, 255);
    /* position: absolute;
    left: 0;
    -webkit-transition: all 0.2s ease-out;
    -moz-transition: all 0.2s ease-out;
    -o-transition: all 0.2s ease-out;
    transition: all 0.2s ease-out; */
  }
  .dropmenu {
    border-radius: 10px;
    z-index: 10000;
  }

  .inner_position_bottom_bottom {
    position: absolute;
    display: block;
    text-align: center;
    height: 50px;
    max-width: 280px;
    width: 100%;
    /* left: 10px; */
    bottom: 10px;
    z-index: 999;
  }
  .hotel-item {
    border-radius: 20px;
    padding-right: 5px;
    padding-left: 5px;
    padding-top: 5px;
    padding-bottom: 5px;
    margin-top: 25px;
    /* box-shadow: 2px 1px 5px #222222; */
    background: rgba(8, 114, 201, 0.999);
  }
}
</style>
