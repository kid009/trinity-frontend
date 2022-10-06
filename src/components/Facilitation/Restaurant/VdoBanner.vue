<template>
  <div class="full-height">
    <div class="clip">
      <div class="embed-responsive embed-responsive-16by9 bg bg-bg-chrome">
        <video loop autoplay muted>
          <source type="video/mp4" src="images/video/FruitSalad.mp4" />
          <source type="video/ogv" src="images/video/FruitSalad.ogv" />
          <source type="video/webm" src="images/video/FruitSalad.webm" />
        </video>
      </div>
    </div>
    <div class="vertical-align">
      <div class="container">
        <div class="row">
          <div class="col-md-12 col-xs-12">
            <div class="main-title">
              <h1 class="topic-page-food fontstyle">
                welcome<br />
                to restaurant
              </h1>
              <div id="all-search-bar-topic" class="row">
                <div
                  class="
                    col-lg-10
                    col-lg-offset-1
                    col-md-12
                    col-sm-12
                    col-md-offset-0
                  "
                >
                  <div class="input-style-1 min-324">
                    <img src="img/loc_icon_small.png" alt="" />
                    <input
                      class="fontstyle"
                      id="search-bar-topic"
                      type="text"
                      placeholder="ค้นหาเมนูอาหารที่คุณต้องการ..."
                    />
                  </div>
                  <div class="submit">
                    <input
                      id="button-search-bar-topic"
                      class="c-button b-60 bg-white hv-orange"
                      type="submit"
                      value="ค้นหา"
                    />
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
export default {
  name: "VdoBanner",
};
</script>

<style></style>
