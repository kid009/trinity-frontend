<template>
  <NavbarApi />
  <div class="full-height">
    <div class="clip">
      <div class="bg bg-bg-chrome img bg-gray"></div>
    </div>
    <div class="main-wraper padd-70-70" style="top: 50px">
      <div class="container">
        <div class="row">
          <div class="col-xs-12">
            <div class="col-md-3"></div>
            <div class="col-md-6 box-login">
              <div class="card-header">
                <h2 class="text-center fontstyle text-spaec">เข้าสู่ระบบ</h2>
              </div>
              <form
                data-toggle="validator"
                role="form"
                @submit.prevent="onSubmit"
              >
                <div class="form-group">
                  <label for="inputUsername" class="control-label fontstyle"
                    >บัญชีผู้ใช้/อีเมล</label
                  >
                  <input
                    v-model="user_api_login"
                    type="text"
                    class="form-control fontstyle"
                    id="inputUsername"
                    placeholder="บัญชีผู้ใช้/อีเมล"
                    required
                  />
                </div>

                <div class="form-group">
                  <label for="inputPassword" class="control-label fontstyle"
                    >รหัสผ่าน</label
                  >
                  <input
                    v-model="password"
                    type="password"
                    data-minlength="6"
                    class="form-control fontstyle"
                    id="inputPassword"
                    placeholder="รหัสผ่าน"
                    required
                  />
                </div>

                <div class="form-group border-box">
                  <a class="text-line fontstyle" href="">ลืมรหัสผ่าน?</a>

                  <button
                    type="submit"
                    class="c-button hv-transparent fr fontstyle"
                  >
                    เข้าสู่ระบบ
                  </button>
                </div>
              </form>
              <div class="card-footer">
                <div class="text-line text-center fontstyle">
                  <router-link to="RegisterApi"
                    >กรณียังไม่มีบัญชีใช้งาน? สมัครสมาชิก!</router-link
                  >
                </div>
              </div>
            </div>
            <div class="col-md-3"></div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import NavbarApi from "../../components/OpenData/NavbarApi.vue";
import { ref } from "@vue/reactivity";
import axios from "axios";
import { useRouter } from "vue-router";
import { BASE_API_URL } from "../../constants";

export default {
  name: "loginApi",
  components: {
    NavbarApi,
  },
  setup() {
    const user_api_login = ref("");
    const password = ref("");
    const device = ref("");
    const router = useRouter();

    const id_api = atob(localStorage.getItem("aWRfYXBp"));
    const id_null = atob("null");

    if (id_api != id_null) {
      router.replace("Api");
    }

    const onSubmit = async () => {
      const response = await axios.get(`https://api.ipify.org/?format=json`);
      device.value = response.data.ip;

      try {
        const response = await axios.post(
          `${BASE_API_URL}/auth/login_api?name=` +
            user_api_login.value +
            "&password=" +
            password.value +
            "&device_name=" +
            device.value
        );
        localStorage.setItem(btoa("id_api"), btoa(user_api_login.value));
        localStorage.setItem(btoa("password_api"), btoa(password.value));
        localStorage.setItem(btoa("token_api"), btoa(response.data.token));
        alert(response.data.message);
        router.replace("ProfileApi");
      } catch (error) {
        alert(error.response.data.errors.name);
      }
    };

    return { id_api, id_null, user_api_login, password, onSubmit };
  },
};
</script>

<style scoped>
.box-login {
  border-radius: 20px;
  box-shadow: 1px 10px 20px 10px #888888c7;
  background: white;
}
.c-button {
  background: #32a3ff;
  width: 100px;
  border-radius: 15px;
  box-shadow: 1px 1px 3px #222222;
  border: 2px solid #32a3ff;
  padding: 16px 1px;
}
.border-box {
  padding: 20px 20px 20px 0px;
}
input {
  border-radius: 10px;
  height: 50px;
}
.text-spaec {
  letter-spacing: 0px;
}
.text-line {
  text-decoration: underline;
}
.text-center {
  text-align: center;
}
.card-header {
  padding: 0.5rem 1rem 20px;
  margin-bottom: 0;
  background-color: rgba(255, 255, 255, 0.03);
  border-bottom: 1px solid rgba(0, 0, 0, 0.125);
}
.card-footer {
  padding: 0.5rem 1rem 20px;
  background-color: rgba(255, 255, 255, 0.03);
  border-top: 1px solid rgba(0, 0, 0, 0.125);
}
.bg-gray {
  background: #e6e6e6;
}
.fontstyle {
  font-family: "Prompt", sans-serif;
}
</style>
