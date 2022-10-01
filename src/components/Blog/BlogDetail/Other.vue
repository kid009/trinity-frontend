<template>
  <div class="main-wraper padd-70-70">
    <div class="container box">
      <div class="related-block">
        <h3 id="text-detail" class="related-title">บทความอื่นๆ</h3>
        <div class="row">
          <div v-if="page == 'Experience'">
            <div
              v-for="items in blogOther.slice(0, 3)"
              v-bind:key="items.tourism_experience_id"
              class="item hotels gal-item style-3 col-xs-12 col-sm-4"
            >
              <a
                class="black-hover"
                @click="
                  on_click(
                    1,
                    items.tourism_experience_id,
                    items.tourism_experience_group_id
                  )
                "
              >
                <div class="gal-item-icon">
                  <img
                    id="img-other-blog"
                    class="img-full img-responsive"
                    :src="items.tourism_experience_image_cover"
                    alt=""
                  />
                  <div class="tour-layer delay-1"></div>
                  <div class="vertical-align">
                    <span class="c-button small bg-white delay-2"
                      ><span>เพิ่มเติม</span></span
                    >
                  </div>
                </div>
                <div class="gal-item-desc delay-1">
                  <h4 id="text-detail">
                    <b>{{ items.tourism_experience_name }}</b>
                  </h4>
                </div>
              </a>
            </div>
          </div>

          <div v-else-if="page == 'Knowhow'">
            <div
              v-for="items in blogOther.slice(0, 3)"
              v-bind:key="items.tourism_knowhow_id"
              class="item hotels gal-item style-3 col-xs-12 col-sm-4"
            >
              <a
                class="black-hover"
                @click="
                  on_click(
                    2,
                    items.tourism_knowhow_id,
                    items.tourism_knowhow_group_id
                  )
                "
              >
                <div class="gal-item-icon">
                  <img
                    id="img-other-blog"
                    class="img-full img-responsive"
                    :src="items.tourism_knowhow_image_cover"
                    alt=""
                  />
                  <div class="tour-layer delay-1"></div>
                  <div class="vertical-align">
                    <span class="c-button small bg-white delay-2"
                      ><span>เพิ่มเติม</span></span
                    >
                  </div>
                </div>
                <div class="gal-item-desc delay-1">
                  <h4 id="text-detail">
                    <b>{{ items.tourism_knowhow_name }}</b>
                  </h4>
                </div>
              </a>
            </div>
          </div>

          <div v-else-if="page == 'Impressive'">
            <div
              v-for="items in blogOther.slice(0, 3)"
              v-bind:key="items.tourism_impressive_id"
              class="item hotels gal-item style-3 col-xs-12 col-sm-4"
            >
              <a
                class="black-hover"
                @click="
                  on_click(
                    3,
                    items.tourism_impressive_id,
                    items.tourism_impressive_group_id
                  )
                "
              >
                <div class="gal-item-icon">
                  <img
                    id="img-other-blog"
                    class="img-full img-responsive"
                    :src="items.tourism_impressive_image_cover"
                    alt=""
                  />
                  <div class="tour-layer delay-1"></div>
                  <div class="vertical-align">
                    <span class="c-button small bg-white delay-2"
                      ><span>เพิ่มเติม</span></span
                    >
                  </div>
                </div>
                <div class="gal-item-desc delay-1">
                  <h4 id="text-detail">
                    <b>{{ items.tourism_impressive_name }}</b>
                  </h4>
                </div>
              </a>
            </div>
          </div>

          <div v-else-if="page == 'Story'">
            <div
              v-for="items in blogOther.slice(0, 3)"
              v-bind:key="items.tourism_story_id"
              class="item hotels gal-item style-3 col-xs-12 col-sm-4"
            >
              <a
                class="black-hover"
                @click="
                  on_click(
                    4,
                    items.tourism_story_id,
                    items.tourism_story_group_id
                  )
                "
              >
                <div class="gal-item-icon">
                  <img
                    id="img-other-blog"
                    class="img-full img-responsive"
                    :src="items.tourism_story_image_cover"
                    alt=""
                  />
                  <div class="tour-layer delay-1"></div>
                  <div class="vertical-align">
                    <span class="c-button small bg-white delay-2"
                      ><span>เพิ่มเติม</span></span
                    >
                  </div>
                </div>
                <div class="gal-item-desc delay-1">
                  <h4 id="text-detail">
                    <b>{{ items.tourism_story_name }}</b>
                  </h4>
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
  name: "Other",

  setup() {
    const blogOther = ref([]);

    /*getค่าpage*/
    let page = window.location.search.substr(6, 1);

    /*getค่าid*/
    let id = window.location.search;
    id = id.split("=");
    id = id[3];

    /*getค่าgroup*/
    let group = window.location.search;
    group = group.split("=");
    group = group[2];
    group = group.substring(0, group.length - 3);

    if (page == 1) {
      page = "Experience";
    } else if (page == 2) {
      page = "Knowhow";
    } else if (page == 3) {
      page = "Impressive";
    } else if (page == 4) {
      page = "Story";
    }

    const getData = async () => {
      const response = await axios.get(`${BASE_API_URL}/blog/tourism` + page);
      blogOther.value = response.data.data.data;
    };

    function on_click(page, id, group) {
      window.location =
        "blogdetail?page=" + page + "&group=" + group + "&id=" + id;
    }

    onMounted(() => {
      getData();
    });

    return { blogOther, on_click, group, page, id };
  },
};
</script>

<style>
#img-blog {
  width: auto;
  max-width: 100%;
  height: 500px;
  overflow: hidden;
  display: block;
  margin: auto;
}
#img-select {
  width: auto;
  height: 150px;
  overflow: hidden;
  display: block;
  margin: auto;
}
#img-background {
  background-color: #f5f5f5;
}
#img-other-blog {
  width: auto;
  height: 200px;
  overflow: hidden;
  display: block;
  margin: auto;
}
#text-detail {
  letter-spacing: 0;
}
#img-resize {
  width: 50px;
  height: 50px;
}
</style>
