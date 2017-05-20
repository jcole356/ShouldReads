class ChangeDefaultLoginCountForUser < ActiveRecord::Migration
  def up
    change_column_default :users, :login_count, 0
  end

  def down
    change_column_default :users, :login_count, 1
  end
end
