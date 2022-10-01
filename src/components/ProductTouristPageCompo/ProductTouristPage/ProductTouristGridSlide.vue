<template>
  <!-- <div class="col-xs-12 col-sm-8 col-md-9"> -->
  <div class="grid-content clearfix">
    <!--------------------------- product -------------------------------------------------------->
    <div v-if="page == 'product'">
      <div class="container box" v-show="product[0] != null">
        <div class="row" id="style-1">
          <div v-if="group == 0">
            <h3 class="letter-layout">สินค้าในชุมชน</h3>
          </div>
          <div class="scrollbar">
            <div
              class="list-item-entry"
              v-for="items in product"
              v-bind:key="items"
            >
              <div class="hotel-item style-10 bg-white">
                <div class="table-view">
                  <a
                    @click="
                      on_click(
                        'product',
                        items.product_group_id,
                        items.product_id
                      )
                    "
                  >
                    <div class="radius-top">
                      <img
                        v-show="!countErrorproduct.includes(items.product_id)"
                        id="img-travel"
                        :src="items.product_image_cover_link"
                        @error="checkImg(items.product_id, 'product')"
                        alt=""
                      />
                      <img
                        v-show="countErrorproduct.includes(items.product_id)"
                        id="img-travel"
                        src="
                            images/nopicture.jpg
                          "
                        alt=""
                      />
                    </div>
                    <div class="title">
                      <h4>{{ items.product_name }}</h4>
                    </div>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!--------------------------- product -------------------------------------------------------->

    <!--------------------------- technology -------------------------------------------------------->
    <div v-else-if="page == 'researcher_technology'">
      <div class="container box" v-show="technology[0] != null">
        <div class="row" id="style-1">
          <div v-if="group == 0">
            <h3 class="letter-layout">เทคโนโลยี</h3>
          </div>
          <div class="scrollbar">
            <div
              class="list-item-entry"
              v-for="items in technology"
              v-bind:key="items"
            >
              <div class="hotel-item style-10 bg-white">
                <div class="table-view">
                  <a
                    @click="
                      on_click(
                        'researcher_technology',
                        items.researcher_technology_group_id,
                        items.researcher_technology_id
                      )
                    "
                  >
                    <div class="radius-top">
                      <img
                        v-show="
                          !countErrorresearcher_technology.includes(
                            items.researcher_technology_id
                          )
                        "
                        id="img-travel"
                        :src="items.researcher_technology_image_cover_link"
                        @error="
                          checkImg(items.researcher_technology_id, 'technology')
                        "
                        alt=""
                      />
                      <img
                        v-show="
                          countErrorresearcher_technology.includes(
                            items.researcher_technology_id
                          )
                        "
                        id="img-travel"
                        src="
                            images/nopicture.jpg
                          "
                        alt=""
                      />
                    </div>
                    <div class="title">
                      <h4>{{ items.researcher_technology_name }}</h4>
                    </div>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!--------------------------- technology -------------------------------------------------------->

    <!--------------------------- innovation -------------------------------------------------------->
    <div v-else-if="page == 'researcher_innovation'">
      <div class="container box" v-show="innovation[0] != null">
        <div class="row" id="style-1">
          <div v-if="group == 0">
            <h3 class="letter-layout">นวัตกรรมการท่องเที่ยวโดยชุมชน</h3>
          </div>
          <div class="scrollbar">
            <div
              class="list-item-entry"
              v-for="items in innovation"
              v-bind:key="items"
            >
              <div class="hotel-item style-10 bg-white">
                <div class="table-view">
                  <a
                    @click="
                      on_click(
                        'researcher_innovation',
                        items.researcher_innovation_group_id,
                        items.researcher_innovation_id
                      )
                    "
                  >
                    <div class="radius-top">
                      <img
                        v-show="
                          !countErrorresearcher_innovation.includes(
                            items.researcher_innovation_id
                          )
                        "
                        id="img-travel"
                        :src="items.researcher_innovation_image_cover_link"
                        @error="
                          checkImg(items.researcher_innovation_id, 'innovation')
                        "
                        alt=""
                      />
                      <img
                        v-show="
                          countErrorresearcher_innovation.includes(
                            items.researcher_innovation_id
                          )
                        "
                        id="img-travel"
                        src="
                            images/nopicture.jpg
                          "
                        alt=""
                      />
                    </div>
                    <div class="title">
                      <h4>{{ items.researcher_innovation_name }}</h4>
                    </div>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!--------------------------- innovation -------------------------------------------------------->

    <!--------------------------- researcherTourismProduct -------------------------------------------------------->
    <div v-else-if="page == 'researcher_tourism_product'">
      <div class="container box" v-show="researcherTourismProduct[0] != null">
        <div class="row" id="style-1">
          <div v-if="group == 0">
            <h3 class="letter-layout">นวัตกรรมผลิตภัณฑ์ท่องเที่ยว</h3>
          </div>
          <div class="scrollbar">
            <div
              class="list-item-entry"
              v-for="items in researcherTourismProduct"
              v-bind:key="items"
            >
              <div class="hotel-item style-10 bg-white">
                <div class="table-view">
                  <a
                    @click="
                      on_click(
                        'researcher_tourism_product',
                        items.researcher_tourism_product_group_id,
                        items.researcher_tourism_product_id
                      )
                    "
                  >
                    <div class="radius-top">
                      <img
                        v-show="
                          !countErrorResearcher_tourism_product.includes(
                            items.researcher_tourism_product_id
                          )
                        "
                        id="img-travel"
                        :src="items.researcher_tourism_product_image_cover_link"
                        @error="
                          checkImg(
                            items.researcher_tourism_product_id,
                            'tourism_product'
                          )
                        "
                        alt=""
                      />

                      <img
                        v-show="
                          countErrorResearcher_tourism_product.includes(
                            items.researcher_tourism_product_id
                          )
                        "
                        id="img-travel"
                        src="
                            images/nopicture.jpg
                          "
                        alt=""
                      />
                    </div>
                    <div class="title">
                      <h4>{{ items.researcher_tourism_product_name }}</h4>
                    </div>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!--------------------------- researcherTourismProduct -------------------------------------------------------->

    <!--------------------------- bussinessProduct -------------------------------------------------------->
    <div v-else-if="page == 'bussiness_product'">
      <div class="container box" v-show="bussinessProduct[0] != null">
        <div class="row" id="style-1">
          <div v-if="group == 0">
            <h3 class="letter-layout">ผลิตภัณฑ์ธุรกิจ</h3>
          </div>
          <div class="scrollbar">
            <div
              class="list-item-entry"
              v-for="items in bussinessProduct"
              v-bind:key="items"
            >
              <div class="hotel-item style-10 bg-white">
                <div class="table-view">
                  <a
                    @click="
                      on_click(
                        'bussiness_product',
                        items.bussiness_product_group_id,
                        items.bussiness_product_id
                      )
                    "
                  >
                    <div class="radius-top">
                      <img
                        v-show="
                          !countErrorbussiness_product.includes(
                            items.bussiness_product_id
                          )
                        "
                        id="img-travel"
                        :src="items.bussiness_product_image_cover_link"
                        @error="
                          checkImg(
                            items.bussiness_product_id,
                            'bussiness_product'
                          )
                        "
                        alt=""
                      />
                      <img
                        v-show="
                          countErrorbussiness_product.includes(
                            items.bussiness_product_id
                          )
                        "
                        id="img-travel"
                        src="
                            images/nopicture.jpg
                          "
                        alt=""
                      />
                    </div>
                    <div class="title">
                      <h4>{{ items.bussiness_product_name }}</h4>
                    </div>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!--------------------------- bussinessProduct -------------------------------------------------------->

    <!--------------------------- businessproductTourism -------------------------------------------------------->
    <div v-else-if="page == 'bussiness_product_tourism'">
      <div class="container box" v-show="businessproductTourism[0] != null">
        <div class="row" id="style-1">
          <div v-if="group == 0">
            <h3 class="letter-layout">ผลิตภัณฑ์ท่องเที่ยว</h3>
          </div>
          <div class="scrollbar">
            <div
              class="list-item-entry"
              v-for="items in businessproductTourism"
              v-bind:key="items"
            >
              <div class="hotel-item style-10 bg-white">
                <div class="table-view">
                  <a
                    @click="
                      on_click(
                        'bussiness_product_tourism',
                        items.bussiness_product_tourism_group_id,
                        items.bussiness_product_tourism_id
                      )
                    "
                  >
                    <div class="radius-top">
                      <img
                        v-show="
                          countErrorbussiness_product_tourism.includes(
                            items.bussiness_product_tourism_id
                          )
                        "
                        id="img-travel"
                        :src="items.bussiness_product_tourism_image_cover_link"
                        @error="
                          checkImg(
                            items.bussiness_product_tourism_id,
                            'product_tourism'
                          )
                        "
                        alt=""
                      />
                      <img
                        v-show="
                          countErrorbussiness_product_tourism.includes(
                            items.bussiness_product_tourism_id
                          )
                        "
                        id="img-travel"
                        src="
                            images/nopicture.jpg
                          "
                        alt=""
                      />
                    </div>
                    <div class="title">
                      <h4>{{ items.bussiness_product_tourism_name }}</h4>
                    </div>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!--------------------------- businessproductTourism -------------------------------------------------------->

    <!--------------------------- businessProductCommunity -------------------------------------------------------->
    <div v-else-if="page == 'bussiness_product_community'">
      <div class="container box" v-show="businessProductCommunity[0] != null">
        <div class="row" id="style-1">
          <div v-if="group == 0">
            <h3 class="letter-layout">ผลิตภัณฑ์ชุมชน</h3>
          </div>
          <div class="scrollbar">
            <div
              class="list-item-entry"
              v-for="items in businessProductCommunity"
              v-bind:key="items"
            >
              <div class="hotel-item style-10 bg-white">
                <div class="table-view">
                  <a
                    @click="
                      on_click(
                        'bussiness_product_community',
                        items.bussiness_product_community_group_id,
                        items.bussiness_product_community_id
                      )
                    "
                  >
                    <div class="radius-top">
                      <img
                        v-show="
                          !countErrorbussiness_product_community.includes(
                            items.bussiness_product_community_id
                          )
                        "
                        id="img-travel"
                        :src="
                          items.bussiness_product_community_image_cover_link
                        "
                        @error="
                          checkImg(
                            items.bussiness_product_community_id,
                            'product_community'
                          )
                        "
                        alt=""
                      />
                      <img
                        v-show="
                          countErrorbussiness_product_community.includes(
                            items.bussiness_product_community_id
                          )
                        "
                        id="img-travel"
                        src="
                            images/nopicture.jpg
                          "
                        alt=""
                      />
                    </div>
                    <div class="title">
                      <h4>{{ items.bussiness_product_community_name }}</h4>
                    </div>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!--------------------------- businessProductCommunity -------------------------------------------------------->
    <div v-else>
      <!--------------------------- innovation -------------------------------------------------------->
      <div>
        <div class="container box" v-show="innovation[0] != null">
          <div class="row" id="style-1">
            <div v-if="group == 0">
              <h3 class="letter-layout">นวัตกรรมการท่องเที่ยวโดยชุมชน</h3>
            </div>
            <div class="scrollbar">
              <div
                class="list-item-entry"
                v-for="items in innovation"
                v-bind:key="items"
              >
                <div class="hotel-item style-10 bg-white">
                  <div class="table-view">
                    <a
                      @click="
                        on_click(
                          'researcher_innovation',
                          items.researcher_innovation_group_id,
                          items.researcher_innovation_id
                        )
                      "
                    >
                      <div class="radius-top">
                        <img
                          v-show="
                            !countErrorresearcher_innovation.includes(
                              items.researcher_innovation_id
                            )
                          "
                          id="img-travel"
                          :src="items.researcher_innovation_image_cover_link"
                          @error="
                            checkImg(
                              items.researcher_innovation_id,
                              'innovation'
                            )
                          "
                          alt=""
                        />
                        <img
                          v-show="
                            countErrorresearcher_innovation.includes(
                              items.researcher_innovation_id
                            )
                          "
                          id="img-travel"
                          src="
                            images/nopicture.jpg
                          "
                          alt=""
                        />
                      </div>
                      <div class="title">
                        <h4>{{ items.researcher_innovation_name }}</h4>
                      </div>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <!--------------------------- innovation -------------------------------------------------------->

      <!--------------------------- technology -------------------------------------------------------->
      <div>
        <div class="container box" v-show="technology[0] != null">
          <div class="row" id="style-1">
            <div v-if="group == 0">
              <h3 class="letter-layout">เทคโนโลยี</h3>
            </div>
            <div class="scrollbar">
              <div
                class="list-item-entry"
                v-for="items in technology"
                v-bind:key="items"
              >
                <div class="hotel-item style-10 bg-white">
                  <div class="table-view">
                    <a
                      @click="
                        on_click(
                          'researcher_technology',
                          items.researcher_technology_group_id,
                          items.researcher_technology_id
                        )
                      "
                    >
                      <div class="radius-top">
                        <img
                          v-show="
                            !countErrorresearcher_technology.includes(
                              items.researcher_technology_id
                            )
                          "
                          id="img-travel"
                          :src="items.researcher_technology_image_cover_link"
                          @error="
                            checkImg(
                              items.researcher_technology_id,
                              'technology'
                            )
                          "
                          alt=""
                        />
                        <img
                          v-show="
                            countErrorresearcher_technology.includes(
                              items.researcher_technology_id
                            )
                          "
                          id="img-travel"
                          src="
                            images/nopicture.jpg
                          "
                          alt=""
                        />
                      </div>
                      <div class="title">
                        <h4>{{ items.researcher_technology_name }}</h4>
                      </div>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <!--------------------------- technology -------------------------------------------------------->

      <!--------------------------- researcherTourismProduct -------------------------------------------------------->
      <div>
        <div class="container box" v-show="researcherTourismProduct[0] != null">
          <div class="row" id="style-1">
            <div v-if="group == 0">
              <h3 class="letter-layout">นวัตกรรมผลิตภัณฑ์ท่องเที่ยว</h3>
            </div>
            <div class="scrollbar">
              <div
                class="list-item-entry"
                v-for="items in researcherTourismProduct"
                v-bind:key="items"
              >
                <div class="hotel-item style-10 bg-white">
                  <div class="table-view">
                    <a
                      @click="
                        on_click(
                          'researcher_tourism_product',
                          items.researcher_tourism_product_group_id,
                          items.researcher_tourism_product_id
                        )
                      "
                    >
                      <div class="radius-top">
                        <img
                          v-show="
                            !countErrorResearcher_tourism_product.includes(
                              items.researcher_tourism_product_id
                            )
                          "
                          id="img-travel"
                          :src="
                            items.researcher_tourism_product_image_cover_link
                          "
                          @error="
                            checkImg(
                              items.researcher_tourism_product_id,
                              'tourism_product'
                            )
                          "
                          alt=""
                        />

                        <img
                          v-show="
                            countErrorResearcher_tourism_product.includes(
                              items.researcher_tourism_product_id
                            )
                          "
                          id="img-travel"
                          src="
                            images/nopicture.jpg
                          "
                          alt=""
                        />
                      </div>
                      <div class="title">
                        <h4>{{ items.researcher_tourism_product_name }}</h4>
                      </div>
                    </a>
                  </div>
                </div>
              </div>
              <div
                class="list-item-entry"
                v-for="items in businessproductTourism"
                v-bind:key="items"
              >
                <div class="hotel-item style-10 bg-white">
                  <div class="table-view">
                    <a
                      @click="
                        on_click(
                          'bussiness_product_tourism',
                          items.bussiness_product_tourism_group_id,
                          items.bussiness_product_tourism_id
                        )
                      "
                    >
                      <div class="radius-top">
                        <img
                          v-show="
                            !countErrorbussiness_product_tourism.includes(
                              items.bussiness_product_tourism_id
                            )
                          "
                          id="img-travel"
                          :src="
                            items.bussiness_product_tourism_image_cover_link
                          "
                          @error="
                            checkImg(
                              items.bussiness_product_tourism_id,
                              'product_tourism'
                            )
                          "
                          alt=""
                        />
                        <img
                          v-show="
                            countErrorbussiness_product_tourism.includes(
                              items.bussiness_product_tourism_id
                            )
                          "
                          id="img-travel"
                          src="
                            images/nopicture.jpg
                          "
                          alt=""
                        />
                      </div>
                      <div class="title">
                        <h4>{{ items.bussiness_product_tourism_name }}</h4>
                      </div>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <!--------------------------- researcherTourismProduct -------------------------------------------------------->

      <!--------------------------- bussinessProduct -------------------------------------------------------->
      <div>
        <div class="container box" v-show="bussinessProduct[0] != null">
          <div class="row" id="style-1">
            <div v-if="group == 0">
              <h3 class="letter-layout">ผลิตภัณฑ์ธุรกิจ</h3>
            </div>
            <div class="scrollbar">
              <div
                class="list-item-entry"
                v-for="items in bussinessProduct"
                v-bind:key="items"
              >
                <div class="hotel-item style-10 bg-white">
                  <div class="table-view">
                    <a
                      @click="
                        on_click(
                          'bussiness_product',
                          items.bussiness_product_group_id,
                          items.bussiness_product_id
                        )
                      "
                    >
                      <div class="radius-top">
                        <img
                          v-show="
                            !countErrorbussiness_product.includes(
                              items.bussiness_product_id
                            )
                          "
                          id="img-travel"
                          :src="items.bussiness_product_image_cover_link"
                          @error="
                            checkImg(
                              items.bussiness_product_id,
                              'bussiness_product'
                            )
                          "
                          alt=""
                        />
                        <img
                          v-show="
                            countErrorbussiness_product.includes(
                              items.bussiness_product_id
                            )
                          "
                          id="img-travel"
                          src="
                            images/nopicture.jpg
                          "
                          alt=""
                        />
                      </div>
                      <div class="title">
                        <h4>{{ items.bussiness_product_name }}</h4>
                      </div>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <!--------------------------- bussinessProduct -------------------------------------------------------->

      <!--------------------------- businessproductTourism -------------------------------------------------------->
      <!-- <div>
          <div class="container box" v-show="businessproductTourism[0] != null">
            <div class="row" id="style-1">
              <div v-if="group == 0">
                <h3 class="letter-layout">ผลิตภัณฑ์ท่องเที่ยว</h3>
              </div>
              <div class="scrollbar">
                <div
                  class="list-item-entry"
                  v-for="items in businessproductTourism"
                  v-bind:key="items"
                >
                  <div class="hotel-item style-10 bg-white">
                    <div class="table-view">
                      <a
                        @click="
                          on_click(
                            'bussiness_product_tourism',
                            items.bussiness_product_tourism_group_id,
                            items.bussiness_product_tourism_id
                          )
                        "
                      >
                        <div class="radius-top">
                          <img
                            id="img-travel"
                            :src="
                              items.bussiness_product_tourism_image_cover_link
                            "
                            alt=""
                          />
                        </div>
                        <div class="title">
                          <h4>{{ items.bussiness_product_tourism_name }}</h4>
                        </div>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div> -->
      <!--------------------------- businessproductTourism -------------------------------------------------------->

      <!--------------------------- businessProductCommunity -------------------------------------------------------->
      <div>
        <div class="container box" v-show="businessProductCommunity[0] != null">
          <div class="row" id="style-1">
            <div v-if="group == 0">
              <h3 class="letter-layout">ผลิตภัณฑ์ชุมชน</h3>
            </div>
            <div class="scrollbar">
              <div
                class="list-item-entry"
                v-for="items in businessProductCommunity"
                v-bind:key="items"
              >
                <div class="hotel-item style-10 bg-white">
                  <div class="table-view">
                    <a
                      @click="
                        on_click(
                          'bussiness_product_community',
                          items.bussiness_product_community_group_id,
                          items.bussiness_product_community_id
                        )
                      "
                    >
                      <div class="radius-top">
                        <img
                          v-show="
                            !countErrorbussiness_product_community.includes(
                              items.bussiness_product_community_id
                            )
                          "
                          id="img-travel"
                          :src="
                            items.bussiness_product_community_image_cover_link
                          "
                          @error="
                            checkImg(
                              items.bussiness_product_community_id,
                              'product_community'
                            )
                          "
                          alt=""
                        />
                        <img
                          v-show="
                            countErrorbussiness_product_community.includes(
                              items.bussiness_product_community_id
                            )
                          "
                          id="img-travel"
                          src="
                            images/nopicture.jpg
                          "
                          alt=""
                        />
                      </div>
                      <div class="title">
                        <h4>{{ items.bussiness_product_community_name }}</h4>
                      </div>
                    </a>
                  </div>
                </div>
              </div>
              <div
                class="list-item-entry"
                v-for="items in product"
                v-bind:key="items"
              >
                <div class="hotel-item style-10 bg-white">
                  <div class="table-view">
                    <a
                      @click="
                        on_click(
                          'product',
                          items.product_group_id,
                          items.product_id
                        )
                      "
                    >
                      <div class="radius-top">
                        <img
                          v-show="!countErrorproduct.includes(items.product_id)"
                          id="img-travel"
                          :src="items.product_image_cover_link"
                          @error="checkImg(items.product_id)"
                          alt=""
                        />
                        <img
                          v-show="
                            countErrorproduct.includes(
                              items.product_id,
                              'product'
                            )
                          "
                          id="img-travel"
                          src="
                            images/nopicture.jpg
                          "
                          alt=""
                        />
                      </div>
                      <div class="title">
                        <h4>{{ items.product_name }}</h4>
                      </div>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <!--------------------------- businessProductCommunity -------------------------------------------------------->

      <!--------------------------- product -------------------------------------------------------->
      <!-- <div>
          <div class="container box" v-show="product[0] != null">
            <div class="row" id="style-1">
              <div v-if="group == 0">
                <h3 class="letter-layout">สินค้าในชุมชน</h3>
              </div>
              <div class="scrollbar">
                <div
                  class="list-item-entry"
                  v-for="items in product"
                  v-bind:key="items"
                >
                  <div class="hotel-item style-10 bg-white">
                    <div class="table-view">
                      <a
                        @click="
                          on_click(
                            'product',
                            items.product_group_id,
                            items.product_id
                          )
                        "
                      >
                        <div class="radius-top">
                          <img
                            id="img-travel"
                            :src="items.product_image_cover_link"
                            alt=""
                          />
                        </div>
                        <div class="title">
                          <h4>{{ items.product_name }}</h4>
                        </div>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div> -->
      <!--------------------------- product -------------------------------------------------------->
    </div>
  </div>
  <!-- </div> -->
