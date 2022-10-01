<template>
  <div class="login">
    <div class="bg-login">
      <img v-lazy="'images/bg/bg-login.jpg'" alt="" />
    </div>
    <div class="box-login">
      <div class="logo-login">
        <img src="../../assets/TRINITYTRIPLOGO2.png" />
      </div>
      <div class="text-login-title">
        <h1>
          ยินดีต้อนรับ<br />
          โปรดเข้าสู่บัญชีผู้ใช้ของคุณ
        </h1>
      </div>
      <div class="form-login">
        <form @submit.prevent="onSubmit">
          <div class="user-login">
            <input
              type="text"
              v-model="name"
              placeholder="ชื่อผู้ใช้งาน"
              required
            />
          </div>
          <div class="password-user">
            <input
              type="password"
              id="password"
              v-model="password"
              placeholder="รหัสผ่าน"
              required
            />
            <!-- <span id="eyes"
              ><i
                class="fa fa-eye"
                aria-hidden="true"
                id="eye"
                @click="toggle()"
              ></i
            ></span> -->
          </div>
          <div class="checkbox-group">
            <div class="input-entry color-3">
              <input
                class="checkbox-form"
                id="text-2"
                type="checkbox"
                name="checkbox"
                value="check"
              />
              <label class="clearfix" for="text-2">
                <span class="sp-check"><i class="fa fa-check"></i></span>
                <p class="fontstyle">จำการเข้าสู่ระบบ</p>
              </label>
            </div>
          </div>
          <div class="login-button">
            <button type="submit">ตกลง</button>
          </div>
        </form>
      </div>
      <div class="no-register">
        <h2>
          กรณียังไม่มีบัญชีใช้งาน
          <a href="register"><span>สมัครสมาชิก</span></a>
        </h2>
      </div>
      <div class="to-home">
        <a href="/"><span>หน้าแรก</span></a>
      </div>
    </div>
  </div>
  <!-- <div
    style="box-shadow: 0 30px 50px rgba(0, 0, 0, 0.2); background-color: white"
    class="container"
  >
    <div class="login-fullpage">
      <div class="row">
        <div class="login-logo">
          <img class="center-image" src="images/waterfall.jpg" alt="" />
        </div>
        <div class="col-xs-12 col-sm-7">
          <div class="f-login-content">
            <div class="f-login-header">
              <div
                id="letter-login-detail"
                class="f-login-title color-dr-blue-2"
              >
                ยินดีต้อนรับ
              </div>
              <div class="f-login-desc color-grey fontstyle">
                โปรดเข้าสู่บัญชีผู้ใช้ของคุณ
              </div>
            </div>
            <form class="f-login-form" @submit.prevent="onSubmit">
              <div
                class="input-style-1 b-50 type-2 color-5"
                style="margin-bottom: 25px"
              >
                <input
                  class="fontstyle"
                  type="text"
                  style="border: 1px black solid"
                  v-model="name"
                  placeholder="ชื่อบัญชีผู้ใช้"
                  required
                />
              </div>
              <div
                class="input-style-1 b-50 type-2 color-5"
                style="margin-bottom: 15px"
              >
                <input
                  class="fontstyle"
                  type="password"
                  id="password"
                  style="border: 1px black solid"
                  v-model="password"
                  placeholder="รหัสผ่าน"
                  required
                />
                <span id="eyes"
                  ><i
                    class="fa fa-eye"
                    aria-hidden="true"
                    id="eye"
                    @click="toggle()"
                  ></i
                ></span>
              </div>

              <div class="checkbox-group">
                <div class="input-entry color-3">
                  <input
                    class="checkbox-form"
                    id="text-2"
                    type="checkbox"
                    name="checkbox"
                    value="check"
                  />
                  <label class="clearfix" for="text-2">
                    <span
                      style="border: 1.5px solid; border-color: #dcdcdc"
                      class="sp-check"
                      ><i class="fa fa-check"></i
                    ></span>
                    <span class="checkbox-text"
                      ><p class="fontstyle">จำการเข้าสู่ระบบ</p></span
                    >
                  </label>
                </div>
              </div>

              <button
                type="submit"
                class="login-btn c-button full b-60 bg-dr-blue-2 hv-dr-blue-2-o"
              >
                เข้าสู่ระบบ
              </button>

              <br />

              <div style="text-align: center" class="color-grey">
                กรณียังไม่มีบัญชีใช้งาน
                <a class="buttonre" href="register"
                  ><i class="fa"></i><span>สมัครสมาชิก</span></a
                >
              </div>
            </form>
          </div>
          <div style="text-align: center">
            <a class="buttonre" href="home"
              ><i class="fa"></i><span>หน้าแรก</span></a
            >
          </div>
        </div>
      </div>
    </div>
  </div> -->
