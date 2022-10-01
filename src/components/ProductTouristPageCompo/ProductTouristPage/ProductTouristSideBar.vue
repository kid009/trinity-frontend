<template>
  <!-- <div class="col-xs-12 col-sm-4 col-md-3"> -->
  <div class="sidebar bg-white clearfix">
    <SideSearch
      msgplace="พิมพ์นวัตกรรมการท่องเที่ยวโดยชุมชนที่ต้องการค้นหา"
      namepage="producttouristindexpage"
      page="1"
    />
    <div class="sidebar-block">
      <h4 class="sidebar-title color-dark-2">
        หมวดหมู่นวัตกรรมการท่องเที่ยวโดยชุมชน
      </h4>
      <ul class="sidebar-category color-4">
        <li class="active">
          <a
            class="cat-drop"
            @click="on_click(1, 0, 0, 'producttouristindexpage')"
          >
            <h4 class="color-dark-2">ทั้งหมด</h4>
          </a>
        </li>

        <li>
          <a class="" @click="chageTab(1)"
            ><h4 class="color-dark-2">นวัตกรรมการท่องเที่ยวโดยชุมชน</h4>
          </a>
          <div v-show="tab == 1" class="">
            <a class="" @click="on_click('researcher_innovation', 0, 0)">
              <i></i>
              <h5 class="text_in">นวัตกรรมทั้งหมด</h5>
            </a>

            <a
              v-for="items in innovation"
              v-bind:key="items"
              v-show="items.researcher_innovation_group_id != 6"
              @click="
                on_click(
                  'researcher_innovation',
                  items.researcher_innovation_group_id,
                  0
                )
              "
            >
              <h5 class="text_in">
                {{ items.researcher_innovation_group_name }}
              </h5>
            </a>
          </div>
        </li>

        <li>
          <a class="" @click="chageTab(2)"
            ><h4 class="color-dark-2">เทคโนโลยี</h4>
          </a>
          <div v-show="tab == 2">
            <a class="" @click="on_click('researcher_technology', 0, 0)">
              <h5 class="text_in">เทคโนโลยีทั้งหมด</h5>
            </a>

            <a
              v-for="items in technology"
              v-bind:key="items"
              class=""
              @click="
                on_click(
                  'researcher_technology',
                  items.researcher_technology_group_id,
                  0
                )
              "
            >
              <h5 class="text_in">
                {{ items.researcher_technology_group_name }}
              </h5>
            </a>
          </div>
        </li>

        <li>
          <a class="" @click="chageTab(3)"
            ><h4 class="color-dark-2">นวัตกรรมผลิตภัณฑ์ท่องเที่ยว</h4>
          </a>
          <div v-show="tab == 3">
            <a class="" @click="on_click('researcher_tourism_product', 0, 0)">
              <h5 class="text_in">นวัตกรรมผลิตภัณฑ์ท่องเที่ยวทั้งหมด</h5>
            </a>

            <a
              v-for="items in researcherTourismProduct"
              v-bind:key="items"
              v-show="items.researcher_tourism_product_group_id != 6"
              class=""
              @click="
                on_click(
                  'researcher_tourism_product',
                  items.researcher_tourism_product_group_id,
                  0
                )
              "
            >
              <h5 class="text_in">
                {{ items.researcher_tourism_product_group_name }}
              </h5>
            </a>
          </div>
        </li>

        <li>
          <a class="" @click="chageTab(4)"
            ><h4 class="color-dark-2">ผลิตภัณฑ์ธุรกิจ</h4>
          </a>
          <div v-show="tab == 4">
            <a class="" @click="on_click('bussiness_product', 0, 0)">
              <h5 class="text_in">ผลิตภัณฑ์ธุรกิจทั้งหมด</h5>
            </a>

            <a
              v-for="items in bussinessProduct"
              v-bind:key="items"
              class=""
              @click="
                on_click(
                  'bussiness_product',
                  items.bussiness_product_group_id,
                  0
                )
              "
            >
              <h5 class="text_in">
                {{ items.bussiness_product_group_name }}
              </h5>
            </a>
          </div>
        </li>

        <li>
          <a class="" @click="chageTab(5)"
            ><h4 class="color-dark-2">ผลิตภัณฑ์ท่องเที่ยว</h4>
          </a>
          <div v-show="tab == 5">
            <a class="" @click="on_click('bussiness_product_tourism', 0, 0)">
              <h5 class="text_in">ผลิตภัณฑ์ท่องเที่ยวทั้งหมด</h5>
            </a>

            <a
              v-for="items in businessproductTourism"
              v-bind:key="items"
              class=""
              @click="
                on_click(
                  'bussiness_product_tourism',
                  items.bussiness_product_tourism_group_id,
                  0
                )
              "
            >
              <h5 class="text_in">
                {{ items.bussiness_product_tourism_group_name }}
              </h5>
            </a>
          </div>
        </li>

        <li>
          <a class="" @click="chageTab(6)"
            ><h4 class="color-dark-2">ผลิตภัณฑ์ชุมชน</h4>
          </a>
          <div v-show="tab == 6">
            <a class="" @click="on_click('bussiness_product_community', 0, 0)">
              <h5 class="text_in">ผลิตภัณฑ์ชุมชนทั้งหมด</h5>
            </a>

            <a
              v-for="items in businessProductCommunity"
              v-bind:key="items"
              class=""
              @click="
                on_click(
                  'bussiness_product_community',
                  items.bussiness_product_community_group_id,
                  0
                )
              "
            >
              <h5 class="text_in">
                {{ items.bussiness_product_community_group_name }}
              </h5>
            </a>
          </div>
        </li>

        <li>
          <a class="" @click="chageTab(7)"
            ><h4 class="color-dark-2">สินค้าในชุมชน</h4>
          </a>
          <div v-show="tab == 7">
            <a class="" @click="on_click('product', 0, 0)">
              <h5 class="text_in">สินค้าในชุมชนทั้งหมด</h5>
            </a>

            <a
              v-for="items in product"
              v-bind:key="items"
              class=""
              @click="on_click('product', items.product_group_id, 0)"
            >
              <h5 class="text_in">{{ items.product_group_name }}</h5>
            </a>
          </div>
        </li>
      </ul>
    </div>
  </div>
  <!-- </div> -->
