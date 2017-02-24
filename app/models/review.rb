class Review < ActiveRecord::Base
  belongs_to :user
  belongs_to :restaurant
  after_initialize :create_date
  validates :user, :restaurant, :body, :date, :rating, presence: true


  private
  def create_date
    ymd = Date.today().to_s.split("-")
    ymd[0], ymd[1], ymd[2] = ymd[1], ymd[2], ymd[0]
    self.date ||= ymd.join("/")
  end

end
