<template>
  <!-- <div
    v-for="item in name"
    :key="item.community_id"
    class="inner-banner style-5"
  >
    <img
      v-show="
        communityBackground[0].community_image_background_cover_link !=
        'https://trinitytrip.com/image/community/background/'
      "
      class="center-image img-top"
      :src="communityBackground[0].community_image_background_cover_link"
      alt=""
    />
    <img
      v-show="
        communityBackground[0].community_image_background_cover_link ==
        'https://trinitytrip.com/image/community/background/'
      "
      class="center-image img-top"
      src="https://cdn.pixabay.com/photo/2017/07/07/02/03/temple-2480147_960_720.jpg"
      alt=""
    />

    <div class="vertical-align textfix">
      <div class="container">
        <div class="row">
          <div class="col-xs-12 col-md-8 col-md-offset-2">
            <ul class="banner-breadcrumb color-white clearfix textfix">
              <li>
                <a class="link-blue-2 text-letter text-shadows" href="#"
                  >{{ item.province_name }}
                </a>
                /
              </li>
              <li>
                <a class="link-blue-2 text-letter text-shadows" href="#"
                  >{{ item.amphur_name }}
                </a>
                /
              </li>
              <li>
                <a class="link-blue-2 text-letter text-shadows" href="#"
                  >{{ item.tambon_name }}
                </a>
              </li>
            </ul>
            <h2 class="color-white text-letter text-shadows">
              {{ item.community_name }}
            </h2>
          </div>
        </div>
      </div>
    </div>
  </div> -->

  <div class="banner">
    <!------------------------------------------------ hotel ---------------------------------------->

    <div v-for="item in name" :key="item.community_id">
      <!-- <div class="banner-img">
        <img
          v-show="
            communityBackground[0].community_image_background_cover_link !=
            'https://trinitytrip.com/image/community/background/'
          "
          :src="communityBackground[0].community_image_background_cover_link"
          alt=""
        />
        <img
          v-show="
            communityBackground[0].community_image_background_cover_link ==
            'https://trinitytrip.com/image/community/background/'
          "
          src="https://cdn.pixabay.com/photo/2017/07/07/02/03/temple-2480147_960_720.jpg"
          alt=""
        />
      </div>

      <div class="inner_position_top_bottom">
        <ul class="banner-breadcrumb color-white clearfix">
          <li>
            <a class="link-blue-2 text-letter text-shadows fontstyle" href="#"
              >{{ item.province_name }}
            </a>
            /
          </li>
          <li>
            <a class="link-blue-2 text-letter text-shadows fontstyle" href="#"
              >{{ item.amphur_name }}
            </a>
            /
          </li>
          <li>
            <a class="link-blue-2 text-letter text-shadows fontstyle" href="#"
              >{{ item.tambon_name }}
            </a>
          </li>
        </ul>
        <h2>
          {{ item.community_name }}
        </h2>
        <br />
      </div> -->
      <div class="top-baner map-baner padd-90-0">
        <div class="">
          <div
            id="map-canvas"
            class="bg-bg-chrome"
            v-show="
              communityBackground[0].community_image_background_cover_link !=
              'https://trinitytrip.com/image/community/background/'
            "
            v-lazy="
              communityBackground[0].community_image_background_cover_link
            "
          >
            <div id="map-canvas" class="bg-bg-chrome color-bg-img"></div>
          </div>

          <div
            id="map-canvas"
            class="bg-bg-chrome"
            v-show="
              communityBackground[0].community_image_background_cover_link ==
              'https://trinitytrip.com/image/community/background/'
            "
            v-lazy="
              'https://cdn.pixabay.com/photo/2017/07/07/02/03/temple-2480147_960_720.jpg'
            "
          >
            <div id="map-canvas" class="bg-bg-chrome color-bg-img"></div>
          </div>

          <!-- <img
            id="map-canvas"
            class="bg-bg-chrome color-bg-img"
            v-show="
              communityBackground[0].community_image_background_cover_link !=
              'https://trinitytrip.com/image/community/background/'
            "
            :src="communityBackground[0].community_image_background_cover_link"
            alt=""
          />
          <img
            id="map-canvas"
            class="bg-bg-chrome color-bg-img"
            v-show="
              communityBackground[0].community_image_background_cover_link ==
              'https://trinitytrip.com/image/community/background/'
            "
            src="https://cdn.pixabay.com/photo/2017/07/07/02/03/temple-2480147_960_720.jpg"
            alt=""
          /> -->
          <!-- <div
            id="map-canvas"
            class="bg-bg-chrome"
            v-show="
              communityBackground[0].community_image_background_cover_link !=
              'https://trinitytrip.com/image/community/background/'
            "
            :src="communityBackground[0].community_image_background_cover_link"
          ></div>
          <div
            id="map-canvas"
            class="bg-bg-chrome"
            v-show="
              communityBackground[0].community_image_background_cover_link ==
              'https://trinitytrip.com/image/community/background/'
            "
            src="
              https://cdn.pixabay.com/photo/2017/07/07/02/03/temple-2480147_960_720.jpg
            "
          ></div> -->
          <div class="vertical-bottom">
            <div class="text_center">
              <ul class="banner-breadcrumb color-white clearfix">
                <li>
                  <a
                    class="link-blue-2 text-letter text-shadows fontstyle"
                    href="#"
                    >{{ item.province_name }}
                  </a>
                  /
                </li>
                <li>
                  <a
                    class="link-blue-2 text-letter text-shadows fontstyle"
                    href="#"
                    >{{ item.amphur_name }}
                  </a>
                  /
                </li>
                <li>
                  <a
                    class="link-blue-2 text-letter text-shadows fontstyle"
                    href="#"
                    >{{ item.tambon_name }}
                  </a>
                </li>
              </ul>
              <h2>
                {{ item.community_name }}
              </h2>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!------------------------------------------------ hotel ---------------------------------------->
  </div>
