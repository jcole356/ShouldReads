require 'rails_helper'

RSpec.describe Book, :type => :model do
  title = "Hey Yo!"
  author = "This guy"
  synopsis = "It's about this guy"
  pages = 26
  cover_image_url = "something.com"
  isbn = "this is the right one"

  book_json = {
    "items" => [
      "volumeInfo" => {
        "title" => title,
        "authors" => [
          author
        ],
        "description" => synopsis,
        "pageCount" => pages,
        "imageLinks" => {
          "thumbnail" => cover_image_url
        }, 
        "industryIdentifiers" => [
          {
            "type" => "ISBN_13",
            "identifier" => "this is the right one"
          },
          {
            "type" => "ISBN_10",
            "identifier" => "this is the wrong one"
          }
        ]
      }
    ]
  }.to_json

  puts book_json
  
  describe "parse_response" do
    it "returns the correctly formatted book params" do
      expect(Book.parse_response(book_json)).to eq(
        {
          "title" => title,
          "author" => author,
          "synopsis" => synopsis,
          "number_of_pages" => pages,
          "cover_image_url" => cover_image_url,
          "isbn" => isbn
        }
      )
    end
  end
end
