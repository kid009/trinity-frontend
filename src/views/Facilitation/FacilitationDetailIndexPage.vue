<template>
  <div>
    <FacilitationBanner :name="name" :img="img" />
    <main>
      <div class="col-xs-12">
        <div class="col-md-9">
          <FacilitationDetailPage
            :name="name"
            :nameen="nameen"
            :detail="detail"
            :detailen="detailen"
            :history="history"
            :historyen="historyen"
            :room_detail="room_detail"
            :rate="rate"
            :room_price_min="room_price_min"
            :room_price_max="room_price_max"
            :address="address"
            :website="website"
            :vdo="vdo"
          />
        </div>
        <div class="col-md-3">
          <Contact2
            :user_name="user_name"
            :user_telephone="user_telephone"
            :user_line="user_line"
            :user_facebook="user_facebook"
            :user_instragram="user_instragram"
            :researcher_innovation_link="user_link"
            :user_image_cover="user_image_cover"
          />
        </div>
      </div>
      <FacilitationImgDetail :imgAll="imgAll" />
    </main>
  </div>
</template>

<script>
import FacilitationBanner from "../../components/Facilitation/FacilitationDetail/FacilitationBanner.vue";
import FacilitationDetailPage from "../../components/Facilitation/FacilitationDetail/FacilitationDetailPage.vue";
import FacilitationImgDetail from "../../components/Facilitation/FacilitationDetail/FacilitationImgDetail.vue";
import Contact2 from "../../components/Contact2.vue";

import { onMounted, ref } from "vue";
import axios from "axios";
import { BASE_API_URL } from "../../constants";

