<template>
  <!-- <div class="col-xs-12 col-md-6"> -->
  <div class="detail-header style-2 bordermaiddle">
    <div class="detail-content-block">
      <div class="simple-tab color-1 tab-wrapper">
        <div class="tab-nav-wrapper">
          <div class="nav-tab clearfix">
            <div class="nav-tab-item active">ข้อมูล</div>

            <div class="nav-tab-item">รายละเอียด</div>
          </div>
          <div class="nav-tab clearfix"></div>
        </div>
        <div class="tabs-content clearfix">
          <!----- page 1 --->
          <div class="tab-info active">
            <Tab1
              :idProduct="idProduct"
              :name="name"
              :imgAll="imgAll"
              :vdo="vdo"
              :link="link"
              :qrcode="qrcode"
            />
          </div>
          <div class="tab-info">
            <TabDetail
              :detail="detail"
              :imgAllApply="imgAllApply"
              :product_code="product_code"
              :product_price="product_price"
              :product_unit="product_unit"
              :product_promotion="product_promotion"
            />
          </div>
        </div>
      </div>
    </div>
  </div>
  <!-- </div> -->
</template>

<script>
import Tab1 from "./Tab1.vue";

import TabDetail from "./TabDetail.vue";

import { onMounted, ref } from "vue";
import axios from "axios";
import { BASE_API_URL } from "../../../constants";

