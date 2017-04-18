export const addImage = (image) => {
  return $.ajax({
    method: "POST",
    url: 'api/images',
    contentType: false,
    processData: false,
    data: image
  });
}

export const getIndexImages = (restaurant_id) => {
  return $.ajax({
    method: "GET",
    url: '/api/images',
    data: { restaurant_id }
  });
}
