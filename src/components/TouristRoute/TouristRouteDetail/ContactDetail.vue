<template>
  <div class="col-xs-12 col-sm-4 col-md-12">
    <div class="right-sidebar">
      <div class="sidebar-block type-2">
        <div class="detail-block borderdetail">
          <div
            class="details-desc"
            v-for="items in contact.slice(0, 1)"
            v-bind:key="items.activity_id"
          >
            <div>
              <br />
              <div class="team-entry style-2">
                <h4 id="page-detail" class="color-black">ข้อมูลติดต่อ</h4>
                <div class="image">
                  <img
                    class="img-profie"
                    id="borderporfile"
                    :src="items.activity_contact_image"
                    alt=""
                  />
                </div>
                <b
                  ><p class="color-black">
                    ชื่อ:<span class="color-black">{{
                      items.activity_contact_name
                    }}</span>
                  </p></b
                >
                <b
                  ><p class="color-black">
                    อีเมล:
                    <span class="color-black"> {{ items.activity_email }}</span>
                  </p></b
                >
                <b
                  ><p class="color-black">
                    เบอร์โทรศัพท์:
                    <span class="color-black">
                      {{ items.activity_telephone }}</span
                    >
                  </p></b
                >

                <a
                  class="img-resize"
                  target="_blank"
                  :href="'HTTP://LINE.ME/TI/P/~' + items.activity_line"
                  ><img id="bordercl" src="images/product/line-icon.png" alt=""
                /></a>
                &nbsp;
                <a
                  class="img-resize"
                  target="_blank"
                  :href="items.activity_facebook"
                  ><img id="bordercl" src="images/product/facebook.png" alt=""
                /></a>
                &nbsp;
                <a
                  class="img-resize"
                  target="_blank"
                  :href="items.activity_facebook"
                  ><img
                    id="bordercl"
                    src="images/product/instagrams.png"
                    alt=""
                /></a>
                &nbsp;
                <a
                  class="img-resize"
                  target="_blank"
                  :href="items.activity_facebook"
                  ><img id="bordercl" src="images/product/link.png" alt=""
                /></a>
              </div>
            </div>
          </div>

          <!-------------------------------- -------------------------------------------->

          <!------------------------------------ ------------------------------------------------->
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { onMounted, ref } from "vue";
import axios from "axios";
import { BASE_API_URL } from "../../../constants";

export default {
  name: "ContactDetail",

  setup() {
    const contact = ref([]);
    const message = ref();

    console.log(contact);

    let page = window.location.search.substr(6, 1);

    let group = window.location.search;
    group = group.split("=");
    group = group[2];
    group = group.substring(0, group.length - 3);

    let id = window.location.search;
    id = id.split("=");
    id = id[3];

    const getData = async () => {
      const response = await axios.get(
        `${BASE_API_URL}/tourism-route/activitDetail/` + id
      );
      contact.value = response.data.data;
    };

    function on_click(page, group, id) {
      window.location =
        "touristroute?page=" + page + "&group=" + group + "&id=" + id;
    }

    onMounted(() => {
      getData();
    });

    return { contact, on_click, message, page, group, id };
  },
};
</script>

<style scoped>
.img-profie img {
  width: 150px;
  height: auto;
}

.img-profie {
  width: 150px;
  height: 150px;
  overflow: hidden;
  text-align: center;
}

#borderporfile {
  border-style: solid;
  border-width: 3px;
  border-color: white;
  border-radius: 10px;
}

.borderdetail {
  border-radius: 3px;

  padding: 10px;
  width: 100%;
  height: 500px;
  background-color: #ffffff;
}
#bordercl {
  border-style: solid;
  border-width: 3px;
  border-color: white;
  border-radius: 30px;
}
.img-resize {
  width: 61px;
  height: 61px;
  overflow: hidden;
  text-align: center;
}
.img-resize img {
  width: 61px;
  height: auto;
}
</style>