export default {
  name: "Details",
  components: {
    Tab1,

    TabDetail,
  },
  computed: {
    videoElement() {
      return this.$refs.video;
    },
  },

  setup() {
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

    const idProduct = ref([]);
    const name = ref([]);
    const image = ref([]);
    const link = ref([]);
    const qrcode = ref([]);
    const detail = ref([]);
    const product_price = ref([]);
    const product_unit = ref([]);
    const product_promotion = ref([]);
    const product_code = ref([]);
    const vdo = ref([]);

    const imgAll = ref([]);
    const Images = ref([]);

    const imgAllApply = ref([]);
    const ImagesApply = ref([]);

    let linkvdo = "";
    const changLinkvdo = (linkvdo) => {
      if (linkvdo != null) {
        if (linkvdo.includes("https://www.youtube.com/watch?v=")) {
          vdo.value = linkvdo.slice(32);
        } else if (linkvdo.includes("https://youtu.be/")) {
          vdo.value = linkvdo.slice(17);
        } else if (linkvdo.includes("https://www.youtube.com/embed/")) {
          vdo.value = linkvdo.slice(30);
        }
      }
    };

    const getData = async () => {
      const response = await axios.get(
        `${BASE_API_URL}/innovation-product/ProductAllDetail?page=` +
          page +
          "&group=" +
          group +
          "&id=" +
          id
      );
      if (page == "product") {
        idProduct.value = response.data.data[0].product_id;
        name.value = response.data.data[0].product_name;
        image.value = response.data.data[0].product_image_cover_link;
        link.value = response.data.data[0].product_link;
        detail.value = response.data.data[0].product_detail;
        qrcode.value = response.data.data[0].product_qrcode_link;
        product_code.value = response.data.data[0].product_code;
        product_price.value = response.data.data[0].product_price;
        product_unit.value = response.data.data[0].product_unit;
        product_promotion.value = response.data.data[0].product_promotion;
        linkvdo = response.data.data[0].product_vdo;
        changLinkvdo(linkvdo);

        imgAll.value.push(response.data.data[0].product_image_cover_link);

        const responseImages = await axios.get(
          `${BASE_API_URL}/innovation-product/productImages/` + id
        );
        Images.value = responseImages.data.data;

        for (let key in responseImages.data.data) {
          let imageAll = responseImages.data.data[key];
          imgAll.value.push(imageAll.community_image_file_link);
        }
      } else if (page == "researcher_technology") {
        idProduct.value = response.data.data[0].researcher_technology_id;
        name.value = response.data.data[0].researcher_technology_name;
        image.value =
          response.data.data[0].researcher_technology_image_cover_link;
        link.value = response.data.data[0].researcher_technology_link;
        qrcode.value = response.data.data[0].researcher_technology_qrcode_link;
        detail.value = response.data.data[0].researcher_technology_detail;
        linkvdo = response.data.data[0].researcher_technology_vdo;
        changLinkvdo(linkvdo);

        imgAll.value.push(
          response.data.data[0].researcher_technology_image_cover_link
        );

        const responseImages = await axios.get(
          `${BASE_API_URL}/innovation-product/researcherTechnologyImages/` + id
        );
        Images.value = responseImages.data.data;

        for (let key in responseImages.data.data) {
          let imageAll = responseImages.data.data[key];
          imgAll.value.push(imageAll.technology_image);
        }

        const responseImagesApply = await axios.get(
          `${BASE_API_URL}/Researcher/OutputApplyImage?page=` +
            page +
            "&id=" +
            id
        );
        ImagesApply.value = responseImagesApply.data.data;

        for (let key in responseImagesApply.data.data) {
          let imageAll = responseImagesApply.data.data[key];
          imgAllApply.value.push(imageAll.research_image_file_link);
        }
      } else if (page == "researcher_innovation") {
        idProduct.value = response.data.data[0].researcher_innovation_id;
        name.value = response.data.data[0].researcher_innovation_name;
        image.value =
          response.data.data[0].researcher_innovation_image_cover_link;
        link.value = response.data.data[0].researcher_innovation_link;
        qrcode.value = response.data.data[0].researcher_innovation_qrcode_link;
        detail.value = response.data.data[0].researcher_innovation_detail;
        linkvdo = response.data.data[0].researcher_innovation_vdo;
        changLinkvdo(linkvdo);
        imgAll.value.push(
          response.data.data[0].researcher_innovation_image_cover_link
        );

        const responseImages = await axios.get(
          `${BASE_API_URL}/innovation-product/researcherInnovationImages/` + id
        );
        Images.value = responseImages.data.data;

        for (let key in responseImages.data.data) {
          let imageAll = responseImages.data.data[key];
          imgAll.value.push(imageAll.research_image_file_link);
        }

        // imgAllApply.value.push(
        //   response.data.data[0].researcher_innovation_image_cover_link
        // );

        const responseImagesApply = await axios.get(
          `${BASE_API_URL}/Researcher/OutputApplyImage?page=` +
            page +
            "&id=" +
            id
        );
        ImagesApply.value = responseImagesApply.data.data;

        for (let key in responseImagesApply.data.data) {
          let imageAll = responseImagesApply.data.data[key];
          imgAllApply.value.push(imageAll.research_image_file_link);
        }
        // console.log(imgAllApply.value);
      } else if (page == "researcher_tourism_product") {
        idProduct.value = response.data.data[0].researcher_tourism_product_id;
        name.value = response.data.data[0].researcher_tourism_product_name;
        image.value =
          response.data.data[0].researcher_tourism_product_image_cover_link;
        link.value = response.data.data[0].researcher_tourism_product_link;
        qrcode.value =
          response.data.data[0].researcher_tourism_product_qrcode_link;
        detail.value = response.data.data[0].researcher_tourism_product_detail;
        linkvdo = response.data.data[0].researcher_tourism_product_vdo;
        changLinkvdo(linkvdo);

        imgAll.value.push(
          response.data.data[0].researcher_tourism_product_image_cover_link
        );

        const responseImages = await axios.get(
          `${BASE_API_URL}/innovation-product/researcherTourismProductImages/` +
            id
        );
        Images.value = responseImages.data.data;

        for (let key in responseImages.data.data) {
          let imageAll = responseImages.data.data[key];
          imgAll.value.push(imageAll.tourism_product_image);
        }

        const responseImagesApply = await axios.get(
          `${BASE_API_URL}/Researcher/OutputApplyImage?page=` +
            page +
            "&id=" +
            id
        );
        ImagesApply.value = responseImagesApply.data.data;

        for (let key in responseImagesApply.data.data) {
          let imageAll = responseImagesApply.data.data[key];
          imgAllApply.value.push(imageAll.research_image_file_link);
        }
      } else if (page == "bussiness_product") {
        idProduct.value = response.data.data[0].bussiness_product_id;
        name.value = response.data.data[0].bussiness_product_name;
        image.value = response.data.data[0].bussiness_product_image_cover_link;
        link.value = response.data.data[0].bussiness_product_link;
        qrcode.value = response.data.data[0].bussiness_product_qrcode_link;
        detail.value = response.data.data[0].bussiness_product_detail;

        product_price.value = response.data.data[0].bussiness_product_price;

        product_promotion.value =
          response.data.data[0].bussiness_product_promotion;
        linkvdo = response.data.data[0].bussiness_product_vdo;
        changLinkvdo(linkvdo);

        imgAll.value.push(
          response.data.data[0].bussiness_product_image_cover_link
        );

        const responseImages = await axios.get(
          `${BASE_API_URL}/innovation-product/businessProductImages/` + id
        );
        Images.value = responseImages.data.data;

        for (let key in responseImages.data.data) {
          let imageAll = responseImages.data.data[key];
          imgAll.value.push(imageAll.bussiness_image_file_link);
        }
      } else if (page == "bussiness_product_tourism") {
        idProduct.value = response.data.data[0].bussiness_product_tourism_id;
        name.value = response.data.data[0].bussiness_product_tourism_name;
        image.value =
          response.data.data[0].bussiness_product_tourism_image_cover_link;
        link.value = response.data.data[0].bussiness_product_tourism_link;
        qrcode.value =
          response.data.data[0].bussiness_product_tourism_qrcode_link;
        detail.value = response.data.data[0].bussiness_product_tourism_detail;

        product_price.value =
          response.data.data[0].bussiness_product_tourism_price;

        product_promotion.value =
          response.data.data[0].bussiness_product_tourism_promotion;
        linkvdo = response.data.data[0].bussiness_product_tourism_vdo;
        changLinkvdo(linkvdo);

        imgAll.value.push(
          response.data.data[0].bussiness_product_tourism_image_cover_link
        );

        const responseImages = await axios.get(
          `${BASE_API_URL}/innovation-product/businessProductTourismImages/` +
            id
        );
        Images.value = responseImages.data.data;

        for (let key in responseImages.data.data) {
          let imageAll = responseImages.data.data[key];
          imgAll.value.push(imageAll.bussiness_image_file_link);
        }
      } else if (page == "bussiness_product_community") {
        idProduct.value = response.data.data[0].bussiness_product_community_id;
        name.value = response.data.data[0].bussiness_product_community_name;
        image.value =
          response.data.data[0].bussiness_product_community_image_cover_link;
        link.value = response.data.data[0].bussiness_product_community_link;
        qrcode.value =
          response.data.data[0].bussiness_product_community_qrcode_link;
        detail.value = response.data.data[0].bussiness_product_community_detail;

        product_price.value =
          response.data.data[0].bussiness_product_community_price;

        product_promotion.value =
          response.data.data[0].bussiness_product_community_promotion;
        linkvdo = response.data.data[0].bussiness_product_community_vdo;
        changLinkvdo(linkvdo);

        imgAll.value.push(
          response.data.data[0].bussiness_product_community_image_cover_link
        );

        const responseImages = await axios.get(
          `${BASE_API_URL}/innovation-product/businessProductCommunityImages/` +
            id
        );
        Images.value = responseImages.data.data;

        for (let key in responseImages.data.data) {
          let imageAll = responseImages.data.data[key];
          imgAll.value.push(imageAll.bussiness_image_file_link);
        }
      }
    };

    onMounted(() => {
      getData();
    });

    return {
      idProduct,
      name,
      image,
      link,
      qrcode,
      detail,
      vdo,

      product_code,
      product_price,
      product_unit,
      product_promotion,

      linkvdo,

      id,
      page,
      group,

      imgAll,
      Images,

      imgAllApply,
      ImagesApply,
    };
  },
};
</script>

