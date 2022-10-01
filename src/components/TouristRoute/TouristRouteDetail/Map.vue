<template>
  <div class="pad-20">
    <div class="row">
      <div class="col-xs-12 col-md-8">
        <div id="container">
          <div id="mapContainer"></div>
        </div>
      </div>
      <div class="col-xs-6 col-md-4">
        <div
          class="activity-text-map"
          v-for="items in activity"
          v-bind:key="items.activity_id"
        >
          <span class="badge">{{ num++ }}</span>
          <div class="time-line active"></div>
          <h4>
            กิจกรรม : <span>{{ items.activity_name }}</span>
          </h4>
          <h4>
            เวลากิจกรรม :
            <span>{{ items.activity_duration }}</span
            >นาที
          </h4>
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
  name: "Map",
  components: {},
  setup() {
    const activity = ref([]);
    const num = 1;
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
        `${BASE_API_URL}/tourism-route/activity/` + id
      );
      activity.value = response.data.data;
    };

    function on_click(id) {
      window.location =
        "ActivityDetailAll?page=" + 1 + "&group=" + 2 + "&id=" + id;
    }

    onMounted(() => {
      getData();
    });

    return { activity, on_click, page, group, id, num };
  },
  data() {
    return {
      center: [15.364799204818858, 100.9497871378479],
      startlatitude: [],
      startlongitude: [],
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
          maxZoom: 20,
          id: "mapbox/streets-v11",
          accessToken:
            "pk.eyJ1IjoicG9uZ3Bvb20iLCJhIjoiY2txdGk4OHkwMWpzcDJzbmJxeXFnMHVtZyJ9.mJ9FrZH8wybzE3tS31CZlQ",
        }
      ).addTo(mapDiv);

      let geoJson = {};

      let id = window.location.search;
      id = id.split("=");
      id = id[3];

      var myIconAvtivity = L.icon({
        iconUrl: "images/mapicon/กิจกรรม.png",
        iconSize: [30, 33],
        iconAnchor: [18, 50],
        popupAnchor: [-1, -40],
      });

      axios
        .get("https://api.trinitytrip.com/api/tourism-route/activity/" + id)
        .then((response) => {
          geoJson = {
            ...response.data.data,
          };

          var point = 0;
          var waypoints;

          waypoints = [];

          for (let key in geoJson) {
            let activityss = geoJson[key];
            this.startlatitude.push(activityss.activity_latitude);
            this.startlongitude.push(activityss.activity_longitude);

            waypoints.push(
              L.latLng(this.startlatitude[point], this.startlongitude[point])
            );
            point++;

            L.Routing.control({
              waypoints: waypoints,
              plan: L.Routing.plan(waypoints, {
                createMarker: function (i, wp, nWps) {
                  if (i === 0 || i === nWps - 1) {
                    return L.marker(wp.latLng, {
                      icon: myIconAvtivity,
                    });
                  } else {
                    return L.marker(wp.latLng, {
                      icon: myIconAvtivity,
                    });
                  }
                },
              }),
              routeWhileDragging: false,
              show: false,
              addWaypoints: false,
              draggableWaypoints: false,
              fitSelectedRoutes: true,

              lineOptions: {
                styles: [
                  { color: "black", opacity: 0.15, weight: 9 },
                  { color: "white", opacity: 0.8, weight: 6 },
                  { color: "DodgerBlue", opacity: 1, weight: 3 },
                ],
              },
            }).addTo(mapDiv);
          }
        });

      Promise.all([
        fetch("https://api.trinitytrip.com/api/tourism-route/activity/" + id),
      ]).then(async ([response1]) => {
        const responseData1 = await response1.json();

        const data1 = responseData1.data;

        const layerGroup = L.featureGroup().addTo(mapDiv);

        data1.forEach(
          ({
            activity_latitude,
            activity_longitude,
            activity_id,
            activity_name,

            activity_image_cover,
          }) => {
            layerGroup.addLayer(
              L.marker([activity_latitude, activity_longitude], {
                icon: myIconAvtivity,
              }).bindPopup(
                `<div style="width: 200px; height: 300px;">  
                        <b>กิจกรรม</b> ${activity_name}
                                    <br/>
                                    <br/>
                                     <a href="ActivityDetailAll?page=1&group=2&id=${activity_id}">
                                    <img style="width: 170px; height: 150px; display: block;margin: auto; border-radius: 15px;" src="${activity_image_cover}" alt="">
                                    </a>
                                    <br/>
                                    <a class='c-button bg-green'  style="text-align: center; display: inline-block; width:100%;"   href="ActivityDetailAll?page=1&group=2&id=${activity_id} ")' >เพิ่มเติม</a>
                                    <br/>
                                     <br/>
                                     <br/>
                               </div>
                                    `
              )
            );
          }
        );

        mapDiv.fitBounds(layerGroup.getBounds());
      });
    },
  },
  mounted() {
    this.setupLeafletMap();
  },
};
</script>

<style scoped>
#mapContainer {
  width: 100%;
  height: 500px;
}
.pad-20 {
  padding: 20px;
}
.activity-text-map {
  padding: 0px 20px;
}
.activity-text-map h4 {
  font-weight: 500;
  letter-spacing: 0px;
}
.activity-text-map span {
  font-weight: 100;
  letter-spacing: 0px;
  color: #5a5a5a;
}
.time-line {
  width: 3px;
  height: 30px;
  margin-left: 8px;
  top: 0;
  background: rgb(0, 0, 0);
}
.badge {
  display: inline-block;
  min-width: 10px;
  padding: 3px 7px;
  font-size: 12px;
  font-weight: 700;
  line-height: 1;
  color: #fff !important;
  text-align: center;
  white-space: nowrap;
  vertical-align: middle;
  background-color: #777;
  border-radius: 10px;
}
</style>
