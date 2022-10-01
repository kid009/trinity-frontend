<template>
  <Radar
    :chart-options="chartOptions"
    :chart-data="chartData"
    :chart-id="chartId"
    :dataset-id-key="datasetIdKey"
    :plugins="plugins"
    :css-classes="cssClasses"
    :styles="myStyles"
    :width="width"
    :height="height"
  />
</template>

<script>
import { Radar } from "vue-chartjs";
import axios from "axios";
import { BASE_API_URL } from "../../../../../constants";

import {
  Chart as ChartJS,
  Title,
  Tooltip,
  Legend,
  PointElement,
  LineElement,
  RadialLinearScale,
} from "chart.js";

ChartJS.register(
  Title,
  Tooltip,
  Legend,
  PointElement,
  RadialLinearScale,
  LineElement
);

export default {
  name: "RadarChart",
  components: {
    Radar,
  },
  computed: {
    myStyles() {
      return {
        height: `${22}rem`,
        position: "relative",
      };
    },
  },
  props: {
    chartId: {
      type: String,
      default: "radar-chart",
    },
    datasetIdKey: {
      type: String,
      default: "label",
    },
    width: {
      type: Number,
      default: 400,
    },
    height: {
      type: Number,
      default: 400,
    },
    cssClasses: {
      default: "",
      type: String,
    },
    plugins: {
      type: Array,
      default: () => [],
    },
  },
  data() {
    return {
      chartData: {
        labels: [
          "เส้นทางท่องเที่ยว",
          "กิจกรรมท่องเที่ยว",
          "วางแผนเส้นทางแนะนำ",
          "สถานที่อำนวยความสะดวก",
          "ผลิตภัณฑ์",
        ],
        datasets: [
          {
            label: "จำนวนหมวดหมู่",
            backgroundColor: "rgba(179,181,198,0.2)",
            borderColor: "rgba(179,181,198,1)",
            pointBackgroundColor: "rgba(179,181,198,1)",
            pointBorderColor: "#fff",
            pointHoverBackgroundColor: "#fff",
            pointHoverBorderColor: "rgba(179,181,198,1)",
            data: [],
          },
          {
            label: "จำนวนรายการ",
            backgroundColor: "rgba(255,99,132,0.2)",
            borderColor: "rgba(255,99,132,1)",
            pointBackgroundColor: "rgba(255,99,132,1)",
            pointBorderColor: "#fff",
            pointHoverBackgroundColor: "#fff",
            pointHoverBorderColor: "rgba(255,99,132,1)",
            data: [],
          },
        ],
      },
      chartOptions: {
        responsive: true,
        maintainAspectRatio: false,
      },
    };
  },
  mounted() {
    axios
      .get(`${BASE_API_URL}/home/statistics`)
      .then(
        (response) => (
          (this.chartData.datasets[0].data = []),
          this.chartData.datasets[0].data.push(
            response.data.tourism_route_group
          ),
          this.chartData.datasets[0].data.push(response.data.activity_group),
          this.chartData.datasets[0].data.push(0),
          this.chartData.datasets[0].data.push(response.data.poi_group),
          this.chartData.datasets[0].data.push(response.data.product_group),
          (this.chartData.datasets[1].data = []),
          this.chartData.datasets[1].data.push(
            response.data.tourism_main_route
          ),
          this.chartData.datasets[1].data.push(response.data.activity),
          this.chartData.datasets[1].data.push(response.data.plantrip),
          this.chartData.datasets[1].data.push(response.data.poi),
          this.chartData.datasets[1].data.push(response.data.product)
        )
      );
  },
};
</script>