</template>

<script>
import { onMounted, ref } from "vue";
import axios from "axios";
import { BASE_API_URL } from "../../../constants";

export default {
  name: "ProductTouristGridSlide",

  setup() {
    let page = window.location.search;
    page = page.split("=");
    page = page[1];
    page = page.substring(0, page.length - 6);

    let group = window.location.search;
    group = group.split("=");
    group = group[2];
    group = group.substring(0, group.length - 3);

    let id = window.location.search;
    id = id.split("=");
    id = id[3];

    const all = ref([]);
    const product = ref([]);
    const technology = ref([]);
    const innovation = ref([]);
    const researcherTourismProduct = ref([]);
    const bussinessProduct = ref([]);
    const businessproductTourism = ref([]);
    const businessProductCommunity = ref([]);

    const getData = async () => {
      const response = await axios.get(
        `${BASE_API_URL}/innovation-product/ProductAll?page=` +
          page +
          "&group=" +
          group +
          "&id=" +
          id
      );
      all.value = response.data;
      product.value = response.data.data_product;
      technology.value = response.data.data_researcher_technology;
      innovation.value = response.data.data_researcher_innovation;
      researcherTourismProduct.value =
        response.data.data_researcher_tourism_product;
      bussinessProduct.value = response.data.data_bussiness_product;
      businessproductTourism.value =
        response.data.data_bussiness_product_tourism;
      businessProductCommunity.value =
        response.data.data_bussiness_product_community;
    };

    const on_click = (page, group, id) => {
      window.location =
        "producttouristdetailpage?page=" +
        page +
        "&group=" +
        group +
        "&id=" +
        id;
    };

    const countErrorResearcher_tourism_product = ref([]);
    const countErrorproduct = ref([]);
    const countErrorresearcher_technology = ref([]);
    const countErrorresearcher_innovation = ref([]);
    const countErrorbussiness_product = ref([]);
    const countErrorbussiness_product_tourism = ref([]);
    const countErrorbussiness_product_community = ref([]);

    function checkImg(id, name) {
      if (name == "innovetion") {
        countErrorresearcher_innovation.value.push(id);
      }

      if (name == "technology") {
        countErrorresearcher_technology.value.push(id);
      }
      if (name == "tourism_product") {
        countErrorResearcher_tourism_product.value.push(id);
      }
      if (name == "product_tourism") {
        countErrorbussiness_product_tourism.value.push(id);
      }
      if (name == "bussiness_product") {
        countErrorbussiness_product.value.push(id);
      }
      if (name == "product_community") {
        countErrorbussiness_product_community.value.push(id);
      }
      if (name == "product") {
        countErrorproduct.value.push(id);
      }
    }

    onMounted(() => {
      getData();
    });

    return {
      all,
      product,
      technology,
      innovation,
      researcherTourismProduct,
      bussinessProduct,
      businessproductTourism,
      businessProductCommunity,
      on_click,
      id,
      page,
      group,
      checkImg,
      countErrorResearcher_tourism_product,
      countErrorproduct,
      countErrorresearcher_technology,
      countErrorresearcher_innovation,
      countErrorbussiness_product,
      countErrorbussiness_product_tourism,
      countErrorbussiness_product_community,
    };
  },
};
</script>

