<template>
  <!-- PARTNERS -->
  <div>
    <div class="container box">
      <div class="">
        <div class="row">
          <div class="">
            <div class="col-md-12">
              <div class="col-md-1">
                <a
                  ><img
                    class="img-marker"
                    src="images/mapicon/กิจกรรม.png"
                    alt=""
                  />
                </a>
                <b class="texttomnang fontstyle">กิจกรรม</b>
              </div>

              <!-- <div class="">
                <a
                  ><img
                    class="img-marker"
                    src="images/mapicon/ธุรกิจ.png"
                    alt=""
                  />
                </a>
                <b class="texttomnang fontstyle">ธุรกิจ</b>
              </div> -->

              <div class="col-md-1">
                <a
                  ><img
                    class="img-marker"
                    src="images/mapicon/ที่พัก.png"
                    alt=""
                  />
                </a>
                <b class="texttomnang fontstyle">โรงแรม</b>
              </div>
              <div class="col-md-1">
                <a
                  ><img
                    class="img-marker"
                    src="images/mapicon/โฮมเต.png"
                    alt=""
                  />
                </a>
                <b class="texttomnang fontstyle">โฮมสเตย์</b>
              </div>

              <div class="col-md-1">
                <a
                  ><img
                    class="img-marker"
                    src="images/mapicon/อาหาร.png"
                    alt=""
                  />
                </a>
                <b class="texttomnang fontstyle">ร้านอาหาร</b>
              </div>
              <div class="col-md-1">
                <a
                  ><img
                    class="img-marker"
                    src="images/mapicon/ของฝาก.png"
                    alt=""
                  />
                </a>
                <b class="texttomnang fontstyle">ร้านของฝาก</b>
              </div>

              <div class="col-md-1">
                <a
                  ><img
                    class="img-marker"
                    src="images/mapicon/ชุมชน_2.png"
                    alt=""
                  />
                </a>
                <b class="texttomnang fontstyle">ชุมชน</b>
              </div>

              <!-- <div class="col-md-1">
            <a
              ><img class="img-marker" src="images/mapicon/บล้อค.png" alt="" />
            </a>
            <b class="texttomnang fontstyle">รีวิว</b>
          </div> -->
              <!-- <div class="col-md-1">
            <a
              ><img
                class="img-marker"
                src="images/mapicon/สถานที่ที่เกี่ยวข้อง.png"
                alt=""
              />
            </a>
            <b class="texttomnang text-tyle fontstyle">สถานที่ที่เกี่ยวข้อง</b>
          </div> -->
              <!-- <div class="col-md-1">
            <a
              ><img
                class="img-marker"
                src="images/mapicon/เดินทาง.png"
                alt=""
              />
            </a>
            <b class="texttomnang fontstyle">การเดินทาง</b>
          </div> -->
              <div class="col-md-1">
                <a
                  ><img
                    class="img-marker"
                    src="images/mapicon/ธรรมชาติ.png"
                    alt=""
                  />
                </a>
                <b class="texttomnang text-tyle fontstyle">สถานที่ธรรมชาติ</b>
              </div>
              <div class="col-md-1">
                <a
                  ><img
                    class="img-marker"
                    src="images/mapicon/สถานที่ประวัติศาสตร์.png"
                    alt=""
                  />
                </a>
                <b class="texttomnang text-tyle fontstyle"
                  >สถานที่ประวัติศาสตร์</b
                >
              </div>
              <div class="col-md-1">
                <a
                  ><img
                    class="img-marker"
                    src="images/mapicon/เดินทาง.png"
                    alt=""
                  />
                </a>
                <b class="texttomnang text-tyle fontstyle">สนามบิน</b>
              </div>
              <div class="col-md-1">
                <a
                  ><img class="img-marker" src="images/mapicon/รถ.png" alt="" />
                </a>
                <b class="texttomnang text-tyle fontstyle">สถานีขนส่ง</b>
              </div>
              <div class="col-md-1">
                <a
                  ><img
                    class="img-marker"
                    src="images/mapicon/รถไฟ.png"
                    alt=""
                  />
                </a>
                <b class="texttomnang text-tyle fontstyle">สถานีรถไฟ</b>
              </div>
              <div class="col-md-1">
                <a
                  ><img
                    class="img-marker"
                    src="images/mapicon/เรือ.png"
                    alt=""
                  />
                </a>
                <b class="texttomnang text-tyle fontstyle">ท่าเรือ</b>
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
  name: "Marker.vue",
};
</script>

<style scoped>
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
/* STYLE 1 */
.centers {
  text-align: center;
  margin: auto;
}
.img-marker {
  width: 38px;
  height: 35px;
  margin: auto;
  display: block;
  border-radius: 20px;
  box-shadow: 2px 1px 5px #222222;
}

.texttomnang {
  letter-spacing: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  color: black;
}
.text-tyle {
  text-align: center;
}
b {
  font-size: 12px;
  line-height: 15px;
  font-weight: 600;
  text-transform: none;
  letter-spacing: 0;
  font-family: "Prompt", sans-serif;
}
#ccennt {
  display: flex;
  justify-content: center;
  align-items: center;
}
.fontstyle {
  font-family: "Prompt", sans-serif;
}
@media screen and (max-width: 600px) {
  .img-marker {
    max-width: 67.5rem;
    width: 40px;
    height: 35px;
    margin: auto;
    display: block;
    border-radius: 40px;
    box-shadow: 2px 1px 5px #222222;
  }
  .detail-content .detail-content-block img {
    width: 60px;
    height: 50px;
  }
}
</style>
