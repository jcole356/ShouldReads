class RemoveUniqueConstraintOnBookShelvesTable < ActiveRecord::Migration
  def change
    remove_index :book_shelves, ["owner_id"]
    add_index :book_shelves, ["owner_id"]
  end
end
