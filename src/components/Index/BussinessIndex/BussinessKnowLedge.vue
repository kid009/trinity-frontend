<template>


<div class="main-wraper padd-90">
	<div class="container ">
            <div class="row">
				<div class="col-xs-12 col-sm-8 col-sm-offset-2">
					<div class="second-title">
									
    					<h2 class="sb-title letter-layout">Knowledge Management</h2>
    				</div>
				</div>
			</div>

			<div class="row">
				<div class="swiper-container"  data-speed="500" data-slides-per-view="responsive" data-mob-slides="1" data-xs-slides="1" data-sm-slides="2" data-md-slides="3" data-lg-slides="3" data-add-slides="1">
					<div class="swiper-wrapper">


						<div class="swiper-slide" v-for="items in knowledge" v-bind:key="items.knowledge_management_id">
							<div v-show="items.role_id.includes(25)">


							<div class="city-entry bg-grey-2">
								<div class="tour-block tour-block-s-9 hover-green radius-5 underline-block">
							     	<div class="tour-layer delay-1"></div> 
								  	<img :src="items.knowledge_management_image_cover_link" class="res-img" alt="">
									<div class="tour-caption">
										<div class="vertical-align">
											<h3 class="underline hover-it">{{ items.knowledge_management_name }}</h3>
											
										</div>
									</div>
							    </div>



							    <div class="city-desc">
			                        <div class="tab-wrapper">
			                            <div class="tab-nav-wrapper">
			                                <div  class="nav-tab  clearfix">
			                                    <div class="nav-tab-item active">
			                                        วิดีโอแนะนำ
			                                    </div>
			                                    <div class="nav-tab-item ">
			                                        รายละเอียด
			                                    </div>
			                                                                 
			                                </div>
			                            </div>
			                            <div class="tabs-content clearfix">
			                                <div class="tab-info active"> 


												<div class="hotel-line clearfix">
													<iframe width="100%" height="450px" :src="items.nowledge_management_vdo" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
												</div>


												<div class="hotel-line clearfix">
													<div class="tags-title color-dark-2">link:</div>
													<ul class="clearfix">
														<li>
														&nbsp;<a
															target="_blank"
															v-bind:href="items.knowledge_management_link"
															><img id="img-resize" src="images/product/link.png" alt=""
														/></a>
														</li>
													</ul>
													</div>
																							
												



			                                </div>
			                                <div class="tab-info"> 


												<div class="hotel-line clearfix">
													
						        					<div class="hotel-line-content">
						        						<a class="hotel-line-title" href="#">{{ items.knowledge_management_detail }}</a>
														
								                       	<div class="hotel-line-price">{{ items.knowledge_management_detail_en }}</div>

						        					</div>
												</div>
												
															
			                                </div>
			                                                      
			                            </div>
			                        </div>
							    </div>

							




						    </div>			
						</div>



						</div>
						
																
					</div>
					<div class="pagination poin-style-2"></div>
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
     name: "BussinessKnowLedge",

	setup() {
    const knowledge = ref([]);

    const getData = async () => {
      const response = await axios.get(
        `${BASE_API_URL}/home/knowledgemanagement`
      );
      knowledge.value = response.data.data;
      //console.log(response.data.data);
    };

    

    onMounted(() => {
      getData();
    });

    return { knowledge };
  },

}
</script>

<style scoped>

.letter-layout {
  letter-spacing: 0;
}

</style>