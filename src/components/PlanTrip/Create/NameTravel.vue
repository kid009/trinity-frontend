<template>
  <div>
    <div class="col-xs-12 padd-10-10">
      <div>
        <div class="col-md-10">
          <div class="">
            <div class="input-style-1">
              <input
                v-model="plantrip_name"
                class="color-dark fontstyle text-eng"
                type="text"
                placeholder="ชื่อเส้นทางท่องเที่ยว Travel Trip Name"
                required=""
                style="text-align: center"
              />
            </div>
          </div>
        </div>
        <div class="col-md-2">
          <div class="center button-m">
            <!-- <button @click="getBackLink()" class="c-button">
              <span class="text-eng">กลับ/back</span>
            </button> -->

            <button @click="getLink()" class="c-button">
              <span class="text-eng">บันทึก/save</span>
            </button>
          </div>
        </div>
      </div>
    </div>
    <div class="color-table">
      <table class="my-table"></table>
    </div>
    <div class="col-xs-12">
      <!-- <div class="grid-table"> -->
      <!-- <div class="">
        <div class="bg-table">
          <table class="" cellspacing="0" cellpadding="0">
            <thead>
              <tr class="text-center">
                <th scope="col">
                  <h4 class="fontstyle text_color">ลำดับ<br />No.</h4>
                  <div class="vl"></div>
                </th>
                <th scope="col">
                  <h4 class="fontstyle text_color">รูปภาพ<br />Picture</h4>
                  <div class="vl"></div>
                </th>
                <th scope="col">
                  <h4 class="fontstyle text_color">กิจกรรม<br />Activity</h4>
                  <div class="vl"></div>
                </th>

                <th scope="col">
                  <h4 class="fontstyle text_color">ชุมชน<br />Community</h4>
                  <div class="vl"></div>
                </th>
                <th scope="col">
                  <h4 class="fontstyle text_color">ลบ<br />Delete</h4>
                </th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="items in activitys" v-bind:key="items.activity_id">
                <td scope="row" data-label="ลำดับ:" class="table-label">NaN</td>
                <td data-label="รูปภาพ:" class="table-label">
                  <img
                    class="imgActivity"
                    :src="items.activity_image_cover_link"
                    alt=""
                  />
                </td>

                <td data-label="กิจกรรม:" class="table-label">
                  <strong>{{ items.activity_name }}</strong>
                </td>

                <td data-label="ชุมชน:" class="table-label">
                  <strong>{{ items.community_name }}</strong>
                </td>
                <td data-label="ลบ" class="table-label">
                  <button
                    @click="remove('activity', items)"
                    class="btn btn-danger"
                  >
                    -
                  </button>
                </td>
              </tr>
              <tr v-for="items in hotels" v-bind:key="items.activity_id">
                <td scope="row" data-label="ลำดับ:" class="table-label">NaN</td>
                <td data-label="รูปภาพ:" class="table-label">
                  <img
                    class="imgActivity"
                    :src="items.hotel_image_cover_link"
                    alt=""
                  />
                </td>

                <td data-label="กิจกรรม:" class="table-label">
                  <strong>{{ items.hotel_name }}</strong>
                </td>

                <td data-label="ชุมชน:" class="table-label">
                  <strong>{{ items.community_name }}</strong>
                </td>
                <td data-label="ลบ" class="table-label">
                  <button
                    @click="remove('hotel', items)"
                    class="btn btn-danger"
                  >
                    -
                  </button>
                </td>
              </tr>
              <tr v-for="items in homestays" v-bind:key="items.activity_id">
                <td scope="row" data-label="ลำดับ:" class="table-label">NaN</td>
                <td data-label="รูปภาพ:" class="table-label">
                  <img
                    class="imgActivity"
                    :src="items.homestay_image_cover_link"
                    alt=""
                  />
                </td>

                <td data-label="กิจกรรม:" class="table-label">
                  <strong>{{ items.homestay_name }}</strong>
                </td>

                <td data-label="ชุมชน:" class="table-label">
                  <strong>{{ items.community_name }}</strong>
                </td>
                <td data-label="ลบ" class="table-label">
                  <button
                    @click="remove('homestay', items)"
                    class="btn btn-danger"
                  >
                    -
                  </button>
                </td>
              </tr>
              <tr v-for="items in restaurants" v-bind:key="items.activity_id">
                <td scope="row" data-label="ลำดับ:" class="table-label">NaN</td>
                <td data-label="รูปภาพ:" class="table-label">
                  <img
                    class="imgActivity"
                    :src="items.restaurant_image_cover_link"
                    alt=""
                  />
                </td>

                <td data-label="กิจกรรม:" class="table-label">
                  <strong>{{ items.restaurant_name }}</strong>
                </td>

                <td data-label="ชุมชน:" class="table-label">
                  <strong>{{ items.community_name }}</strong>
                </td>
                <td data-label="ลบ" class="table-label">
                  <button
                    @click="remove('restaurant', items)"
                    class="btn btn-danger"
                  >
                    -
                  </button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div> -->
      <div class="padd_20">
        <div class="bg_table">
          <table class="" cellspacing="0" cellpadding="0">
            <thead>
              <tr class="">
                <th scope="col">
                  <h4 class="text_color fontstyle">ลำดับ</h4>
                  <h4 class="text_color fontstyle">no.</h4>
                  <div class="vl"></div>
                </th>
                <!-- <th scope="col">
                    <h4 class="text_color fontstyle">สถานที่</h4>
                    <h4>no.</h4>
                  </th> -->
                <th scope="col">
                  <h4 class="text_color fontstyle">รูปภาพ</h4>
                  <h4 class="text_color fontstyle">Picture</h4>
                  <div class="vl"></div>
                </th>
                <th scope="col">
                  <h4 class="text_color fontstyle">กิจกรรม</h4>
                  <h4 class="text_color fontstyle">Activity</h4>
                  <div class="vl"></div>
                </th>

                <th scope="col">
                  <h4 class="text_color fontstyle">ชุมชน</h4>
                  <h4 class="text_color fontstyle">Community</h4>
                  <div class="vl"></div>
                </th>
                <th scope="col">
                  <h4 class="text_color fontstyle">ลบ</h4>
                  <h4 class="text_color fontstyle">Detete</h4>
                </th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="items in activitys" v-bind:key="items.activity_id">
                <td
                  scope="row"
                  data-label="ลำดับ:"
                  class="table-label text_color fontstyle"
                >
                  NaN
                </td>
                <!-- <td data-label="สถานที่:" class="table-label text_color">
                    <strong>{{ items.activity_name }}</strong>
                  </td> -->
                <td data-label="รูปภาพ:" class="table-label text_color">
                  <img
                    class="imgActivity"
                    :src="items.activity_image_cover_link"
                    alt=""
                  />
                </td>

                <td
                  data-label="กิจกรรม:"
                  class="table-label text_color fontstyle"
                >
                  <strong>{{ items.activity_name }}</strong>
                </td>

                <td
                  data-label="ชุมชน:"
                  class="table-label text_color fontstyle"
                >
                  <strong>{{ items.community_name }}</strong>
                </td>
                <td data-label="ลบ" class="table-label text_color fontstyle">
                  <button
                    class="btn btn-danger"
                    @click="remove('activity', items)"
                  >
                    -
                  </button>
                </td>
              </tr>

              <tr v-for="items in hotels" v-bind:key="items.activity_id">
                <td
                  scope="row"
                  data-label="ลำดับ:"
                  class="table-label text_color fontstyle"
                >
                  NaN
                </td>
                <!-- <td data-label="สถานที่:" class="table-label text_color">
                    <strong>{{ items.hotel_name }}</strong>
                  </td> -->

                <td
                  data-label="รูปภาพ:"
                  class="table-label text_color fontstyle"
                >
                  <img
                    class="imgActivity"
                    :src="items.hotel_image_cover_link"
                    alt=""
                  />
                </td>
                <td
                  data-label="กิจกรรม:"
                  class="table-label text_color fontstyle"
                >
                  <strong>{{ items.hotel_name }}</strong>
                </td>
                <td
                  data-label="ชุมชน:"
                  class="table-label text_color fontstyle"
                >
                  <strong>{{ items.community_name }}</strong>
                </td>
                <td data-label="ลบ" class="table-label text_color fontstyle">
                  <button
                    class="btn btn-danger"
                    @click="remove('hotel', items)"
                  >
                    -
                  </button>
                </td>
              </tr>

              <tr v-for="items in homestays" v-bind:key="items.activity_id">
                <td
                  scope="row"
                  data-label="ลำดับ:"
                  class="table-label text_color fontstyle"
                >
                  NaN
                </td>
                <!-- <td data-label="สถานที่:" class="table-label text_color">
                    <strong>{{ items.homestay_name }}</strong>
                  </td> -->

                <td
                  data-label="รูปภาพ:"
                  class="table-label text_color fontstyle"
                >
                  <img
                    class="imgActivity"
                    :src="items.homestay_image_cover_link"
                    alt=""
                  />
                </td>
                <td
                  data-label="กิจกรรม:"
                  class="table-label text_color fontstyle"
                >
                  <strong>{{ items.homestay_name }}</strong>
                </td>
                <td
                  data-label="ชุมชน:"
                  class="table-label text_color fontstyle"
                >
                  <strong>{{ items.community_name }}</strong>
                </td>
                <td data-label="ลบ" class="table-label text_color fontstyle">
                  <button
                    class="btn btn-danger"
                    @click="remove('homestay', items)"
                  >
                    -
                  </button>
                </td>
              </tr>

              <tr v-for="items in restaurants" v-bind:key="items.activity_id">
                <td
                  scope="row"
                  data-label="ลำดับ:"
                  class="table-label text_color fontstyle"
                >
                  NaN
                </td>
                <!-- <td data-label="สถานที่:" class="table-label text_color">
                    <strong>{{ items.restaurant_name }}</strong>
                  </td> -->

                <td
                  data-label="รูปภาพ:"
                  class="table-label text_color fontstyle"
                >
                  <img
                    class="imgActivity"
                    :src="items.restaurant_image_cover_link"
                    alt=""
                  />
                </td>
                <td
                  data-label="กิจกรรม:"
                  class="table-label text_color fontstyle"
                >
                  <strong>{{ items.restaurant_name }}</strong>
                </td>
                <td
                  data-label="ชุมชน:"
                  class="table-label text_color fontstyle"
                >
                  <strong>{{ items.community_name }}</strong>
                </td>
                <td data-label="ลบ" class="table-label text_color fontstyle">
                  <button
                    class="btn btn-danger"
                    @click="remove('restaurant', items)"
                  >
                    -
                  </button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { ref } from "vue";
