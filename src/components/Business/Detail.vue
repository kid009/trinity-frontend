<template>

  <div class="container">
    <div
      class="grid-container"
      v-for="items in business"
      v-bind:key="items.bussiness_id"
    >
      <div class="main2">
        <div class="item item--main2">
          <img :src="items.bussiness_image_cover_link" alt="" />
        </div>
        <div
          class="item item--aside"
          v-for="item in businesscontact"
          v-bind:key="item.user_id"
          v-show="item.user_login == contacts"
        >
          <h3>ติดต่อ</h3>
          <hr />
          <div class="contact-detail">
            <p class="color-grey-9">
              ที่อยู่:
              <span class="color-white">{{ item.user_address }}</span>
            </p>
            <p class="color-grey-9">
              เบอร์โทร:
              <span class="color-white">{{ item.user_telephone }}</span>
            </p>

            <div class="icon-contaxt">
              <a :href="items.user_facebook">
                <img src="images/icon/facebook.png" alt=""
              /></a>
              <a :href="items.user_instragram">
                <img src="images/icon/instagram.png" alt=""
              /></a>
              <a :href="items.user_line">
                <img src="images/icon/line.png" alt=""
              /></a>
            </div>
            <div class="details-btn">
              <a
                :href="items.bussiness_link"
                class="c-button b-40 bg-tr-1 hv-white"
                ><span>เข้าเว็บไซต์หลัก</span></a
              >
            </div>
            <div class="details-btn">
              <a
                :href="items.bussiness_link"
                class="c-button b-40 bg-tr-1 hv-white"
                ><span>แผนที่</span></a
              >
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
import { BASE_API_URL } from "../../constants";

export default {
  name: "Detail",

  setup() {
    const business = ref([]);
    const businesscontact = ref([]);
    const contact = ref([]);
    const contacts = ref([]);
    let id = window.location.search;
    id = id.split("=");
    id = id[1];

    const getData = async () => {
      const response = await axios.get(
        `${BASE_API_URL}/plan/BussinessDetail?bussiness_id=` + id
      );
      business.value = response.data.data;
      const responsecontact = await axios.get(
        `${BASE_API_URL}/plan/bussinessContact`
      );
      businesscontact.value = responsecontact.data.data;

      contacts.value = response.data.data[0].create_by;

      // businesscontact.value.forEach((element) => {
      //   if (element.user_login == response.data.data[0].create_by)
      //     contact.value = element;
      // });
    };

    onMounted(() => {
      getData();
    });

    return { business, id, businesscontact, contact, contacts };
  },
};
</script>

<style scoped>

/*main2*/
.grid-container {
  min-height: 100%;
  width: 100%;
  background-color: inherit;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-template-rows: repeat(5, max-content);
  row-gap: 0.5rem;
}

.main2 {
  grid-column: 1/-1;
  grid-row: 3/4;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-gap: 0.5rem;
}

.item {
  padding: 0rem;
  color: white;
  font-size: 2.5rem;

  border-radius: 0.2rem;
  /* display: flex; */
  justify-content: center;
  /* align-items: center; */
  box-shadow: 0 1rem 4rem rgba(0, 0, 0, 0.25);
  transition: all 0.2s;
}
.item h3 {
  text-align: center;
  padding-top: 10px;
  margin-top: 20px;
}
.item img {
  width: 100%;
  border-radius: 0.2rem;
  height: 100%;
  object-fit: cover;
}
.item--main2 {
  grid-column: 1/4;

  background-color: #847996;
}
@media only screen and (max-width: 41.875em) {
  .item--main2 {
    grid-column: 1/-1;
  }
}
.item--aside {
  grid-column: 4/5;
  background-color: #01588d;
}
@media only screen and (max-width: 41.875em) {
  .item--aside {
    grid-column: 1/-1;
  }
}
.contact-detail {
  padding-right: 15px;
  padding-left: 15px;
  padding-bottom: 10px;
}
hr {
  color: white;
  width: 50%;
}
.details-btn {
  text-align: center;
}
.details-btn .c-button:first-child {
  margin-bottom: 15px;
  border-radius: 10px;
}
.icon-contaxt {
  padding: 10px;
  align-self: center;
  text-align: center;
  margin-top: 20px;
}
.icon-contaxt img {
  padding: 1px;
  text-align: center;
  width: 41px;
  margin: 5px;
  box-shadow: 1px 1px 0px #f8f8f8;
}
@media only screen and (min-width: 768px) {
  .icon-contaxt img {
    width: 30px;
  }
}
</style>