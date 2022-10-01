<template>
  <div>
    <div class="bg-register">
      <img v-lazy="'images/bg/bg-login.jpg'" alt="" />
    </div>

    <div class="login-register">
      <div class="title-form">
        <img src="../../assets/TRINITYTRIPLOGO2.png" />
        <h1>สมัครสมาชิก <br />โปรดกรอกข้อมูลให้ครบถ้วน</h1>
      </div>

      <div class="box-form">
        <form id="form" @submit.prevent="onSubmit">
          <div class="form-controls">
            <input
              v-model="username"
              type="text"
              id="username"
              name="username"
              placeholder="ชื่อบัญชีผู้ใช้ ภาษาอังกฤษและตัวเลขเท่านั้น!"
            />
            <h5 id="usernameError">{{ usernameError }}</h5>
            <small>error</small>
          </div>

          <div class="form-controls">
            <input
              v-model="email"
              type="email"
              id="email"
              name="email"
              placeholder="อีเมล"
            />
            <h5 id="emailError">{{ emailError }}</h5>
            <small>error</small>
          </div>
          <div class="form-controls">
            <input
              v-model="password"
              type="password"
              id="password"
              name="password"
              placeholder="รหัสผ่านยาวตั้งแต่ 8 ตัวอักษรขึ้นไป ตัวอักษรและตัวเลขเท่านั้น!"
            />
            <!-- <span id="eyec"
              ><i
                class="fa fa-eye"
                aria-hidden="true"
                id="eye"
                @click="toggle()"
              ></i
            ></span> -->
            <h5 id="passwordError">{{ passwordError }}</h5>
            <small>error</small>
          </div>
          <div class="form-controls">
            <input
              v-model="confirmpassword"
              type="password"
              id="confirmpassword"
              name="confirmpassword"
              placeholder="ยืนยันรหัสผ่าน"
            />
            <!-- <span id="eyecs"
              ><i
                class="fa fa-eye"
                aria-hidden="true"
                id="eyes"
                @click="toggles()"
              ></i
            ></span> -->
            <h5 id="confirmpasswordError">{{ confirmpasswordError }}</h5>
            <small>error</small>
          </div>

          <div class="btn-submit"><button type="submit">ตกลง</button></div>
        </form>
      </div>
      <div class="btn-rh">
        <a href="login"><span>เข้าสู่ระบบ</span></a>
        |
        <a href="/"><span>หน้าแรก</span></a>
      </div>
    </div>
  </div>
</template>

<script>
import { ref } from "vue";
import { useRouter } from "vue-router";
import axios from "axios";
import { BASE_API_URL } from "../../constants";

