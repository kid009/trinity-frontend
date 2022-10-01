<template>
  <div class="">
    <div class="acc-body padd-70-70">
      <!-- TEAM -->
      <div>
        <div>
          <div class="row">
            <div
              v-for="(items, index) in communityImages"
              :key="index"
              class="
                pic
                item
                tours
                gal-item
                style-2
                col-mob-12 col-xs-6 col-sm-4
                no-padding
              "
              @click="() => showImg(index)"
            >
              <a class="black-hover">
                <img
                  class="img-full img-responsive img-size4"
                  :src="
                    typeof items === 'string'
                      ? items
                      : items.community_image_file_link
                  "
                />
                <div class="tour-layer delay-1"></div>
                <div class="vertical-align">
                  <h3 class="color-white text-letter fontstyle">
                    <b>{{ items.community_image_name }}</b>
                  </h3>
                </div>
              </a>
            </div>
          </div>
        </div>
        <vue-easy-lightbox
          :visible="visible"
          :imgs="image_file_link"
          :index="index"
          @hide="handleHide"
          class="img-zindex"
        ></vue-easy-lightbox>
      </div>
    </div>
  </div>
</template>

<script>
import VueEasyLightbox from "vue-easy-lightbox";

import { onMounted, ref } from "vue";
import axios from "axios";
import { BASE_API_URL } from "../../../constants";

export default {
  name: "CommunityImages",
  components: {
    VueEasyLightbox,
  },
  data() {
    return {
      visible: false,
      index: 0, // default: 0
      imgs: [
        "https://via.placeholder.com/450.png/",
        { src: "https://via.placeholder.com/450.png/", title: "this is title" },
      ],
    };
  },
  methods: {
    showImg(index) {
      this.index = index;
      this.visible = true;
    },
    handleHide() {
      this.visible = false;
    },
  },

  setup() {
    let id = window.location.search;
    id = id.split("=");
    id = id[1];

    const communityImages = ref([]);
    const community_image_file_link = ref([]);

    let image_file_link = [];

    const getData = async () => {
      const response = await axios.get(
        `${BASE_API_URL}/community-tourism/communityImages/` + id
      );
      communityImages.value = response.data.data;
      for (let key in communityImages.value) {
        let Images = communityImages.value[key];

        community_image_file_link.value = Images.community_image_file_link;
        image_file_link.push(community_image_file_link.value);
      }
    };

    onMounted(() => {
      getData();
    });

    return { communityImages, community_image_file_link, image_file_link };
  },
};
</script>

<style>
.padd-70-70 {
  padding-top: 50px;
  padding-bottom: 50px;
}
.img-size4 {
  height: 400px;
}
</style>
<style scoped>
.text-letter {
  letter-spacing: 0;
  color: aliceblue;
}
.img-zindex {
  z-index: 100000;
}
.fontstyle {
  font-family: "Prompt", sans-serif;
}
</style>
