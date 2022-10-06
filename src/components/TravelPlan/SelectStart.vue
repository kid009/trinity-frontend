<template>
  <div class="select-strart">
    <form>
      <div class="grid-box">
        <div class="wrapper">
          <div>
            <div class="clearfix">
              <div class="form-label color-white">
                <h3>จุดเริ่มต้น</h3>
              </div>
              <div class="drop-wrap drop-wrap-s-3">
                <select class="drop fontstyle">
                  <option value="">From</option>
                  <option>กระบี่</option>
                  <option>กรุงเทพ</option>
                </select>
              </div>
            </div>
          </div>
          <div>
            <div class="clearfix">
              <div class="form-label color-white">
                <h3 id="text-tab-travel-ex">จุดสิ้นสุด</h3>
              </div>
              <div class="drop-wrap drop-wrap-s-3">
                <select class="drop fontstyle">
                  <option value="">To</option>
                  <option>กระบี่</option>
                  <option>กรุงเทพ</option>
                </select>
              </div>
            </div>
          </div>
          <div>
            <div class="clearfix">
              <div class="form-label color-white">
                <h3>ค่าใช้จ่าย</h3>
              </div>
              <div class="drop-wrap drop-wrap-s-3">
                <input placeholder="Cost" />
              </div>
            </div>
          </div>
          <div>
            <div class="clearfix">
              <div class="form-label color-white">
                <h3>เวลา</h3>
              </div>
              <div class="drop-wrap drop-wrap-s-3">
                <input placeholder="Spend Time" />
              </div>
            </div>
          </div>
        </div>
        <div>
          <div class="clearfix">
            <p class="color-white">
              "ช่วยคำนวณค่าใช้จ่าย และวางแผนการเดินทางได้อย่างคอบคลุม"
            </p>
          </div>
          <div class="clearfix center button-m">
            <button class="c-button">
              <span class="text-eng">กลับ/back</span>
            </button>
            &nbsp;
            <button type="submit" class="c-button">
              <span class="text-eng">บันทึก/save</span>
            </button>
          </div>
        </div>
      </div>
    </form>

    <div class="hotel-item bg-white">
      <div class="table-view">
        <div class="title hotel-middle cell-view">
          <div class="row padd-90">
            <div class="col-xs-12 col-sm-12 col-md-12">
              <div class="detail-content">
                <div class="detail-content-block">
                  <div class="simple-tab color-1 tab-wrapper">
                    <div class="tab-nav-wrapper">
                      <div class="nav-tab clearfix">
                        <div class="nav-tab-item active fontstyle">
                          แผนที่การเดินทาง<br />Map
                        </div>
                        <div class="nav-tab-item fontstyle">
                          การเดินทาง<br />Transportation
                        </div>
                        <div class="nav-tab-item fontstyle">
                          ที่พัก<br />Hostal
                        </div>
                        <div class="nav-tab-item fontstyle">
                          ร้านอาหาร<br />Restaurant
                        </div>
                        <div class="nav-tab-item fontstyle">
                          รีวิว<br />Review
                        </div>
                        <div class="nav-tab-item fontstyle">
                          ความปลอดภัย<br />sefety
                        </div>
                      </div>
                    </div>
                    <div class="tabs-content clearfix">
                      <div class="tab-info active">
                        <Page1 :mainRoute="mainRoute" />
                      </div>

                      <!--------------- 2 --------------->
                      <div class="tab-info">
                        <Travel />
                      </div>
                      <!--------------- 2 --------------->

                      <!--------------- 3 --------------->
                      <div class="tab-info">
                        <Rooms />
                      </div>
                      <!--------------- 3 --------------->

                      <!--------------- 4 --------------->
                      <div class="tab-info">
                        <Restaurant />
                      </div>
                      <!--------------- 4 --------------->

                      <!--------------- 5 --------------->
                      <div class="tab-info">
                        <Review />
                      </div>
                      <!--------------- 5 --------------->
                    </div>
                  </div>
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
export default {
  name: "SelectStart",
  component: {},
};
</script>

<style scoped>
.grid-box {
  display: grid;
  grid-template-columns: auto 260px;
  row-gap: 1em;
  column-gap: 2em;
  margin-top: 20px;
}
.wrapper {
  display: grid;
  grid-template-columns: 50% 50%;
  row-gap: 1em;
  column-gap: 1em;
}

h3 {
  font-size: 18px;
  font-weight: 400;
  letter-spacing: 0px;
  padding-bottom: 5px;
  font-size: 18px;
}
.fontstyle {
  font-style: italic;
  font-size: 18px;
  line-height: inherit;
  font-weight: 200 !important;
  color: rgb(255 255 255 / 88%);
}
.drop-wrap-s-3 {
  height: 46px;
  border: 1px solid #fff;
  -moz-border-radius: 25px;
  border-radius: 20px;
  line-height: 20px;
  background: #ffffff54;
}
input {
  height: inherit;
  width: 100%;
  padding-left: 16px;
  font-style: italic;
  font-size: 18px;
  line-height: inherit;
  font-weight: 200 !important;
  color: rgb(255 255 255 / 88%);
}
::placeholder {
  color: rgb(255 255 255 / 88%);
}
.form-block {
  margin-top: 25px;
}
.button-m {
  margin-top: 38px;
  text-align: center;
}
p {
  font-size: 18px;
  line-height: 26px;
  font-weight: 400;
  padding: 32px 15px 0px 15px;
  text-align: center;
}
span {
  font-size: 16;
}
.c-button {
  padding: 0px 14px;
  font-size: 12px;
  text-transform: capitalize;
  line-height: 0px;
  height: 30px;
  font-weight: 700;
  font-style: italic;
  text-shadow: 0 0 2px white;
  background: #93dcc4;
}

/**-------------- map*/
.hotel-item {
  margin-top: 20px;
  border-radius: 20px;
}
.hotel-item .title {
  border-radius: 20px;
}
</style>
