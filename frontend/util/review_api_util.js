export const addReview = (review, res_id) => {
  return $.ajax({
    method: "POST",
    url: '/api/reviews',
    data: {review: review, id: res_id}
  });
}

export const indexReview = (id) => {
  return $.ajax({
    method: "GET",
    url: '/api/reviews',
    data: { id }
  });
}

export const editReview = (review) => {
  return $.ajax({
    method: "PATCH",
    url: `/api/reviews/${review.id}`,
    data: { review }
  });
}
