<template>
  <div>
    <Banner msg="เทคโนโลยี" img="images/earth-g.jpg" />

    <div class="list-wrapper bg-grey-2">
      <div class="container box">
        <div class="row padd-90">
          <div class="col-xs-12 col-md-6 col-md-push-3">
            <Details />
          </div>
          <div class="col-xs-12 col-md-3 col-md-pull-6">
            <div class="right-sidebar">
              <TechnologySideBar />
            </div>
          </div>
          <Contact
            :user_name="contact.user_name"
            :user_telephone="contact.user_telephone"
            :user_line="contact.user_line"
            :user_facebook="contact.user_facebook"
            :user_instragram="contact.user_instragram"
            :researcher_innovation_link="contact.researcher_innovation_link"
            :user_image_cover="contact.user_image_cover"
          />
          <Other
            topic_name="ผลิตภัณฑ์อื่นๆ"
            items_link_name="technologydetail?page=1&group=2&id="
            :items_id1="other1.researcher_technology_id"
            :items_gird_name1="other1.researcher_technology_name"
            :items_image_cover1="other1.researcher_technology_image_cover_link"
            :items_id2="other2.researcher_technology_id"
            :items_gird_name2="other2.researcher_technology_name"
            :items_image_cover2="other2.researcher_technology_image_cover_link"
            :items_id3="other3.researcher_technology_id"
            :items_gird_name3="other3.researcher_technology_name"
            :items_image_cover3="other3.researcher_technology_image_cover_link"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { onMounted, ref } from "vue";
import axios from "axios";
import { BASE_API_URL } from "../../constants";

import Banner from "../../components/Banner.vue";
import TechnologySideBar from "../../components/Product/Technology/TechnologySideBar.vue";
import Details from "../../components/Product/TechnologyDetail/Details.vue";
import Contact from "../../components/Contact.vue";
import Other from "../../components/Other.vue";

export default {
  name: "TechnologyDetail",
  components: {
    Banner,
    Details,
    TechnologySideBar,
    Contact,
    Other,
  },
  setup() {
    const contact = ref([]);
    const other1 = ref([]);
    const other2 = ref([]);
    const other3 = ref([]);

    let page = window.location.search.substr(6, 1);

    let group = window.location.search;
    group = group.split("=");
    group = group[2];
    group = group.substring(0, group.length - 3);

    let id = window.location.search;
    id = id.split("=");
    id = id[3];

    const getData = async () => {
      const responseOther = await axios.get(
        `${BASE_API_URL}/innovation-product/researcherTechnologyAll??page=` +
          page +
          "&group=0&id=0"
      );
      other1.value = responseOther.data.data[0];
      other2.value = responseOther.data.data[1];
      other3.value = responseOther.data.data[2];

      const response = await axios.get(
        `${BASE_API_URL}/innovation-product/researcherTechnologyDetail/${id}`
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
      other1,
      other2,
      other3,
    };
  },
};
</script>

<style></style>
