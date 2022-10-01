<template>
  <div class="top-baner">
    <div class="clip">
      <div
        class="bg bg-bg-chrome act"
        style="background-image: url(images/bg/bg12.jpg)"
      ></div>
    </div>
    <div class="main-wraper padd-70-70">
      <div class="container box">
        <div class="row">
          <div class="col-xs-12">
            <div class="col-md-3"></div>
            <div class="col-md-6 bg-color">
              <div class="col-md-4">
                <div class="row">
                  <div>
                    <div>
                      <img
                        class="moblie"
                        src="images/dowloadpage/Artboard.png"
                        alt=""
                      />
                      <div class="bgmobile"></div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="col-md-7">
                <div class="row">
                  <div class="form-blocktop clearfix"></div>
                  <div class="col-md-9">
                    <div>
                      <img
                        class="logo"
                        src="img/TRINITYTRIPLOGO2.fb1dc127.png"
                        alt=""
                      />
                      <h3 class="center">moblie Aplication</h3>
                      <div class="form-block clearfix"></div>
                      <div class="row">
                        <div class="col-md-1"></div>
                        <div class="col-md-10">
                          <div class="col-xs-12 col-sm-12">
                            <a href="#" class="c-button bg-3"
                              ><img
                                class="icon-size"
                                src="images/dowloadpage/Artboard 3.png"
                                alt=""
                              />
                              <span class="">Download on play store</span></a
                            >
                          </div>
                        </div>
                        <div class="col-md-1"></div>

                        <div class="form-blocks clearfix"></div>
                        <div class="col-md-1"></div>
                        <div class="col-md-10">
                          <div class="col-xs-12 col-sm-12">
                            <div class="clearfix">
                              <a href="#" class="c-button bg-3"
                                ><img
                                  class="icon-size"
                                  src="images/dowloadpage/Artboard 4.png"
                                  alt=""
                                />
                                <span class="">Download on app store</span></a
                              >
                            </div>
                          </div>
                        </div>
                        <div class="col-md-1"></div>

                        <div class="form-block clearfix"></div>
                      </div>
                    </div>
                  </div>
                  <div class="col-md-3">
                    <div class="qrcode">
                      <img
                        class="qrcodeimg"
                        src="images/dowloadpage/MObileApp.png"
                        alt=""
                      />
                      <h2>Scan for Download</h2>
                    </div>
                  </div>
                  <div class="form-blockb clearfix"></div>
                  <div class="col-md-12">
                    <h1>Make your trip easier.</h1>
                    <div class="form-blocks clearfix"></div>
                    <h4 class="">
                      Plan, record, share and relive wherever you go
                    </h4>
                  </div>
                </div>
              </div>
              <div class="col-md-1"></div>
            </div>
            <div class="col-md-3"></div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "MobilePage",
};
</script>

<style scoped>
.bg-color {
  background-color: rgba(255, 255, 255, 0.603);
  border-radius: 40px;
  width: 100%;
  height: 100%;
}
/* .bgmobile {
  position: absolute;
  left: 65px;
  top: 50px;
  width: 400px;
  height: 100%;
  overflow: hidden;
  background-color: rgba(255, 255, 255, 0.603);
  border-radius: 7%;
} */
.form-blockb {
  margin-bottom: 60px;
}
.form-blocks {
  margin-bottom: 20px;
}
.form-blocktop {
  margin-bottom: 60px;
}
.moblie {
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
  border-radius: 1.25rem;
}
.logo {
  width: 100%;
  height: 160px;
  object-fit: cover;
  display: block;
}
.icon {
  width: 50px;
  height: 50px;
  object-fit: cover;
  display: block;
}
.icon-size {
  text-align: center;
  width: 45px;
  margin: 1px;
}
.qrcode {
  text-align: center;
}
.qrcodeimg {
  width: 250px;
}
.c-button.bg-3 {
  background: white;
  width: 100%;
  border-radius: 10px;
  border: 1px solid rgb(242, 243, 247);
  text-align: center;
  padding: 0px 0px;
}
.col-xs-12 {
  padding-right: 55px;
  padding-left: 55px;
}
.center {
  text-align: center;
}
h1 {
  font-size: 64px;
  line-height: 55px;
  font-weight: 600;
  text-transform: none;
  letter-spacing: 1px;
  color: rgb(21, 51, 133);
  /* text-shadow: 2px 2px 3px #000000; */
}
h2 {
  font-family: "Caveat", cursive;
  color: rgb(21, 51, 133);
  font-style: oblique;
  letter-spacing: 0;
  text-align: center;
  line-height: 40px;
  text-transform: none;
  font-size: 240%;
  transform: rotate(-15deg);
}
h3 {
  font-size: 44px;
  line-height: 40px;
  font-weight: 400;
  text-transform: capitalize;
  letter-spacing: 1px;
  color: rgb(21, 51, 133);
  /* text-shadow: 2px 2px 3px #000000; */
}
h4 {
  font-size: 30px;
  line-height: 40px;
  font-weight: 400;
  text-transform: none;
  letter-spacing: 1px;
  color: rgb(21, 51, 133);
  /* text-shadow: 2px 2px 3px #000000; */
}
span {
  font-size: 24px;
  line-height: 40px;
  font-weight: 400;
  text-transform: none;
  letter-spacing: 1px;
  color: rgb(21, 51, 133);
  /* text-shadow: 2px 2px 3px #000000; */
}
@media screen and (max-width: 600px) {
  .padd-70-70 {
    padding-top: 10px;
    padding-bottom: 70px;
  }
  .form-blocktop {
    margin-bottom: 0px;
  }
  .col-xs-12 {
    padding-right: 15px;
    padding-left: 15px;
  }
  .moblie {
    width: 100%;
    height: 100%;
    object-fit: cover;
    display: block;
    border-radius: 1.25rem;
  }
  .logo {
    width: 100%;
    height: 100px;
    object-fit: cover;
    display: block;
  }
  span {
    font-size: 16px;
    line-height: 40px;
    font-weight: 400;
    text-transform: none;
    letter-spacing: 1px;
    color: rgb(21, 51, 133);
    /* text-shadow: 2px 2px 3px #000000; */
  }

  h1 {
    font-size: 64px;
    line-height: 55px;
    font-weight: 600;
    text-transform: none;
    letter-spacing: 1px;
    color: rgb(21, 51, 133);
    text-align: center;
    /* text-shadow: 2px 2px 3px #000000; */
  }
  h2 {
    font-family: "Caveat", sans-serif;
    color: rgb(21, 51, 133);
    font-style: oblique;
    letter-spacing: 0;
    text-align: center;
    line-height: 40px;
    text-transform: none;
    font-size: 240%;
    transform: rotate(-5deg);
  }

  h4 {
    font-size: 30px;
    line-height: 40px;
    font-weight: 400;
    text-transform: none;
    letter-spacing: 1px;
    color: rgb(21, 51, 133);
    text-align: center;
    /* text-shadow: 2px 2px 3px #000000; */
  }
}
</style>
