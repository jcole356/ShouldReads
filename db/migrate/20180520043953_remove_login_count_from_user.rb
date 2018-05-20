class RemoveLoginCountFromUser < ActiveRecord::Migration
  def up
    remove_column :users, :login_count   
  end
  def down
    add_column :users, :login_count, :integer, null: false, default: 0
  end
end
