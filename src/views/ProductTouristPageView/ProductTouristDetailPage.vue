<template>
  <div>
    <!-- <BannerSearch
      msg="นวัตกรรมผลิตภัณฑ์"
      img="images/floating-market_1.jpg"
      msgplace="พิมพ์นวัตกรรมผลิตภัณฑ์ที่ต้องการค้นหา"
      page="1"
      namepage="producttouristindexpage"
    /> -->
    <Banner
      msg="นวัตกรรมการท่องเที่ยวโดยชุมชน"
      img="images/baner/success1.jpg"
    />

    <div class="list-wrapper bg-grey-2">
      <div class="container box">
        <div class="row padd-90">
          <div class="col-xs-12 col-md-6 col-md-push-3">
            <Details />
          </div>
          <div class="col-xs-12 col-md-3 col-md-pull-6">
            <div class="right-sidebar">
              <ProductTouristSideBar />
            </div>
          </div>

          <Contact
            :user_name="contact.user_name"
            :user_telephone="contact.user_telephone"
            :user_email="contact.user_email"
            :user_line="contact.user_line"
            :user_facebook="contact.user_facebook"
            :user_instragram="contact.user_instragram"
            :researcher_innovation_link="contact.user_link"
            :user_image_cover="contact.user_image_cover"
          />

          <Other
            v-if="page == 'product'"
            topic_name="ผลิตภัณฑ์อื่นๆ"
            :items_link_name="
              'producttouristdetailpage?page=' +
              page +
              '&group=' +
              Other1.product_group_id +
              '&id='
            "
            :items_id1="Other1.product_id"
            :items_gird_name1="Other1.product_name"
            :items_image_cover1="Other1.product_image_cover_link"
            :items_id2="Other2.product_id"
            :items_gird_name2="Other2.product_name"
            :items_image_cover2="Other2.product_image_cover_link"
            :items_id3="Other3.product_id"
            :items_gird_name3="Other3.product_name"
            :items_image_cover3="Other3.product_image_cover_link"
          />
          <Other
            v-else-if="page == 'researcher_technology'"
            topic_name="ผลิตภัณฑ์อื่นๆ"
            :items_link_name="
              'producttouristdetailpage?page=' +
              page +
              '&group=' +
              Other1.researcher_technology_group_id +
              '&id='
            "
            :items_id1="Other1.researcher_technology_id"
            :items_gird_name1="Other1.researcher_technology_name"
            :items_image_cover1="Other1.researcher_technology_image_cover_link"
            :items_id2="Other2.researcher_technology_id"
            :items_gird_name2="Other2.researcher_technology_name"
            :items_image_cover2="Other2.researcher_technology_image_cover_link"
            :items_id3="Other3.researcher_technology_id"
            :items_gird_name3="Other3.researcher_technology_name"
            :items_image_cover3="Other3.researcher_technology_image_cover_link"
          />
          <Other
            v-else-if="page == 'researcher_innovation'"
            topic_name="ผลิตภัณฑ์อื่นๆ"
            :items_link_name="
              'producttouristdetailpage?page=' +
              page +
              '&group=' +
              Other1.researcher_innovation_group_id +
              '&id='
            "
            :items_id1="Other1.researcher_innovation_id"
            :items_gird_name1="Other1.researcher_innovation_name"
            :items_image_cover1="Other1.researcher_innovation_image_cover_link"
            :items_id2="Other2.researcher_innovation_id"
            :items_gird_name2="Other2.researcher_innovation_name"
            :items_image_cover2="Other2.researcher_innovation_image_cover_link"
            :items_id3="Other3.researcher_innovation_id"
            :items_gird_name3="Other3.researcher_innovation_name"
            :items_image_cover3="Other3.researcher_innovation_image_cover_link"
          />
          <Other
            v-else-if="page == 'researcher_tourism_product'"
            topic_name="ผลิตภัณฑ์อื่นๆ"
            :items_link_name="
              'producttouristdetailpage?page=' +
              page +
              '&group=' +
              Other1.researcher_tourism_product_group_id +
              '&id='
            "
            :items_id1="Other1.researcher_tourism_product_id"
            :items_gird_name1="Other1.researcher_tourism_product_name"
            :items_image_cover1="
              Other1.researcher_tourism_product_image_cover_link
            "
            :items_id2="Other2.researcher_tourism_product_id"
            :items_gird_name2="Other2.researcher_tourism_product_name"
            :items_image_cover2="
              Other2.researcher_tourism_product_image_cover_link
            "
            :items_id3="Other3.researcher_tourism_product_id"
            :items_gird_name3="Other3.researcher_tourism_product_name"
            :items_image_cover3="
              Other3.researcher_tourism_product_image_cover_link
            "
          />
          <Other
            v-else-if="page == 'bussiness_product'"
            topic_name="ผลิตภัณฑ์อื่นๆ"
            :items_link_name="
              'producttouristdetailpage?page=' +
              page +
              '&group=' +
              Other1.bussiness_product_group_id +
              '&id='
            "
            :items_id1="Other1.bussiness_product_id"
            :items_gird_name1="Other1.bussiness_product_name"
            :items_image_cover1="Other1.bussiness_product_image_cover_link"
            :items_id2="Other2.bussiness_product_id"
            :items_gird_name2="Other2.bussiness_product_name"
            :items_image_cover2="Other2.bussiness_product_image_cover_link"
            :items_id3="Other3.bussiness_product_id"
            :items_gird_name3="Other3.bussiness_product_name"
            :items_image_cover3="Other3.bussiness_product_image_cover_link"
          />
          <Other
            v-else-if="page == 'bussiness_product_tourism'"
            topic_name="ผลิตภัณฑ์อื่นๆ"
            :items_link_name="
              'producttouristdetailpage?page=' +
              page +
              '&group=' +
              Other1.bussiness_product_tourism_group_id +
              '&id='
            "
            :items_id1="Other1.bussiness_product_tourism_id"
            :items_gird_name1="Other1.bussiness_product_tourism_name"
            :items_image_cover1="
              Other1.bussiness_product_tourism_image_cover_link
            "
            :items_id2="Other2.bussiness_product_tourism_id"
            :items_gird_name2="Other2.bussiness_product_tourism_name"
            :items_image_cover2="
              Other2.bussiness_product_tourism_image_cover_link
            "
            :items_id3="Other3.bussiness_product_tourism_id"
            :items_gird_name3="Other3.bussiness_product_tourism_name"
            :items_image_cover3="
              Other3.bussiness_product_tourism_image_cover_link
            "
          />
          <Other
            v-else-if="page == 'bussiness_product_community'"
            topic_name="ผลิตภัณฑ์อื่นๆ"
            :items_link_name="
              'producttouristdetailpage?page=' +
              page +
              '&group=' +
              Other1.bussiness_product_community_group_id +
              '&id='
            "
            :items_id1="Other1.bussiness_product_community_id"
            :items_gird_name1="Other1.bussiness_product_community_name"
            :items_image_cover1="
              Other1.bussiness_product_community_image_cover_link
            "
            :items_id2="Other2.bussiness_product_community_id"
            :items_gird_name2="Other2.bussiness_product_community_name"
            :items_image_cover2="
              Other2.bussiness_product_community_image_cover_link
            "
            :items_id3="Other3.bussiness_product_community_id"
            :items_gird_name3="Other3.bussiness_product_community_name"
            :items_image_cover3="
              Other3.bussiness_product_community_image_cover_link
            "
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
// import BannerSearch from "../../components/BannerSearch.vue";
import ProductTouristSideBar from "../../components/ProductTouristPageCompo/ProductTouristPage/ProductTouristSideBar.vue";

