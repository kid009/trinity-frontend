<template>
  <div class="main-wraper padd-90">
    <div class="container">
      <div class="row">
        <div class="col-md-12">
          <div class="second-title">
            <h2 class="letter-layout">นวัตกรรมงานวิจัย/โครงการ</h2>
          </div>
        </div>
      </div>
      <div class="row" id="style-1">
        <!-- <div>
          <h2 class="letter-layout">นวัตกรรมงานวิจัย/โครงการ</h2>
        </div> -->
        <div class="scrollbar">
          <div
            class="list-item-entry"
            v-for="items in innovation"
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
                      'researcherinnovationdetail'
                    )
                  "
                >
                  <div class="radius-top">
                    <img
                      id="img-travel"
                      :src="items.researcher_innovation_image_cover_link"
                      alt=""
                    />
                  </div>
                  <div class="title">
                    <h4>{{ items.researcher_innovation_name }}</h4>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div>
        <!-- <div class="arrows">
          <div
            class="swiper-container hotel-slider"
            data-autoplay="0"
            data-loop="0"
            data-speed="1000"
            data-center="0"
            data-slides-per-view="responsive"
            data-mob-slides="1"
            data-xs-slides="2"
            data-sm-slides="2"
            data-md-slides="3"
            data-lg-slides="4"
            data-add-slides="4"
          >
            <div class="swiper-wrapper">
              <div
                class="swiper-slide"
                v-for="items in innovation"
                v-bind:key="items.researcher_innovation_id"
              >
                <a
                  @click="
                    on_click(
                      1,
                      items.researcher_innovation_group_id,
                      items.researcher_innovation_id,
                      'researcherinnovationdetail'
                    )
                  "
                >
                  <div class="hotel-item">
                    <div class="radius-top border">
                      <img
                        id="img-travel"
                        :src="items.researcher_innovation_image_cover_link"
                        alt=""
                      />
                    </div>
                    <div class="title clearfix">
                      <h4>
                        <b>{{ items.researcher_innovation_name }}</b>
                      </h4>
                    </div>
                  </div></a
                >
              </div>
            </div>
            <div class="pagination"></div>
            <div class="swiper-arrow-left arrows-travel">
              <span class="fa fa-angle-left"></span>
            </div>
            <div class="swiper-arrow-right arrows-travel">
              <span class="fa fa-angle-right"></span>
            </div>
          </div>
        </div> -->
      </div>
    </div>
  </div>
</template>

<script>
import { onMounted, ref } from "vue";
import axios from "axios";
import { BASE_API_URL } from "../../../constants";

export default {
  name: "ResearcherInnovation",
  setup() {
    const innovation = ref([]);

    const getData = async () => {
      const response = await axios.get(
        `${BASE_API_URL}/innovation-product/researcherInnovationAll`
      );
      innovation.value = response.data.data;
    };

    const on_click = (page, group, id, name) => {
      window.location =
        name + "?page=" + page + "&group=" + group + "&id=" + id;
    };

    onMounted(() => {
      getData();
    });

    return {
      innovation,
      on_click,
    };
  },
};
</script>

<style scoped>
.letter-layout {
  letter-spacing: 0;
}

.border {
  padding: 5px;
  width: 100%;
  height: 250px;
}
h2 {
  font-size: 32px;
  line-height: 32px;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 5px;
  color: #01588d;
}
.second-title {
  position: relative;
  text-align: center;
  padding-top: 70px;
  padding-bottom: 25px;
}

@media only screen and (max-width: 600px) {
  h2 {
    font-size: 28px;
  }
}

/*------------SCROLL--BAR--------*/

.hotel-items {
  padding: 20px 0px 40px;
}

.border {
  border: 1px solid #ffffff;

  width: 100%;

  background-color: #ffffff;
}

.hotel-item {
  background-color: white;
  box-shadow: 2px 0px 8px #22222275;
  width: 280px;
  transition: 0.6s;
}
.hotel-item:hover {
  transform: scale(1.1);
}
.hotel-item.style-7 h4 {
  height: 50px;
  letter-spacing: 0px;
  margin-bottom: 3px;
  color: #206ab0;
}
.hotel-item .title {
  position: relative;
  width: 100%;
  height: 130px;
  padding: 15px 15px 15px 15px;
  border: 1px solid #f7f7f7;
}
.hotel-item .title p {
  color: #bebebe;
  padding: 0px;
  font-size: 12px;
  line-height: 0px;
}

.radius-top img {
  width: 100%;

  object-fit: cover;
  display: block;
  height: 200px;
}
@media only screen and(min-width: 1100px) {
  .radius-top img {
    height: 300px;
  }
}
.scrollbar {
  display: flex;
  gap: 5px;
  border: 20px solid #f8f8f800;
  height: fit-content;
  overflow-x: auto;
  -ms-scroll-snap-type: x mandatory;
  scroll-snap-type: x mandatory;
}

/* STYLE 1 */

#style-1::-webkit-scrollbar-track {
  border-radius: 10px;
  background-color: #f5f5f5;
}

#style-1::-webkit-scrollbar {
  width: 12px;
  background-color: #f5f5f5;
}

#style-1::-webkit-scrollbar-thumb {
  border-radius: 10px;

  background-color: #555;
}
#img-travel {
  width: auto;
  max-width: 250px;
  height: 200px;
  overflow: hidden;
  display: block;
  margin: auto;
}
.grid-content .list-item-entry {
  float: left;
  width: fit-content;
  padding-right: 15px;
  padding-left: 15px;
}
.letter-layout {
  letter-spacing: 0;
  padding: 20px;
}
</style>
