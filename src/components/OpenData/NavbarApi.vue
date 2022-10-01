<template>
  <header class="color-1 hovered menu-3">
    <div class="container">
      <div class="row">
        <div class="col-md-12">
          <div class="nav">
            <a href="Api" class="logo">
              <img
                class="logo-icon"
                src="../../assets/cloud-computing.png"
                alt="lets travel"
              />
              <h2 class="color-sea text-icon">TRINITY API</h2>
            </a>
            <div class="nav-menu-icon">
              <a href="#"><i></i></a>
            </div>
            <nav class="menu">
              <ul>
                <li class="type-1 active">
                  <a href="/"
                    >หน้าหลักtrinitytrip<span class="fa fa-angle-down"></span
                  ></a>
                </li>
                <li v-if="id_api != id_null" class="type-1">
                  <a href="DataApi"
                    >Opendata<span class="fa fa-angle-down"></span
                  ></a>
                </li>
                <li v-if="id_api != id_null" class="type-1">
                  <a href="ProfileApi"
                    >โปรไฟล์<span class="fa fa-angle-down"></span
                  ></a>
                </li>

                <li v-if="id_api == id_null" class="type-1">
                  <a href="RegisterApi"
                    >สมัครสมาชิก<span class="fa fa-angle-down"></span
                  ></a>
                </li>
                <li v-if="id_api == id_null" class="type-1">
                  <a href="loginApi"
                    >เข้าสู่ระบบ<span class="fa fa-angle-down"></span
                  ></a>
                </li>

                <li v-else class="type-1">
                  <a @click="logout"
                    >ออกจากระบบ<span class="fa fa-angle-down"></span
                  ></a>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </div>
    </div>
  </header>
</template>

<script>
export default {
  name: "NavbarApi",
  setup() {
    const id_api = atob(localStorage.getItem("aWRfYXBp"));
    const id_null = atob("null");
    const logout = () => {
      localStorage.removeItem("aWRfYXBp");
      localStorage.removeItem("cGFzc3dvcmRfYXBp");
      localStorage.removeItem("dG9rZW5fYXBp");

      window.location = "Api";
      //router.replace("login")
    };

    return { id_api, logout, id_null };
  },
};
</script>

<style scoped>
.text-icon {
  letter-spacing: 0;
}
.logo-icon {
  width: auto;
  height: 30px;
}
@media screen and (max-width: 600px) {
  .logo-icon {
    width: auto;
    height: 30px;
  }
  h2 {
    font-size: 26px;
    line-height: 0.363rem;
  }
}
</style>
