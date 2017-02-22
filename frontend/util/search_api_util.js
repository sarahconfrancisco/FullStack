export const fetchSearchRestaurants = (types, features) => {
  return $.ajax({
    method: "GET",
    url: `/api/restaurants`,
    data: { types, features }
  });
};
