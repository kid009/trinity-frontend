<template>
  <!-- <div class="col-xs-12 col-md-6"> -->
  <div>
    <div class="detail-header style-2 bordermaiddle">
      <div class="detail-content-block">
        <div class="simple-tab color-1 tab-wrapper">
          <div class="tab-nav-wrapper">
            <div class="nav-tab clearfix">
              <div class="nav-tab-item active">ข้อมูลนวัตกรรม</div>

              <div class="nav-tab-item">รายละเอียด</div>

              <div class="nav-tab-item">ผลการนำไปใช้ประโยชน์</div>

              <!-- <div class="nav-tab-item">ข้อมูลผู้จัดทำ</div> -->
            </div>

            <div class="nav-tab clearfix">
              <!-- <div class="nav-tab-item active">
                                        ผลิตภัณฑ์
                                    </div>
                                    <div class="nav-tab-item">
                                        ผลการนำไปใช้ประโยชน์
                                    </div> -->
              <!-- <div class="nav-tab-item">
                                        ข้อมูลผู้จัดทำ
                                    </div>                    -->
            </div>
          </div>
          <div class="tabs-content clearfix">
            <!----- page 1 --->
            <div class="tab-info active">
              <Tab1 />
            </div>
            <!----- page 1 --->
            <div class="tab-info">
              <TabDetail />
            </div>

            <!----- page 2 --------->
            <div>
              <div class="tab-info">
                <Tab2 />
              </div>
            </div>

            <!----- page 2 --->

            <!----- page 3 ------------>
            <!-- <div class="tab-info">
              <Tab3 />
            </div>-->
            <!----- page 3 --->
            <!-- <div class="tab-info">
              <Tab4 />
            </div> -->
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Tab1 from "./Tab1.vue";
import Tab2 from "./Tab2.vue";
// import Tab3 from "./Tab3.vue";
// import Tab4 from "./Tab4.vue";
import TabDetail from "./TabDetail.vue";

export default {
  name: "Details",
  components: {
    Tab1,
    Tab2,
    // Tab3,
    // Tab4,
    TabDetail,
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

    return { page, group, id };
  },
};
</script>

<style scoped>
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