import axios from "axios";
import { BASE_API_URL } from "../../../constants";

export default {
  name: "NameTrvel",
  setup() {
    let count = 1;
    const activitys = ref([]);
    const hotels = ref([]);
    const homestays = ref([]);
    const restaurants = ref([]);

    const plantrip_name = ref("");

    const status = localStorage.getItem("status");
    plantrip_name.value = sessionStorage.getItem("plantrip_name");

    //const token = localStorage.getItem("token");

    //กดปุ่มกลับไปที่หน้าเลือกเส้นทางหน้าแรก
    function getBackLink() {
      sessionStorage.removeItem("formCreatetrip");

      sessionStorage.removeItem("activitys");
      sessionStorage.removeItem("hotels");
      sessionStorage.removeItem("homestays");
      sessionStorage.removeItem("restaurants");
      sessionStorage.removeItem("timeline");

      sessionStorage.removeItem("startpoint");
      sessionStorage.removeItem("endpoint");
      sessionStorage.removeItem("startpointlatlong");
      sessionStorage.removeItem("endpointlatlong");
      sessionStorage.removeItem("plantrip_name");
      sessionStorage.removeItem("budget");

      window.location = "FormIndex";
    }
    //กดปุ่มกลับไปที่หน้าเลือกเส้นทางหน้าแรก

    //กดเพื่อบันทึกทริปในขั้นตอนสุดท้าย
    const getLink = async () => {
      const username = localStorage.getItem("id");

      const plantrip_point_start = sessionStorage.getItem("startpoint");
      const plantrip_point_end = sessionStorage.getItem("endpoint");
      const plantrip_start_date = sessionStorage.getItem("startdate");
      const plantrip_end_date = sessionStorage.getItem("enddate");
      const plantrip_budget = sessionStorage.getItem("budget");
      const plantrip_member = sessionStorage.getItem("number");

      sessionStorage.setItem("plantrip_name", plantrip_name.value);

      const obj1 = sessionStorage.getItem("activitys");
      const activity = JSON.parse(obj1);
      const activity_api = activity;

      const obj2 = sessionStorage.getItem("hotels");
      const hotel = JSON.parse(obj2);
      const hotel_api = hotel;

      const obj3 = sessionStorage.getItem("restaurants");
      const restaurant = JSON.parse(obj3);
      const restaurant_api = restaurant;

      const obj4 = sessionStorage.getItem("homestays");
      const homestay = JSON.parse(obj4);
      const homestay_api = homestay;

      if (status) {
        const response = await axios.post(`${BASE_API_URL}/plan/plantrip`, {
          username: username,

          plantrip_point_start: plantrip_point_start,
          plantrip_point_end: plantrip_point_end,
          plantrip_start_date: plantrip_start_date,
          plantrip_end_date: plantrip_end_date,
          plantrip_budget: plantrip_budget,
          plantrip_member: plantrip_member,
          plantrip_name: plantrip_name.value,

          activitys: activity_api,
          restaurants: restaurant_api,
          hotels: hotel_api,
          homestays: homestay_api,
        });

        alert(response.data.message);
        window.location = "showTrip?id=" + response.data.data;
        sessionStorage.removeItem("formCreatetrip");
      } else {
        var r = confirm(
          "โปรดเข้าสู่ระบบ 'ในสถานะ นักท่องเที่ยว' ก่อนทำการบันทึก!"
        );
        if (r == true) {
          sessionStorage.setItem("formCreatetrip", "true");
          window.location = "login";
        }
      }
    };
    //กดเพื่อบันทึกทริปในขั้นตอนสุดท้าย

    //ตรวจสอบของในตะกร้า
    setInterval(() => {
      const obj1 = sessionStorage.getItem("activitys");
      const activity = JSON.parse(obj1);
      activitys.value = activity;

      const obj2 = sessionStorage.getItem("hotels");
      const hotel = JSON.parse(obj2);
      hotels.value = hotel;

      const obj3 = sessionStorage.getItem("restaurants");
      const restaurant = JSON.parse(obj3);
      restaurants.value = restaurant;

      const obj4 = sessionStorage.getItem("homestays");
      const homestay = JSON.parse(obj4);
      homestays.value = homestay;
    }, 1000);
    //ตรวจสอบของในตะกร้า

    //ลบของในตะกร้า
    function remove(type, item) {
      if (type == "activity") {
        let index = activitys.value.indexOf(item);
        activitys.value.splice(index, 1);
        sessionStorage.setItem("activitys", JSON.stringify(activitys.value));
      } else if (type == "hotel") {
        let index = hotels.value.indexOf(item);
        hotels.value.splice(index, 1);
        sessionStorage.setItem("hotels", JSON.stringify(hotels.value));
      } else if (type == "homestay") {
        let index = homestays.value.indexOf(item);
        homestays.value.splice(index, 1);
        sessionStorage.setItem("homestays", JSON.stringify(homestays.value));
      } else if (type == "restaurant") {
        let index = restaurants.value.indexOf(item);
        restaurants.value.splice(index, 1);
        sessionStorage.setItem(
          "restaurants",
          JSON.stringify(restaurants.value)
        );
      }
    }
    //ลบของในตะกร้า

    return {
      activitys,
      remove,
      getLink,
      getBackLink,
      hotels,
      homestays,
      restaurants,
      count,
      plantrip_name,
    };
  },
};
</script>

