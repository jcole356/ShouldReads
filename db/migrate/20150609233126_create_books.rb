class CreateBooks < ActiveRecord::Migration
  def change
    create_table :books do |t|
      t.string :title, null: false
      t.string :author, null: false
      t.string :cover_image_url
      t.text :synopsis
      t.integer :number_of_pages

      t.timestamps null: false
    end

    add_index :books, :title
    add_index :books, :author
  end
end
