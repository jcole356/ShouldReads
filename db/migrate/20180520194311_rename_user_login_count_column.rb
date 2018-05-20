class RenameUserLoginCountColumn < ActiveRecord::Migration
  def change
    rename_column :users, :login_count_b, :login_count
  end
end
