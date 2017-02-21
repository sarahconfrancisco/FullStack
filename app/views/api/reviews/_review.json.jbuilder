json.extract! review, :rating, :body, :date
json.set! :user, review.user, :fname, :lname, :id, :email
