<template>
  <div class="container box padd-70-70">
    <div class="row">
      <div class="col-xs-12">
        <div class="col-md-4">
          <div class="padd-10-01">
            <vueper-slides
              ref="vueperslides1"
              :touchable="false"
              fade
              :autoplay="false"
              :bullets="false"
              @slide="
                $refs.vueperslides2.goToSlide($event.currentSlide.index, {
                  emit: false,
                })
              "
              fixed-height="340px"
            >
              <vueper-slide
                v-for="(slide, i) in imgAll"
                :key="i"
                :title="name"
                :image="slide"
                @click="() => showImg(index)"
              >
              </vueper-slide>
            </vueper-slides>

            <vueper-slides
              class="no-shadow thumbnails"
              ref="vueperslides2"
              @slide="
                $refs.vueperslides1.goToSlide($event.currentSlide.index, {
                  emit: false,
                })
              "
              :visible-slides="imgAll.length"
              fixed-height="75px"
              :bullets="false"
              :touchable="false"
              :gap="2.5"
              :arrows="false"
            >
              <vueper-slide
                v-for="(slide, i) in imgAll"
                :key="i"
                :image="slide"
                @click="$refs.vueperslides2.goToSlide(i)"
              >
              </vueper-slide>
            </vueper-slides>
            <vue-easy-lightbox
              :visible="visible"
              :imgs="imgAll"
              :index="index"
              @hide="handleHide"
              class="img-zindex"
            ></vue-easy-lightbox>
          </div>
        </div>
        <div class="col-md-8">
          <div class="hotel-item">
            <div class="row">
              <div class="col-xs-12">
                <div class="link-to">
                  <div class="col-md-4"></div>
                  <div class="col-md-2">
                    <a @click="changeTab(1)">
                      <h3 class="text_color_nav fontstyle">ข้อมูล</h3></a
                    >
                    <div class="vl"></div>
                  </div>
                  <div class="col-md-2">
                    <a @click="changeTab(2)">
                      <h3 class="text_color_nav fontstyle">ผู้จัดทำ</h3></a
                    >
                  </div>
                  <div class="col-md-4"></div>
                </div>
              </div>
            </div>
            <div class="row">
              <div class="col-xs-12">
                <div class="col-md-12">
                  <!-- <div class="hotel-items"> -->
                  <div v-show="Tab == 1">
                    <!-- <div class="row">
                        <div class="col-xs-12"> -->
                    <TabData
                      :community_name_link="'communitydetail?id='"
                      :community_id="community_id"
                      :images_community="images_community"
                      :community_name="community_name"
                      :idProduct="idProduct"
                      :link="link"
                      :qrcode="qrcode"
                      :detail="detail"
                      :imgAllApply="imgAllApply"
                    />
                    <!-- </div>
                      </div> -->
                  </div>
                  <div v-show="Tab == 2">
                    <TabContact
                      :user_name="contact.user_name"
                      :user_telephone="contact.user_telephone"
                      :user_email="contact.user_email"
                      :user_line="contact.user_line"
                      :user_facebook="contact.user_facebook"
                      :user_instragram="contact.user_instragram"
                      :researcher_innovation_link="contact.user_link"
                      :user_image_cover="contact.user_image_cover"
                    />
                  </div>
                  <!-- </div> -->
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { VueperSlides, VueperSlide } from "vueperslides";
import "vueperslides/dist/vueperslides.css";

import { onMounted, ref } from "vue";
import axios from "axios";
import { BASE_API_URL } from "../../../../constants";

import TabData from "../LearnningDetail/DetailTap/TabData.vue";
import TabContact from "../LearnningDetail/DetailTap/TabContact.vue";

import VueEasyLightbox from "vue-easy-lightbox";

