<template>
  <Bar
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
import axios from "axios";
import { BASE_API_URL } from "../../../../../constants";

import { Bar } from "vue-chartjs";

import {
  Chart as ChartJS,
  Title,
  Tooltip,
  Legend,
  BarElement,
  CategoryScale,
  LinearScale,
} from "chart.js";

ChartJS.register(
  Title,
  Tooltip,
  Legend,
  BarElement,
  CategoryScale,
  LinearScale
);

export default {
  name: "BarChart",
  components: {
    Bar,
  },
  computed: {
    myStyles() {
      return {
        height: `${20}rem`,
        position: "relative",
      };
    },
  },
  props: {
    chartId: {
      type: String,
      default: "bar-chart",
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
        labels: ["ชุมชน", "ภาคธุรกิจ", "นักท่องเที่ยว", "นักวิจัย"],
        datasets: [
          {
            label: "ภาคส่วนที่เข้ามาใช้ระบบทั้งหมด",
            backgroundColor: "#f87979",
            data: "",
          },
        ],
      },
      chartOptions: {
        responsive: true,
        maintainAspectRatio: false,
      },
      community: "",
      bussiness: "",
      tourism: "",
      researcher: "",
    };
  },
  mounted() {
    axios
      .get(`${BASE_API_URL}/home/statistics`)
      .then(
        (response) => (
          (this.community = response.data.community),
          (this.bussiness = response.data.bussiness),
          (this.tourism = response.data.tourism),
          (this.researcher = response.data.researcher),
          (this.chartData.datasets[0].data = []),
          this.chartData.datasets[0].data.push(this.community),
          this.chartData.datasets[0].data.push(this.bussiness),
          this.chartData.datasets[0].data.push(this.tourism),
          this.chartData.datasets[0].data.push(this.researcher)
        )
      );
  },
};
</script>
<style scoped></style>
