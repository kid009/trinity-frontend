<template>
  <div class="col-xs-12 col-sm-4 col-md-3">
    <div class="sidebar bg-white clearfix">
      <div class="sidebar-block">
        <h4 id="letter-product" class="sidebar-title color-dark-2">
          หมวดหมู่ผลิตภัณฑ์
        </h4>
        <ul class="sidebar-category color-1">
          <li>
            <a href="product?page=1&group=0&id=0" id="letter-product"
              >ทั้งหมด <span class="fr"></span
            ></a>
          </li>
          <li>
            <a href="product?page=1&group=1&id=0" id="letter-product"
              >เทคโนโลยี <span class="fr"></span
            ></a>
          </li>
          <li>
            <a href="product?page=1&group=2&id=0" id="letter-product"
              >นวัตกรรมผลิตภัณฑ์ <span class="fr"></span
            ></a>
          </li>
          <li>
            <a href="product?page=1&group=3&id=0" id="letter-product"
              >สินค้าในชุมชน <span class="fr"></span
            ></a>
          </li>
          <li>
            <a href="product?page=1&group=4&id=0" id="letter-product"
              >ผลิตภัณฑ์ธุรกิจ <span class="fr"></span
            ></a>
          </li>
          <li>
            <a href="product?page=1&group=5&id=0" id="letter-product"
              >ผลิตภัณฑ์ท่องเที่ยว <span class="fr"></span
            ></a>
          </li>
          <li>
            <a href="product?page=1&group=6&id=0" id="letter-product"
              >ผลิตภัณฑ์ชุมชน <span class="fr"></span
            ></a>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "SideBar",
};
</script>

<style>
#img-product {
  width: auto;
  max-width: 300px;
  height: 230px;
  overflow: hidden;
  display: block;
  margin: auto;
}
.border {
  border: 10px solid #ffffff;
  padding: 5px;
  width: 100%;
  height: 250px;
  background-color: #f5f5f5;
}
#h4-topic-product {
  letter-spacing: 0;
}
</style>
