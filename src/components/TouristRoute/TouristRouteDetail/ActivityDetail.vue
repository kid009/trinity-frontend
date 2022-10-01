<template>
  <Banner msg="กิจกรรม" img="images/community/commu6.jpg" />
  <!-------------------------------------- ----------------------------------------->

  <div class="list-wrapper bg-grey-2">
    <div class="container box">
      <div class="row">
        <div class="col-xs-12 col-sm-8 col-md-9">
          <div class="grid-content block-content type-2 clearfix">
            <div class="list-item-entry">
              <div class="hotel-item style-10 bg-white">
                <div class="table-view">
                  <div class="title hotel-middle cell-view">
                    <div class="col-xs-12 col-md-12">
                      <div
                        class="detail-content color-1"
                        v-for="items in activity.slice(0, 1)"
                        v-bind:key="items.activity_id"
                        
                      >
                        <div>
                          <!--------------------------- --------------------------------->

                          <div class="container">
                            <div class="row">
                              <div
                                class="
                                  col-xs-12 col-sm-12 col-md-10 col-md-offset-1
                                "
                              >
                                <div class="blog-list">
                                  <div class="blog-list-entry style-2">
                                    <div class="blog-list-top">
                                      <img
                                        class="
                                          img-responsive img-full img-sizes12
                                        "
                                        :src="items.activity_image_cover"
                                        alt=""
                                      />
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>

                          <!---------------------------- ------------------------------>

                          <div class="detail-content-block">
                            <h3 id="page-detail" class="gd-title">
                              {{ items.activity_name }}
                            </h3>
                            <p
                              id="page-detail"
                              v-html="items.activity_detail"
                            ></p>
                          </div>

                          <div class="detail-top">
                            <h3
                              style="text-align: center"
                              id="page-detail"
                              class="subtitle color-dr-black-2"
                            >
                              วิดีโอแนะนำ
                            </h3>
                            <br />
                            <div
                              class="embed-responsive embed-responsive-16by9"
                            >
                              <div>
                                <iframe
                                  width="100%"
                                  height="430px"
                                  :src="items.activity_vdo"
                                  title="YouTube video player"
                                  frameborder="0"
                                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                  allowfullscreen
                                ></iframe>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="col-xs-12 col-sm-4 col-md-3">
          <div class="sidebar bg-white clearfix">
            <div class="sidebar-block">
              <div class="search-inputs">
             
                <ContactDetail />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Banner from "../../Banner.vue";
import ContactDetail from "./ContactDetail.vue";

import { onMounted, ref } from "vue";
import axios from "axios";
import { BASE_API_URL } from "../../../constants";

export default {
  name: "ActivityDetail",
  components: {
    ContactDetail,
    Banner,
  },
  setup() {
    const activity = ref([]);

    let page = window.location.search.substr(6, 1);

    let group = window.location.search;
    group = group.split("=");
    group = group[2];
    group = group.substring(0, group.length - 3);

    let id = window.location.search;
    id = id.split("=");
    id = id[3];

    const getData = async () => {
      const response = await axios.get(
        `${BASE_API_URL}/tourism-route/activitDetail/` + id
      );
      activity.value = response.data.data;
    };

    onMounted(() => {
      getData();
    });

    return { activity, page, group, id };
  },
};
</script>


<style scoped>
.img-sizes12 {
  height: 550px;
}

#img-travel-detail {
  width: 100%;
  height: 100px;
}

#letter-travel-detail {
  letter-spacing: 0;
  text-shadow: black 0.1em 0.1em 0.2em;
}
#h2-topic-page-detail {
  letter-spacing: 0;
  text-shadow: black 0.1em 0.1em 0.2em;
}

#img_main-travel-detail {
  width: 100%;
  height: 100%;
  max-width: 1200px;
  max-height: 600px;
  margin: auto;
  display: block;
}

.img-resize img {
  width: 61px;
  height: auto;
}

.img-resize {
  width: 61px;
  height: 61px;
  overflow: hidden;
  text-align: center;
}
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
  background-color: #f5f5f5;
}
#page-detail {
  letter-spacing: 0;
}

.img-sizessss {
  width: 100%;
  height: 500px;
}
</style>
