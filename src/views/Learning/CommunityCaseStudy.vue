<template>
  <div>
    <Banner msg="Case Study" img="images/office.jpg" />
    <CaseStudys />
    <Other
      topic_name="CaseStudy อื่นๆ"
      items_link_name="communitycasestudy?id="
      :items_id1="casestudy1.best_study_id"
      :items_gird_name1="casestudy1.best_study_name"
      :items_image_cover1="casestudy1.best_study_image_cover_link"
      :items_id2="casestudy2.best_study_id"
      :items_gird_name2="casestudy2.best_study_name"
      :items_image_cover2="casestudy2.best_study_image_cover_link"
      :items_id3="casestudy3.best_study_id"
      :items_gird_name3="casestudy3.best_study_name"
      :items_image_cover3="casestudy3.best_study_image_cover_link"
    />
  </div>
</template>

<script>
import CaseStudys from "../../components/Learning/Casestudy/CaseStudys.vue";
import Banner from "../../components/Banner.vue";
import Other from "../../components/Other.vue";

import { onMounted, ref } from "vue";
import axios from "axios";
import { BASE_API_URL } from "../../constants";

export default {
  name: "CommunityCaseStudy",
  components: {
    Banner,
    CaseStudys,
    Other,
  },
  setup() {
    const casestudy1 = ref([]);
    const casestudy2 = ref([]);
    const casestudy3 = ref([]);

    const getData = async () => {
      const response = await axios.get(
        `${BASE_API_URL}/community-tourism/casestudy`
      );
    
      casestudy1.value = response.data.data[0];
      if(response.data.data[1]){
        casestudy2.value = response.data.data[1];
      }
      if(response.data.data[2]){
        casestudy3.value = response.data.data[2];
      }

      
      
      
    };

    onMounted(() => {
      getData();
    });

    return { casestudy1, casestudy2, casestudy3 };
  },
};
</script>

<style></style>
