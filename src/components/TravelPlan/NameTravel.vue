<template>
  <div>
    <div class="grid">
      <div>
        <div class="form-label">
          <div class="input-style-1">
            <input
              class="color-dark fontstyle text-eng"
              type="text"
              placeholder="ชื่อเส้นทางท่องเที่ยว Travel Trip Name"
              required=""
              style="text-align: center"
            />
          </div>
        </div>
      </div>
      <div>
        <div class="center button-m">
          <button class="c-button">
            <span class="text-eng">กลับ/back</span>
          </button>

          <button type="submit" class="c-button">
            <span class="text-eng">บันทึก/save</span>
          </button>
        </div>
      </div>
    </div>
    <div class="color-table">
      <table class="my-table"></table>
    </div>
    <div class="grid-table">
      <div class="bg-table">
        <table class="box-table" cellspacing="0" cellpadding="0">
          <thead>
            <tr class="text-center">
              <th scope="col">
                <h4 class="fontstyle">ลำดับ<br />No.</h4>
                <div class="vl"></div>
              </th>
              <th scope="col">
                <h4 class="fontstyle">รูปภาพ<br />Picture</h4>
                <div class="vl"></div>
              </th>
              <th scope="col">
                <h4 class="fontstyle">กิจกรรม<br />Activity</h4>
                <div class="vl"></div>
              </th>

              <th scope="col">
                <h4 class="fontstyle">ชุมชน<br />Community</h4>
                <div class="vl"></div>
              </th>
              <th scope="col">
                <h4 class="fontstyle">ลบ<br />Delete</h4>
              </th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td scope="row" data-label="ลำดับ:" class="table-label">NaN</td>
              <td data-label="รูปภาพ:" class="table-label">
                <img
                  class="imgActivity"
                  src="https://trinitytrip.com/image/community/10/activity/activity_efe3b908ce4c4fcdacbac8edb740de7e_20211125074537000000.jpg"
                  alt=""
                />
              </td>

              <td data-label="กิจกรรม:" class="table-label">
                <strong>กิจกรรมผู้หญิงมัดลาย ผู้ชายทอผ้า</strong>
              </td>

              <td data-label="ชุมชน:" class="table-label">
                <strong>ชุมชนบ้านโคกเจริญ</strong>
              </td>
              <td data-label="ลบ" class="table-label">
                <button class="btn btn-danger">-</button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "NameTrvel",
};
</script>

<style scoped>
.grid {
  display: grid;
  grid-template-columns: auto 260px;
  column-gap: 2em;
  padding: 10px 15px;
}

.input-style-1 input {
  width: 100%;
  border: 1px solid rgba(255, 255, 255, 0.5);
  border-radius: 20px;
  background: none;
  height: 50px;
  padding: 0px;
  color: #777;
  background: rgb(255 255 255 / 50%);
  font-size: 20px;
  font-style: italic;
}
::placeholder {
  color: #777;
}

.button-m {
  text-align: center;
  margin-top: 5px;
  display: grid;
  grid-template-columns: 50% 50%;
  -moz-column-gap: 1em;
  column-gap: 0em;
  align-items: stretch;
}

span {
  font-size: 16;
}
.c-button {
  padding: 0px 16px;
  font-size: 14px;
  text-transform: capitalize;
  line-height: 0px;
  height: 40px;
  width: fit-content;
  font-weight: 700;
  font-style: italic;
  text-shadow: 0 0 2px white;
  background: #93dcc4;
  display: table-column;
}
h1 {
  text-align: center;
}
/**-------------------- */
.grid-table {
  display: grid;
  width: 100%;
  padding: 0px 20px 20px 20px;
  height: fit-content;
}
table {
  table-layout: fixed;
  width: 150px;
}
table th {
  letter-spacing: 0.1em;
  text-transform: uppercase;
  height: 50px;
  border-radius: 0px;
  text-align: center;
  padding: 5px 10px;
  font-size: 12px;
  font-weight: 700;
  width: 150px;
  background: #95e1ff00;

  box-shadow: none;
}
table tr {
  background: rgba(255, 255, 255, 0);
}
td img {
  width: fit-content;
  width: 100%;
  height: 140px;
  object-fit: cover;
  vertical-align: middle;
  border-radius: 20px;
}
th h4 {
  font-size: 16px;
  line-height: 24px;
  font-weight: 600;

  text-transform: capitalize;
  letter-spacing: 0px;
  color: #555;
}
.bg-table {
  background: #ffffffa1;
  border-radius: 20px;
  border: 2px solid white;
  text-align: center;
}
.box-table {
  box-shadow: 0px 0px 3px rgb(84, 84, 84);
  border-radius: 20px;
  width: -webkit-fill-available;
}

.text-center {
  text-align: center;
}
td {
  text-align: center;
  padding: 5px 10px 20px 10px;
}
.vl {
  border-right: 1px solid black;
  height: 20px;
  margin-top: -35px;
}
</style>
