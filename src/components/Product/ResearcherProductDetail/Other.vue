<template>
  <div class="main-wraper">
    <div class="container">
      <div class="related-block">
        <h3 id="page-detail" class="related-title">ผลิตภัณฑ์อื่นๆ</h3>
        <div class="row">
          <div
            v-for="items in Technology"
            v-bind:key="items.researcher_tourism_product_id"
          >
            <div v-if="items.researcher_tourism_product_id != id">
              <div
                class="item hotels gal-item style-3 col-xs-12 col-sm-4"
                v-if="count <= 3"
                :data="count++"
              >
                <a
                  class="black-hover"
                  :href="
                    'researcherproductdetail?page=1&group=2&id=' +
                    items.researcher_tourism_product_id
                  "
                >
                  <div class="gal-item-icon border-more-product">
                    <img
                      id="img-more-product"
                      :src="items.researcher_tourism_product_image_cover_link"
                      alt=""
                    />
                    <div class="tour-layer delay-1"></div>
                    <div class="vertical-align">
                      <button
                        class="c-button small bg-white delay-2"
                        type="button"
                        @click="
                          on_click(
                            1,
                            2,
                            items.researcher_tourism_product_id,
                            'technologydetail'
                          )
                        "
                      >
                        เพิ่มเติม
                      </button>
                    </div>
                  </div>
                  <div class="gal-item-desc delay-1">
                    <h4 id="page-detail">
                      {{ items.researcher_tourism_product_name }}
                    </h4>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { onMounted, ref } from "vue";
import axios from "axios";
import { BASE_API_URL } from "../../../constants";
export default {
  name: "Other",

  setup() {
    const Technology = ref([]);

    let page = window.location.search.substr(6, 1);

    let group = window.location.search;
    group = group.split("=");
    group = group[2];
    group = group.substring(0, group.length - 3);

    let id = window.location.search;
    id = id.split("=");
    id = id[3];

    let count = 0;

    const getData = async () => {
      if (id != 0 && group != 0) {
        const response = await axios.get(
          `${BASE_API_URL}/Researcher/researcherTourismProduct?page=` +
            page +
            "&group=0&id=0"
        );
        Technology.value = response.data.data;
      } else if (group != 0 && id == 0) {
        const response = await axios.get(
          `${BASE_API_URL}/Researcher/researcherTourismProduct?page= ` +
            page +
            "&group=" +
            group +
            "&id=0"
        );
        Technology.value = response.data.data;
      } else {
        const response = await axios.get(
          `${BASE_API_URL}/Researcher/researcherTourismProduct?page=` +
            page +
            "&group=0&id=" +
            id
        );
        Technology.value = response.data.data;
      }
    };

    const on_click = (page, group, id, name) => {
      window.location =
        name + "?page=" + page + "&group=" + group + "&id=" + id;
    };

    onMounted(() => {
      getData();
    });

    return {
      Technology,

      id,
      page,
      group,
      count,
      on_click,
    };
  },
};
</script>

<style>
#img-more-product-bussiness {
  width: auto;
  max-width: 230px;
  height: 215px;
  overflow: hidden;
  display: block;
  margin: auto;
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
  border: 5px;
  padding: 5px;
  width: 100%;
  height: 250px;
  background-color: #f5f5f5;
}
</style>
