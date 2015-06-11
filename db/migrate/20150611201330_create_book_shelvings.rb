class CreateBookShelvings < ActiveRecord::Migration
  def change
    create_table :book_shelvings do |t|
      t.integer :shelf_id, null: false
      t.integer :book_id, null: false

      t.timestamps null: false
    end

    add_index :book_shelvings, :shelf_id
    add_index :book_shelvings, :book_id
  end
end
