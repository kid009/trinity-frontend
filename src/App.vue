<template>
  <router-view />
  <back-to-top bottom="50px" right="50px">
    <button type="button" class="btn btn-info btn-to-top">
      <i class="fa fa-chevron-up"></i>
    </button>
  </back-to-top>
</template>
<style>
.fontstyle {
  font-family: "Prompt", sans-serif;
}
#page-detail {
  font-family: "Prompt", sans-serif;
}
.letter-spacing {
  letter-spacing: 0;
}
#img-blog {
  width: auto;
  max-width: 100%;
  height: 500px;
  overflow: hidden;
  display: block;
  margin: auto;
}
#img-select {
  width: auto;
  height: 150px;
  overflow: hidden;
  display: block;
  margin: auto;
}
.vel-btns-wrapper .btn__next {
  right: 12px;
  border-radius: 20px;
  background-color: rgb(0, 162, 231);
}
.vel-btns-wrapper .btn__prev {
  left: 12px;
  border-radius: 20px;
  background-color: rgb(0, 162, 231);
}
</style>
