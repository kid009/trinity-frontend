<template>
  <div class="touristroute">
    <Banner msg="เส้นทางท่องเที่ยวแนะนำ" img="images/travel10.jpg" />
    <div class="bg-detail"><Detail /></div>

    <!-- <div class="list-wrapper bg-grey-2">
      
      <div class="container box">
        <div class="row padd-90">
          <SideBar />
          
          <div class="layout-two bg-grey-2">
            <div class="container box">
              <div class="row padd-90">
                <Detail />
                <Contact
                  :user_name="contact.tourism_sub_route_contact_name"
                  :user_telephone="contact.tourism_sub_route_telephone"
                  :user_line="contact.user_line"
                  :user_facebook="contact.tourism_sub_route_facebook"
                  :user_instragram="contact.user_instragram"
                  :researcher_innovation_link="
                    contact.researcher_innovation_link
                  "
                  :user_image_cover="contact.tourism_sub_route_contact_image"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div> -->
  </div>
</template>
<script>
import { onMounted, ref } from "vue";
import axios from "axios";
import { BASE_API_URL } from "../../constants";

import Banner from "../../components/Banner.vue";
// import SideBar from "../../components/TouristRoute/SideBar.vue";
import Detail from "../../components/TouristRoute/TouristRouteDetail/Detail.vue";
// import Contact from "../../components/Contact.vue";

export default {
  name: "TouristRouteDetail",
  components: {
    Banner,
    // SideBar,
    Detail,
    // Contact,
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
        `${BASE_API_URL}/tourism-route/subRoute/` + group
      );
      contact.value = response.data.data[0];
    };

    onMounted(() => {
      getData();
    });

    return {
      page,
      group,
      id,
      contact,
    };
  },
};
</script>
<style scoped>
.bg-detail {
  background: white;
}
</style>