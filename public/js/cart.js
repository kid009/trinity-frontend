let activitys = [];
let hotels = [];
let homestays = [];
let restaurants = [];
const total = [];

function addActivity(
  province_id,
  community_id,
  activity_id,
  community_name,
  activity_name,
  activity_image_cover_link
) {
  if (activitys == "") {
    sessionStorage.setItem("activitys", JSON.stringify(activitys));
  }

  const obj = sessionStorage.getItem("activitys");
  const setaddActivity = JSON.parse(obj);
  activitys = setaddActivity;

  activitys.push({
    province_id: province_id,
    community_id: community_id,
    activity_id: activity_id,
    community_name: community_name,
    activity_name: activity_name,
    activity_image_cover_link: activity_image_cover_link,
  });
  sessionStorage.setItem("activitys", JSON.stringify(activitys));
  addTotal(activitys);
}

function addHotel(
  province_name,
  community_id,
  hotel_id,
  hotel_name,
  hotel_image_cover_link
) {
  if (hotels == "") {
    sessionStorage.setItem("hotels", JSON.stringify(hotels));
  }

  const obj = sessionStorage.getItem("hotels");
  const setaddHotel = JSON.parse(obj);
  hotels = setaddHotel;

  hotels.push({
    province_name: province_name,
    community_id: community_id,
    hotel_id: hotel_id,
    hotel_name: hotel_name,
    hotel_image_cover_link: hotel_image_cover_link,
  });
  sessionStorage.setItem("hotels", JSON.stringify(hotels));
  addTotal(hotels);
}

function addHomestay(
  province_name,
  community_id,
  homestay_id,
  homestay_name,
  homestay_image_cover_link
) {
  if (homestays == "") {
    sessionStorage.setItem("homestays", JSON.stringify(homestays));
  }

  const obj = sessionStorage.getItem("homestays");
  const setaddHomestay = JSON.parse(obj);
  homestays = setaddHomestay;

  homestays.push({
    province_name: province_name,
    community_id: community_id,
    homestay_id: homestay_id,
    homestay_name: homestay_name,
    homestay_image_cover_link: homestay_image_cover_link,
  });
  sessionStorage.setItem("homestays", JSON.stringify(homestays));
  addTotal(homestays);
}

function addRestaurant(
  province_id,
  community_id,
  restaurant_id,
  restaurant_name,
  restaurant_image_cover_link
) {
  if (restaurants == "") {
    sessionStorage.setItem("restaurants", JSON.stringify(restaurants));
  }
  const obj = sessionStorage.getItem("restaurants");
  const setaddRestaurant = JSON.parse(obj);
  restaurants = setaddRestaurant;
  restaurants.push({
    province_id: province_id,
    community_id: community_id,
    restaurant_id: restaurant_id,
    restaurant_name: restaurant_name,
    restaurant_image_cover_link: restaurant_image_cover_link,
  });
  sessionStorage.setItem("restaurants", JSON.stringify(restaurants));
  addTotal(restaurants);
}

function addTotal(item) {
  total.push(item);
  sessionStorage.setItem("timeline", JSON.stringify(total));
}
