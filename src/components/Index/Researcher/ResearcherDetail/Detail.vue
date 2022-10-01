<template>
  <!-- <Banner msg="กิจกรรม" img="images/community/commu6.jpg" /> -->
  <Banner />
  <!-- This demo uses flex grid but you can use float grid too -->
  <div>
    <main v-for="items in Researcher" v-bind:key="items.user_id">
      <article>
        <div
          class="detail-header"
          v-for="items in Research"
          v-bind:key="items.researcher_research_id"
        >
          <div v-show="items.create_by == user">
            <h4>งานวิจัย/โครงการ</h4>
            <p>{{ items.research_name }}</p>
            <h4>รหัสงานวิจัย/โครงการ</h4>
            <p>{{ items.research_code }}</p>
            <h4>งบประมาณ</h4>
            <p>{{ items.research_budget }}</p>
          </div>
        </div>
      </article>

      <Contact2
        :user_image_cover="contact.user_image_cover_link"
        :user_name="contact.user_name + contact.user_surname"
        :user_telephone="contact.user_telephone"
        :user_line="contact.user_line"
        :user_facebook="contact.user_facebook"
        :user_instragram="contact.user_instragram"
        :researcher_innovation_link="contact.user_link"
        :community_id="items.community_id"
      />
    </main>

    <hr />
    <!------------------------------- Knowhow ------------------------------------>

    <div class="container">
      <div class="second-title">
        <h2 class="color-dark-2">นวัตกรรม</h2>
      </div>

      <div class="row">
        <div
          v-for="items in Innovation"
          v-bind:key="items.researcher_innovation_id"
        >
          <div v-show="items.create_by == user">
            <div class="col-xs-12 col-sm-6">
              <div class="black-hover">
                <img
                  class="center-image img-siez-detail"
                  :src="items.researcher_innovation_image_cover_link"
                  alt=""
                />
              </div>
            </div>

            <div class="col-xs-12 col-sm-6">
              <div class="world-country">
                <h3 class="world-title color-black">
                  {{ items.researcher_innovation_name }}
                </h3>
                <h3 class="world-title color-black">
                  {{ items.researcher_innovation_name_en }}
                </h3>

                <p
                  class="color-black-light"
                  v-html="items.researcher_innovation_detail"
                ></p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!---------------------------------- Knowhow ---------------------------------------->

    <hr />
    <!------------------------------- Knowhow ------------------------------------>

    <div class="container">
      <div class="second-title">
        <h2 class="color-dark-2">ความรู้</h2>
      </div>

      <div class="row">
        <div v-for="items in Knowhow" v-bind:key="items.researcher_knowhow_id">
          <div v-show="items.create_by == user">
            <div class="col-xs-12 col-sm-6">
              <div class="black-hover">
                <img
                  class="center-image img-siez-detail"
                  :src="items.researcher_knowhow_image_cover_link"
                  alt=""
                />
              </div>
            </div>

            <div class="col-xs-12 col-sm-6">
              <div class="world-country">
                <h3 class="world-title color-black">
                  {{ items.researcher_knowhow_name }}
                </h3>
                <h3 class="world-title color-black">
                  {{ items.researcher_knowhow_name_en }}
                </h3>

                <p
                  class="color-black-light"
                  v-html="items.researcher_knowhow_detail"
                ></p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!---------------------------------- Knowhow ---------------------------------------->
    <hr />

    <!------------------------------- Experience ------------------------------------>

    <div class="container">
      <div class="second-title">
        <h2 class="color-dark-2">ประสบการณ์</h2>
      </div>

      <div class="row">
        <div
          v-for="items in Experience"
          v-bind:key="items.researcher_experience_id"
        >
          <div v-show="items.create_by == user">
            <div class="col-xs-12 col-sm-6">
              <div class="world-city black-hover">
                <img
                  class="center-image img-siez-detail"
                  :src="items.researcher_experience_image_cover_link"
                  alt=""
                />
              </div>
            </div>

            <div class="col-xs-12 col-sm-6">
              <div class="world-country">
                <h3 class="world-title color-black">
                  {{ items.researcher_experience_name }}
                </h3>
                <h3 class="world-title color-black">
                  {{ items.researcher_experience_name_en }}
                </h3>
                <p
                  class="color-black-light"
                  v-html="items.researcher_experience_detail"
                ></p>
              </div>
            </div>
            <hr />
          </div>
        </div>
      </div>
    </div>
    <!---------------------------------- Experience ---------------------------------------->
  </div>
