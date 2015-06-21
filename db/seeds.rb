# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)

u1 = User.create(username: "kurt", password: "vonnegut")

b1 = Book.create_book_by_title("Harry Potter and the Half Blood Prince")
b2 = Book.create("Slaughterhouse Five")
b3 = Book.create("The Stand")
b4 = Book.create("The Catcher in the Rye")
b5 = Book.create("Carrie")
b6 = Book.create("The Shining")

# r1 = Review.create(author_id: 1, book_id: 1, rating: 5, title: "Oh Snape, you Ass!",
#                    body: "This is one of my favorite books.  I love that Harry
#                     has gotten so dark.")
# r2 = Review.create(author_id: 1, book_id: 2, rating: 5, title: "So it goes...",
#                    body: "This is one of my favorite books.  Billy Pilgrim is
#                     traveling through time like many of us do from time to time.")