<style scoped>
.col-md-2 {
  padding-right: 5px;
  padding-left: 5px;
}
.padd-10-10 {
  padding-top: 10px;
  padding-bottom: 10px;
}
.padd_20 {
  padding-bottom: 20px;
}

.input-style-1 input {
  width: 100%;
  border: 1px solid rgba(255, 255, 255, 0.5);
  border-radius: 20px;
  background: none;
  height: 50px;
  padding: 0px;
  color: rgb(0, 0, 0);
  background: rgb(255 255 255 / 50%);
  font-size: 20px;
  font-style: italic;
}
::placeholder {
  color: rgb(39, 110, 202);
}
.text_color {
  color: rgb(39, 110, 202);
}
.button-m {
  text-align: center;
  /* margin-top: 5px; */
  /* display: grid; */
  /* grid-template-columns: 50% 50%;
  -moz-column-gap: 1em;
  column-gap: 0em; */
  /* align-items: stretch; */
}

span {
  font-size: 16px;
  color: rgb(255, 255, 255);
}
.c-button {
  padding: 0px 16px;
  font-size: 14px;
  text-transform: capitalize;
  line-height: 0px;
  height: 40px;
  width: fit-content;
  font-weight: 700;
  font-style: italic;
  text-shadow: 0 0 2px white;
  background: rgb(39, 110, 202);
  display: table-column;
}
h1 {
  text-align: center;
}
/**-------------------- */
.grid-table {
  display: grid;
  width: 100%;
  padding-bottom: 30px;

  height: fit-content;
}
/* table {
  table-layout: fixed;
  width: 150px;
  width: auto;
}
table th {
  letter-spacing: 0.1em;
  text-transform: uppercase;
  height: 50px;
  border-radius: 0px;
  text-align: center;
  padding: 5px 10px;
  font-size: 12px;
  font-weight: 700;
  width: 150px;
  background: #95e1ff00;

  box-shadow: none;
}
table tr {
  background: rgba(255, 255, 255, 0);
}
td img {
  width: fit-content;
  width: 100%;
  height: 140px;
  object-fit: cover;
  vertical-align: middle;
  border-radius: 20px;
}
th h4 {
  font-size: 16px;
  line-height: 24px;
  font-weight: 600;

  text-transform: capitalize;
  letter-spacing: 0px;
  color: #555;
} */
/* .imgActivity {
  width: 150px;
  height: 100px;
  text-align: center;
} */
table {
  /* border: 1px solid #ccc; */
  border: none;
  border-collapse: collapse;
  margin: 0;
  padding: 0;
  width: 100%;
  table-layout: fixed;
}

