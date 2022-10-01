<template>
  <div class="main-wraper bg-grey-2 padd-90">
    <div class="container">
      <div class="row">
        <div class="col-xs-12 col-sm-8 col-sm-offset-2">
          <div class="second-title">
            <h2>กลุ่มธุรกิจ</h2>
          </div>
        </div>
      </div>
      <div class="row" id="style-1">
        <div class="col-md-12">
          <div class="scrollbar">
            <div
              class="col-xs-12 col-sm-6 col-md-3"
              v-for="item in business"
              v-bind:key="item.bussiness_id"
            >
              <!-- <a @click="on_click(1, item.user_id,item.user_login,'researcherroute' ) ">   -->
              <a :href="'businessdetailindexpage?id=' + item.bussiness_id">
                <div class="icon-block style-2 bg-white">
                  <img
                    class="icon-img bg-blue-2 border-grey-2"
                    :src="item.bussiness_image_cover_link"
                    alt="non"
                    onerror="this.src='images/user.png'"
                  />
                  <h5 class="icon-title color-dark-2">
                    {{ item.bussiness_name }}
                  </h5>
                  <!-- <div class="icon-text color-dark-2-light">
                <p>เบอร์โทร :</p>
              </div> -->
                </div>
              </a>
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

export default {
  name: "BussinessGroup",
  components: {},

  setup() {
    const business = ref([]);

    const getData = async () => {
      const response = await axios.get(
        `${BASE_API_URL}/businesstourism/business`
      );
      business.value = response.data.data;
    };

    const on_click = (page, group, id, name) => {
      window.location =
        name + "?page=" + page + "&group=" + group + "&id=" + id;
    };

    onMounted(() => {
      getData();
    });

    return { business, on_click };
  },
};
</script>
<style>
.img-sizes {
  height: 480px;
  width: 500px;
  display: flex;
  justify-content: center;
}
</style>

<style scoped>
.icon-block.style-2 {
  position: relative;
  margin-top: 55px;
  padding: 48px 0px 0px 0px;
  height: 100px;
  border-radius: 5px;
  box-shadow: 0px 0px 4px #022c54;
}
.icon-block .icon-title {
  font-size: 14px;
  line-height: 20px;
  font-weight: 600;
  text-transform: uppercase;
  margin-bottom: 10px;
}
.icon-block.style-2 .icon-img {
  position: absolute;
  left: 50%;
  top: -45px;
  margin-left: -45px;
  -moz-border-radius: 90px;
  border-radius: 90px;
  width: 70px;
  height: 70px;
  object-fit: cover;
}
h2 {
  font-size: 32px;
  line-height: 32px;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 5px;
  color: #01588d;
}
.second-title {
  position: relative;
  text-align: center;
  padding-top: 60px;
  padding-bottom: 50px;
}

/*------------SCROLL--BAR--------*/
.scrollbar {
  /* margin-left: 30px; */
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
