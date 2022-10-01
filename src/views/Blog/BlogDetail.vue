<template>
  <div class="blogdetail">
    <Banner
      msg="BLOG"
      img="https://cdn.pixabay.com/photo/2015/05/31/11/25/girl-791177_960_720.jpg"
    />

    <div class="detail-wrapper">
      <div class="container box">
        <div class="row padd-90">
          <div class="col-xs-12 col-sm-10 col-sm-offset-1">
            <Content
              :blog_name="blog_name"
              :blog_province_name="blog_province_name"
              :blog_amphur_name="blog_amphur_name"
              :blog_tambon_name="blog_tambon_name"
              :imgAll="imgAll"
              :blog_detail="blog_detail"
              :blog_detail_en="blog_detail_en"
              :blog_vdo="blog_vdo"
              :blog_link="blog_link"
            />
            <Other
              topic_name="สถานที่อื่นๆ"
              :items_link_name="'blogdetail?page=' + page + '&group=0&id='"
              :items_id1="blogOther1id"
              :items_gird_name1="blogOther1name"
              :items_image_cover1="blogOther1img"
              :items_id2="blogOther2id"
              :items_gird_name2="blogOther2name"
              :items_image_cover2="blogOther2img"
              :items_id3="blogOther3id"
              :items_gird_name3="blogOther3name"
              :items_image_cover3="blogOther3img"
            />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
// @ is an alias to /src

import Banner from "../../components/Banner.vue";
import Content from "../../components/Blog/BlogDetail/Content.vue";
import Other from "../../components/Other.vue";

import { onMounted, ref } from "vue";
import axios from "axios";
import { BASE_API_URL } from "../../constants";

