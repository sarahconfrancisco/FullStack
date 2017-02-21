export const addReview = (review, res_id) => {
  return $.ajax({
    method: "POST",
    url: '/api/reviews',
    data: {review: review, id: res_id}
  });
}

export const indexReviews = (res_id) => {
  return $.ajax({
    method: "GET",
    url: '/api/reviews',
    data: { res_id }
  });
}

export const editReview = (review) => {
  return $.ajax({
    method: "PATCH",
    url: `/api/reviews/${review.id}`,
    data: { review }
  });
}

export const getReview = (user_id, restaurant_id, id = "id") => {
  return $.ajax({
    method: "GET",
    url: `/api/reviews/${id}`,
    data: {user_id, restaurant_id}
  });
}