<style scoped>
.container-pad {
  margin-right: 80px;
  margin-left: 80px;
}
@media only screen and (max-width: 1024px) {
  .container-pad {
    margin-right: 5px;
    margin-left: 5px;
  }
}
.hotel-items {
  padding: 20px 0px 40px;
}
.padd-120 {
  padding-bottom: 20px;
}
.border {
  border: 1px solid #ffffff;

  width: 100%;

  background-color: #ffffff;
}

.hotel-item {
  background-color: white;
  box-shadow: 2px 0px 8px #22222275;
  width: 280px;
  transition: 0.6s;
}
.hotel-item:hover {
  transform: scale(1.1);
}
.hotel-item.style-7 h4 {
  height: 50px;
  letter-spacing: 0px;
  margin-bottom: 3px;
  color: #206ab0;
}
.hotel-item .title {
  position: relative;
  width: 100%;
  height: 130px;
  padding: 15px 15px 15px 15px;
  border: 1px solid #f7f7f7;
}
.hotel-item .title p {
  color: #bebebe;
  padding: 0px;
  font-size: 12px;
  line-height: 0px;
}
main {
  width: 100%;
  display: grid;
  /* Define Auto Row size */
  height: 50px;
  /*Define our columns */
  grid-template-columns: 4fr 6fr;
  grid-gap: 0em;
}