table caption {
  font-size: 1.5em;
  margin: 0.5em 0 0.75em;
}

table tr {
  /*background-color: #f8f8f8;
  border: 1px solid #ddd; */
  /* border: none;
  padding: 0.35em; */
  background: rgba(255, 255, 255, 0);
}

/* table th,
table td {
  padding: 0.625em;
  text-align: center;
  background: white;
  box-shadow: 0px 0px 2px #222222;
} */
/* table td {
  padding: 0.625em;
  text-align: center;
  text-transform: uppercase;
  -moz-border-radius: 25px;
  border-radius: 25px;
  text-align: center;
  padding: 16px 20px;
  font-size: 12px;
  font-weight: 700;
  background: white;
  width: 100%;
  box-shadow: 2px 1px 5px #222222;
} */

table th {
  letter-spacing: 0.1em;
  text-transform: uppercase;
  height: 50px;
  border-radius: 0px;
  text-align: center;
  padding: 5px 10px;
  font-size: 12px;
  font-weight: 700;
  width: 150px;
  background: #95e1ff00;

  box-shadow: none;
}
td img {
  width: fit-content;
  width: 100%;
  height: 140px;
  object-fit: cover;
  vertical-align: middle;
  border-radius: 20px;
}
th h4 {
  font-size: 16px;
  line-height: 24px;
  font-weight: 600;

  text-transform: capitalize;
  letter-spacing: 0px;
  color: #555;
}
.bg_table {
  background: #ffffffa1;
  border-radius: 20px;
  border: 2px solid white;
  text-align: center;
}
.box-table {
  box-shadow: 0px 0px 3px rgb(84, 84, 84);
  border-radius: 20px;
  /* width: -webkit-fill-available; */
}

