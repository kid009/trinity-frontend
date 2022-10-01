<template>
  <div class="container">
    <div class="acc-body">
      <div class="acc-body-block bg_tab padd-70-70">
        <div class="row">
          <h3 class="text-letter fontstyle">คณะกรรมการ</h3>
          <div>
            <div class="row">
              <div
                class="col-xs-12 col-sm-4"
                v-for="items in board"
                v-bind:key="items.knowhow_id"
              >
                <div v-show="items.people_name != ''">
                  <div class="team-entry">
                    <div class="image">
                      <img class="team-img img-responsive" alt="" />
                      <vue-responsive-image
                        :image-url="items.people_image_link"
                        :image-ratio="16 / 9"
                        :image-class="'team-img img-full img-responsive img-size-board'"
                      ></vue-responsive-image>

                      <div class="team-layer bg-blue">
                        <div class="team-share vertical-align">
                          <div class="icon-contaxt">
                            <a target="_blank" :href="items.people_facebook">
                              <img src="images/icon/facebook.png" alt=""
                            /></a>
                            <a target="_blank" :href="items.people_instagram">
                              <img src="images/icon/instagram.png" alt=""
                            /></a>
                            <a
                              target="_blank"
                              :href="'HTTP://LINE.ME/TI/P/' + items.people_line"
                            >
                              <img src="images/icon/line.png" alt=""
                            /></a>
                            <p class="text-letter fontstyle">
                              email: {{ items.people_email }}
                            </p>
                            <p class="text-letter fontstyle">
                              เบอร์โทร: {{ items.people_telephone }}
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                    <h3 class="team-name color-dark-2 text-letter fontstyle">
                      {{ items.people_name }}
                    </h3>
                    <h5 class="team-name color-dark-2 text-letter fontstyle">
                      การศึกษา:{{ items.people_education }}
                    </h5>
                    <p
                      class="text-letter fontstyle"
                      v-html="items.people_detail"
                    ></p>
                  </div>
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

import VueResponsiveImage from "vue-responsive-image";

export default {
  name: "Board",
  components: {
    VueResponsiveImage,
  },
  setup() {
    let id = window.location.search;
    id = id.split("=");
    id = id[1];

    const board = ref([]);

    const getData = async () => {
      const response = await axios.get(
        `${BASE_API_URL}/community-tourism/board/` + id
      );
      board.value = response.data.data;
    };

    onMounted(() => {
      getData();
    });

    return { board };
  },
};
</script>

<style>
.padd-70-70 {
  padding-top: 50px;
  padding-bottom: 50px;
}
.img-size-board {
  width: 100%;
  max-width: 250px;
  height: 300px;
}
</style>
<style scoped>
.text-letter {
  letter-spacing: 0;
  color: black;
  text-align: center;
}
.icon-contaxt {
  padding: 10px;
  align-self: center;
  text-align: center;
}
.icon-contaxt img {
  padding: 1px;
  text-align: center;
  width: 41px;
  margin: 5px;
  box-shadow: 1px 1px 0px #f8f8f8;
}
@media only screen and (min-width: 768px) {
  .icon-contaxt img {
    width: 30px;
  }
}
.fontstyle {
  font-family: "Prompt", sans-serif;
}
</style>
