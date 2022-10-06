<template>
  <div class="col-xs-12 col-sm-8 col-md-9">
    <div class="clearfix grid-content">
      <div v-if="page == 'tourismExperience'">
        <div v-for="items in GirdMenu" :key="items" class="list-item-entry">
          <div>
            <div class="hotel-item style-3 bg-white">
              <div class="table-view">
                <div class="radius-top cell-view">
                  <a
                    :href="
                      'blogdetail?page=' +
                      page +
                      '&group=' +
                      items.tourism_experience_group_id +
                      '&id=' +
                      items.tourism_experience_id
                    "
                  >
                    <img
                      id="img-grid"
                      :src="items.tourism_experience_image_cover"
                      alt=""
                    />
                  </a>
                </div>
                <div class="title hotel-middle clearfix cell-view">
                  <h5>
                    <b id="letter-blog"
                      ><a
                        :href="
                          'blogdetail?page=' +
                          page +
                          '&group=' +
                          items.tourism_experience_group_id +
                          '&id=' +
                          items.tourism_experience_id
                        "
                        >{{ items.tourism_experience_name }}</a
                      ></b
                    >
                  </h5>
                  <p class="f-14 grid-hidden"></p>
                </div>
                <div class="title hotel-right clearfix cell-view"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div v-if="page == 'tourismKnowhow'">
        <div v-for="items in GirdMenu" :key="items" class="list-item-entry">
          <div>
            <div class="hotel-item style-3 bg-white">
              <div class="table-view">
                <div class="radius-top cell-view">
                  <a
                    :href="
                      'blogdetail?page=' +
                      page +
                      '&group=' +
                      items.tourism_knowhow_group_id +
                      '&id=' +
                      items.tourism_knowhow_id
                    "
                  >
                    <img
                      id="img-grid"
                      :src="items.tourism_knowhow_image_cover"
                      alt=""
                    />
                  </a>
                </div>
                <div class="title hotel-middle clearfix cell-view">
                  <h5>
                    <b id="letter-blog"
                      ><a
                        :href="
                          'blogdetail?page=' +
                          page +
                          '&group=' +
                          items.tourism_knowhow_group_id +
                          '&id=' +
                          items.tourism_knowhow_id
                        "
                        >{{ items.tourism_knowhow_name }}</a
                      ></b
                    >
                  </h5>
                  <p class="f-14 grid-hidden"></p>
                </div>
                <div class="title hotel-right clearfix cell-view"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div v-if="page == 'tourismImpressive'">
        <div v-for="items in GirdMenu" :key="items" class="list-item-entry">
          <div>
            <div class="hotel-item style-3 bg-white">
              <div class="table-view">
                <div class="radius-top cell-view">
                  <a
                    :href="
                      'blogdetail?page=' +
                      page +
                      '&group=' +
                      items.tourism_impressive_group_id +
                      '&id=' +
                      items.tourism_impressive_id
                    "
                  >
                    <img
                      id="img-grid"
                      :src="items.tourism_impressive_image_cover"
                      alt=""
                    />
                  </a>
                </div>
                <div class="title hotel-middle clearfix cell-view">
                  <h5>
                    <b id="letter-blog"
                      ><a
                        :href="
                          'blogdetail?page=' +
                          page +
                          '&group=' +
                          items.tourism_impressive_group_id +
                          '&id=' +
                          items.tourism_impressive_id
                        "
                        >{{ items.tourism_impressive_name }}</a
                      ></b
                    >
                  </h5>
                  <p class="f-14 grid-hidden"></p>
                </div>
                <div class="title hotel-right clearfix cell-view"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div v-if="page == 'tourismStory'">
        <div v-for="items in GirdMenu" :key="items" class="list-item-entry">
          <div>
            <div class="hotel-item style-3 bg-white">
              <div class="table-view">
                <div class="radius-top cell-view">
                  <a
                    :href="
                      'blogdetail?page=' +
                      page +
                      '&group=' +
                      items.tourism_story_group_id +
                      '&id=' +
                      items.tourism_story_id
                    "
                  >
                    <img
                      id="img-grid"
                      :src="items.tourism_story_image_cover"
                      alt=""
                    />
                  </a>
                </div>
                <div class="title hotel-middle clearfix cell-view">
                  <h5>
                    <b id="letter-blog"
                      ><a
                        :href="
                          'blogdetail?page=' +
                          page +
                          '&group=' +
                          items.tourism_story_group_id +
                          '&id=' +
                          items.tourism_story_id
                        "
                        >{{ items.tourism_story_name }}</a
                      ></b
                    >
                  </h5>
                  <p class="f-14 grid-hidden"></p>
                </div>
                <div class="title hotel-right clearfix cell-view"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <Pagination />
  </div>
</template>

<script>
import Pagination from "./Pagination.vue";

export default {
  name: "GirdMenu",
  components: {
    Pagination,
  },
  props: {
    GirdMenu: Object,
    page: String,
  },
  setup() {
    return {};
  },
};
</script>

<style scoped>
#letter-blog {
  letter-spacing: 0;
}
#img-grid {
  height: 250px;
  width: 100%;
}
</style>