export default {
  name: "FacilitationDetailIndexPage",
  components: {
    FacilitationBanner,

    FacilitationDetailPage,
    FacilitationImgDetail,
    Contact2,
  },

  setup() {
    const name = ref([]);
    const nameen = ref([]);
    const detail = ref([]);

    const detailen = ref([]);
    const history = ref([]);
    const historyen = ref([]);

    const img = ref([]);
    const room_detail = ref([]);
    const rate = ref([]);
    const room_price_min = ref([]);
    const room_price_max = ref([]);
    const address = ref([]);
    const website = ref([]);

    const user_name = ref([]);
    const user_telephone = ref([]);
    const user_line = ref([]);
    const user_facebook = ref([]);
    const user_instragram = ref([]);
    const user_link = ref([]);
    const user_image_cover = ref([]);

    const businesscontact = ref([]);
    const contacts = ref([]);

    const imgAll = ref([]);
    const Images = ref([]);

    const vdo = ref([]);

    let linkvdo = "";
    const changLinkvdo = (linkvdo) => {
      if (linkvdo.includes("https://www.youtube.com/watch?v=")) {
        vdo.value = linkvdo.slice(32);
      } else if (linkvdo.includes("https://youtu.be/")) {
        vdo.value = linkvdo.slice(17);
      } else if (linkvdo.includes("https://www.youtube.com/embed/")) {
        vdo.value = linkvdo.slice(30);
      }
    };

    let page = window.location.search;
    page = page.split("=");
    page = page[1];
    page = page.substring(0, page.length - 6);

    let group = window.location.search;
    group = group.split("=");
    group = group[2];
    group = group.substring(0, group.length - 3);

    let id = window.location.search;
    id = id.split("=");
    id = id[3];

    const getData = async () => {
      if (page == "hotel") {
        const responsehotelDetail = await axios.get(
          `${BASE_API_URL}/accommodation/hotelDetail/` + id
        );
        name.value = responsehotelDetail.data.data[0].hotel_name;

        detail.value = responsehotelDetail.data.data[0].hotel_detail;
        img.value = responsehotelDetail.data.data[0].hotel_image_cover;
        room_detail.value = responsehotelDetail.data.data[0].hotel_room_detail;
        rate.value = responsehotelDetail.data.data[0].hotel_rate;
        room_price_min.value =
          responsehotelDetail.data.data[0].hotel_room_price_min;
        room_price_max.value =
          responsehotelDetail.data.data[0].hotel_room_price_max;
        address.value = responsehotelDetail.data.data[0].hotel_address;

        user_name.value =
          responsehotelDetail.data.data[0].hotel_contact_person_name;
        user_telephone.value = responsehotelDetail.data.data[0].hotel_telephone;
        user_line.value =
          responsehotelDetail.data.data[0].hotel_contact_person_line;
        user_facebook.value =
          responsehotelDetail.data.data[0].hotel_contact_person_facebook;
        user_instragram.value =
          responsehotelDetail.data.data[0].hotel_contact_person_instagram;
        user_link.value = responsehotelDetail.data.data[0].hotel_link;
        user_image_cover.value =
          responsehotelDetail.data.data[0].hotel_contact_person_image;
        linkvdo = responsehotelDetail.data.data[0].hotel_vdo;
        changLinkvdo(linkvdo);

        imgAll.value.push(responsehotelDetail.data.data[0].hotel_image_cover);
      } else if (page == "homestay") {
        const responsehomestayDetail = await axios.get(
          `${BASE_API_URL}/accommodation/homestayDetail/` + id
        );
        name.value = responsehomestayDetail.data.data[0].homestay_name;
        detail.value = responsehomestayDetail.data.data[0].homestay_detail;
        img.value = responsehomestayDetail.data.data[0].homestay_image_cover;

        room_price_min.value =
          responsehomestayDetail.data.data[0].homestay_occupancy_min;
        room_price_max.value =
          responsehomestayDetail.data.data[0].homestay_occupancy_max;
        address.value =
          responsehomestayDetail.data.data[0].homestay_owner_address;

        user_name.value =
          responsehomestayDetail.data.data[0].homestay_owner_name;
        user_telephone.value =
          responsehomestayDetail.data.data[0].homestay_owner_telephone;
        user_line.value = responsehomestayDetail.data.data[0].homestay_line;
        user_facebook.value =
          responsehomestayDetail.data.data[0].homestay_facebook;
        user_instragram.value =
          responsehomestayDetail.data.data[0].homestay_instagram;
        user_link.value = responsehomestayDetail.data.data[0].homestay_link;
        user_image_cover.value =
          responsehomestayDetail.data.data[0].homestay_image_people;
        linkvdo = responsehomestayDetail.data.data[0].homestay_vdo;
        changLinkvdo(linkvdo);

        imgAll.value.push(
          responsehomestayDetail.data.data[0].homestay_image_cover
        );
      } else if (page == "restaurant") {
        const responserestaurantDetail = await axios.get(
          `${BASE_API_URL}/accommodation/restaurantDetail/` + id
        );
        name.value = responserestaurantDetail.data.data[0].restaurant_name;
        detail.value = responserestaurantDetail.data.data[0].restaurant_detail;

        img.value =
          responserestaurantDetail.data.data[0].restaurant_image_cover;

        rate.value =
          responserestaurantDetail.data.data[0].restaurant_price_range;
        address.value =
          responserestaurantDetail.data.data[0].restaurant_address;

        user_name.value =
          responserestaurantDetail.data.data[0].restaurant_contact_person_name;
        user_telephone.value =
          responserestaurantDetail.data.data[0].restaurant_telephone;
        user_line.value =
          responserestaurantDetail.data.data[0].restaurant_contact_person_line;
        user_facebook.value =
          responserestaurantDetail.data.data[0].restaurant_contact_person_facebook;
        user_instragram.value =
          responserestaurantDetail.data.data[0].restaurant_contact_person_instagram;
        user_link.value = responserestaurantDetail.data.data[0].restaurant_link;
        user_image_cover.value =
          responserestaurantDetail.data.data[0].restaurant_contact_person_image;
        linkvdo = responserestaurantDetail.data.data[0].restaurant_vdo;
        changLinkvdo(linkvdo);

        imgAll.value.push(
          responserestaurantDetail.data.data[0].restaurant_image_cover
        );
      } else if (page == "bussiness") {
        const responseBussinessDetail = await axios.get(
          // `${BASE_API_URL}/accommodation/businessDetail/` + id
          `${BASE_API_URL}/plan/BussinessDetail?bussiness_id=` + id
        );
        name.value = responseBussinessDetail.data.data[0].bussiness_name;
        nameen.value = responseBussinessDetail.data.data[0].bussiness_name_en;
        detail.value = responseBussinessDetail.data.data[0].bussiness_detail;
        detailen.value =
          responseBussinessDetail.data.data[0].bussiness_detail_en;
        history.value = responseBussinessDetail.data.data[0].bussiness_history;
        historyen.value =
          responseBussinessDetail.data.data[0].bussiness_history_en;

        img.value =
          responseBussinessDetail.data.data[0].bussiness_image_cover_link;

        address.value = responseBussinessDetail.data.data[0].bussiness_address;

        user_name.value = responseBussinessDetail.data.data[0].user_name;
        user_telephone.value =
          responseBussinessDetail.data.data[0].user_telephone;
        user_line.value = responseBussinessDetail.data.data[0].user_line;
        user_facebook.value =
          responseBussinessDetail.data.data[0].user_facebook;
        user_instragram.value =
          responseBussinessDetail.data.data[0].user_instragram;
        user_link.value = responseBussinessDetail.data.data[0].bussiness_link;
        user_image_cover.value =
          responseBussinessDetail.data.data[0].user_image_cover;
        linkvdo = responseBussinessDetail.data.data[0].bussiness_vdo;
        changLinkvdo(linkvdo);

        const responseImages = await axios.get(
          `${BASE_API_URL}/businesstourism/BusinessImage/` + id
        );
        Images.value = responseImages.data.data;

        for (let key in responseImages.data.data) {
          let imageAll = responseImages.data.data[key];
          imgAll.value.push(imageAll.bussiness_image_file_link);
        }

        // const responseBussinessDetailplan = await axios.get(
        //   `${BASE_API_URL}/plan/BussinessDetail?bussiness_id=` + id
        // );
        // name.value = responseBussinessDetailplan.data.data[0].bussiness_name;
        // detail.value =
        //   responseBussinessDetailplan.data.data[0].bussiness_detail;

        // img.value =
        //   responseBussinessDetailplan.data.data[0].bussiness_image_cover;

        // address.value =
        //   responseBussinessDetailplan.data.data[0].bussiness_address;

        // user_name.value = responseBussinessDetailplan.data.data[0].user_name;
        // user_telephone.value =
        //   responseBussinessDetailplan.data.data[0].user_telephone;
        // user_line.value = responseBussinessDetailplan.data.data[0].user_line;
        // user_facebook.value =
        //   responseBussinessDetailplan.data.data[0].user_facebook;
        // user_instragram.value =
        //   responseBussinessDetailplan.data.data[0].user_instragram;
        // user_link.value =
        //   responseBussinessDetailplan.data.data[0].bussiness_link;
        // user_image_cover.value =
        //   responseBussinessDetailplan.data.data[0].user_image_cover;
        // linkvdo = responseBussinessDetailplan.data.data[0].bussiness_vdo;
        // changLinkvdo(linkvdo);
      } else if (page == "poi") {
        const responsepoiDetail = await axios.get(
          `${BASE_API_URL}/accommodation/poiDetail/` + id
        );
        name.value = responsepoiDetail.data.data[0].poi_name;
        detail.value = responsepoiDetail.data.data[0].poi_detail;

        img.value = responsepoiDetail.data.data[0].poi_image_cover;

        address.value = responsepoiDetail.data.data[0].poi_address;

        website.value = responsepoiDetail.data.data[0].poi_website;

        user_name.value = responsepoiDetail.data.data[0].poi_contanct_name;
        user_telephone.value = responsepoiDetail.data.data[0].poi_telephone;
        user_line.value =
          responsepoiDetail.data.data[0].poi_contact_person_line;
        user_facebook.value =
          responsepoiDetail.data.data[0].poi_contact_person_facebook;
        user_instragram.value =
          responsepoiDetail.data.data[0].poi_contact_person_instagram;

        user_image_cover.value =
          responsepoiDetail.data.data[0].poi_contact_person_image;
        linkvdo = responsepoiDetail.data.data[0].poi_vdo;
        changLinkvdo(linkvdo);

        imgAll.value.push(responsepoiDetail.data.data[0].poi_image_cover);
      } else if (page == "travel") {
        const responsepoiDetail = await axios.get(
          `${BASE_API_URL}/accommodation/travelDetail/` + id
        );
        name.value = responsepoiDetail.data.data[0].travel_contact;
        detail.value = responsepoiDetail.data.data[0].travel_detail;

        img.value = responsepoiDetail.data.data[0].travel_image_map;

        address.value = responsepoiDetail.data.data[0].travel_address;

        website.value = responsepoiDetail.data.data[0].poi_website;

        user_name.value = responsepoiDetail.data.data[0].travel_contact;
        user_telephone.value = responsepoiDetail.data.data[0].travel_telephone;
        user_line.value =
          responsepoiDetail.data.data[0].poi_contact_person_line;
        user_facebook.value =
          responsepoiDetail.data.data[0].poi_contact_person_facebook;
        user_instragram.value =
          responsepoiDetail.data.data[0].poi_contact_person_instagram;

        user_image_cover.value =
          responsepoiDetail.data.data[0].travel_image_map;
        linkvdo = responsepoiDetail.data.data[0].travel_vdo;
        changLinkvdo(linkvdo);

        imgAll.value.push(responsepoiDetail.data.data[0].travel_image_map);
      } else if (page == "nature") {
        const responsepoiDetail = await axios.get(
          `${BASE_API_URL}/accommodation/natureDetail/` + id
        );
        name.value = responsepoiDetail.data.data[0].nature_name;
        detail.value = responsepoiDetail.data.data[0].nature_detail;

        img.value = responsepoiDetail.data.data[0].nature_image_cover;

        address.value = responsepoiDetail.data.data[0].travel_address;

        website.value = responsepoiDetail.data.data[0].poi_website;

        user_name.value = responsepoiDetail.data.data[0].nature_caretaker;
        user_telephone.value = responsepoiDetail.data.data[0].nature_telephone;
        user_line.value = responsepoiDetail.data.data[0].nature_caretaker_line;
        user_facebook.value =
          responsepoiDetail.data.data[0].nature_caretaker_facebook;
        user_instragram.value =
          responsepoiDetail.data.data[0].nature_caretaker_instagram;

        user_image_cover.value =
          responsepoiDetail.data.data[0].nature_caretaker_image;
        linkvdo = responsepoiDetail.data.data[0].nature_vdo;
        changLinkvdo(linkvdo);

        imgAll.value.push(responsepoiDetail.data.data[0].nature_image_cover);
      } else if (page == "place") {
        const responsepoiDetail = await axios.get(
          `${BASE_API_URL}/accommodation/placeDetail/` + id
        );
        name.value = responsepoiDetail.data.data[0].place_name;
        detail.value = responsepoiDetail.data.data[0].place_detail;

        img.value = responsepoiDetail.data.data[0].place_image_cover;

        address.value = responsepoiDetail.data.data[0].travel_address;

        website.value = responsepoiDetail.data.data[0].place_link;

        user_name.value = responsepoiDetail.data.data[0].place_contact_person;
        user_telephone.value = responsepoiDetail.data.data[0].place_telephone;
        user_line.value =
          responsepoiDetail.data.data[0].place_contact_person_line;
        user_facebook.value =
          responsepoiDetail.data.data[0].place_contact_person_facebook;
        user_instragram.value =
          responsepoiDetail.data.data[0].place_contact_person_instagram;

        user_image_cover.value =
          responsepoiDetail.data.data[0].place_contact_person_image;
        linkvdo = responsepoiDetail.data.data[0].place_vdo;
        changLinkvdo(linkvdo);

        imgAll.value.push(responsepoiDetail.data.data[0].place_image_cover);
      }
    };

    onMounted(() => {
      getData();
    });

    return {
      page,
      group,
      id,
      businesscontact,
      contacts,

      name,
      nameen,
      detail,
      detailen,
      history,
      historyen,
      img,
      room_detail,
      rate,
      room_price_min,
      room_price_max,
      address,
      website,

      user_name,
      user_telephone,
      user_line,
      user_facebook,
      user_instragram,
      user_link,
      user_image_cover,

      vdo,
      linkvdo,

      imgAll,
      Images,
    };
  },
};
</script>