import Details from "../../components/ProductTouristPageCompo/ProductTouristDetail/Details.vue";
import Contact from "../../components/Contact.vue";
import Other from "../../components/Other.vue";

export default {
  name: "ProductTouristDetailPage",

  components: {
    Banner,
    // BannerSearch,
    ProductTouristSideBar,
    Details,
    Contact,
    Other,
  },
  setup() {
    const contact = ref([]);

    const Other1 = ref([]);
    const Other2 = ref([]);
    const Other3 = ref([]);

    let page = window.location.search;
    page = page.split("=");
    page = page[1];
    page = page.substring(0, page.length - 6);

    let group = window.location.search;
    group = group.split("=");
    group = group[2];
    group = group.substring(0, group.length - 3);

    let id = window.location.search;
    id = id.split("=");
    id = id[3];

    const getData = async () => {
      const response = await axios.get(
        `${BASE_API_URL}/innovation-product/ProductAllDetail?page=` +
          page +
          "&group=" +
          group +
          "&id=" +
          id
      );
      contact.value = response.data.data[0];

      const responseOther = await axios.get(
        `${BASE_API_URL}/innovation-product/ProductAllOther/` + page
      );
      Other1.value = responseOther.data.data[0];
      Other2.value = responseOther.data.data[1];
      Other3.value = responseOther.data.data[2];
    };

    onMounted(() => {
      getData();
    });

    return {
      id,
      page,
      group,

      contact,

      Other1,
      Other2,
      Other3,
    };
  },
};
</script>

<style></style>
