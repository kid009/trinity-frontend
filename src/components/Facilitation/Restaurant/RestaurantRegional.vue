<template>
  <div >
    <div class="row no-padd">
      <div class="col-md-6 col-sm-12 col-xs-12">
        <div class="item-block">
          <div class="tour-layer delay-1"></div>
          <div class="vertical-align">
            <h3 class="topic-page-food">อาหารประจำภาคอีสาน</h3>
            <p style="color: white" class="topic-page-food">
              คนภาคอีสานเป็นผู้ที่กินอาหารได้ง่าย มักรับประทานได้ทุกอย่าง
              เนื่องจากภาคอีสาน มีสภาพพื้นที่ส่วนใหญ่แห้งแล้ง เป็นที่ราบสูง
              มีแม่น้ำสายใหญ่ และมีเทือกเขาสูงในบางแห่ง
              ขาดความอุดมสมบูรณ์กว่าภาคอื่นๆ
            </p>
            <a href="#" class="c-button small border-white"
              ><span>view more</span></a
            >
          </div>
          <img id="img2-page-food" src="images\food\papaya-salad.jpg" alt="" />
        </div>
      </div>
      <div class="col-md-6 col-sm-12 col-xs-12">
        <div class="item-block">
          <div class="tour-layer delay-1"></div>
          <div class="vertical-align">
            <h3 class="topic-page-food">อาหารประจำภาคเหนือ</h3>
            <p style="color: white" class="topic-page-food">
              อาหารพื้นบ้านภาคเหนือมีความพิเศษตรงที่มีการผสมผสานวัฒนธรรมการกินจากหลายกลุ่มชนเช่น
              ไทใหญ่ จีนฮ่อ ไทลื้อ และคนพื้นมีสำรับอาหารของกลุ่มชาติพันธุ์ต่างๆ
            </p>
            <a href="#" class="c-button small border-white"
              ><span>view more</span></a
            >
          </div>
          <img id="img2-page-food" src="images\food\curry.jpg" alt="" />
        </div>
      </div>
    </div>
    <div class="row no-padd">
      <div class="col-md-4 col-sm-6 col-xs-12">
        <div class="item-block style-2">
          <div class="tour-layer delay-1"></div>
          <div class="vertical-align">
            <div class="rate">
              <span class="fa fa-star color-yellow"></span>
              <span class="fa fa-star color-yellow"></span>
              <span class="fa fa-star color-yellow"></span>
              <span class="fa fa-star color-yellow"></span>
              <span class="fa fa-star color-yellow"></span>
            </div>
            <h3 class="topic-page-food">อาหารประจำภาคกลาง</h3>

            <p style="color: white" class="topic-page-food">
              นับได้ว่าเป็นภาคที่มีความอุดมสมบูรณ์มากกว่าภาคอื่นๆ
              ถือได้ว่าภาคกลางเป็นอู่ข้าวอู่น้ำที่สำคัญของประเทศไทย
            </p>
            <a href="#" class="c-button small border-white"
              ><span>view more</span></a
            >
          </div>
          <img id="img3-page-food" src="images\food\green-curry.jpg" alt="" />
        </div>
      </div>
      <div class="col-md-4 col-sm-6 col-xs-12">
        <div class="item-block style-2">
          <div class="tour-layer delay-1"></div>
          <div class="vertical-align">
            <div class="rate">
              <span class="fa fa-star color-yellow"></span>
              <span class="fa fa-star color-yellow"></span>
              <span class="fa fa-star color-yellow"></span>
              <span class="fa fa-star color-yellow"></span>
              <span class="fa fa-star color-yellow"></span>
            </div>
            <h3 class="topic-page-food">อาหารประจำภาคใต้</h3>

            <p style="color: white" class="topic-page-food">
              อาหารพื้นบ้านภาคใต้มีรสชาติโดดเด่นเป็นเอกลักษณ์เฉพาะ
              ซึ่งเป็นต้นตำรับในการใช้เครื่องเทศปรุงอาหาร
            </p>
            <a href="#" class="c-button small border-white"
              ><span>view more</span></a
            >
          </div>
          <img
            id="img3-page-food"
            src="images\food\thai-southern-food.jpg"
            alt=""
          />
        </div>
      </div>
      <div class="col-md-4 col-sm-12 col-xs-12">
        <div class="item-block style-2">
          <div class="tour-layer delay-1"></div>
          <div class="vertical-align">
            <div class="rate">
              <span class="fa fa-star color-yellow"></span>
              <span class="fa fa-star color-yellow"></span>
              <span class="fa fa-star color-yellow"></span>
              <span class="fa fa-star color-yellow"></span>
              <span class="fa fa-star color-yellow"></span>
            </div>
            <h3 class="topic-page-food">อาหารประจำภาคตะวันออก</h3>

            <p style="color: white" class="topic-page-food">
              อาหารส่วนใหญ่ของภาคตะวันออกคงจะหนีไม่พ้นอาหารซีฟู้ด
              ที่น่าแปลกใจคืออาหารคาวบางอย่างจะใส่ผลไม้ลงไปด้วย
            </p>
            <a href="#" class="c-button small border-white"
              ><span>view more</span></a
            >
          </div>
          <img id="img3-page-food" src="images\food\padthai.jpg" alt="" />
        </div>
      </div>
    </div>

    
  </div>
</template>

<script>


export default {
  name: "RestaurantRegional",
  
};
</script>

<style>
.foodRecommended {
  width: 100%;
  height: 600px;
}
#img2-page-food {
  height: 27.1em;
}
#img3-page-food {
  height: 21em;
}
#imgfooter-page-food {
  height: 18em;
}
.topic-page-food {
  letter-spacing: 0;
  text-shadow: black 0.1em 0.1em 0.2em;
}
@media screen and (min-width: 1200px) {
  #all-search-bar-topic {
    margin-left: 7%;
  }
  #search-bar-topic {
    width: 200%;
  }
  #button-search-bar-topic {
    left: 400%;
  }
}
</style>
