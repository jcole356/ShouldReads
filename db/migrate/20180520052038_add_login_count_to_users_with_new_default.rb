class AddLoginCountToUsersWithNewDefault < ActiveRecord::Migration
  def up
    add_column :users, :login_count_b, :integer, null: false, default: 0
  end
  def down
    remove_column :users, :login_count_b, :integer, null: false, default: 0  
  end
end
