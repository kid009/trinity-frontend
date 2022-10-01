<template>
  <div class="">
    <div class="row">
      <div class="col-md-12">
        <div id="container">
          <div id="mapContainer"></div>
        </div>
      </div>
    </div>
    <div class="row">
      <div class="col-md-12">
        <div class="">
          <iframe
            width="100%"
            height="600"
            frameborder="0"
            scrolling="no"
            marginheight="0"
            marginwidth="0"
            :src="
              'https://maps.google.com/maps?q=' +
              lat +
              ',' +
              long +
              '&hl=eng&z=14&amp;output=embed'
            "
          >
          </iframe>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import "leaflet/dist/leaflet.css";
import L from "leaflet";
import "leaflet.control.layers.tree";

import { onMounted, ref } from "vue";
import axios from "axios";
import { BASE_API_URL } from "../../../constants";

export default {
  name: "Tab5",
  setup() {
    let id = window.location.search;
    id = id.split("=");
    id = id[1];

    const community_latitude = ref([]);
    const community_longitude = ref([]);

    const getData = async () => {
      const response = await axios.get(
        `${BASE_API_URL}/community-tourism/communityDetail/` + id
      );
      community_latitude.value = response.data.data[0].community_latitude;
      community_longitude.value = response.data.data[0].community_longitude;
    };

    onMounted(() => {
      getData();
    });

    return { community_latitude, community_longitude };
  },

  data() {
    return {
      lat: [],
      long: [],
      center: [15.364799204818858, 100.9497871378479],
    };
  },

  methods: {
    setupLeafletMap: function () {
      const mapDiv = L.map("mapContainer").setView(this.center, 10);
      L.tileLayer(
        "https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token=pk.eyJ1IjoicG9uZ3Bvb20iLCJhIjoiY2txdGk4OHkwMWpzcDJzbmJxeXFnMHVtZyJ9.mJ9FrZH8wybzE3tS31CZlQ",
        {
          attribution:
            'Map data (c) <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery (c) <a href="https://www.mapbox.com/">Mapbox</a>',
          maxZoom: 18,
          id: "mapbox/streets-v11",
          accessToken:
            "pk.eyJ1IjoicG9uZ3Bvb20iLCJhIjoiY2txdGk4OHkwMWpzcDJzbmJxeXFnMHVtZyJ9.mJ9FrZH8wybzE3tS31CZlQ",
        }
      ).addTo(mapDiv);

      let id = window.location.search;
      id = id.split("=");
      id = id[1];

      Promise.all([
        fetch(
          "https://api.trinitytrip.com/api/community-tourism/communityDetail/" +
            id
        ),
      ]).then(async ([response1]) => {
        const responseData1 = await response1.json();

        const data1 = responseData1.data;
        console.log(data1);

        this.lat = data1[0].community_latitude;
        this.long = data1[0].community_longitude;

        const layerGroup = L.featureGroup().addTo(mapDiv);

        data1.forEach(
          ({
            community_latitude,
            community_longitude,
            community_id,
            community_name,
            community_image_cover_link,
          }) => {
            layerGroup.addLayer(
              L.marker([community_latitude, community_longitude], {
                icon: L.divIcon({
                  className: "location-pin",
                  html: `<img style=" width: 33px; height: 33px;   position: absolute; border-radius: 50%; background: #32383e; width: 23px; height: 23px;  background: #32383e; position: absolute;  border: 1px solid #000000;  left: 50%; top: 50%; margin: -3px 0 0 -15px;" src="${community_image_cover_link}" >`,
                  iconSize: [30, 33],

                  iconAnchor: [10, 33],
                }),
              }).bindPopup(
                `<div style="width: 200px; height: 270px;">  
                        <b>ชุมชน</b> ${community_name}
                                    <br/>
                                    <br/>
                                     <a href="communitydetail?id=${community_id}">
                                    <img style="width: 170px; height: 150px; display: block;margin: auto; border-radius: 15px;" src="${community_image_cover_link}" alt="">
                                    </a>
                                    
                                     <br/>
                                     <br/>
                               </div>
                              <div class="row">
                               <iframe
                                width=""
                                height=""
                                frameborder="0"
                                scrolling="no"
                                marginheight="0"
                                marginwidth="0"
                                src="https://maps.google.com/maps?q=${community_latitude},${community_longitude}&hl=es&z=14&amp;output=embed"
                              >
                              </iframe>
                              </div>
                                    `
              )
            );
          }
        );

        mapDiv.fitBounds(layerGroup.getBounds());
      });

      ////////////////////////////////////////////////////
    },
  },
  mounted() {
    this.setupLeafletMap();
  },
};
</script>

<style scoped>
#mapContainer {
  display: none;
  width: 100%;
  height: 0px;
}
.ppcont {
  width: 1000px;
  height: 600px;
}
#text-spac-page-covid {
  letter-spacing: 0;
}
.imgActivity {
  width: 150px;
  height: 100px;
  text-align: center;
}
</style>
