<template>
  <Banner 
  msg="การท่องเที่ยวโดยชุมชน (Community Based Tourism CBT)"
  img="images/product/product-4.jpg"
  />
  <div class="container cbt-header">
    <p>
      คือ การท่องเที่ยวที่คำนึงถึงความยั่งยืนของสิ่งแวดล้อม สังคม
      และวัฒนธรรมของชุมชนกำาหนด ทิศทางโดยชุมชน จัดการโดยชุมชน เพื่อชุมชน
      และชุมชนมีบทบาทเป็นเจ้าของในการจัดการ ดูแล เพื่อให้
      เกิดการเรียนรู้แก่ผู้มาเยือน
    </p>
  </div>
  <!------------------------ time line ----------------------->
  <div class="detail-wrapper">
    <div class="container">
      <div class="row padd-90">
        <div class="col-xs-12 col-sm-12 col-md-12">
          <div class="detail-content">
            <div class="main-timeline">
              <!-- start experience section-->
              <hr />
              <div
                v-for="item in knowledgemanagement.slice(0, 3)"
                v-bind:key="item.knowledge_management_id"
                v-show="item.role_id.includes(26)"
                class="timeline"
              >
                <div class="icon"></div>
                <div class="date-content">
                  <div>
                    <div
                      id="spes-text"
                      class="blog-list-text color-grey-3"
                      v-html="item.knowledge_management_detail"
                    ></div>
                  </div>
                  <div class="detail-content-block clearfix">
                    <a
                      target="_blank"
                      v-bind:href="item.knowledge_management_link"
                    >
                      <div class="tags-title color-dark-2">
                        link: คลิกอ่านเพิ่มเติม
                        <img
                          id="img-resize"
                          src="images/product/link.png"
                          alt=""
                        />
                      </div>
                    </a>
                  </div>
                </div>

                <div class="timeline-content">
                  <span id="text-spac-page" class="month">{{
                    item.knowledge_management_name
                  }}</span>
                  <img
                    class="img-responsive img-CBT radius-3"
                    :src="item.knowledge_management_image_cover_link"
                    alt=""
                  />
                </div>
              </div>
              <!-- end experience section-->
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>

  <!------------------------ time line ----------------------->
</template>

<script>
import { onMounted, ref } from "vue";
import axios from "axios";
import { BASE_API_URL } from "../../constants";
import Banner from "../Banner.vue";
export default {
  name: "KnowhowCbt",
  components: { Banner },
  setup() {
    const knowledgemanagement = ref([]);

    const getData = async () => {
      const response = await axios.get(
        `${BASE_API_URL}/home/knowledgemanagement`
      );
      knowledgemanagement.value = response.data.data;
    };

    onMounted(() => {
      getData();
    });

    return { knowledgemanagement };
  },
};
</script>

<style scoped>
body * {
  font-family: "Prompt" !important;
  -webkit-text-size-adjust: none;
}
#text-spac-page[data-v-724a95fe] {
    letter-spacing: 0;
    text-align: center;
    color: #206ab0;
}
.detail-content ul {
  width: 100% !important;
  display: inline-block !important;
  padding-left: 30px !important;
}
.cbt-header h3 {
  letter-spacing: 0px;
  font-weight: 500;
}
.cbt-header p {
  text-align: start;
  margin-top: 30px;
}
.detail-content p {
  font-size: 14px;
  line-height: 22px;
  font-weight: 400;
  margin-bottom: 25px;

  font-family: "Prompt";
}

.cbt-header p {
  padding-top: 20px;
}
.img-CBT {
  width: auto;
    display: block;
    height: 314px;
   margin: auto;
   padding-top: 20px;
}
#spes-text {
  letter-spacing: 0;

  color: black;
}
#text-spac-page {
  letter-spacing: 0;
  text-align: center;
  color: black;
}

.main-timeline {
  position: relative;
}

.main-timeline:before {
  content: "";
  display: block;
  width: 0px;
  height: 100%;
  background: #c6c6c6;
  margin: 0 auto;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
}

.main-timeline .timeline {
  margin-bottom: 0px;
  position: relative;
}

.main-timeline .timeline:after {
  content: "";
  display: block;
  clear: both;
}

.main-timeline .icon {
  width: 18px;
  height: 18px;
  line-height: 18px;
  margin: auto;
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
}

.main-timeline .icon:before,
.main-timeline .icon:after {
  width: 100%;
  height: 100%;
  border-radius: 50%;
  position: absolute;
  top: 0;
  left: 0;
  transition: all 0.33s ease-out 0s;
}

