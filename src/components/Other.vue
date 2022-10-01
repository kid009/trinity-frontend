<template>
  <div class="main-wraper" style="top: 30px">
    <div class="container">
      <div class="related-block">
        <h3 id="page-detail" class="related-title">{{ topic_name }}</h3>
        <div class="row">
          <div class="item hotels gal-item style-3 col-xs-12 col-sm-4">
            <a class="black-hover" :href="items_link_name + items_id1">
              <div class="gal-item-icon border-more-product">
                <img
                  v-show="!countError.includes(1)"
                  id="img-more-product"
                  @error="checkImg(1)"
                  :src="items_image_cover1"
                  alt=""
                />
                <img
                  v-show="countError.includes(1)"
                  id="img-more-product"
                  src="images/nopicture.jpg"
                  alt=""
                />
                <div class="tour-layer delay-1"></div>
                <div class="vertical-align">
                  <a
                    class="c-button small bg-white delay-2"
                    type="button"
                    :href="items_link_name + items_id1"
                  >
                    เพิ่มเติม
                  </a>
                </div>
              </div>
              <div class="gal-item-desc delay-1">
                <h4 id="page-detail">{{ items_gird_name1 }}</h4>
              </div>
            </a>
          </div>

          <div class="item hotels gal-item style-3 col-xs-12 col-sm-4">
            <a class="black-hover" :href="items_link_name + items_id2">
              <div class="gal-item-icon border-more-product">
                <img
                  v-show="!countError.includes(2)"
                  id="img-more-product"
                  :src="items_image_cover2"
                  @error="checkImg(2)"
                  alt=""
                />
                <img
                  v-show="countError.includes(2)"
                  id="img-more-product"
                  src="images/nopicture.jpg"
                  alt=""
                />
                <div class="tour-layer delay-1"></div>
                <div class="vertical-align">
                  <a
                    class="c-button small bg-white delay-2"
                    type="button"
                    :href="items_link_name + items_id2"
                  >
                    เพิ่มเติม
                  </a>
                </div>
              </div>
              <div class="gal-item-desc delay-1">
                <h4 id="page-detail">{{ items_gird_name2 }}</h4>
              </div>
            </a>
          </div>

          <div class="item hotels gal-item style-3 col-xs-12 col-sm-4">
            <a class="black-hover" :href="items_link_name + items_id3">
              <div class="gal-item-icon border-more-product">
                <img
                  v-show="!countError.includes(3)"
                  id="img-more-product"
                  :src="items_image_cover3"
                  @error="checkImg(3)"
                  alt=""
                />
                <img
                  v-show="countError.includes(3)"
                  id="img-more-product"
                  src="images/nopicture.jpg"
                  alt=""
                />
                <div class="tour-layer delay-1"></div>
                <div class="vertical-align">
                  <a
                    class="c-button small bg-white delay-2"
                    type="button"
                    :href="items_link_name + items_id3"
                  >
                    เพิ่มเติม
                  </a>
                </div>
              </div>
              <div class="gal-item-desc delay-1">
                <h4 id="page-detail">{{ items_gird_name3 }}</h4>
              </div>
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { ref } from "vue";
export default {
  name: "Other",
  props: {
    topic_name: String,
    items_link_name: String,

    items_id1: String,
    items_gird_name1: String,
    items_image_cover1: String,

    items_id2: String,
    items_gird_name2: String,
    items_image_cover2: String,

    items_id3: String,
    items_gird_name3: String,
    items_image_cover3: String,
  },

  setup() {
    const countError = ref([]);
    function checkImg(id) {
      countError.value.push(id);
    }
    return { checkImg, countError };
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
