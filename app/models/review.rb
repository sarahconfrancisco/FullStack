# == Schema Information
#
# Table name: reviews
#
#  id            :integer          not null, primary key
#  user_id       :integer          not null
#  restaurant_id :integer          not null
#  body          :text             not null
#  rating        :integer          not null
#  date          :string           not null
#  created_at    :datetime         not null
#  updated_at    :datetime         not null
#

class Review < ActiveRecord::Base
  belongs_to :user
  belongs_to :restaurant
  after_initialize :create_date
  validates :user, :restaurant, :body, :date, :rating, presence: true

  private

  def create_date
    ymd = Date.today.to_s.split('-')
    ymd[0], ymd[1], ymd[2] = ymd[1], ymd[2], ymd[0]
    self.date ||= ymd.join('/')
  end
end