export default {
  name: "LearningTourDetail",
  components: {
    VueperSlides,
    VueperSlide,
    TabData,
    TabContact,
    VueEasyLightbox,
  },
  // data: () => ({
  //   slides: [
  //     {
  //       title: "img",
  //       image:
  //         "https://cdn.pixabay.com/photo/2020/03/26/10/58/norway-4970080_960_720.jpg",
  //     },
  //   ],
  // }),
  data() {
    return {
      visible: false,
      index: 0, // default: 0
      imgs: [
        "https://via.placeholder.com/450.png/",
        { src: "https://via.placeholder.com/450.png/", title: "this is title" },
      ],
    };
  },
  methods: {
    showImg(index) {
      this.index = index;
      this.visible = true;
    },
    handleHide() {
      this.visible = false;
    },
  },
  setup() {
    const Tab = ref("1");

    const changeTab = (Tabs) => {
      Tab.value = Tabs;
    };

    let page = window.location.search.substr(6, 1);

    let group = window.location.search;
    group = group.split("=");
    group = group[2];
    group = group.substring(0, group.length - 3);

    let id = window.location.search;
    id = id.split("=");
    id = id[3];

    const community_id = ref([]);
    const images_community = ref([]);
    const community_name = ref([]);
    const community = ref([]);
    const idProduct = ref([]);
    const name = ref([]);
    const image = ref([]);
    const link = ref([]);
    const qrcode = ref([]);
    const detail = ref([]);
    const Images = ref([]);

    const imgAll = ref([]);

    const contact = ref([]);

    const vdo = ref([]);

    const imgAllApply = ref([]);
    const ImagesApply = ref([]);

    let linkvdo = "";
    const changLinkvdo = (linkvdo) => {
      if (linkvdo.includes("https://www.youtube.com/watch?v=")) {
        vdo.value = linkvdo.slice(32);
      } else if (linkvdo.includes("https://youtu.be/")) {
        vdo.value = linkvdo.slice(17);
      } else if (linkvdo.includes("https://www.youtube.com/embed/")) {
        vdo.value = linkvdo.slice(30);
      }
    };

    const getData = async () => {
      const response = await axios
        .get(
          `${BASE_API_URL}/innovation-product/researcherInnovationDetail/${id}`
        )
        .catch((error) => {
          console.log(error + "test");
        });
      //   image.value = response.data.data;
      community_id.value = response.data.data[0].community_id;
      contact.value = response.data.data[0];

      idProduct.value = response.data.data[0].researcher_innovation_id;

      link.value = response.data.data[0].researcher_innovation_link;
      qrcode.value = response.data.data[0].researcher_innovation_qrcode_link;
      detail.value = response.data.data[0].researcher_innovation_detail;
      linkvdo = response.data.data[0].researcher_innovation_vdo;
      changLinkvdo(linkvdo);

      const responsecommunity = await axios.get(
        `${BASE_API_URL}/community-tourism/communityDetail/` +
          community_id.value
      );
      // community.value = responsecommunity.data.data;
      images_community.value =
        responsecommunity.data.data[0].community_image_cover_link;
      community_name.value = responsecommunity.data.data[0].community_name;
      // console.log(responsecommunity.data.data[0].community_image_cover_link);

      const responseImg = await axios.get(
        `${BASE_API_URL}/innovation-product/researcherInnovationDetail/${id}`
      );
      image.value =
        responseImg.data.data[0].researcher_innovation_image_cover_link;
      name.value = responseImg.data.data[0].researcher_innovation_name;

      imgAll.value.push(
        responseImg.data.data[0].researcher_innovation_image_cover_link
      );

      const responseImages = await axios.get(
        `${BASE_API_URL}/innovation-product/researcherInnovationImages/${id}`
      );
      Images.value = responseImages.data.data;

      for (let key in responseImages.data.data) {
        let imageAll = responseImages.data.data[key];
        imgAll.value.push(imageAll.research_image_file_link);
      }

      const responseImagesApply = await axios.get(
        `${BASE_API_URL}/Researcher/OutputApplyImage?page=` +
          "researcher_innovation" +
          "&id=" +
          id
      );
      ImagesApply.value = responseImagesApply.data.data;

      for (let key in responseImagesApply.data.data) {
        let imageAll = responseImagesApply.data.data[key];
        imgAllApply.value.push(imageAll.research_image_file_link);
      }
      // console.log(imgAll.value);

      // const responsecontact = await axios.get(
      //   `${BASE_API_URL}/innovation-product/researcherInnovationDetail/${id}`
      // );
      // contact.value = responsecontact.data.data[0];
      // console.log(contact.value);
    };

    onMounted(() => {
      getData();
    });

    return {
      community_name,
      images_community,
      community,
      community_id,
      idProduct,
      name,
      image,
      link,
      qrcode,
      detail,
      //   image,
      Images,
      imgAll,

      Tab,
      changeTab,

      id,
      page,
      group,

      linkvdo,
      vdo,

      contact,

      imgAllApply,
      ImagesApply,
    };
  },
};
</script>

<style scoped>
h3:hover {
  transform: scale(1.1);
}
.img-zindex {
  z-index: 100000;
}
.padd-10-01 {
  margin-top: -30px;
}
.fontstyle {
  font-family: "Prompt", sans-serif;
}
.col-md-12 {
  padding-right: 5px;
  padding-left: 5px;
}
.hotel-item {
  border-radius: 20px;
  padding-right: 5px;
  padding-left: 5px;
  padding-top: 5px;
  padding-bottom: 5px;
  /* box-shadow: 2px 1px 5px #222222; */
  background: rgba(0, 88, 141, 255);
}
.hotel-items {
  border-radius: 15px;
  padding-right: 5px;
  padding-left: 5px;
  padding-top: 0px;
  padding-bottom: 10px;
  /* box-shadow: 2px 1px 5px #222222; */
  background: rgb(255, 255, 255);
}
h3 {
  /* position: relative; */
  font-size: 1.1rem;
  line-height: 1.663rem;
  font-weight: 500;
  text-transform: capitalize;
  letter-spacing: 1px;
  color: white;
}
.vl {
  border-right: 2px solid rgb(255, 255, 255);
  height: 20px;
  margin-top: -25px;
}
.link-to {
  padding-right: 20px;
  padding-left: 20px;
  padding-top: 10px;
  padding-bottom: 15px;
  text-align: center;
}
@media screen and (max-width: 600px) {
  .padd-10-01 {
    padding-top: 20px;
    padding-bottom: 20px;
  }
}
</style>
