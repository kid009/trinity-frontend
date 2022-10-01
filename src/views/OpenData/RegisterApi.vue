<template>
  <NavbarApi />
  <div class="full">
    <div class="clip">
      <div class="bg bg-bg-chrome img bg-gray"></div>
    </div>
    <div class="main-wraper padd-70-70 bg-gray" style="top: 50px">
      <div class="container">
        <div class="row">
          <div class="col-xs-12">
            <div class="col-md-3"></div>
            <div class="col-md-6 box-login">
              <div class="card-header">
                <h2 class="text-center fontstyle text-spaec">สมัครสมาชิก</h2>
              </div>
              <form
                data-toggle="validator"
                role="form"
                @submit.prevent="onSubmit"
              >
                <div class="form-group form-controls">
                  <label for="inputcompany" class="control-label fontstyle"
                    >หน่วยงาน/บริษัท/อื่นๆ</label
                  >
                  <input
                    v-model="user_api_company"
                    type="text"
                    class="form-control fontstyle"
                    id="inputcompany"
                    placeholder="หน่วยงาน/บริษัท/อื่นๆ"
                    required
                  />
                </div>
                <div class="form-group form-controls">
                  <label for="inputUsername" class="control-label fontstyle"
                    >บัญชีผู้ใช้</label
                  >
                  <input
                    v-model="user_api_login"
                    type="text"
                    class="form-control fontstyle"
                    id="inputUsername"
                    placeholder="บัญชีผู้ใช้"
                    required
                  />
                  <h5 id="usernameError">{{ usernameError }}</h5>
                </div>

                <div class="form-group form-controls">
                  <label for="inputEmail" class="control-label fontstyle"
                    >อีเมล</label
                  >
                  <input
                    v-model="email"
                    type="email"
                    class="form-control fontstyle"
                    id="inputEmail"
                    placeholder="อีเมล"
                    data-error="Bruh, that email address is invalid"
                    required
                  />
                  <h5 id="emailError">{{ emailError }}</h5>
                  <div class="help-block with-errors"></div>
                </div>
                <div class="form-group">
                  <label for="inputFirstname" class="control-label fontstyle"
                    >ชื่อ</label
                  >
                  <input
                    v-model="user_api_firstname"
                    type="text"
                    class="form-control fontstyle"
                    id="inputFirstname"
                    placeholder="ชื่อ"
                    required
                  />
                </div>
                <div class="form-group">
                  <label for="inputLastname" class="control-label fontstyle"
                    >นามสกุล</label
                  >
                  <input
                    v-model="user_api_lastname"
                    type="text"
                    class="form-control fontstyle"
                    id="inputLastname"
                    placeholder="นามสกุล"
                    required
                  />
                </div>
                <div class="form-group">
                  <label for="inputPassword" class="control-label fontstyle"
                    >รหัสผ่าน</label
                  >
                  <div class="form-inline row">
                    <div class="form-group col-sm-6 form-controls">
                      <input
                        v-model="password"
                        type="password"
                        data-minlength="8"
                        class="form-control fontstyle"
                        id="inputPassword"
                        placeholder="รหัสผ่าน"
                        required
                      />
                      <h5 id="confirmpasswordError">
                        {{ confirmpasswordError }}
                      </h5>
                      <small>error</small>
                    </div>
                    <div class="form-group col-sm-6 form-controls">
                      <input
                        v-model="confirmpassword"
                        type="password"
                        data-minlength="8"
                        class="form-control fontstyle"
                        id="inputPasswordConfirm"
                        placeholder="ยืนยันรหัสผ่าน"
                        required
                      />

                      <div class="help-block with-errors"></div>
                    </div>
                  </div>
                </div>

                <div class="form-group border-box">
                  <button
                    type="submit"
                    class="c-button full hv-transparent fontstyle"
                  >
                    สร้างบัญชี
                  </button>
                </div>
              </form>
              <div class="card-footer">
                <div class="text-line text-center fontstyle">
                  <router-link to="loginApi"
                    >มีบัญชีผู้ใช้แล้ว? เข้าสู่ระบบ!</router-link
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
import { ref } from "vue";
import { useRouter } from "vue-router";
import axios from "axios";
import { BASE_API_URL } from "../../constants";