.text-center {
  text-align: center;
}
td {
  text-align: center;
  padding: 5px 10px 20px 10px;
}
.vl {
  border-right: 1px solid black;
  height: 20px;
  margin-top: -35px;
}
@media screen and (max-width: 600px) {
  .center {
    text-align: center;
  }
  table {
    border: 0;
  }

  table caption {
    font-size: 1.3em;
  }

  table thead {
    border: none;
    clip: rect(0 0 0 0);
    height: 1px;
    margin: -1px;
    overflow: hidden;
    padding: 0;
    position: absolute;
    width: 1px;
  }

  table tr {
    border-bottom: 3px solid #ddd;
    display: block;
    margin-bottom: 0.625em;
  }

  table td {
    border-bottom: 1px solid #ddd;
    display: block;
    font-size: 0.8em;
    text-align: right;
  }

  table td::before {
    content: attr(data-label);
    float: left;
    font-weight: bold;
    text-transform: uppercase;
  }

  table td:last-child {
    border-bottom: 0;
  }
  th h4 {
    font-size: 16px;
    line-height: 24px;
    font-weight: 600;

    text-transform: capitalize;
    letter-spacing: 0px;
    color: #555;
  }
  td img {
    width: fit-content;
    width: 100%;
    height: 140px;
    object-fit: cover;
    vertical-align: middle;
    border-radius: 20px;
  }
}
</style>
