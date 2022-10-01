<template>
  <div>
    <Banner
      msg="การบริการ"
      img="https://trinitytrip.com/image/community/community_65c1e6a429bf773686649de04dfddbb8_20211122064844000000.jpg"
    />
    <div class="list-wrapper bg-grey-2">
      <div class="container box">
        <div class="row padd-90">
          <div class="col-xs-12 col-md-6 col-md-push-3">
            <Details />
          </div>
          <div class="col-xs-12 col-md-3 col-md-pull-6">
            <div class="right-sidebar">
              <BusinessServiceSideBar />
            </div>
          </div>
          <Contact
            :user_name="contact.user_name"
            :user_telephone="contact.user_telephone"
            :user_line="contact.user_line"
            :user_facebook="contact.user_facebook"
            :user_instragram="contact.user_instragram"
            :bussiness_service_link="contact.bussiness_service_link"
            :user_image_cover="contact.user_image_cover"
          />
          <Other />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { onMounted, ref } from "vue";
import axios from "axios";
import { BASE_API_URL } from "../../../constants";

import Banner from "../../../components/Banner.vue";
import BusinessServiceSideBar from "../../../components/Business/BusinessService/BusinessServiceSideBar.vue";

import Details from "../../../components/Business/BusinessServiceDetail/Details.vue";
import Contact from "../../../components/Contact.vue";
import Other from "../../../components/Business/BusinessServiceDetail/Other.vue";

export default {
  name: "BusinessServiceDetailPage",

  components: {
    Banner,
    Details,
    BusinessServiceSideBar,
    Contact,
    Other,
  },
  setup() {
    const contact = ref([]);

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
        `${BASE_API_URL}/businesstourism/BusinessServiceDetail/` + id
      );
      contact.value = response.data.data[0];
    };

    onMounted(() => {
      getData();
    });

    return {
      page,
      group,
      contact,
    };
  },
};
</script>

<style></style>