export default {
  name: "RegisterApi",
  components: {
    NavbarApi,
  },
  setup() {
    const user_api_login = ref("");
    const email = ref("");
    const password = ref("");
    const confirmpassword = ref("");
    const user_api_firstname = ref("");
    const user_api_lastname = ref("");
    const user_api_company = ref("");
    const router = useRouter();

    const usernameError = ref("");
    const emailError = ref("");
    const passwordError = ref("");
    const confirmpasswordError = ref("");

    const id_api = atob(localStorage.getItem("aWRfYXBp"));
    const id_null = atob("null");

    if (id_api != id_null) {
      router.replace("Api");
    }

    var state = false;
    function toggle() {
      if (state) {
        document.getElementById("password").setAttribute("type", "password");
        document.getElementById("eye").style.color = "#7a797a";
        state = false;
      } else {
        document.getElementById("password").setAttribute("type", "text");
        document.getElementById("eye").style.color = "#5887ef";
        state = true;
      }
    }

    var states = false;
    function toggles() {
      if (states) {
        document
          .getElementById("confirmpassword")
          .setAttribute("type", "password");
        document.getElementById("eyes").style.color = "#7a797a";
        states = false;
      } else {
        document.getElementById("confirmpassword").setAttribute("type", "text");
        document.getElementById("eyes").style.color = "#5887ef";
        states = true;
      }
    }

    function checkUsername(username) {
      if (
        !username.match(/^([a-z0-9])+$/i) ||
        username.length <= 5 ||
        username.length > 20
      ) {
        usernameError.value =
          "ชื่อบัญชีผู้ใช้ ต้องมากกว่า 5 ภาษาอังกฤษและตัวเลขเท่านั้น!";
        document.getElementById("usernameError").style.color = "red";
      } else {
        usernameError.value = "ชื่อบัญชีผู้ใช้นี้ สามารถใช้งานได้!";
        document.getElementById("usernameError").style.color = "#33CC00";
      }
    }

    function checkPassword(password, confirmpassword) {
      if (password !== confirmpassword) {
        confirmpasswordError.value = "รหัสผ่านไม่ตรงกัน";
        document.getElementById("confirmpasswordError").style.color = "red";
      } else if (password === "" || confirmpassword === "") {
        confirmpasswordError.value = "กรุณากรอกข้อมูล";
        document.getElementById("confirmpasswordError").style.color = "red";
      } else if (password.length <= 7) {
        confirmpasswordError.value = "รหัสผ่านยาวตั้งแต่ 8 ตัวอักษรขึ้นไป";
        document.getElementById("confirmpasswordError").style.color = "red";
      } else if (password.match(/^([0-9])+$/i)) {
        confirmpasswordError.value =
          "จะต้องประกอบไปด้วยอักษรตัวใหญ่ อักษรตัวเล็ก และตัวเลข";
        document.getElementById("confirmpasswordError").style.color = "red";
      } else {
        confirmpasswordError.value = "รหัสผ่านใช้งานได้!";
        document.getElementById("confirmpasswordError").style.color = "#33CC00";
      }
    }

    function validateEmail(email) {
      const re =
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      return re.test(String(email).toLowerCase());
    }

    function checkEmail(email) {
      if (!validateEmail(email.trim())) {
        emailError.value = "อีเมลไม่ถูกต้อง";
        document.getElementById("emailError").style.color = "red";
      } else {
        emailError.value = "อีเมลใช้งานได้!";
        document.getElementById("emailError").style.color = "#33CC00";
      }
    }

    const onSubmit = async () => {
      checkUsername(user_api_login.value);
      checkEmail(email.value);
      checkPassword(password.value, confirmpassword.value);

      if (
        usernameError.value == "ชื่อบัญชีผู้ใช้นี้ สามารถใช้งานได้!" &&
        confirmpasswordError.value == "รหัสผ่านใช้งานได้!" &&
        emailError.value == "อีเมลใช้งานได้!"
      ) {
        try {
          const response = await axios.post(
            `${BASE_API_URL}/auth/register_api`,
            {
              user_api_login: user_api_login.value,
              email: email.value,
              password: password.value,
              user_api_firstname: user_api_firstname.value,
              user_api_lastname: user_api_lastname.value,
              user_api_company: user_api_company.value,
            }
          );
          localStorage.setItem(btoa("id_api"), btoa(user_api_login.value));
          localStorage.setItem(btoa("password_api"), btoa(password.value));
          localStorage.setItem(btoa("token_api"), btoa(response.data.token));
          alert(response.data.message);
          router.replace("ProfileApi");
        } catch (error) {
          if (!error.response.data.errors.user_api_login) {
            usernameError.value = "ชื่อบัญชีผู้ใช้นี้ สามารถใช้งานได้!";
            document.getElementById("usernameError").style.color = "#33CC00";
          } else {
            usernameError.value = error.response.data.errors.user_api_login;
            document.getElementById("usernameError").style.color = "red";
          }

          if (!error.response.data.errors.email) {
            emailError.value = "อีเมลใช้งานได้!";
            document.getElementById("emailError").style.color = "#33CC00";
          } else {
            emailError.value = error.response.data.errors.email;
            document.getElementById("emailError").style.color = "red";
          }
        }
      }
    };

    return {
      id_api,
      id_null,
      toggle,
      toggles,
      user_api_login,
      email,
      password,
      confirmpassword,
      user_api_firstname,
      user_api_lastname,
      user_api_company,
      onSubmit,

      usernameError,
      emailError,
      passwordError,
      confirmpasswordError,
    };
  },
};
</script>

<style scoped>
.form-controls small {
  padding: 15px;
  font-size: 14px;
  color: red;
  visibility: hidden;
}
.box-login {
  border-radius: 20px;
  box-shadow: 1px 10px 20px 10px #888888c7;
  background: white;
}
.c-button {
  background: #32a3ff;
  /* width: 100px; */
  border-radius: 15px;
  box-shadow: 1px 1px 3px #222222;
  border: 2px solid #32a3ff;
  padding: 16px 1px;
}
.border-box {
  padding: 20px 20px 20px 0px;
  text-align: center;
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
