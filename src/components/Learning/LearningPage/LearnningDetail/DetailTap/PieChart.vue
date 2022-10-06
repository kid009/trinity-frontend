<template>
  <Pie
    :chart-options="chartOptions2"
    :chart-data="chartData"
    :chart-id="chartId"
    :dataset-id-key="datasetIdKey"
    :plugins="plugins"
    :css-classes="cssClasses"
    :styles="styles"
    :width="width"
    :height="height"
  />
</template>

<script>
import axios from "axios";
import { BASE_API_URL } from "../../../../../constants";

import { Pie } from "vue-chartjs";

import {
  Chart as ChartJS,
  Title,
  Tooltip,
  Legend,
  ArcElement,
  CategoryScale,
} from "chart.js";

ChartJS.register(Title, Tooltip, Legend, ArcElement, CategoryScale);

export default {
  name: "PieChart",
  components: {
    Pie,
  },
  props: {
    chartId: {
      type: String,
      default: "pie-chart",
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
      default: 100,
    },
    cssClasses: {
      default: "",
      type: String,
    },
    styles: {
      type: Object,
      default: () => {},
    },
    plugins: {
      type: Array,
      default: () => [],
    },
  },
  data() {
    return {
      chartData: {
        labels: ["เยี่ยมชมหน้าบ้าน", "ใช้งานหลังบ้าน"],
        datasets: [
          {
            backgroundColor: ["#8BD2EC", "#80B7A2"],
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
          (this.analytics = response.data.analytics),
          (this.user_log = response.data.user_log),
          (this.chartData.datasets[0].data = []),
          this.chartData.datasets[0].data.push([this.analytics]),
          this.chartData.datasets[0].data.push([this.user_log])
        )
      );
  },
};
</script>

<style></style>