</template>

<script>
import { onMounted, ref } from "vue";
import axios from "axios";
import { BASE_API_URL } from "../../../constants";
import SideSearch from "../../SideSearch.vue";

export default {
  name: "ProductTouristSideBar",
  components: {
    SideSearch,
  },

  setup() {
    const all = ref([]);
    const product = ref([]);
    const technology = ref([]);
    const innovation = ref([]);
    const researcherTourismProduct = ref([]);
    const bussinessProduct = ref([]);
    const businessproductTourism = ref([]);
    const businessProductCommunity = ref([]);

    const tab = ref([]);

    const getData = async () => {
      const response = await axios.get(
        `${BASE_API_URL}/innovation-product/ProductAllGroup`
      );
      all.value = response.data;
      product.value = response.data.data_product_group;
      technology.value = response.data.data_researcher_technology_group;
      innovation.value = response.data.data_researcher_innovation_group;
      researcherTourismProduct.value =
        response.data.data_researcher_tourism_product_group;
      bussinessProduct.value = response.data.data_bussiness_product_group;
      businessproductTourism.value =
        response.data.data_bussiness_product_tourism_group;
      businessProductCommunity.value =
        response.data.data_bussiness_product_community_group;
    };

    function on_click(page, group, id) {
      window.location =
        "producttouristindexpage?page=" +
        page +
        "&group=" +
        group +
        "&id=" +
        id;
    }

    const chageTab = (tabs) => {
      tab.value = tabs;
    };

    onMounted(() => {
      getData();
    });

    return {
      all,
      product,
      technology,
      innovation,
      researcherTourismProduct,
      bussinessProduct,
      businessproductTourism,
      businessProductCommunity,
      on_click,
      chageTab,
      tab,
    };
  },
};
</script>

<style scoped>
.text_in {
  color: rgb(150, 150, 150);
}
h4:hover {
  transform: scale(1.1);
}
h5:hover {
  transform: scale(1.1);
}
h4 {
  font-size: 16px;
  line-height: 0.763rem;
  font-weight: 600;
  text-transform: capitalize;
  letter-spacing: 0;
  color: rgb(0, 0, 0);
}
h5 {
  font-size: 14px;
  line-height: 2.363rem;
  font-weight: 400;
  text-transform: capitalize;
  letter-spacing: 0;
  text-indent: 30px;
  color: rgb(150, 150, 150);
}
</style>
