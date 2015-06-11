class CreateBookShelves < ActiveRecord::Migration
  def change
    create_table :book_shelves do |t|
      t.integer :owner_id, null: false
      t.string :title, null: false

      t.timestamps null: false
    end

    add_index :book_shelves, :owner_id, unique: true
  end
end
