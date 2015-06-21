# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).

u1 = User.create(username: "kurt", password: "vonnegut")
u2 = User.create(username: "stephen", password: "kingmaine")

b1 = Book.create_book_by_title!("Fight Club")
b2 = Book.create_book_by_title!("Slaughterhouse Five")
b3 = Book.create_book_by_title!("The Stand")
b4 = Book.create_book_by_title!("The Catcher in the Rye")
b5 = Book.create_book_by_title!("Carrie")
b6 = Book.create_book_by_title!("Jurassic Park")

s1 = BookShelf.create(title: "All", owner_id: u1.id)
s2 = BookShelf.create(title: "Read", owner_id: u1.id)
s3 = BookShelf.create(title: "To Read", owner_id: u1.id)
s4 = BookShelf.create(title: "Currently Reading", owner_id: u1.id)
s5 = BookShelf.create(title: "All", owner_id: u2.id)
s6 = BookShelf.create(title: "Read", owner_id: u2.id)
s7 = BookShelf.create(title: "To Read", owner_id: u2.id)
s8 = BookShelf.create(title: "Currently Reading", owner_id: u2.id)

bs1 = BookShelving.create(shelf_id: s2.id, book_id: 1)
bs2 = BookShelving.create(shelf_id: s2.id, book_id: 2)
bs3 = BookShelving.create(shelf_id: s2.id, book_id: 3)
bs4 = BookShelving.create(shelf_id: s2.id, book_id: 4)
bs5 = BookShelving.create(shelf_id: s2.id, book_id: 5)
bs6 = BookShelving.create(shelf_id: s3.id, book_id: 6)

r1 = Review.create(author_id: 2, book_id: 1, rating: 5,
  title: "The first rule of fight club...",
  body: "...")
r2 = Review.create(author_id: 2, book_id: 2, rating: 5,
  title: "So it goes...",
  body: "This is one of my favorite books.  Po-Tweet!")
r3 = Review.create(author_id: 2, book_id: 3, rating: 5,
  title: "This book is long...",
  body: "And awesome.  One of the best apocoloyptic novels I have ever
    read")
r4 = Review.create(author_id: 2, book_id: 4, rating: 5,
  title: "Classic",
  body: "Caulfield is still the ultimate cynic.  I love this book.")
r5 = Review.create(author_id: 2, book_id: 5, rating: 3,
  title: "Not his best",
  body: "This is his first book so I'll cut him some slack, but it
    really wasn't that great.")
r6 = Review.create(author_id: 2, book_id: 6, rating: 5,
  title: "Amazing",
  body: "I may be the one person who preferred this to the now Classic
    movie.  Chrichton was a rare talent and he will be missed.")
