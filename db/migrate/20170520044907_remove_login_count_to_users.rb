class RemoveLoginCountToUsers < ActiveRecord::Migration
  def change
    remove_column :users, :login_count, :integer
  end
end
