json.extract! @review, :id, :rating, :body, :date
json.set! :user do
  json.extract! @user, :id, :fname, :lname, :zip
end
