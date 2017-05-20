class AddLoginCountToUser < ActiveRecord::Migration
  def up
    add_column :users, :login_count, :integer, null: false, default: 1
  end

  def down
    remove_column :users, :login_count, :integer
  end
end