article {
  color: black;
}
article img {
  padding-right: 2px;
}
article a {
  font-size: 13px;
  letter-spacing: 0px;
  font-weight: 400px;
}
article:nth-child(odd) {
  background-color: #55bae900;
}

article:nth-child(even) {
  background-color: #afbe2900;
  text-align: end;
}
.radius-top img {
  width: 100%;

  object-fit: cover;
  display: block;
  height: 200px;
}
@media only screen and(min-width: 1100px) {
  .radius-top img {
    height: 300px;
  }
}

/*------------SCROLL--BAR--------*/
.scrollbar {
  display: flex;
  gap: 5px;
  border: 20px solid #f8f8f8;
  height: fit-content;
  overflow-x: auto;
  -ms-scroll-snap-type: x mandatory;
  scroll-snap-type: x mandatory;
}

/* STYLE 1 */

#style-1::-webkit-scrollbar-track {
  border-radius: 10px;
  background-color: #f5f5f5;
}

#style-1::-webkit-scrollbar {
  width: 12px;
  background-color: #f5f5f5;
}

#style-1::-webkit-scrollbar-thumb {
  border-radius: 10px;

  background-color: #555;
}
#img-travel {
  width: auto;
  max-width: 250px;
  height: 200px;
  overflow: hidden;
  display: block;
  margin: auto;
}
.grid-content .list-item-entry {
  float: left;
  width: fit-content;
  padding-right: 15px;
  padding-left: 15px;
}
.letter-layout {
  letter-spacing: 0;
  padding: 20px;
}
.test {
  width: 500px;
  position: absolute;
  background: #555;
}
</style>
