class CreateReviews < ActiveRecord::Migration
  def change
    create_table :reviews do |t|
      t.integer :author_id, null: false
      t.integer :book_id, null: false
      t.integer :rating, null: false
      t.string :title, null: false
      t.text :body

      t.timestamps null: false
    end

    add_index :reviews, :author_id
    add_index :reviews, :book_id
    add_index :reviews, :rating
  end
end
