class ChangePhoneFormat < ActiveRecord::Migration

  def change
    change_column :restaurants, :phone, :string
  end
end