export default {
  name: "blogdetail",
  components: {
    Banner,
    Content,
    Other,
  },
  setup() {
    const blog_name = ref([]);
    const blog_province_name = ref([]);
    const blog_amphur_name = ref([]);
    const blog_tambon_name = ref([]);
    const blog_image_cover_link = ref([]);
    const blog_detail = ref([]);
    const blog_detail_en = ref([]);
    const blog_vdo = ref([]);
    const blog_link = ref([]);

    const blogOther1id = ref([]);
    const blogOther1name = ref([]);
    const blogOther1img = ref([]);

    const blogOther2id = ref([]);
    const blogOther2name = ref([]);
    const blogOther2img = ref([]);

    const blogOther3id = ref([]);
    const blogOther3name = ref([]);
    const blogOther3img = ref([]);

    const imgAll = ref([]);
    const Images = ref([]);

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

    let linkvdo = "";
    const changLinkvdo = (linkvdo) => {
      if (linkvdo != null) {
        if (linkvdo.includes("https://www.youtube.com/watch?v=")) {
          blog_vdo.value = linkvdo.slice(32);
        } else if (linkvdo.includes("https://youtu.be/")) {
          blog_vdo.value = linkvdo.slice(17);
        } else if (linkvdo.includes("https://www.youtube.com/embed/")) {
          blog_vdo.value = linkvdo.slice(30);
        }
      }
    };

    const getData = async () => {
      const response = await axios.get(
        `${BASE_API_URL}/blog/` + page + "Detail/" + id
      );

      if (page == "tourismExperience") {
        blog_name.value = response.data.data[0].tourism_experience_name;
        blog_province_name.value = response.data.data[0].province_name;
        blog_amphur_name.value = response.data.data[0].amphur_name;
        blog_tambon_name.value = response.data.data[0].tambon_name;
        blog_image_cover_link.value =
          response.data.data[0].tourism_experience_image_cover_link;
        blog_detail.value = response.data.data[0].tourism_experience_detail;
        blog_detail_en.value =
          response.data.data[0].tourism_experience_detail_en;
        // blog_vdo.value = response.data.data[0].tourism_experience_vdo;
        blog_link.value = response.data.data[0].tourism_experience_link;

        linkvdo = response.data.data[0].tourism_experience_vdo;
        changLinkvdo(linkvdo);

        imgAll.value.push(
          response.data.data[0].tourism_experience_image_cover_link
        );

        // const responseImages = await axios.get(
        //   `${BASE_API_URL}/innovation-product/productImages/` + id
        // );
        // Images.value = responseImages.data.data;

        // for (let key in responseImages.data.data) {
        //   let imageAll = responseImages.data.data[key];
        //   imgAll.value.push(imageAll.community_image_file_link);
        // }
      } else if (page == "tourismKnowhow") {
        blog_name.value = response.data.data[0].tourism_knowhow_name;
        blog_province_name.value = response.data.data[0].province_name;
        blog_amphur_name.value = response.data.data[0].amphur_name;
        blog_tambon_name.value = response.data.data[0].tambon_name;
        blog_image_cover_link.value =
          response.data.data[0].tourism_knowhow_image_cover_link;
        blog_detail.value = response.data.data[0].tourism_knowhow_detail;
        blog_detail_en.value = response.data.data[0].tourism_knowhow_detail_en;
        // blog_vdo.value = response.data.data[0].tourism_knowhow_vdo;
        blog_link.value = response.data.data[0].tourism_knowhow_link;

        linkvdo = response.data.data[0].tourism_knowhow_vdo;
        changLinkvdo(linkvdo);

        imgAll.value.push(
          response.data.data[0].tourism_knowhow_image_cover_link
        );
      } else if (page == "tourismImpressive") {
        blog_name.value = response.data.data[0].tourism_impressive_name;
        blog_province_name.value = response.data.data[0].province_name;
        blog_amphur_name.value = response.data.data[0].amphur_name;
        blog_tambon_name.value = response.data.data[0].tambon_name;
        blog_image_cover_link.value =
          response.data.data[0].tourism_impressive_image_cover_link;
        blog_detail.value = response.data.data[0].tourism_impressive_detail;
        blog_detail_en.value =
          response.data.data[0].tourism_impressive_detail_en;
        // blog_vdo.value = response.data.data[0].tourism_impressive_vdo;
        blog_link.value = response.data.data[0].tourism_impressive_link;

        linkvdo = response.data.data[0].tourism_impressive_vdo;
        changLinkvdo(linkvdo);

        imgAll.value.push(
          response.data.data[0].tourism_impressive_image_cover_link
        );
      } else if (page == "tourismStory") {
        blog_name.value = response.data.data[0].tourism_story_name;
        blog_province_name.value = response.data.data[0].province_name;
        blog_amphur_name.value = response.data.data[0].amphur_name;
        blog_tambon_name.value = response.data.data[0].tambon_name;
        blog_image_cover_link.value =
          response.data.data[0].tourism_story_image_cover_link;
        blog_detail.value = response.data.data[0].tourism_story_detail;
        blog_detail_en.value = response.data.data[0].tourism_story_detail_en;
        // blog_vdo.value = response.data.data[0].tourism_story_vdo;
        blog_link.value = response.data.data[0].tourism_story_link;

        linkvdo = response.data.data[0].tourism_story_vdo;
        changLinkvdo(linkvdo);

        imgAll.value.push(response.data.data[0].tourism_story_image_cover_link);
      }

      const responseOther = await axios.get(
        `${BASE_API_URL}/blog/` + page + "?page=1&group=0&id=0"
      );

      if (page == "tourismExperience") {
        blogOther1id.value = responseOther.data.data[0].tourism_experience_id;
        blogOther1name.value =
          responseOther.data.data[0].tourism_experience_name;
        blogOther1img.value =
          responseOther.data.data[0].tourism_experience_image_cover;

        blogOther2id.value = responseOther.data.data[1].tourism_experience_id;
        blogOther2name.value =
          responseOther.data.data[1].tourism_experience_name;
        blogOther2img.value =
          responseOther.data.data[1].tourism_experience_image_cover;

        blogOther3id.value = responseOther.data.data[2].tourism_experience_id;
        blogOther3name.value =
          responseOther.data.data[2].tourism_experience_name;
        blogOther3img.value =
          responseOther.data.data[2].tourism_experience_image_cover;
      } else if (page == "tourismKnowhow") {
        blogOther1id.value = responseOther.data.data[0].tourism_knowhow_id;
        blogOther1name.value = responseOther.data.data[0].tourism_knowhow_name;
        blogOther1img.value =
          responseOther.data.data[0].tourism_knowhow_image_cover;

        blogOther2id.value = responseOther.data.data[1].tourism_knowhow_id;
        blogOther2name.value = responseOther.data.data[1].tourism_knowhow_name;
        blogOther2img.value =
          responseOther.data.data[1].tourism_knowhow_image_cover;

        blogOther3id.value = responseOther.data.data[2].tourism_knowhow_id;
        blogOther3name.value = responseOther.data.data[2].tourism_knowhow_name;
        blogOther3img.value =
          responseOther.data.data[2].tourism_knowhow_image_cover;
      } else if (page == "tourismImpressive") {
        blogOther1id.value = responseOther.data.data[0].tourism_impressive_id;
        blogOther1name.value =
          responseOther.data.data[0].tourism_impressive_name;
        blogOther1img.value =
          responseOther.data.data[0].tourism_impressive_image_cover;

        blogOther2id.value = responseOther.data.data[1].tourism_impressive_id;
        blogOther2name.value =
          responseOther.data.data[1].tourism_impressive_name;
        blogOther2img.value =
          responseOther.data.data[1].tourism_impressive_image_cover;

        blogOther3id.value = responseOther.data.data[2].tourism_impressive_id;
        blogOther3name.value =
          responseOther.data.data[2].tourism_impressive_name;
        blogOther3img.value =
          responseOther.data.data[2].tourism_impressive_image_cover;
      } else if (page == "tourismStory") {
        blogOther1id.value = responseOther.data.data[0].tourism_story_id;
        blogOther1name.value = responseOther.data.data[0].tourism_story_name;
        blogOther1img.value =
          responseOther.data.data[0].tourism_story_image_cover;

        blogOther2id.value = responseOther.data.data[1].tourism_story_id;
        blogOther2name.value = responseOther.data.data[1].tourism_story_name;
        blogOther2img.value =
          responseOther.data.data[1].tourism_story_image_cover;

        blogOther3id.value = responseOther.data.data[2].tourism_story_id;
        blogOther3name.value = responseOther.data.data[2].tourism_story_name;
        blogOther3img.value =
          responseOther.data.data[2].tourism_story_image_cover;
      }
    };

    onMounted(() => {
      getData();
    });

    return {
      linkvdo,
      changLinkvdo,
      id,
      page,
      group,

      blogOther1id,
      blogOther1name,
      blogOther1img,

      blogOther2id,
      blogOther2name,
      blogOther2img,

      blogOther3id,
      blogOther3name,
      blogOther3img,

      blog_name,
      blog_province_name,
      blog_amphur_name,
      blog_tambon_name,
      blog_image_cover_link,
      imgAll,
      Images,
      blog_detail,
      blog_detail_en,
      blog_vdo,
      blog_link,
    };
  },
};
</script>

<style scoped></style>
