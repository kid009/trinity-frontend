<template>
  <div class="productdetail">
    <BannerSearch
      msg="นวัฒกรรมผลิตภัณฑ์"
      img="images/floating-market_1.jpg"
      msgplace="พิมพ์นวัตกรรมผลิตภัณฑ์การค้นหา"
      page="1"
      namepage="product"
    />

    <div class="list-wrapper bg-grey-2">
      <div class="container box">
        <div class="row padd-90">
          <SideBar />
          <Details />
          <Contact
            v-if="page == 1"
            :user_name="contact.user_name"
            :user_telephone="contact.user_telephone"
            :user_line="contact.user_line"
            :user_facebook="contact.user_facebook"
            :user_instragram="contact.user_instragram"
            :researcher_innovation_link="contact.researcher_innovation_link"
            :user_image_cover="contact.user_image_cover"
          />
          <Contact
            v-else-if="page == 2"
            :user_name="contact.user_name"
            :user_telephone="contact.user_telephone"
            :user_line="contact.user_line"
            :user_facebook="contact.user_facebook"
            :user_instragram="contact.user_instragram"
            :researcher_innovation_link="contact.researcher_innovation_link"
            :user_image_cover="contact.user_image_cover"
          />
          <Contact
            v-else-if="page == 3"
            :user_name="contact.user_name"
            :user_telephone="contact.user_telephone"
            :user_line="contact.user_line"
            :user_facebook="contact.user_facebook"
            :user_instragram="contact.user_instragram"
            :researcher_innovation_link="contact.researcher_innovation_link"
            :user_image_cover="contact.user_image_cover"
          />
          <Contact
            v-else-if="page == 4"
            :user_name="contact.user_name"
            :user_telephone="contact.user_telephone"
            :user_line="contact.user_line"
            :user_facebook="contact.user_facebook"
            :user_instragram="contact.user_instragram"
            :researcher_innovation_link="contact.researcher_innovation_link"
            :user_image_cover="contact.user_image_cover"
          />
          <Contact
            v-else-if="page == 5"
            :user_name="contact.user_name"
            :user_telephone="contact.user_telephone"
            :user_line="contact.user_line"
            :user_facebook="contact.user_facebook"
            :user_instragram="contact.user_instragram"
            :researcher_innovation_link="contact.researcher_innovation_link"
            :user_image_cover="contact.user_image_cover"
          />
          <Contact
            v-else-if="page == 6"
            :user_name="contact.user_name"
            :user_telephone="contact.user_telephone"
            :user_line="contact.user_line"
            :user_facebook="contact.user_facebook"
            :user_instragram="contact.user_instragram"
            :researcher_innovation_link="contact.researcher_innovation_link"
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
import { BASE_API_URL } from "../../constants";

import BannerSearch from "../../components/BannerSearch.vue";
import SideBar from "../../components/Product/SideBar.vue";
import Details from "../../components/Product/ProductDetail/Details.vue";
import Contact from "../../components/Contact.vue";
import Other from "../../components/Product/ProductDetail/Other.vue";

export default {
  name: "ProductDetail",
  components: {
    BannerSearch,
    Details,
    SideBar,
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
      if (page == 1) {
        const response = await axios.get(
          `${BASE_API_URL}/innovation-product/researcherInnovationDetail/${id}`
        );
        contact.value = response.data.data[0];
      } else if (page == 2) {
        const responses = await axios.get(
          `${BASE_API_URL}/innovation-product/researcherTourismProductDetail/${id}`
        );
        contact.value = responses.data.data[0];
      } else if (page == 3) {
        const responsess = await axios.get(
          `${BASE_API_URL}/innovation-product/researcherTechnologyDetail/${id}`
        );
        contact.value = responsess.data.data[0];
      } else if (page == 4) {
        const responsesss = await axios.get(
          `${BASE_API_URL}/innovation-product/businessProductCommunityDetail/${id}`
        );
        contact.value = responsesss.data.data[0];
      } else if (page == 5) {
        const responsessss = await axios.get(
          `${BASE_API_URL}/innovation-product/businessProductDetail/${id}`
        );
        contact.value = responsessss.data.data[0];
      } else if (page == 6) {
        const responsesssss = await axios.get(
          `${BASE_API_URL}/innovation-product/productDetail/${id}`
        );
        contact.value = responsesssss.data.data[0];
      }
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