</template>

<script>
import { ref } from "@vue/reactivity";
import axios from "axios";
import { BASE_API_URL } from "../../constants";

export default {
  name: "Form",

  setup() {
    let logout = window.location.search;
    logout = logout.split("=");
    logout = logout[1];
    if (logout == "true") {
      localStorage.removeItem("token");
      localStorage.removeItem("id");
      localStorage.removeItem("cGFzc3dvcmQ=");
      localStorage.removeItem("status");
      localStorage.removeItem("role_id");
      sessionStorage.clear();
      localStorage.clear();

      window.location = "login";
    }

    const status = localStorage.getItem("status");
    if (status) {
      window.location = "/";
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

    const name = ref("");
    const password = ref("");
    const device = ref("");

    const onSubmit = async () => {
      const response = await axios.get(`https://api.ipify.org/?format=json`);
      device.value = response.data.ip;

      try {
        const response = await axios.post(
          `${BASE_API_URL}/auth/login?name=` +
            name.value +
            "&password=" +
            password.value +
            "&device_name=" +
            device.value
        );

        /*const response = await axios.post(`${BASE_API_URL}/auth/login`,{
			name: name.value,
			password: password.value,
			device_name: device
			}); */

        localStorage.setItem("status", response.data.status);
        localStorage.setItem("id", name.value);
        localStorage.setItem(btoa("password"), btoa(password.value));
        localStorage.setItem("role_id", response.data.role_id);
        localStorage.setItem("module", "trinitytrip");

        window.location = "/";
      } catch (error) {
        alert(error.response.data.errors.name);
      }
    };

    return { toggle, name, password, onSubmit };
  },
};
</script>

<style scoped>
.bg-login {
  height: 100vh;
  width: 100%;
  background-size: cover;
  position: relative;
  background-position: center;
  background-repeat: no-repeat;
  object-fit: contain;
}
.bg-login img {
  height: 100%;
  width: 100%;
  object-fit: cover;
}
/*----------box----------*/
.box-login {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background: rgb(255 255 255 / 84%);
  border-radius: 20px;
  width: 66%;
}
.logo-login {
  width: 100%;
  height: 100%;
}
.logo-login img {
  width: 100%;
  height: 160px;
  object-fit: contain;
}
.text-login-title {
  text-align: center;
  color: #00588d;
}
.text-login-title h1 {
  font-size: 32px;
  font-weight: 500;
  letter-spacing: 0px;
  line-height: 35px;
  margin-top: -30px;
}
.form-login {
  margin: 20px 0px;
  padding: 0px 250px;
}
.user-login {
  text-align: center;
  margin-bottom: 20px;
}
.password-user {
  text-align: center;
}
input {
  width: 100%;
  height: 50px;
  border-radius: 20px;
  padding: 0px 20px;
  background: #01588d8f;
  color: white;
  vertical-align: middle;
  font-size: 26px;
  font-family: "Prompt", sans-serif;
}
::placeholder {
  color: white;
  font-weight: 300;
  font-size: 26px;
  padding: 20px 0px;
  font-family: "Prompt", sans-serif;
}
.fa {
  color: white;
}
/*--------------start-checkbox-group------*/
.checkbox-group {
  margin: 10px 0px;
}
.input-entry.color-3 .checkbox-text {
  color: #00588d;
  cursor: pointer;
}
.checkbox-group p {
  font-size: 16px;
  color: #00588d;
}
.input-entry.color-3 .checkbox-form + label span.sp-check {
  background: #00578db6;
  border: 2px solid #f1f1f1;
  box-shadow: 0px 0px 1px rgb(148, 148, 148);
  width: 20px;
  height: 20px;
}
.input-entry .checkbox-form + label span.sp-check i {
  position: absolute;
  top: 50%;
  left: 50%;
  margin-top: -11px;
  margin-left: -8px;
}
/*--------------end-checkbox-group------*/
#eyes {
  position: absolute;
  right: 28%;
  transform: translate(0, -50%);
  top: 60%;
  cursor: pointer;
}
.fa {
  font-size: 20px;
  color: #ffffff;
}
.login-button {
  text-align: center;
  margin: 20px;
}
.login-button button {
  width: auto;
  height: fit-content;
  background: #00588d;
  color: white;
  font-size: 26px;
  font-weight: 600;
  letter-spacing: 0px;
  padding: 0px 20px;
  border-radius: 20px;
}
.login-button button:hover {
  background: white;
  color: #00588d;
}
.no-register {
  text-align: center;
  font-size: 24px;
  color: #00588d;
  margin: 10px;
}
.no-register h2 {
  font-weight: 500;
  letter-spacing: 0px;
}
.no-register h2 span {
  font-weight: 600;
  letter-spacing: 0px;
}
.to-home {
  text-align: center;
  color: #00588d;
  margin: 10px;
}
.to-home span {
  font-size: 24px;
  font-weight: 500;
  letter-spacing: 0px;
}
@media only screen and (min-width: 1980px) {
  .box-login {
    width: 68%;
  }
  .logo-login img {
    height: 250px;
  }
  input {
    height: 92px;
    font-size: 50px;
  }
  .text-login-title h1 {
    font-size: 50px;
    line-height: 55px;
  }
  ::placeholder {
    font-size: 46px;
    line-height: 40px;
  }
  .form-login {
    padding: 0px 320px;
  }
  .checkbox-group {
    margin: 22px 0px;
  }
  .checkbox-group p {
    font-size: 32px;
  }
  .input-entry.color-3 .checkbox-form + label span.sp-check {
    width: 32px;
    height: 32px;
  }
  .login-button {
    margin: 12px 0px 20px 0px;
  }
  .fa {
    font-size: 30px;
  }
  .login-button button {
    font-size: 40px;
  }
  .no-register {
    margin: 26px 0px 20px 0px;
  }
  .no-register h2,
  span {
    font-size: 50px;
  }
  .to-home span {
    font-size: 50px;
  }
}
@media only screen and (max-width: 1200px) {
  .box-login {
    width: 80%;
  }
  .text-login-title h1 {
    font-size: 24px;
  }
  .form-login {
    padding: 0px 250px;
  }
  .no-register h2,
  span {
    font-size: 24px;
  }
  .to-home span {
    font-size: 24px;
  }
}
@media only screen and (max-width: 1024px) {
  .box-login {
    width: 80%;
  }
  .text-login-title h1 {
    font-size: 32px;
  }
  .form-login {
    padding: 0px 180px;
  }
  #eyes {
    right: 25%;
    transform: translate(0, -40%);
    top: 59%;
  }
  .no-register h2,
  span {
    font-size: 32px;
  }
  .to-home span {
    font-size: 32px;
  }
}
@media only screen and (max-width: 768px) {
  .box-login {
    width: 80%;
  }
  .logo-login img {
    height: 120px;
  }
  .text-login-title h1 {
    font-size: 26px;
  }
  .form-login {
    padding: 0px 150px;
  }
  input {
    font-size: 26px;
    height: 50px;
  }
  #eyes {
    right: 26%;
    top: 56%;
  }
  .no-register h2,
  span {
    font-size: 26px;
  }
  .to-home span {
    font-size: 26px;
  }
}
@media only screen and (max-width: 480px) {
  .box-login {
    width: 100%;
  }
  .text-login-title h1 {
    font-size: 24px;
  }
  .form-login {
    padding: 0px 45px;
  }
  #eyes {
    right: 13%;
    transform: translate(0, -32%);
    top: 57%;
  }
  .no-register h2,
  span {
    font-size: 24px;
  }
  .to-home span {
    font-size: 24px;
  }
}
@media only screen and (max-width: 375px) {
  #eyes {
    top: 57%;
  }
}
@media only screen and (max-width: 320px) {
  .box-login {
    width: 100%;
  }
  .text-login-title h1 {
    font-size: 24px;
  }
  .form-login {
    padding: 0px 10px;
  }
  #eyes {
    top: 57%;
  }
  .no-register h2,
  span {
    font-size: 24px;
  }
  .to-home span {
    font-size: 24px;
  }
}
/* #img_main-login-detail {
  width: 100%;
  height: 500px;
  margin-bottom: 20px;
}
#img-login-detail {
  width: 100%;
  height: 100px;
}
#img_footer-login-detail {
  margin-bottom: 30px;
}
#letter-login-detail {
  letter-spacing: 0;
  font-size: 25px;
}
#detail-login-detail {
  color: black;
}
#h2-topic-page-footer {
  letter-spacing: 0;
  text-shadow: black 0.1em 0.1em 0.2em;
}
.buttonre {
  color: black;
}
.buttonre :hover {
  color: #3399cc;
}
#eyes {
  position: absolute;
  right: 15px;
  transform: translate(0, -50%);
  top: 50%;
  cursor: pointer;
}
.fa {
  font-size: 20px;
  color: #7a797e;
} */
</style>
