# encoding: UTF-8
# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# Note that this schema.rb definition is the authoritative source for your
# database schema. If you need to create the application database on another
# system, you should be using db:schema:load, not running all the migrations
# from scratch. The latter is a flawed and unsustainable approach (the more migrations
# you'll amass, the slower it'll run and the greater likelihood for issues).
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 20180520043953) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "book_shelves", force: :cascade do |t|
    t.integer  "owner_id",   null: false
    t.string   "title",      null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  add_index "book_shelves", ["owner_id"], name: "index_book_shelves_on_owner_id", using: :btree

  create_table "book_shelvings", force: :cascade do |t|
    t.integer  "shelf_id",   null: false
    t.integer  "book_id",    null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  add_index "book_shelvings", ["book_id"], name: "index_book_shelvings_on_book_id", using: :btree
  add_index "book_shelvings", ["shelf_id"], name: "index_book_shelvings_on_shelf_id", using: :btree

  create_table "books", force: :cascade do |t|
    t.string   "title",           null: false
    t.string   "author",          null: false
    t.string   "cover_image_url"
    t.text     "synopsis"
    t.integer  "number_of_pages"
    t.datetime "created_at",      null: false
    t.datetime "updated_at",      null: false
    t.string   "isbn"
  end

  add_index "books", ["author"], name: "index_books_on_author", using: :btree
  add_index "books", ["isbn"], name: "index_books_on_isbn", using: :btree
  add_index "books", ["title"], name: "index_books_on_title", using: :btree

  create_table "reviews", force: :cascade do |t|
    t.integer  "author_id",  null: false
    t.integer  "book_id",    null: false
    t.integer  "rating",     null: false
    t.string   "title",      null: false
    t.text     "body"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  add_index "reviews", ["author_id"], name: "index_reviews_on_author_id", using: :btree
  add_index "reviews", ["book_id"], name: "index_reviews_on_book_id", using: :btree
  add_index "reviews", ["rating"], name: "index_reviews_on_rating", using: :btree

  create_table "users", force: :cascade do |t|
    t.string   "username",        null: false
    t.string   "password_digest", null: false
    t.string   "session_token",   null: false
    t.datetime "created_at",      null: false
    t.datetime "updated_at",      null: false
    t.string   "firstname"
    t.string   "lastname"
  end

  add_index "users", ["session_token"], name: "index_users_on_session_token", unique: true, using: :btree
  add_index "users", ["username"], name: "index_users_on_username", unique: true, using: :btree

end
