<template>
  <div
    class="col-xs-12 col-md-3"
    v-for="items in ResearcherDetail"
    v-bind:key="items.user_id"
  >
    <div class="right-sidebar" v-show="items.user_login == KnowhowDetail">
      <div class="sidebar bg-white clearfix">
        <div class="sidebar-block type-2">
          <div class="">
            <br />
            <div class="team-entry style-2">
              <h4 id="page-detail" class="color-black">ข้อมูลติดต่อ</h4>
              <div class="image">
                <img
                  class="img-profie"
                  id="img_travels"
                  :src="items.user_image_cover_link"
                  alt=""
                />
              </div>
              <b
                ><p class="color-black">
                  ชื่อ:<span class="color-black"></span>
                </p>
                {{ items.user_name }}{{ items.user_surname }}
              </b>
              <!-- <b><p class="color-black">ที่อยู่: <span class="color-black"> </span></p>{{items.user_name}}</b> -->
              <b
                ><p class="color-black">
                  เบอร์โทรศัพท์: <span class="color-black"> </span
                  >{{ items.user_telephone }}
                </p></b
              >

              <a
                class="img-resize"
                target="_blank"
                :href="'HTTP://LINE.ME/TI/P/' + items.user_line"
                ><img id="bordercl" src="images/product/line-icon.png" alt=""
              /></a>
              &nbsp;
              <a
                class="img-resize"
                target="_blank"
                href="{{items.user_facebook}}"
                ><img id="bordercl" src="images/product/facebook.png" alt=""
              /></a>
              &nbsp;
              <a
                class="img-resize"
                target="_blank"
                href="{{items.user_instragram}}"
                ><img id="bordercl" src="images/product/instagrams.png" alt=""
              /></a>
              &nbsp;
              <a class="img-resize" target="_blank" href="{{items.user_link}}"
                ><img id="bordercl" src="images/product/link.png" alt=""
              /></a>
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
  name: "Contact",
  setup() {
    const ResearcherDetail = ref([]);
    const KnowhowDetail = ref([]);

    let page = window.location.search.substr(6, 1);

    let group = window.location.search;
    group = group.split("=");
    group = group[2];
    group = group.substring(0, group.length - 3);

    let id = window.location.search;
    id = id.split("=");
    id = id[3];

    const getData = async () => {
      const responsesKnowhowDetail = await axios.get(
        `${BASE_API_URL}/Researcher/KnowhowDetail/` + id
      );
      KnowhowDetail.value = responsesKnowhowDetail.data.data[0].create_by;

      const responses = await axios.get(
        `${BASE_API_URL}/Researcher/ResearcherDetail/` + KnowhowDetail.value
      );
      ResearcherDetail.value = responses.data.data;
    };

    onMounted(() => {
      getData();
    });

    return {
      ResearcherDetail,
      KnowhowDetail,
      id,
      page,
      group,
    };
  },
};
</script>

<style scoped>
.img-profie img {
  width: 150px;
  height: auto;
}
.img-profie {
  width: 150px;
  height: 150px;
  overflow: hidden;
  text-align: center;
}
#borderporfile {
  border-style: solid;
  border-width: 3px;
  border-color: white;
  border-radius: 10px;
}
.borderdetail {
  border-radius: 3px;

  padding: 10px;
  width: 100%;
  height: 500px;
  background-color: #ffffff;
}
#bordercl {
  border-style: solid;
  border-width: 3px;
  border-color: white;
  border-radius: 30px;
}
.img-resize {
  width: 61px;
  height: 61px;
  overflow: hidden;
  text-align: center;
}

.img-resize img {
  margin-top: 20px;
  width: 43px;
  height: auto;
}
.detail-block p {
  font-size: 13px;
  line-height: 28px;
  font-weight: 400;
  text-transform: uppercase;
  letter-spacing: 0.5px;
  margin-bottom: 20px;
}
.img-profie {
  width: 150px;
  height: auto;
  overflow: hidden;
  text-align: center;
  object-fit: cover;
}
#img_travels {
  width: auto;
  max-width: 300px;
  height: 200px;
  overflow: hidden;
  display: block;
  margin: auto;
}
</style>