<style scoped>
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
  height: fit-content;
}
.item h3 {
  text-align: center;
  padding-top: 10px;
  margin-top: 20px;
  font-weight: 500;
  letter-spacing: 0px;
}
.item img {
  width: 100%;
  border-radius: 0.2rem;
  height: 100%;
  object-fit: cover;
}
.item--main2 {
  grid-column: 1/4;
  height: 61vh;
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
.detail-header {
  text-align: start;

  margin-bottom: 20px;
}
.detail-header h3 {
  font-weight: 400;
  letter-spacing: 0px;
  color: #206ab0;
  padding-bottom: 15px;
}
.detail-header h4 {
  padding-top: 20px;
  padding-bottom: 20px;
  color: #206ab0;
}
.icon-contaxt {
  padding: 0px;
  align-self: stretch;
  text-align: center;
  margin-top: 20px;
}
.icon-contaxt img {
  padding: 1px;
  text-align: start;
  width: 41px;
  margin: 0px;
  box-shadow: 1px 1px 0px #f8f8f8;
}
@media only screen and (min-width: 768px) {
  .icon-contaxt img {
    width: 30px;
  }
}

main {
  /* max-width: 1200px; */
  margin: 10px auto;
  padding: 0 100px;
  width: 100%;
  /* display: grid; */
  /* Define Auto Row size */
  /* grid-auto-rows: auto;
  grid-template-columns: repeat(2, Auto);
  grid-gap: 1em; */
}

article {
  border-radius: 5px;
  padding: 20px;
}
article .imgcontact img {
  width: 100px;
  height: 100px;
  object-fit: cover;
  margin-top: 10px;
  margin-bottom: 20px;
}
article .imgcontact {
  text-align: center;
}
article h4 {
  padding-bottom: 20px;
  font-weight: 600;
  color: #1f69b0;
  margin-top: 10px;
}
.h4 {
  padding-bottom: 0px;
  font-weight: 600;
  color: #1f69b0;
  margin-top: 10px;
  text-align: center;
}
article p {
  padding-bottom: 10px;
}
article:nth-child(odd) {
  background-color: #ffffff;
}

article:nth-child(even) {
  color: white;
  height: fit-content;
  background-color: #022c5447;
}
@media only screen and (max-width: 768px) {
  main {
    grid-template-columns: repeat(2, Auto);
    padding: 0 10px;
  }
}
@media only screen and (max-width: 766px) {
  main {
    grid-template-columns: repeat(1, Auto);
    padding: 0 10px;
  }
}
</style>
