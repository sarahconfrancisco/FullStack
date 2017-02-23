export const fetchSearchRestaurants = (types, features, zip) => {
  return $.ajax({
    method: "GET",
    url: `/api/restaurants`,
    data: { types, features, zip }
  });
};
