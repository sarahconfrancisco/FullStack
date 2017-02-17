export const addRestaurant = (res, types) => {
  return $.ajax({
    method: "POST",
    url: '/api/restaurants',
    data: {restaurant: res, types: types}
  });
}

export const showRestaurant = (id) => {
  return $.ajax({
    method: "GET",
    url: `/api/restaurants/${id}`
  });
}