<style scoped>
.video {
  width: 100%;
  height: 430;
}
.bordermaiddle {
  border-radius: 3px;

  padding: 10px;

  background-color: #ffffff;
}
#img-product {
  width: 100%;
  height: 180px;
}
#h4-topic-product {
  letter-spacing: 0;
}
.img {
  width: auto;
  height: 300px;
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

.img-product {
  width: auto;
  height: 100%;
  overflow: hidden;
  text-align: center;
}
.border {
  border-radius: 8px;

  padding: 10px;
  width: 100%;
  height: 500px;
  text-align: center;
}
.img-details {
  width: 150px;
  height: 150px;
  overflow: hidden;
  display: block;
  margin: auto;
}
#bordercl {
  border-style: solid;
  border-width: 3px;
  border-color: white;
  border-radius: 30px;
}
#borderporfile {
  border-style: solid;
  border-width: 3px;
  border-color: white;
  border-radius: 10px;
}

.borderfill {
  border-radius: 3px;

  padding: 10px;
  width: 100%;
  height: 500px;
}
.bordermaiddle {
  border-radius: 3px;

  padding: 10px;

  background-color: #ffffff;
}

.borderdetail {
  border-radius: 3px;

  padding: 10px;
  width: 100%;
  height: 500px;
  background-color: #ffffff;
}
#page-detail {
  letter-spacing: 0;
}
.bordervideo {
  border-radius: 8px;
  border: 10px solid #000000;
  padding: 10px;
  width: 100%;
  height: 500px;
}
.fonts {
  font-size: 16px;
}
#img-other {
  width: auto;
  max-width: 300px;
  height: 200px;
  overflow: hidden;
  display: block;
  margin: auto;
}
.bg-border {
  width: 100%;
  background-color: #f5f5f5;
}

#img-more-product {
  width: auto;
  max-width: 300px;
  height: 230px;
  overflow: hidden;
  display: block;
  margin: auto;
}
.border-more-product {
  border: 10px solid #ffffff;
  padding: 5px;
  width: 100%;
  height: 250px;
  background-color: #f5f5f5;
}

#img-bussiness_back {
  width: 100%;
  height: 350px;
  overflow: hidden;
  display: block;
  margin: auto;
}
#borderporfie {
  border-style: solid;
  border-width: 3px;
  border-color: white;
  border-radius: 30px;
}
.img-proflie-buss {
  width: 100px;
  height: 100px;
}
.img-resize-porfie {
  width: 100%;
  height: 300px;
  overflow: hidden;
  text-align: center;
}

#img-research {
  width: 100%;
  height: 200px;
  overflow: hidden;
  display: block;
  margin: auto;
}

#img-bussiness_detail {
  width: 350px;
  height: 200px;
  overflow: hidden;
  display: block;
  margin: auto;
}
.borderbuss {
  border-radius: 8px;

  padding: 10px;
  width: 100%;
  height: 230px;
  text-align: center;
}
</style>
