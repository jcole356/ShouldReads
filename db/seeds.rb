# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).

u1 = User.create(username: "guest", password: "password")
u2 = User.create(username: "stephenk207", password: "kingmaine")

b1 = Book.create_book_by_title!("The Shining")
b2 = Book.create_book_by_title!("Carrie")
b3 = Book.create_book_by_title!("The Stand")
b4 = Book.create_book_by_title!("The Gunslinger")
b5 = Book.create_book_by_title!("Harry Potter and the Deathly Hallows")
b6 = Book.create_book_by_title!("Phantoms")
b6 = Book.create_book_by_title!("The Strain")

# User one default bookshelves
s1 = BookShelf.create(title: "All", owner_id: u1.id)
s2 = BookShelf.create(title: "Read", owner_id: u1.id)
s3 = BookShelf.create(title: "To Read", owner_id: u1.id)
s4 = BookShelf.create(title: "Currently Reading", owner_id: u1.id)

#User two default bookshelves
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
  title: "Perfect",
  body: "Amazing.  Super creepy, what a brilliant concept.  Too bad that
  hack Kubrick went and ruined my... I mean the author's vision.  No
  hedge animals?")
r2 = Review.create(author_id: 1, book_id: 2, rating: 2,
  title: "Crap",
  body: "This book sucked!  Boring and preachy... so the girl was picked
  on and her mom was crazy.  I get it...")
r3 = Review.create(author_id: 2, book_id: 2, rating: 4,
  title: "First Book",
  body: "I though it was pretty good for my... I mean his first book,
  cut him some slack.")
r4 = Review.create(author_id: 2, book_id: 4, rating: 5,
  title: "So it begins",
  body: "Best epic since The Lord of the Rings?  Someone said that
  right?  A journey of a thousand miles begins with a single massacre of
  a small town possessed by some weird demonic force.  Something like
  that right?")
r5 = Review.create(author_id: 2, book_id: 5, rating: 5,
  title: "Made me Cry",
  body: "Harry no... it can't be over!  What am I going to do with all
  of  my time now? Write 6 books a year instead of 5?")
r6 = Review.create(author_id: 2, book_id: 6, rating: 1,
  title: "What a hack!",
  body: "I liked this book the first time I wrote... I mean read it when
  it was called \"It\" and was actually scary.  Plus bonus points for
  \"It\" for not making me suffer through early Ben Affleck stumbling
  through painful movie dialogue.")
r7 = Review.create(author_id: 2, book_id: 3, rating: 5,
  title: "Best Apocalyptic Novel Ever?",
  body: "Yeah that's right... I said it.  1,100+ pages of awesome!")
