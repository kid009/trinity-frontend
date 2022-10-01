<template>
  <div>
    <header class="color-1 hovered menu-3 NavBars">
      <div class="container box">
        <div class="row bar-blur">
          <div class="col-xs-12">
            <div class="col-md-12">
              <div class="nav">
                <a href="/" class="logo">
                  <img
                    class="logo-icon"
                    v-lazy="'img/TRINITYTRIPLOGO2.fb1dc127.png'"
                    alt=""
                  />
                </a>

                <div class="nav-menu-icon">
                  <a href="#"><i></i></a>
                </div>
                <nav class="menu">
                  <ul>
                    <li class="type-1">
                      <a href="/"><h2>หน้าแรก</h2></a>
                    </li>
                  </ul>
                </nav>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  </div>
</template>

<script>
export default {
  name: "NavBarUseAll",
};
</script>

<style scoped>
.NavBars {
  position: fixed;
  z-index: 10000;
}
.logo-icon {
  margin-left: 10px;
  width: auto;
  height: 80px;
}
.bar-blur {
  padding-top: 0px;
}
h2 {
  font-size: 28px;
  line-height: 1.363rem;
  font-weight: 500;
  text-transform: capitalize;
  letter-spacing: 0;
  color: #206ab0;
}
</style>