export default {
  name: "FormRegister",
  setup() {
    const username = ref("");
    const email = ref("");
    const password = ref("");
    const confirmpassword = ref("");
    const router = useRouter();

    const usernameError = ref("");
    const emailError = ref("");
    const passwordError = ref("");
    const confirmpasswordError = ref("");

    const token = localStorage.getItem("token");
    if (token) {
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
      checkUsername(username.value);
      checkEmail(email.value);
      checkPassword(password.value, confirmpassword.value);

      if (
        usernameError.value == "ชื่อบัญชีผู้ใช้นี้ สามารถใช้งานได้!" &&
        confirmpasswordError.value == "รหัสผ่านใช้งานได้!" &&
        emailError.value == "อีเมลใช้งานได้!"
      ) {
        try {
          const response = await axios.post(`${BASE_API_URL}/auth/register`, {
            user_login: username.value,
            email: email.value,
            password: password.value,
          });
          localStorage.setItem("status", response.data.status);
          localStorage.setItem("id", username.value);
          localStorage.setItem(btoa("password"), btoa(password.value));
          alert(response.data.message);
          router.replace("setaccount");
        } catch (error) {
          alert(error.response.data.errors.name);
        }
      }
    };

    return {
      toggle,
      toggles,
      username,
      email,
      password,
      confirmpassword,
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
.bg-register {
  height: 100vh;
  width: 100%;
  background-size: cover;
  position: relative;
  background-position: center;
  background-repeat: no-repeat;
  object-fit: contain;
}
.bg-register img {
  height: 100%;
  width: 100%;
  object-fit: cover;
}
.login-register {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background: rgb(255 255 255 / 84%);
  border-radius: 20px;
  width: 66%;
}
.title-form {
  text-align: center;
}
.title-form img {
  width: 100%;
  height: 160px;
  object-fit: contain;
}
.title-form h1 {
  margin-top: -40px;
  margin-bottom: 10px;
  color: #01588d;
  font-size: 32px;
  letter-spacing: 0px;
  line-height: normal;
  font-weight: 500;
}
.box-form {
  padding: 0px 27%;
}
.form-controls {
  margin-bottom: 0;
  padding-bottom: 0px;
}
.form-controls input {
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
  font-size: 26px;
  font-family: "Prompt", sans-serif;
}
.form-controls input:focus {
  border: 2px solid;
  border-color: #dcdcdc;
}
.form-controls.error input {
  border-color: red;
}
.form-controls.success input {
  border-color: green;
}
.form-controls small {
  padding: 15px;
  font-size: 14px;
  color: red;
  visibility: hidden;
}
.form-controls.error small {
  visibility: visible;
}
button {
  background: #01588d;
  font-size: 24px;
  padding: 0px 20px;
  border-radius: 20px;
  color: rgb(255, 255, 255);
}
button :hover {
  background: white;
  color: #01588d;
}
#eyec {
  position: absolute;
  right: 20%;
  transform: translate(0, -50%);
  top: 54%;
  cursor: pointer;
}
#eyecs {
  position: absolute;
  right: 20%;
  transform: translate(10, -50%);
  top: 63%;
  cursor: pointer;
}
.fa {
  font-size: 20px;
  color: #ffffff;
}
.btn-submit {
  text-align: center;
  margin: 0px;
}
.btn-rh {
  text-align: center;
  padding: 20px;
  color: #01588d8f;
}
.btn-rh span {
  color: #01588d;
  font-size: 24px;
}
h5 {
  font-size: 14px;
  line-height: 0px;
  font-weight: 400;
  letter-spacing: 1px;
  padding: 11px 0px;
  margin: 0px 0px -20px 0px;
}
@media only screen and (min-width: 1980px) {
  .title-form img {
    height: 220px;
  }
  .title-form h1 {
    font-size: 40px;
  }

  .form-controls input {
    font-size: 24px;
    height: 60px;
  }
  ::placeholder {
    font-size: 16px;
  }
  .btn-rh span {
    color: #01588d8f;
    font-size: 32px;
  }
  /* #eyec {
    position: absolute;
    right: 31%;
    transform: translate(0, -63%);
    top: 67%;
  } */
}
@media only screen and (max-width: 1200px) {
  .title-form img {
    height: 140px;
  }
  .title-form h1 {
    font-size: 28px;
  }
  .form-controls input {
    height: 40px;
  }
  ::placeholder {
    font-size: 12px;
  }
  h5 {
    font-size: 10px;
  }
}
@media only screen and (max-width: 1024px) {
  .box-form {
    padding: 0px 22%;
  }
}
@media only screen and (max-width: 768px) {
  .box-form {
    padding: 0px 16%;
  }
  .title-form img {
    height: 120px;
  }
  .title-form h1 {
    font-size: 26px;
  }
  .btn-rh span {
    font-size: 20px;
  }
  button[data-v-63b9a3da] {
    font-size: 20px;
  }
}
@media only screen and (max-width: 480px) {
  .box-form {
    padding: 0px 5%;
  }
  .login-register {
    width: 90%;
  }

  .title-form h1 {
    font-size: 24px;
  }
  .btn-rh span {
    font-size: 18px;
  }
}
@media only screen and (max-width: 375px) {
  .title-form img {
    height: 120px;
  }
  .title-form h1 {
    font-size: 20px;
  }
  .btn-rh span {
    font-size: 18px;
  }
}
@media only screen and (max-width: 320px) {
  .title-form img {
    height: 120px;
  }
  .title-form h1 {
    font-size: 18px;
  }
  .btn-rh span {
    font-size: 16px;
  }
  .login-register {
    width: 100%;
  }
}
</style>
