<template>
  <div class="col-xs-12 col-sm-8 col-md-9">
    <div class="grid-content clearfix">
      <div
        class="list-item-entry"
        v-for="items in innovationprocess"
        v-bind:key="items.researcher_innovation_id"
      >
        <div class="hotel-item style-10 bg-white">
          <div class="table-view">
            <a
              @click="
                on_click(
                  1,
                  items.researcher_innovation_group_id,
                  items.researcher_innovation_id,
                  'innovationobjectdetail'
                )
              "
            >
              <div class="radius-top">
                <img
                  :src="items.researcher_innovation_image_cover_link"
                  alt=""
                />
              </div>
              <div class="title">
                <h4>{{ items.researcher_innovation_name }}</h4>
                <button
                  class="c-button b-40 bg-red-3 hv-red-3-o"
                  type="button"
                  @click="
                    on_click(
                      1,
                      items.researcher_innovation_group_id,
                      items.researcher_innovation_id,
                      'innovationprocessdetail'
                    )
                  "
                >
                  เพิ่มเติม
                </button>
              </div>
            </a>
          </div>
        </div>
      </div>
    </div>
    <Pagination />
  </div>
</template>

<script>
import { onMounted, ref } from "vue";
import axios from "axios";
import { BASE_API_URL } from "../../../constants";
import Pagination from "./Pagination.vue";

export default {
  name: "InnovationProcessGrid",
  components: {
    Pagination,
  },

  setup() {
    let page = window.location.search.substr(6, 1);

    let group = window.location.search;
    group = group.split("=");
    group = group[2];
    group = group.substring(0, group.length - 3);

    let id = window.location.search;
    id = id.split("=");
    id = id[3];

    const innovationprocess = ref([]);

    const getData = async () => {
      if (id == 0 && group == 0) {
        const response = await axios.get(
          `${BASE_API_URL}/innovation-product/researcherInnovationProcess?page=` +
            page +
            "&group=0&id=0"
        );
        innovationprocess.value = response.data.data;
      } else if (group != 0 && id == 0) {
        const response = await axios.get(
          `${BASE_API_URL}/innovation-product/researcherInnovationProcess?page= ` +
            page +
            "&group=" +
            group +
            "&id=0"
        );
        innovationprocess.value = response.data.data;
      } else {
        const response = await axios.get(
          `${BASE_API_URL}/innovation-product/researcherInnovationProcess?page=` +
            page +
            "&group=0&id=" +
            id
        );
        innovationprocess.value = response.data.data;
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
      innovationprocess,
      on_click,
      id,
      page,
      group,
    };
  },
};
</script>

<style></style>
