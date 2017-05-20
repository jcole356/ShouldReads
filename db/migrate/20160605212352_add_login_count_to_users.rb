class AddLoginCountToUsers < ActiveRecord::Migration
  def change
    add_column :users, :login_count, :integer, null: false, default: 1
  end
end