</template>

<script>
import Banner from "./Banner.vue";
import Contact2 from "../../../Contact2.vue";

import { onMounted, ref } from "vue";
import axios from "axios";
import { BASE_API_URL } from "../../../../constants";

export default {
  name: "Detail",
  components: {
    Banner,
    Contact2,
  },

  setup() {
    const contact = ref([]);
    const Researcher = ref([]);
    const user = ref([]);
    const Research = ref([]);
    const Innovation = ref([]);
    const Knowhow = ref([]);
    const Experience = ref([]);

    let id = window.location.search;
    id = id.split("=");
    id = id[1];

    const getData = async () => {
      const response = await axios.get(
        `${BASE_API_URL}/Researcher/ResearcherDetail/` + id
      );
      Researcher.value = response.data.data;
      user.value = response.data.data[0].user_login;
      contact.value = response.data.data[0];
      console.log(contact.value);

      const responseResearch = await axios.get(
        `${BASE_API_URL}/Researcher/Research`
      );
      Research.value = responseResearch.data.data;

      const responseInnovation = await axios.get(
        `${BASE_API_URL}/innovation-product/researcherInnovationDetail/` +
          response.data.data[0].user_login
      );
      Innovation.value = responseInnovation.data.data;

      const responseKnowhow = await axios.get(
        `${BASE_API_URL}/Researcher/Knowhow`
      );
      Knowhow.value = responseKnowhow.data.data;

      const responseExperience = await axios.get(
        `${BASE_API_URL}/Researcher/Experience`
      );
      Experience.value = responseExperience.data.data;
    };

    onMounted(() => {
      getData();
    });

    return {
      Research,
      user,
      Researcher,
      Innovation,
      Knowhow,
      Experience,
      id,
      contact,
    };
  },
};
</script>

<style scoped>
.img-siez-detail {
  width: 100%;
  max-width: 300px;
  height: 100%;
  max-height: 500px;
  display: block;
  margin: auto;
}
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

  margin-bottom: 0px;
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
/*--------step-1----------*/
main {
  max-width: 1200px;
  margin: 30px auto;
  padding: 0px 80px 0px 80px;
  width: 100%;
  display: grid;
  /* Define Auto Row size */
  grid-auto-rows: auto;
  /*Define our columns */
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));

  grid-gap: 1em;
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
  width: fit-content;
  background-color: #022c5447;
  justify-self: end;
}
@media only screen and (max-width: 768px) {
  main {
    grid-template-columns: repeat(1, Auto);
    padding: 0 30px;
  }
  article:nth-child(even) {
    color: white;
    height: fit-content;
    width: 100%;
    background-color: #022c5447;
    justify-self: center;
    text-align: center;
  }
}
/*--------step-1----------*/

/*--------step-2----------*/
.second-title {
  padding-top: 30px;
}
.world-country h3 {
  font-size: 22px;
  line-height: 30px;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0px;
}
.color-dark-2 {
  color: #206ab0;
}
@media only screen and (max-width: 768px) {
  .world-country {
    margin-top: 40px;
    text-align: center;
  }
}
/*--------step-2----------*/
.world-city {
  position: relative;
  min-height: 299px;
  text-align: center;
  margin-bottom: 0px;
}
.img-siez-detail {
  width: 100%;
  max-width: 300px;

  max-height: 500px;
  display: block;
  height: 300px;
  object-fit: cover;
  margin: auto;
}
</style>