.main-timeline .icon:before {
  background: #fff;
  border: 2px solid #232323;
  left: -3px;
}

.main-timeline .icon:after {
  border: 2px solid #c6c6c6;
  left: 3px;
}

.main-timeline .timeline:hover .icon:before {
  left: 3px;
}

.main-timeline .timeline:hover .icon:after {
  left: -3px;
}

.main-timeline .date-content {
  width: 50%;
  float: left;
  margin-top: 22px;
  position: relative;
}

.main-timeline .date-content:before {
  width: 36.5%;
  height: 2px;
  background: #c6c6c6;
  margin: auto 0;
  position: absolute;
  top: 0;
  right: 10px;
  bottom: 0;
}

.main-timeline .date-outer {
  width: 125px;
  height: 125px;
  font-size: 16px;
  text-align: center;
  margin: auto;
  z-index: 1;
}

.main-timeline .date-outer:before,
.main-timeline .date-outer:after {
  width: 125px;
  height: 125px;
  margin: 0 auto;
  border-radius: 50%;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  transition: all 0.33s ease-out 0s;
}

.main-timeline .date-outer:before {
  background: #fff;
  border: 2px solid #232323;
  left: -6px;
}

.main-timeline .date-outer:after {
  border: 2px solid #c6c6c6;
  left: 6px;
}

.main-timeline .timeline:hover .date-outer:before {
  left: 6px;
}

.main-timeline .timeline:hover .date-outer:after {
  left: -6px;
}

.main-timeline .date {
  width: 100%;
  margin: auto;
  position: absolute;
  top: 27%;
  left: 0;
}

.main-timeline .month {
  font-size: 18px;
  font-weight: 700;
}

.main-timeline .year {
  display: block;
  font-size: 30px;
  font-weight: 700;
  color: #232323;
  line-height: 36px;
}

.main-timeline .timeline-content {
  width: 50%;
  padding: 20px 0 20px 50px;
  text-align: start;
  float: right;
}

.main-timeline .title {
  font-size: 19px;
  font-weight: 700;
  line-height: 24px;
  margin: 0 0 15px 0;
}

.main-timeline .description {
  margin-bottom: 0;
}

.main-timeline .timeline:nth-child(2n) .date-content {
  float: right;
}

.main-timeline .timeline:nth-child(2n) .date-content:before {
  left: 10px;
}

.main-timeline .timeline:nth-child(2n) .timeline-content {
  padding: 20px 50px 20px 0;
  text-align: start;
}

@media only screen and (max-width: 991px) {
  .main-timeline .date-content {
    margin-top: 35px;
  }
  .main-timeline .date-content:before {
    width: 22.5%;
  }
  .main-timeline .timeline-content {
    padding: 10px 0 10px 30px;
  }
  .main-timeline .title {
    font-size: 17px;
  }
  .main-timeline .timeline:nth-child(2n) .timeline-content {
    padding: 10px 30px 10px 0;
  }
}

@media only screen and (max-width: 767px) {
  .main-timeline:before {
    margin: 0;
    left: 7px;
  }
  .main-timeline .timeline {
    margin-bottom: 20px;
  }
  .main-timeline .timeline:last-child {
    margin-bottom: 0;
  }
  .main-timeline .icon {
    margin: auto 0;
  }
  .main-timeline .date-content {
    width: 95%;
    float: right;
    margin-top: 0;
  }
  .main-timeline .date-content:before {
    display: none;
  }
  .main-timeline .date-outer {
    width: 110px;
    height: 110px;
  }
  .main-timeline .date-outer:before,
  .main-timeline .date-outer:after {
    width: 110px;
    height: 110px;
  }
  .main-timeline .date {
    top: 30%;
  }
  .main-timeline .year {
    font-size: 24px;
  }
  .main-timeline .timeline-content,
  .main-timeline .timeline:nth-child(2n) .timeline-content {
    width: 95%;
    text-align: start;
    padding: 10px 0;
  }
  .main-timeline .title {
    margin-bottom: 10px;
  }
}
.tags-title {
  color: white;
  width: -webkit-fit-content;
  width: -moz-fit-content;
  width: fit-content;
  background-color: #206ab0;
  padding: 10px;
  border-radius: 10px;
}
#img-resize {
  margin-left: 10px;
  margin-bottom: 0px;
    width: 37px;
    height: auto;
    vertical-align: middle;
}

</style>
