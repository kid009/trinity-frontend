<template>
  <div class="bg-register">
    <img v-lazy="'images/bg/bg-login.jpg'" alt="" />
  </div>

  <div class="set-account">
    <div class="">
      <div class="title-form">
        <img src="../../assets/TRINITYTRIPLOGO2.png" />
        <h1>
          บันทึกข้อมูล <br />
          ข้อมูลส่วนตัวเพื่อการยืนยันและการติดต่อ
        </h1>
      </div>
      <div class="box-form">
        <form @submit.prevent="onSubmit">
          <div class="form-controls">
            <input
              type="text"
              name="user[fristname]"
              placeholder="ชื่อจริง"
              v-model="firstname"
              required
            />
          </div>
          <div class="form-controls">
            <input
              type="text"
              name="user[lastname]"
              placeholder="นามสกุล"
              v-model="lastname"
              required
            />
          </div>
          <div class="form-controls">
            <input
              type="tel"
              name="user[telephone]"
              placeholder="เบอร์ติดต่อ"
              maxlength="10"
              v-model="phonenumber"
              required
            />
          </div>

          <div class="">
            <h4>สถานะผู้ใช้</h4>
            <div class="sidebar-rating">
              <div
                v-for="item in getRole"
                :key="item.role_id"
                class="input-entry color-1"
              >
                <input
                  class="checkbox-form"
                  :id="'text-' + countGetRole"
                  type="radio"
                  name="checkbox"
                  :value="item.role_id"
                  v-model="role_id"
                  required
                />
                <label class="clearfix" :for="'text-' + countGetRole++">
                  <span class="sp-check"><i class="fa fa-check"></i></span>
                  <span class="checkbox-text">{{ item.role_name }}</span>
                </label>
              </div>
            </div>
          </div>
          <div class="btn-submit">
            <input type="submit" name="smb" value="บันทึก" />
          </div>
        </form>

        <div class="btn-rh">
          <a href="login"><span>กลับไปยัง</span></a>
          |
          <a href="/"><span>หน้าแรก</span></a>
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
  name: "Form",
  setup() {
    const status = localStorage.getItem("status");
    const user_login = localStorage.getItem("id");

    const getRole = ref("");
    let countGetRole = 1;
    let text = "text-";

    const role_id = ref("");
    const firstname = ref("");
    const lastname = ref("");
    const phonenumber = ref("");

    var state = false;

    if (status != "in process") {
      window.location = "login";
    }

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

    const getData = async () => {
      const response = await axios.get(`${BASE_API_URL}/auth/getRole`);
      getRole.value = response.data.data;
    };

    onMounted(() => {
      getData();
    });

    const onSubmit = async () => {
      const response = await axios.post(
        `${BASE_API_URL}/auth/registerInprocess`,
        {
          user_login: user_login,
          role_id: role_id.value,
          firstname: firstname.value,
          lastname: lastname.value,
          phonenumber: phonenumber.value,
        }
      );

      alert(response.data.message);
      localStorage.setItem("role_id", response.data.role_id);
      localStorage.setItem("status", response.data.status);
      window.location = "login";
    };
    return {
      toggle,
      firstname,
      lastname,
      phonenumber,
      onSubmit,
      status,
      user_login,
      role_id,
      getRole,
      countGetRole,
      text,
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
.set-account {
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
  font-size: 26px;
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
  margin-top: 10px;
  font-family: "Prompt", sans-serif;
}
::placeholder {
  color: white;
  font-size: 26px;
  font-family: "Prompt", sans-serif;
}
h4 {
  font-size: 16px;
  line-height: 22px;
  font-weight: 400;
  text-transform: uppercase;
  letter-spacing: 1px;
  margin: 10px 0px;
  color: #1f69b0;
}
.input-entry.color-1 .checkbox-form + label span.sp-check {
  background: #1f69b0b3;
  border: 1px solid #ffffff;
}
.input-entry.color-1 .checkbox-text {
  color: #1f69b0e6;
  cursor: pointer;
}
.input-entry.color-1 .checkbox-form:checked + label span.sp-check i {
  color: #f4f5f5;
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
.btn-submit {
  text-align: center;
  margin: 0px;
}
.btn-submit input {
  background: #01588d;
  font-size: 24px;
  padding: 0px 20px;
  border-radius: 20px;
  color: rgb(255, 255, 255);
}
.btn-submit input :hover {
  background: white;
  color: #01588d;
}
@media only screen and (min-width: 1980px) {
  .title-form img {
    height: 200px;
  }
  .title-form h1 {
    font-size: 32px;
  }
}
@media only screen and (max-width: 1200px) {
  .title-form img {
    height: 140px;
  }
  .title-form h1 {
    font-size: 22px;
  }
  .form-controls input {
    height: 40px;
  }
  .btn-rh span {
    font-size: 18px;
  }
  .btn-submit input {
    font-size: 18px;
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
    font-size: 20px;
  }
  .btn-rh span {
    font-size: 20px;
  }
  button {
    font-size: 20px;
  }
}
@media only screen and (max-width: 480px) {
  .box-form {
    padding: 0px 5%;
  }
  .set-account {
    width: 90%;
  }

  .title-form h1 {
    font-size: 20px;
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
  .set-account {
    width: 100%;
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
} */
</style>