</template>

<script>
import { onMounted, ref } from "vue";
import axios from "axios";
import { BASE_API_URL } from "../../../constants";

export default {
  name: "Banner",

  setup() {
    const name = ref([]);
    const communityBackground = ref([]);

    let id = window.location.search;
    id = id.split("&id=");
    id = id[1];

    if (id == null) {
      id = window.location.search;
      id = id.split("?id=");
      id = id[1];
    }

    const getData = async () => {
      const response = await axios.get(
        `${BASE_API_URL}/community-tourism/communityDetail/` + id
      );
      const responsecommunityBackground = await axios.get(
        `${BASE_API_URL}/community-tourism/communityBackground/` + id
      );

      name.value = response.data.data;
      communityBackground.value = responsecommunityBackground.data.data;
    };

    onMounted(() => {
      getData();
    });

    return { name, communityBackground };
  },
};
</script>

<style scoped>
.vertical-bottom {
  position: absolute;
  bottom: 0px;
  left: 0px;
  width: 100%;
  padding-right: 10px;
  padding-left: 10px;
  padding-bottom: 250px;
}

.text_center {
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
.inner_position_top_bottom {
  position: absolute;
  display: block;
  text-align: center;
  height: 50px;
  width: 100%;
  bottom: 250px;
  z-index: 999;
}
.map-baner #map-canvas {
  height: 500px;
  width: 100%;
}
.map-baner {
  padding-top: 0px;
}
h2 {
  font-size: 28px;
  line-height: 0.563rem;
  font-weight: 500;
  text-transform: none;
  letter-spacing: 0;
  color: white;
  text-shadow: 2px 2px 3px #000000;
}
h4 {
  font-size: 22px;
  line-height: 2.363rem;
  font-weight: 500;
  text-transform: none;
  letter-spacing: 0px;
  color: white;
  text-shadow: 2px 2px 3px #000000;
}
.text-letter {
  letter-spacing: 0;
}
.text-shadows {
  text-shadow: black 0.1em 0.1em 0.2em;
}
.img-top {
  filter: blur(0.5px);
  height: 500px;
  width: 100%;
  overflow: hidden;
}
.textfix {
  margin-top: 30px;
}

.banner {
  text-align: center;
}
.banner-img {
  height: 100%;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  position: relative;
}
.banner-img img {
  height: 400px;
  width: 100%;
  object-fit: cover;
  filter: brightness(0.5);
}
.banner-text {
  width: 80%;

  padding-bottom: 50px;
  padding-top: 20px;
  text-align: center;
  position: absolute;
  top: 25%;
  right: -43%;
  left: 67%;
  transform: translate(-70%, -50%);
  color: white;

  color: white;
}
.banner-text h2 {
  font-weight: 500;
  line-height: 43px;
  letter-spacing: 0px;
}
.fontstyle {
  font-family: "Prompt", sans-serif;
}
</style>
