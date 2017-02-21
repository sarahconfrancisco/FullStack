@reviews.each do |review|
  json.set! review.id do
    json.extract! review, :id, :body, :date, :rating
  end
end
