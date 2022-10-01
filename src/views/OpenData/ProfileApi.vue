<template>
  <NavbarApi />
  <Banner msg="Profile" img="images/earth-g.jpg" />
  <div
    v-for="items in profile_api"
    :key="items"
    class="main-wraper padd-70-70 bg-grey-2"
  >
    <div class="container box">
      <div class="row">
        <div class="col-xs-12">
          <div class="col-md-3">
            <div class="sidebar bg-white clearfix">
              <div class="sidebar-block text-center">
                <img
                  src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-chat/ava3.webp"
                  alt="avatar"
                  class="rounded-circle img-fluid"
                  style="width: 150px"
                />
                <h5 class="">{{ items.user_api_login }}</h5>
                <p class="text-muted">{{ items.user_api_company }}</p>
              </div>
            </div>
          </div>
          <div class="col-md-9">
            <div class="clearfix bg-white">
              <div class="container">
                <div class="detail-header style-2 position-body">
                  <div class="tour-info-line clearfix">
                    <div class="row">
                      <div class="col-sm-3">
                        <p class="">ชื่อ-สกุล</p>
                      </div>
                      <div class="col-sm-9">
                        <p class="text-muted">
                          {{ items.user_api_firstname }}
                          {{ items.user_api_lastname }}
                        </p>
                      </div>
                    </div>
                    <hr />
                    <div class="row">
                      <div class="col-sm-3">
                        <p class="">อีเมล</p>
                      </div>
                      <div class="col-sm-9">
                        <p class="text-muted">{{ items.user_api_email }}</p>
                      </div>
                    </div>

                    <hr />
                    <div class="row">
                      <div class="col-sm-3">
                        <p class="">Token</p>
                      </div>
                      <div class="col-sm-9">
                        <p class="text-muted">
                          {{ items.user_api_token }}
                        </p>
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
  </div>
</template>

<script>
import Banner from "../../components/OpenData/Banner.vue";
import NavbarApi from "../../components/OpenData/NavbarApi.vue";
import { onMounted, ref } from "vue";
import axios from "axios";
import { BASE_API_URL } from "../../constants";

export default {
  name: "ProfileApi",
  components: {
    NavbarApi,
    Banner,
  },
  setup() {
    const id_api = atob(localStorage.getItem("aWRfYXBp"));
    const token_api = atob(localStorage.getItem("dG9rZW5fYXBp"));
    const profile_api = ref([]);
    const id_null = atob("null");

    const getData = async () => {
      const response = await axios.get(
        `${BASE_API_URL}/auth/profile_api?user_api_login=` + id_api
      );
      profile_api.value = response.data.data;
    };

    onMounted(() => {
      if (id_api == id_null) {
        window.location = "Api";
      } else {
        getData();
      }
    });
    return { id_null, id_api, token_api, profile_api };
  },
};
</script>

<style scoped>
.text-spaec {
  letter-spacing: 0px;
}
.text-line {
  text-decoration: underline;
}
.position-body {
  flex: 1 1 auto;
  padding: 1.5rem;
}
</style>
